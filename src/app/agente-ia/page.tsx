import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Agente de IA para leads — ASTRIA",
  description:
    "Un agente de IA que responde en tu WhatsApp las 24 horas, califica leads automáticamente y le entrega a tu equipo solo los que valen la pena llamar. Para inmobiliarias y concesionarias.",
};

const painPoints = [
  {
    num: "01",
    title: "Respuesta lenta",
    desc: "Si un lead no recibe respuesta en los primeros minutos, la probabilidad de que siga interesado cae fuerte. Nadie puede estar pendiente del WhatsApp todo el día.",
  },
  {
    num: "02",
    title: "Tiempo de venta mal usado",
    desc: "Tu equipo termina atendiendo curiosos que nunca iban a comprar, y los leads con intención real se pierden en la misma pila.",
  },
  {
    num: "03",
    title: "Cero visibilidad",
    desc: "No sabés cuántos leads entraron esta semana, cuántos se calificaron, ni por qué se cayó una conversación. Todo vive disperso en chats sueltos.",
  },
];

const flowSteps = [
  {
    n: "1",
    title: "El lead escribe",
    desc: "Desde un anuncio, tu web o el boca en boca. El agente responde al instante, a cualquier hora.",
  },
  {
    n: "2",
    title: "Conversa y pregunta",
    desc: "Con el tono de tu marca, hace las preguntas que definís vos: presupuesto, urgencia, tipo de necesidad.",
  },
  {
    n: "3",
    title: "Califica el lead",
    desc: "Asigna un puntaje según lo que respondió. Los fríos quedan en seguimiento automático, sin ocupar a nadie.",
  },
  {
    n: "4",
    title: "Avisa a tu equipo",
    desc: "El lead caliente llega a tu vendedor o a tu CRM, con el contexto completo de la conversación.",
  },
];

const pricingPlans = [
  {
    tier: "Starter",
    title: "Para un local o negocio chico",
    setup: "Setup desde USD 300",
    featured: false,
    features: [
      "Un solo número de WhatsApp",
      "Preguntas de calificación a medida",
      "Panel simple de leads",
      "Hasta ~200 conversaciones/mes",
    ],
  },
  {
    tier: "Growth",
    title: "Para varias sucursales o alto volumen",
    setup: "Setup desde USD 600",
    featured: true,
    features: [
      "Todo lo de Starter",
      "Integración con tu CRM (HubSpot y otros)",
      "Notificaciones a tu equipo de ventas",
      "Reportes mensuales de rendimiento",
    ],
  },
  {
    tier: "Scale",
    title: "Para operaciones con equipo comercial grande",
    setup: "A medida",
    featured: false,
    features: [
      "Todo lo de Growth",
      "Múltiples agentes o líneas de negocio",
      "Automatizaciones de seguimiento",
      "Soporte prioritario",
    ],
  },
];

