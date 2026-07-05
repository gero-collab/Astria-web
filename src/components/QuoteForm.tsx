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

const projectTypes = [
  "Landing web",
  "E-commerce",
  "Inmobiliaria",
  "Concesionaria",
  "CRM / Sistema de gestión",
  "Sistema académico (SIPE)",
  "Proyecto personalizado",
] as const;

type ProjectType = (typeof projectTypes)[number];

type AdaptiveField =
  | { key: string; label: string; type: "select"; options: string[] }
  | { key: string; label: string; type: "text"; placeholder?: string }
  | { key: string; label: string; type: "number"; placeholder?: string }
  | { key: string; label: string; type: "textarea"; placeholder?: string }
  | { key: string; label: string; type: "checkboxes"; options: string[] }
  | { key: string; label: string; type: "yesNoWhich" };

const adaptiveQuestions: Record<ProjectType, AdaptiveField[]> = {
  "Landing web": [
    {
      key: "objetivo",
      label: "¿Cuál es el objetivo principal?",
      type: "select",
      options: ["Captar leads", "Vender un producto/servicio", "Informar sobre mi negocio", "Otro"],
    },
    { key: "marcaLogo", label: "¿Tenés marca y logo definidos?", type: "select", options: ["Sí", "No", "En proceso"] },
    { key: "formularioContacto", label: "¿Necesitás formulario de contacto?", type: "select", options: ["Sí", "No"] },
    {
      key: "contenido",
      label: "¿Tenés texto e imágenes o necesitás ayuda con el contenido?",
      type: "select",
      options: ["Tengo todo", "Necesito ayuda con el texto", "Necesito ayuda con imágenes", "Necesito ayuda con todo"],
    },
  ],
  "E-commerce": [
    {
      key: "cantidadProductos",
      label: "¿Cuántos productos tenés aproximadamente?",
      type: "select",
      options: ["Menos de 20", "20-100", "Más de 100"],
    },
    {
      key: "fotosProfesionales",
      label: "¿Tenés fotos profesionales de los productos?",
      type: "select",
      options: ["Sí", "No", "Algunas"],
    },
    {
      key: "pasarelaPagos",
      label: "¿Necesitás pasarela de pagos?",
      type: "select",
      options: ["MercadoPago", "Otro", "No por ahora"],
    },
    { key: "ventasPorMes", label: "¿Cuántas ventas tenés por mes actualmente?", type: "text" },
    { key: "vendeEnRedes", label: "¿Vendés en redes sociales actualmente?", type: "select", options: ["Sí", "No"] },
  ],
  Inmobiliaria: [
    {
      key: "cantidadPropiedades",
      label: "¿Cuántas propiedades manejás?",
      type: "select",
      options: ["Menos de 20", "20-100", "Más de 100"],
    },
    {
      key: "panelCarga",
      label: "¿Necesitás panel para cargar propiedades vos mismo?",
      type: "select",
      options: ["Sí", "No"],
    },
    { key: "leadsPorMes", label: "¿Cuántos leads recibís por mes aproximadamente?", type: "text" },
    { key: "sistemaActual", label: "¿Usás algún sistema actualmente?", type: "yesNoWhich" },
  ],
  Concesionaria: [
    {
      key: "stockAutos",
      label: "¿Cuántos autos tenés en stock?",
      type: "select",
      options: ["Menos de 20", "20-50", "Más de 50"],
    },
    { key: "tipoAutos", label: "¿Vendés 0km, usados o ambos?", type: "select", options: ["0km", "Usados", "Ambos"] },
    { key: "panelCarga", label: "¿Necesitás panel para cargar autos vos mismo?", type: "select", options: ["Sí", "No"] },
    { key: "consultasPorMes", label: "¿Cuántas consultas recibís por mes?", type: "text" },
    { key: "financiacionPropia", label: "¿Hacés financiación propia?", type: "select", options: ["Sí", "No"] },
  ],
  "CRM / Sistema de gestión": [
    {
      key: "cantidadUsuarios",
      label: "¿Cuántos usuarios van a usar el sistema?",
      type: "select",
      options: ["1-5", "5-20", "Más de 20"],
    },
    { key: "clientesPorMes", label: "¿Cuántos clientes o leads gestionás por mes?", type: "text" },
    {
      key: "procesosAutomatizar",
      label: "¿Qué procesos querés automatizar?",
      type: "checkboxes",
      options: ["Seguimiento de clientes", "Facturación", "Cobranzas", "Reportes", "Campañas", "Otro"],
    },
    { key: "sistemaActual", label: "¿Usás algún sistema actualmente?", type: "yesNoWhich" },
  ],
  "Sistema académico (SIPE)": [
    {
      key: "cantidadAlumnos",
      label: "¿Cuántos alumnos gestionás?",
      type: "select",
      options: ["Menos de 500", "500-2000", "Más de 2000"],
    },
    { key: "cantidadAsesores", label: "¿Cuántos asesores o coordinadores van a usar el sistema?", type: "number" },
    {
      key: "procesosDigitalizar",
      label: "¿Qué procesos querés digitalizar?",
      type: "checkboxes",
      options: ["Seguimiento de alumnos", "Intervenciones", "Trámites", "Campañas", "Panel coordinador", "Reportes"],
    },
    { key: "sistemaActual", label: "¿Usás algún sistema actualmente?", type: "yesNoWhich" },
    {
      key: "integracionExterna",
      label: "¿Necesitás integración con sistemas externos?",
      type: "checkboxes",
      options: ["HubSpot", "WhatsApp", "Excel", "Otro", "No"],
    },
  ],
  "Proyecto personalizado": [
    { key: "describirNegocio", label: "Describí tu negocio en pocas palabras", type: "textarea" },
    { key: "problemaResolver", label: "¿Qué problema querés resolver con el sistema?", type: "textarea" },
    { key: "referencia", label: "¿Tenés alguna referencia de lo que buscás?", type: "text", placeholder: "URL o descripción" },
    { key: "cantidadUsuarios", label: "¿Cuántos usuarios van a usar el sistema?", type: "text" },
  ],
};

