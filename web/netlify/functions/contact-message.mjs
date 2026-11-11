/**
 * Netlify Function wrapper for the quote form.
 * Reuses the exact logic of functions/api/contact-message.js (same env vars, payload and email),
 * so the email contract stays identical on Netlify.
 * Env (Netlify → Project configuration → Environment variables):
 *   RESEND_API_KEY (or legacy RESEND_API_kEY), CONTACT_FROM, CONTACT_TO, optional TURNSTILE_SECRET_KEY.
 */
import { onRequestGet, onRequestOptions, onRequestPost } from '../../functions/api/contact-message.js';

export default async (request) => {
  const env = process.env;
  if (request.method === 'OPTIONS') return onRequestOptions();
  if (request.method === 'GET') return onRequestGet({ env });
  if (request.method === 'POST') return onRequestPost({ request, env });
  return new Response(JSON.stringify({ message: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
};

// Same public URLs as before (old React form used /api/contact-message.php on the previous host).
export const config = { path: ['/api/contact-message', '/api/contact.php', '/api/contact-message.php'] };
