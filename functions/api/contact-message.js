const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders
    }
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
}

export async function onRequestGet({ env }) {
  const hasResendKey = Boolean(env.RESEND_API_KEY || env.RESEND_API_kEY);
  const hasContactTo = Boolean(env.CONTACT_TO);
  const hasContactFrom = Boolean(env.CONTACT_FROM);

  return jsonResponse({
    ok: hasResendKey && hasContactTo && hasContactFrom,
    hasResendKey,
    hasContactTo,
    hasContactFrom
  }, 200);
}

export async function onRequestPost({ request, env }) {
  try {
    const {
      fullName = "",
      email = "",
      phone = "",
      service = "",
      message = "",
      source = "website"
    } = await request.json();

    if (!fullName || !email || !phone || !service) {
      return jsonResponse({ message: "Missing required fields" }, 400);
    }

    const RESEND_API_KEY = env.RESEND_API_KEY || env.RESEND_API_kEY;
    const CONTACT_TO = env.CONTACT_TO || "info@cleansolutionsva.com";
    const CONTACT_FROM = env.CONTACT_FROM || "Clean Solutions <onboarding@resend.dev>";

    if (!RESEND_API_KEY) {
      return jsonResponse({ message: "Missing RESEND API key. Define RESEND_API_KEY (or RESEND_API_kEY) in Cloudflare variables/secrets." }, 500);
    }

    const subject = `New Quote Request - ${fullName} (${service})`;

    const html = `
      <h2>New Quote Request</h2>
      <p><strong>Source:</strong> ${source}</p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br/>${(message || "-").replace(/\n/g, "<br/>")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject,
        html
      })
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.json().catch(() => ({}));
      return jsonResponse({ message: error.message || "Failed to send email via Resend" }, 500);
    }

    return jsonResponse({ success: true, message: "Message sent successfully" }, 200);
  } catch (error) {
    return jsonResponse({ message: error.message || "Unexpected error" }, 500);
  }
}
