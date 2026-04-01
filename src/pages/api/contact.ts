import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Faltan campos obligatorios." }),
        { status: 400 }
      );
    }

    const smtpHost = import.meta.env.SMTP_HOST;
    const smtpPort = Number(import.meta.env.SMTP_PORT);
    const smtpSecure = import.meta.env.SMTP_SECURE === "true";
    const smtpUser = import.meta.env.SMTP_USER;
    const smtpPass = import.meta.env.SMTP_PASS;
    const contactTo = import.meta.env.CONTACT_TO || smtpUser;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !contactTo) {
      console.error("Faltan variables SMTP para enviar el formulario.");

      return new Response(
        JSON.stringify({
          ok: false,
          error: "La configuracion de correo no esta completa.",
        }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Web Iturribero Abereak" <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: "Nuevo mensaje desde la web",
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefono:</strong> ${escapeHtml(phone || "")}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error("Error enviando correo:", error);

    return new Response(
      JSON.stringify({ ok: false, error: "No se pudo enviar el mensaje." }),
      { status: 500 }
    );
  }
};

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
