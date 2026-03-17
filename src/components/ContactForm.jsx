import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Mensaje enviado correctamente");
      e.target.reset();
    } else {
      setStatus("Error al enviar el mensaje");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <input
        name="name"
        placeholder="Nombre"
        required
        className="w-full border p-3 rounded-lg"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full border p-3 rounded-lg"
      />

      <textarea
        name="message"
        placeholder="Mensaje"
        required
        className="w-full border p-3 rounded-lg"
        rows="5"
      />

      <button
        type="submit"
        className="bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Enviar mensaje
      </button>

      {status && <p className="text-sm">{status}</p>}
    </form>
  );
}