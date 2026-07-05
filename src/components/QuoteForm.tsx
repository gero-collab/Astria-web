"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "rounded-[11px] border border-white/[0.14] bg-black/35 px-[15px] py-[13px] text-[15px] text-white outline-none focus:border-[rgba(150,180,255,.6)]";

const featureOptions = [
  "Formulario de contacto",
  "Panel de administración",
  "Base de datos",
  "Integración WhatsApp",
  "Agente IA",
  "Otro",
];

const budgetOptions = [
  "Menos de USD 500 / ARS 500.000",
  "USD 500 – 1.000 / ARS 500.000 – 1.000.000",
  "USD 1.000 – 2.000 / ARS 1.000.000 – 2.000.000",
  "USD 2.000 – 4.000 / ARS 2.000.000 – 4.000.000",
  "Más de USD 4.000 / ARS 4.000.000",
  "No estoy seguro todavía",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [features, setFeatures] = useState<string[]>([]);

  function toggleFeature(feature: string) {
    setFeatures((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement).value,
      businessType: (form.elements.namedItem("businessType") as HTMLInputElement).value,
      features,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      wantsAI: (form.elements.namedItem("wantsAI") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/cotizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request-failed");
      setName(data.name);
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMsg(`No pudimos enviar tu cotización. Escribinos directo a ${CONTACT_EMAIL}.`);
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[24px] border border-white/10 p-[clamp(28px,4vw,40px)] backdrop-blur-[14px] [background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.015))]">
        <div className="px-2.5 py-[30px] text-center">
          <div className="mb-3.5 text-[42px]">✦</div>
          <h3 className="mb-2.5 text-2xl font-semibold">Cotización en camino</h3>
          <p className="leading-[1.6] text-[#aeb6c2]">
            Gracias, {name || "tripulante"}. Te respondemos con una propuesta a medida desde {CONTACT_EMAIL}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="cotizar"
      className="scroll-mt-24 rounded-[24px] border border-white/10 p-[clamp(28px,4vw,40px)] backdrop-blur-[14px] [background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.015))]"
    >
      <h2 className="mb-1.5 text-[26px] font-semibold">Pedí una cotización</h2>
      <p className="mb-[26px] text-[14.5px] text-[#a7afbb]">
        Contanos los detalles de tu proyecto y te armamos una propuesta a medida.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
            Nombre
            <input name="name" type="text" required placeholder="Tu nombre" className={inputClass} />
          </label>
          <label className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
            Email
            <input name="email" type="email" required placeholder="tu@email.com" className={inputClass} />
          </label>
        </div>

        <label className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
          Tipo de proyecto
          <select name="projectType" defaultValue="Landing web" className={`${inputClass} bg-black/55`}>
            <option>Landing web</option>
            <option>E-commerce</option>
            <option>CRM / Sistema de gestión</option>
            <option>Sistema académico</option>
            <option>Otro</option>
          </select>
        </label>

        <label className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
          Rubro del negocio
          <input
            name="businessType"
            type="text"
            placeholder="Ej: inmobiliaria, indumentaria, academia…"
            className={inputClass}
          />
        </label>

        <div className="flex flex-col gap-[9px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
          Funcionalidades deseadas
          <div className="grid grid-cols-1 gap-[9px] sm:grid-cols-2">
            {featureOptions.map((feature) => (
              <label
                key={feature}
                className="flex items-center gap-[9px] rounded-[11px] border border-white/[0.14] bg-black/35 px-[15px] py-[11px] text-[14px] text-[#dfe3ea]"
              >
                <input
                  type="checkbox"
                  checked={features.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                  className="h-4 w-4 accent-[#9fc0ff]"
                />
                {feature}
              </label>
            ))}
          </div>
        </div>

        <label className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
          Presupuesto aproximado
          <select name="budget" defaultValue={budgetOptions[0]} className={`${inputClass} bg-black/55`}>
            {budgetOptions.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
          ¿Querés Agente IA?
          <select name="wantsAI" defaultValue="No sé todavía" className={`${inputClass} bg-black/55`}>
            <option>Sí</option>
            <option>No</option>
            <option>No sé todavía</option>
          </select>
        </label>

        <label className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
          Mensaje adicional
          <textarea
            name="message"
            rows={4}
            placeholder="Contanos qué más deberíamos saber…"
            className={`${inputClass} resize-y`}
          />
        </label>

        {status === "error" && <p className="text-sm text-[#ff9b9b]">{errorMsg}</p>}

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-gold mt-1.5 w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Enviando…" : "Enviar cotización"}
        </button>
      </form>
    </div>
  );
}