export default function AgenteIAPage() {
  return (
    <div className="font-agente-inter text-[#EDEDF2]">
      {/* HERO */}
      <section className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-[60px] px-[clamp(20px,5vw,32px)] pb-[100px] pt-[clamp(60px,10vh,120px)] md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <div className="mb-[22px] inline-flex items-center gap-2 text-[12px] uppercase tracking-[2px] text-[#FF6B4A] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FF6B4A] before:shadow-[0_0_10px_#FF6B4A]">
              Agente de calificación de leads
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mb-6 font-urbanist text-[clamp(32px,5vw,52px)] font-bold leading-[1.08] tracking-[-1px]">
              Cada lead que tarda en ser atendido,{" "}
              <em className="not-italic text-[#FF6B4A]">lo atiende tu competencia.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mb-[34px] max-w-[520px] text-lg leading-[1.6] text-[#9A9AA8]">
              Un agente de IA responde en tu WhatsApp las 24 horas, hace las preguntas justas para separar curiosos
              de compradores, y le entrega a tu equipo solo los leads que valen la pena llamar.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/agente-ia/demo"
                className="inline-flex items-center gap-2 rounded-full bg-[#EDEDF2] px-7 py-[15px] text-[15px] font-bold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
              >
                Ver una demo real →
              </Link>
              <a
                href="#como-funciona"
                className="rounded-full border border-white/10 px-7 py-[15px] text-[15px] font-semibold transition-colors duration-200 hover:border-[#9A9AA8] hover:bg-white/[0.04]"
              >
                Cómo funciona
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative flex min-h-[400px] items-center justify-center md:min-h-[520px]">
          <div
            className="absolute h-[460px] w-[460px] rounded-full border border-white/10 max-md:hidden"
            style={{ animation: "spin 40s linear infinite" }}
          >
            <span className="absolute -top-[3px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#FF6B4A] shadow-[0_0_14px_#FF6B4A]" />
          </div>
          <div
            className="absolute h-[560px] w-[560px] rounded-full border border-white/5 max-md:hidden"
            style={{ animation: "spin-r 60s linear infinite" }}
          />

          <div className="relative w-[300px] rounded-[32px] border border-white/10 p-3.5 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-[20px] [background:linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
            <div className="flex min-h-[420px] flex-col gap-2.5 rounded-[22px] bg-[#0A0A0D] p-[18px_14px]">
              <div className="mb-1 flex items-center gap-2.5 border-b border-white/[0.08] pb-3">
                <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gradient-to-br from-[#FF6B4A] to-[#E8C27A]" />
                <div>
                  <div className="text-[13px] font-semibold">Agente ASTRIA</div>
                  <div className="text-[11px] text-[#3FD6B0]">En línea</div>
                </div>
              </div>
              <div
                className="max-w-[82%] self-start rounded-2xl rounded-bl-[4px] bg-white/[0.07] p-[9px_13px] text-[12.5px] leading-[1.45] opacity-0"
                style={{ animation: "fade-in-up .5s ease .2s forwards" }}
              >
                Hola! Vi el anuncio de departamentos en Recoleta 👋
              </div>
              <div
                className="max-w-[82%] self-end rounded-2xl rounded-br-[4px] bg-gradient-to-br from-[#FF6B4A] to-[#E5502F] p-[9px_13px] text-[12.5px] leading-[1.45] text-white opacity-0"
                style={{ animation: "fade-in-up .5s ease .9s forwards" }}
              >
                Hola! Puedo ayudarte. ¿Buscás para vivir o como inversión?
              </div>
              <div
                className="max-w-[82%] self-start rounded-2xl rounded-bl-[4px] bg-white/[0.07] p-[9px_13px] text-[12.5px] leading-[1.45] opacity-0"
                style={{ animation: "fade-in-up .5s ease 1.6s forwards" }}
              >
                Para invertir, tengo el pozo listo
              </div>
              <div
                className="max-w-[82%] self-end rounded-2xl rounded-br-[4px] bg-gradient-to-br from-[#FF6B4A] to-[#E5502F] p-[9px_13px] text-[12.5px] leading-[1.45] text-white opacity-0"
                style={{ animation: "fade-in-up .5s ease 2.3s forwards" }}
              >
                Perfecto. ¿En qué rango de presupuesto estás pensando?
              </div>
              <div
                className="mt-auto flex items-center justify-between rounded-[14px] border border-[#3FD6B0]/30 bg-[#3FD6B0]/[0.08] p-[12px_14px] opacity-0"
                style={{ animation: "fade-in-up .5s ease 3s forwards" }}
              >
                <span className="text-[10.5px] uppercase tracking-[0.5px] text-[#3FD6B0]">Lead calificado</span>
                <span className="text-[15px] font-bold text-[#3FD6B0]">Presupuesto ✓ · Urgencia alta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,32px)] py-[90px]">
        <Reveal>
          <div className="mb-14 max-w-[640px]">
            <div className="mb-4 text-[12px] uppercase tracking-[2px] text-[#FF6B4A]">El problema</div>
            <h2 className="font-urbanist text-[clamp(26px,3.5vw,34px)] font-bold leading-[1.2] tracking-[-0.5px]">
              Estás pagando publicidad para perder leads en el camino
            </h2>
            <p className="mt-3.5 text-base leading-[1.6] text-[#9A9AA8]">
              No es falta de interesados. Es que entre que escriben y que alguien los atiende, ya se enfriaron — o
              ya compraron en otro lado.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {painPoints.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.08}>
              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-[28px_24px] backdrop-blur-[10px]">
                <div className="mb-4 font-urbanist text-[13px] font-bold tracking-[1px] text-[#FF6B4A]">{p.num}</div>
                <h3 className="mb-2.5 text-[19px] font-semibold">{p.title}</h3>
                <p className="text-sm leading-[1.6] text-[#9A9AA8]">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,32px)] py-[90px]">
        <Reveal>
          <div className="mb-14 max-w-[640px]">
            <div className="mb-4 text-[12px] uppercase tracking-[2px] text-[#FF6B4A]">Cómo funciona</div>
            <h2 className="font-urbanist text-[clamp(26px,3.5vw,34px)] font-bold leading-[1.2] tracking-[-0.5px]">
              Un flujo simple, sin que cambies nada de tu operación
            </h2>
            <p className="mt-3.5 text-base leading-[1.6] text-[#9A9AA8]">
              El agente vive en tu mismo número de WhatsApp. Vos seguís vendiendo, solo que ahora nadie se te escapa
              sin ser atendido.
            </p>
          </div>
        </Reveal>
        <div className="relative grid grid-cols-1 gap-7 md:grid-cols-4">
          <div
            className="absolute left-[60px] right-[60px] top-[22px] hidden h-px md:block"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0 6px, transparent 6px 12px)",
            }}
          />
          {flowSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative">
                <div className="relative z-[2] mb-[22px] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#050507] font-urbanist text-sm font-bold text-[#FF6B4A]">
                  {s.n}
                </div>
                <h3 className="mb-2 text-base font-semibold">{s.title}</h3>
                <p className="text-[13.5px] leading-[1.55] text-[#9A9AA8]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,32px)] py-[90px]">
        <Reveal>
          <div className="mb-14 max-w-[640px]">
            <div className="mb-4 text-[12px] uppercase tracking-[2px] text-[#FF6B4A]">Planes</div>
            <h2 className="font-urbanist text-[clamp(26px,3.5vw,34px)] font-bold leading-[1.2] tracking-[-0.5px]">
              Empezá con uno, sumá clientes cuando quieras
            </h2>
            <p className="mt-3.5 text-base leading-[1.6] text-[#9A9AA8]">
              El setup se ajusta a tu volumen de leads. La mensualidad cubre el mantenimiento, la infraestructura y
              el uso de IA — sin sorpresas.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {pricingPlans.map((p, i) => (
            <Reveal key={p.tier} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-[20px] border p-[32px_28px] backdrop-blur-[10px] ${
                  p.featured ? "border-[#FF6B4A]/40 bg-[#FF6B4A]/5" : "border-white/10 bg-white/[0.04]"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[#FF6B4A] px-3 py-[5px] text-[11px] font-bold uppercase tracking-[0.5px] text-white">
                    Más elegido
                  </span>
                )}
                <div className="mb-2.5 text-[13px] uppercase tracking-[1.5px] text-[#5C5C6B]">{p.tier}</div>
                <h3 className="mb-1.5 text-[22px] font-bold">{p.title}</h3>
                <div className="mb-5 text-[13px] text-[#9A9AA8]">{p.setup}</div>
                <ul className="mb-[26px] flex flex-grow flex-col gap-[11px]">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-[9px] text-[13.5px] leading-[1.5] text-[#9A9AA8]">
                      <span className="flex-shrink-0 text-[#FF6B4A]">—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`block w-full rounded-full py-[15px] text-center text-[15px] font-semibold ${
                    p.featured
                      ? "bg-[#EDEDF2] font-bold text-black"
                      : "border border-white/10 hover:border-[#9A9AA8] hover:bg-white/[0.04]"
                  }`}
                >
                  Consultar
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="px-[clamp(20px,5vw,32px)] py-[110px_0_130px] text-center">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[2px] text-[#FF6B4A] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FF6B4A] before:shadow-[0_0_10px_#FF6B4A]">
            Empezá hoy
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mx-auto mb-5 max-w-[620px] font-urbanist text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] tracking-[-1px]">
            Mostranos tu WhatsApp de ventas y te armamos una demo con tus propios leads
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mb-9 text-base text-[#9A9AA8]">
            Sin compromiso. En 15 minutos vas a ver el agente funcionando con un caso real de tu negocio.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          {/* TODO: reemplazar por el número real de WhatsApp de ASTRIA */}
          <a
            href="https://wa.me/5492990000000"
            className="inline-flex items-center gap-2 rounded-full bg-[#EDEDF2] px-7 py-[15px] text-[15px] font-bold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
          >
            Hablar por WhatsApp →
          </a>
        </Reveal>
      </section>
    </div>
  );
}
