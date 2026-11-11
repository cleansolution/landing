/**
 * Cloudflare Pages Function: /api/contact-message
 *
 * Same contract as the previous developer's function (do not break the live email flow):
 *   - Same environment variables: RESEND_API_KEY (or the legacy typo RESEND_API_kEY),
 *     CONTACT_TO (defaults to info@cleansolutionsva.com) and CONTACT_FROM.
 *   - Same request body: { fullName, email, phone, service, message, source } as JSON.
 *   - Same email: subject "New Quote Request - <name> (<service>)", same fields, reply_to = client email.
 *   - Same GET health check and same responses ({ success: true, message } / { message } on error).
 *
 * Additions (all backward compatible):
 *   - Honeypot field "company": bots that fill it get a fake success and no email is sent.
 *   - Cloudflare Turnstile ("Verify you are human"): verified ONLY when TURNSTILE_SECRET_KEY exists.
 *     Without that secret the form keeps working exactly as before.
 *   - Field values are HTML-escaped in the email and clipped to sane lengths.
 *   - Optional "city" field is added to the email when present.
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders },
  });
}

const esc = (v = '') =>
  String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const clip = (v, n) => String(v ?? '').trim().slice(0, n);

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestGet({ env }) {
  const hasResendKey = Boolean(env.RESEND_API_KEY || env.RESEND_API_kEY);
  const hasContactTo = Boolean(env.CONTACT_TO);
  const hasContactFrom = Boolean(env.CONTACT_FROM);
  return jsonResponse(
    {
      ok: hasResendKey && hasContactTo && hasContactFrom,
      hasResendKey,
      hasContactTo,
      hasContactFrom,
      hasTurnstile: Boolean(env.TURNSTILE_SECRET_KEY),
    },
    200,
  );
}

export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();

    // Honeypot: real people never fill this hidden field.
    if (data.company) return jsonResponse({ success: true, message: 'Message sent successfully' }, 200);

    // Turnstile: only enforced once the secret is configured in Cloudflare.
    if (env.TURNSTILE_SECRET_KEY) {
      const token = data['cf-turnstile-response'];
      if (!token) return jsonResponse({ message: 'Please confirm you are human.' }, 400);
      const form = new FormData();
      form.append('secret', env.TURNSTILE_SECRET_KEY);
      form.append('response', token);
      const ip = request.headers.get('CF-Connecting-IP');
      if (ip) form.append('remoteip', ip);
      const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
      const outcome = await verify.json().catch(() => ({}));
      if (!outcome.success) return jsonResponse({ message: 'Verification failed. Please try again.' }, 400);
    }

    const fullName = clip(data.fullName, 120);
    const email = clip(data.email, 160);
    const phone = clip(data.phone, 40);
    const service = clip(data.service, 80);
    const city = clip(data.city, 60);
    const message = clip(data.message, 3000);
    const source = clip(data.source, 60) || 'website';

    if (!fullName || !email || !phone || !service) {
      return jsonResponse({ message: 'Missing required fields' }, 400);
    }

    const RESEND_API_KEY = env.RESEND_API_KEY || env.RESEND_API_kEY;
    const CONTACT_TO = env.CONTACT_TO || 'info@cleansolutionsva.com';
    const CONTACT_FROM = env.CONTACT_FROM;

    if (!RESEND_API_KEY) {
      return jsonResponse({ message: 'Missing RESEND API key. Define RESEND_API_KEY (or RESEND_API_kEY) in Cloudflare variables/secrets.' }, 500);
    }
    if (!CONTACT_FROM) {
      return jsonResponse({ message: 'Missing CONTACT_FROM in Cloudflare variables/secrets.' }, 500);
    }

    const subject = `New Quote Request - ${fullName} (${service})`.replace(/[\r\n]/g, ' ');

    const html = `
      <h2>New Quote Request</h2>
      <p><strong>Source:</strong> ${esc(source)}</p>
      <p><strong>Name:</strong> ${esc(fullName)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Phone:</strong> ${esc(phone)}</p>
      <p><strong>Service:</strong> ${esc(service)}</p>${city ? `
      <p><strong>City:</strong> ${esc(city)}</p>` : ''}
      <p><strong>Message:</strong><br/>${esc(message || '-').replace(/\n/g, '<br/>')}</p>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: CONTACT_FROM, to: [CONTACT_TO], reply_to: email, subject, html }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.json().catch(() => ({}));
      return jsonResponse({ message: error.message || 'Failed to send email via Resend' }, 500);
    }

    return jsonResponse({ success: true, message: 'Message sent successfully' }, 200);
  } catch (error) {
    return jsonResponse({ message: error.message || 'Unexpected error' }, 500);
  }
}
