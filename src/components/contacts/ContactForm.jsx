import { useState } from "react";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus("");

    const form = new FormData(e.currentTarget);

    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al enviar.");
      }

      setStatus("Mensaje enviado correctamente.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("No se pudo enviar el mensaje.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        required
        className="w-full rounded-xl border border-gray-300 px-4 py-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        required
        className="w-full rounded-xl border border-gray-300 px-4 py-3"
      />

      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        className="w-full rounded-xl border border-gray-300 px-4 py-3"
      />

      <textarea
        name="message"
        placeholder="Cuéntanos qué necesitas"
        required
        rows="6"
        className="w-full rounded-xl border border-gray-300 px-4 py-3"
      />

      <button
        type="submit"
        disabled={sending}
        className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white disabled:opacity-60"
      >
        {sending ? "Enviando..." : "Enviar"}
      </button>

      {status && <p className="text-sm">{status}</p>}
    </form>
  );
}