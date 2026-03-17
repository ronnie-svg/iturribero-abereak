import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.es",
    port: 587,
    secure: false,
   auth: {
  user: import.meta.env.SMTP_USER,
  pass: import.meta.env.SMTP_PASS,
}
  });

  await transporter.sendMail({
    from: `"Web contacto" <info@iturriberoabereak.com>`,
    to: "info@iturriberoabereak.com",
    subject: "Nuevo mensaje desde la web",
    html: `
      <h3>Nuevo mensaje</h3>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${data.message}</p>
    `,
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
};