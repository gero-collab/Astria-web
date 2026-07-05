"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "rounded-[11px] border border-white/[0.14] bg-black/35 px-[15px] py-[13px] text-[15px] text-white outline-none focus:border-[rgba(150,180,255,.6)]";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request-failed");
      setName(data.name);
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMsg(`No pudimos enviar tu mensaje. Escribinos directo a ${CONTACT_EMAIL}.`);
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[24px] border border-white/10 p-[clamp(28px,4vw,40px)] backdrop-blur-[14px] [background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.015))]">
        <div className="px-2.5 py-[30px] text-center">
          <div className="mb-3.5 text-[42px]">✦</div>
          <h3 className="mb-2.5 text-2xl font-semibold">Mensaje en órbita</h3>
          <p className="leading-[1.6] text-[#aeb6c2]">
            Gracias, {name || "tripulante"}. Te respondemos a la brevedad desde {CONTACT_EMAIL}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] border border-white/10 p-[clamp(28px,4vw,40px)] backdrop-blur-[14px] [background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.015))]">
      <h2 className="mb-1.5 text-[26px] font-semibold">Contanos tu proyecto</h2>
      <p className="mb-[26px] text-[14.5px] text-[#a7afbb]">
        Completá el formulario y armamos una propuesta a medida.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
          Nombre
          <input name="name" type="text" required placeholder="Tu nombre" className={inputClass} />
        </label>
        <label className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
          Email
          <input name="email" type="email" required placeholder="tu@email.com" className={inputClass} />
        </label>
        <label className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
          Tipo de proyecto
          <select name="projectType" defaultValue="Página / Landing web" className={`${inputClass} bg-black/55`}>
            <option>Página / Landing web</option>
            <option>CRM &amp; Automatización IA</option>
            <option>E-commerce</option>
            <option>CRM Administrativo-Contable</option>
            <option>Otro / No estoy seguro</option>
          </select>
        </label>
        <label className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
          Mensaje
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Contanos qué necesitás…"
            className={`${inputClass} resize-y`}
          />
        </label>

        {status === "error" && <p className="text-sm text-[#ff9b9b]">{errorMsg}</p>}

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-gold mt-1.5 w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Enviando…" : "Enviar a órbita"}
        </button>
      </form>
    </div>
  );
}
