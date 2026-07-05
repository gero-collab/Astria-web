import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { comparison, plans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Precios — ASTRIA",
  description: "Planes Básico, Pro y Enterprise. Proyectos a medida, cotizados según alcance.",
};

export default function PreciosPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,40px)] pb-[100px] pt-[clamp(50px,8vh,90px)]">
      <div className="mb-14 text-center">
        <Reveal>
          <span className="font-chakra text-[13px] tracking-[0.36em] text-[#8fa0c4]">PLANES</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="my-[14px] text-[clamp(34px,5.5vw,60px)] font-semibold tracking-[-0.02em]">
            Proyectos a medida, no plantillas
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto max-w-[54ch] text-lg leading-[1.6] text-[#aeb6c2]">
            Cada proyecto se cotiza según alcance. Elegí el punto de partida y armamos la propuesta.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-stretch gap-[22px]">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={(i % 6) * 0.06}>
            <div
              className="relative flex flex-col rounded-[24px] border p-[34px_30px_32px] backdrop-blur-[14px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(60,90,200,.22)]"
              style={{ background: p.bg, borderColor: p.border }}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-[6px] font-chakra text-[11px] tracking-[0.18em] text-[#1a1405] [background:linear-gradient(180deg,#f6dca6,#cda552)]">
                  MÁS ELEGIDO
                </span>
              )}
              <h3 className="mb-2 text-2xl font-semibold">{p.name}</h3>
              <p className="mb-[18px] min-h-[42px] text-sm leading-[1.5] text-[#a7afbb]">{p.tagline}</p>
              <div className="mb-[22px] flex items-baseline gap-2">
                <span className="text-[13px] text-[#8a93a2]">desde</span>
                <span className="gradient-text-silver text-[30px] font-semibold">{p.from}</span>
              </div>
              <div className="mb-7 flex flex-1 flex-col gap-[11px]">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-[11px] text-sm leading-[1.45] text-[#c4cbd6]">
                    <span className="mt-px text-[#9fc0ff]">◇</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contacto"
                className="w-full rounded-[13px] py-3.5 text-center text-[15px] font-semibold"
                style={{ background: p.ctaBg, color: p.ctaColor }}
              >
                Cotizar mi proyecto
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h2 className="my-20 text-center text-[clamp(24px,3.5vw,34px)] font-semibold">Comparativa de features</h2>
      </Reveal>
      <Reveal>
        <div className="overflow-x-auto rounded-[20px] border border-white/10 bg-white/[0.02]">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr>
                <th className="border-b border-white/10 px-[22px] py-[18px] text-left text-[13px] font-medium tracking-[0.08em] text-[#8a93a2]">
                  Feature
                </th>
                <th className="border-b border-white/10 px-4 py-[18px] text-[15px] font-semibold">Básico</th>
                <th className="border-b border-white/10 px-4 py-[18px] text-[15px] font-semibold text-[#f0d59e]">
                  Pro
                </th>
                <th className="border-b border-white/10 px-4 py-[18px] text-[15px] font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((r) => (
                <tr key={r.label}>
                  <td className="border-b border-white/5 px-[22px] py-4 text-[14.5px] text-[#cfd4dc]">{r.label}</td>
                  <td className="border-b border-white/5 px-4 py-4 text-center text-sm text-[#aab2bf]">{r.basic}</td>
                  <td className="border-b border-white/5 bg-[rgba(240,213,158,.04)] px-4 py-4 text-center text-sm text-[#e9ecf1]">
                    {r.pro}
                  </td>
                  <td className="border-b border-white/5 px-4 py-4 text-center text-sm text-[#aab2bf]">{r.ent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </div>
  );
}
