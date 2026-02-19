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
      return new Response(JSON.stringify({ message: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const RESEND_API_KEY = env.RESEND_API_KEY;
    const CONTACT_TO = env.CONTACT_TO || "info@cleansolutionsva.com";
    const CONTACT_FROM = env.CONTACT_FROM || "Clean Solutions <onboarding@resend.dev>";

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ message: "Missing RESEND_API_KEY in Cloudflare environment variables" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
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
      return new Response(JSON.stringify({ message: error.message || "Failed to send email via Resend" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ success: true, message: "Message sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message || "Unexpected error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
