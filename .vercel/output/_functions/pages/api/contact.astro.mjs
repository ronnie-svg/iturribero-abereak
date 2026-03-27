import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { name, email, phone, message } = await request.json();
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Faltan campos obligatorios." }),
        { status: 400 }
      );
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.es",
      port: Number("587"),
      secure: false,
      auth: {
        user: "info@iturriberoabereak.com",
        pass: "Durana01520!"
      }
    });
    await transporter.sendMail({
      from: `"Web Iturribero Abereak" <${"info@iturriberoabereak.com"}>`,
      to: "info@iturriberoabereak.com",
      replyTo: email,
      subject: "Nuevo mensaje desde la web",
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone || "")}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `
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
function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