function initialAnswers(projectType: ProjectType): Record<string, string | string[]> {
  const initial: Record<string, string | string[]> = {};
  for (const f of adaptiveQuestions[projectType]) {
    if (f.type === "select") initial[f.key] = f.options[0];
    else if (f.type === "yesNoWhich") initial[f.key] = "No";
    else if (f.type === "checkboxes") initial[f.key] = [];
    else initial[f.key] = "";
  }
  return initial;
}

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [projectType, setProjectType] = useState<ProjectType>(projectTypes[0]);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>(() => initialAnswers(projectTypes[0]));

  function toggleFeature(feature: string) {
    setFeatures((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]));
  }

  function handleProjectTypeChange(next: ProjectType) {
    setProjectType(next);
    setAnswers(initialAnswers(next));
  }

  function setAnswer(key: string, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function toggleCheckboxAnswer(key: string, option: string) {
    setAnswers((prev) => {
      const current = (prev[key] as string[] | undefined) ?? [];
      const next = current.includes(option) ? current.filter((o) => o !== option) : [...current, option];
      return { ...prev, [key]: next };
    });
  }

  function buildAdaptiveAnswers() {
    return adaptiveQuestions[projectType].map((f) => {
      let answerText: string;
      if (f.type === "checkboxes") {
        const vals = (answers[f.key] as string[] | undefined) ?? [];
        answerText = vals.length ? vals.join(", ") : "—";
      } else if (f.type === "yesNoWhich") {
        const val = (answers[f.key] as string | undefined) ?? "No";
        if (val === "Sí") {
          const detail = (answers[`${f.key}__detail`] as string | undefined) ?? "";
          answerText = detail ? `Sí – ${detail}` : "Sí";
        } else {
          answerText = "No";
        }
      } else {
        answerText = (answers[f.key] as string | undefined) ?? "";
      }
      return { question: f.label, answer: answerText || "—" };
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      projectType,
      businessType: (form.elements.namedItem("businessType") as HTMLInputElement).value,
      features,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      wantsAI: (form.elements.namedItem("wantsAI") as HTMLSelectElement).value,
      adaptiveAnswers: buildAdaptiveAnswers(),
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
          <select
            name="projectType"
            value={projectType}
            onChange={(e) => handleProjectTypeChange(e.target.value as ProjectType)}
            className={`${inputClass} bg-black/55`}
          >
            {projectTypes.map((pt) => (
              <option key={pt}>{pt}</option>
            ))}
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

        <div
          key={projectType}
          className="flex flex-col gap-4 rounded-[16px] border border-[#9fc0ff]/20 bg-[#9fc0ff]/[0.04] p-4"
          style={{ animation: "fade-in-up .4s ease" }}
        >
          <span className="font-chakra text-[11px] tracking-[0.2em] text-[#9fc0ff]">
            SOBRE TU {projectType.toUpperCase()}
          </span>
          {adaptiveQuestions[projectType].map((f) => (
            <label key={f.key} className="flex flex-col gap-[7px] text-[13px] tracking-[0.04em] text-[#9aa3b2]">
              {f.label}
              {f.type === "select" && (
                <select
                  value={answers[f.key] as string}
                  onChange={(e) => setAnswer(f.key, e.target.value)}
                  className={`${inputClass} bg-black/55`}
                >
                  {f.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              )}
              {(f.type === "text" || f.type === "number") && (
                <input
                  type={f.type}
                  value={answers[f.key] as string}
                  onChange={(e) => setAnswer(f.key, e.target.value)}
                  placeholder={f.placeholder}
                  className={inputClass}
                />
              )}
              {f.type === "textarea" && (
                <textarea
                  value={answers[f.key] as string}
                  onChange={(e) => setAnswer(f.key, e.target.value)}
                  placeholder={f.placeholder}
                  rows={3}
                  className={`${inputClass} resize-y`}
                />
              )}
              {f.type === "checkboxes" && (
                <div className="grid grid-cols-1 gap-[9px] sm:grid-cols-2">
                  {f.options.map((option) => {
                    const selected = ((answers[f.key] as string[] | undefined) ?? []).includes(option);
                    return (
                      <span
                        key={option}
                        className="flex items-center gap-[9px] rounded-[11px] border border-white/[0.14] bg-black/35 px-[15px] py-[11px] text-[14px] font-normal tracking-normal text-[#dfe3ea]"
                      >
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => toggleCheckboxAnswer(f.key, option)}
                          className="h-4 w-4 accent-[#9fc0ff]"
                        />
                        {option}
                      </span>
                    );
                  })}
                </div>
              )}
              {f.type === "yesNoWhich" && (
                <div className="flex flex-col gap-[9px]">
                  <select
                    value={answers[f.key] as string}
                    onChange={(e) => setAnswer(f.key, e.target.value)}
                    className={`${inputClass} bg-black/55`}
                  >
                    <option>No</option>
                    <option>Sí</option>
                  </select>
                  {answers[f.key] === "Sí" && (
                    <input
                      type="text"
                      value={(answers[`${f.key}__detail`] as string | undefined) ?? ""}
                      onChange={(e) => setAnswer(`${f.key}__detail`, e.target.value)}
                      placeholder="¿Cuál?"
                      className={inputClass}
                      style={{ animation: "fade-in-up .3s ease" }}
                    />
                  )}
                </div>
              )}
            </label>
          ))}
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
