"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { demoDetails, projects } from "@/lib/data";

const detailSlugs = new Set(demoDetails.map((d) => d.slug));

export default function DemosGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-6">
      {projects.map((p, i) => (
        <Reveal key={p.slug} delay={(i % 6) * 0.06}>
          <div className="flex flex-col overflow-hidden rounded-[22px] border border-white/10 backdrop-blur-[14px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(150,180,255,.45)] hover:shadow-[0_22px_60px_rgba(60,90,200,.24)] [background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.015))]">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08]">
              {p.thumbnail ? (
                <Image
                  src={p.thumbnail}
                  alt={`Captura de ${p.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
              ) : (
                <div
                  className="grid h-full w-full place-items-center"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg,rgba(255,255,255,.04) 0 11px,rgba(255,255,255,.015) 11px 22px)",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(60% 80% at 50% 0%,rgba(80,110,220,.18),transparent 70%)" }}
                  />
                  <span className="relative rounded-lg border border-dashed border-white/[0.18] px-[14px] py-[7px] font-chakra text-xs tracking-[0.14em] text-[#7e8696]">
                    captura · {p.name}
                  </span>
                </div>
              )}
              <span className="absolute left-[14px] top-[14px] rounded-full border border-white/[0.14] bg-black/45 px-[11px] py-[5px] font-chakra text-[11px] tracking-[0.16em] text-[#a9b6d4]">
                {p.cat}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-[14px] p-[22px_22px_24px]">
              <h3 className="text-[21px] font-semibold">{p.name}</h3>
              <p className="flex-1 text-sm leading-[1.55] text-[#a7afbb]">{p.desc}</p>
              <ul className="flex flex-col gap-[7px]">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-[9px] text-[13px] leading-[1.5] text-[#a7afbb]">
                    <span className="mt-px flex-shrink-0 text-[#9fc0ff]">◇</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-1.5 flex gap-2.5">
                {detailSlugs.has(p.slug) && (
                  <Link
                    href={`/sistemas/${p.slug}`}
                    className="flex-1 rounded-[11px] border border-white/[0.14] bg-white/5 py-[11px] text-center text-[13.5px] font-medium text-[#e9ecf1]"
                  >
                    Conocé más
                  </Link>
                )}
                {p.href ? (
                  <Link
                    href={p.href}
                    className="flex-1 rounded-[11px] border border-white/[0.14] bg-white/5 py-[11px] text-center text-[13.5px] font-medium text-[#e9ecf1]"
                  >
                    Ver página →
                  </Link>
                ) : p.live ? (
                  <button
                    onClick={() => window.open(p.live!, "_blank")}
                    title="Abrir demo en vivo"
                    className="flex-1 rounded-[11px] border border-white/[0.14] bg-white/5 py-[11px] text-[13.5px] font-medium text-[#e9ecf1]"
                  >
                    Ver demo en vivo
                  </button>
                ) : (
                  <button
                    disabled
                    title={p.ctaLabel ? "Demo con acceso restringido" : "Demo en vivo próximamente"}
                    className="flex-1 cursor-not-allowed rounded-[11px] border border-white/[0.14] bg-white/5 py-[11px] text-[13.5px] font-medium text-[#6b7384]"
                  >
                    {p.ctaLabel || "Demo en vivo · pronto"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
