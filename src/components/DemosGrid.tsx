"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";
import DemoModal from "@/components/DemoModal";

export default function DemosGrid() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 6) * 0.06}>
            <div className="flex flex-col overflow-hidden rounded-[22px] border border-white/10 backdrop-blur-[14px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(150,180,255,.45)] hover:shadow-[0_22px_60px_rgba(60,90,200,.24)] [background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.015))]">
              <div
                className="relative grid aspect-[16/10] place-items-center border-b border-white/[0.08]"
                style={{
                  background:
                    "repeating-linear-gradient(135deg,rgba(255,255,255,.04) 0 11px,rgba(255,255,255,.015) 11px 22px)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(60% 80% at 50% 0%,rgba(80,110,220,.18),transparent 70%)" }}
                />
                <span className="rounded-lg border border-dashed border-white/[0.18] px-[14px] py-[7px] font-chakra text-xs tracking-[0.14em] text-[#7e8696]">
                  captura · {p.name}
                </span>
                <span className="absolute left-[14px] top-[14px] rounded-full border border-white/[0.14] bg-black/45 px-[11px] py-[5px] font-chakra text-[11px] tracking-[0.16em] text-[#a9b6d4]">
                  {p.cat}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-[14px] p-[22px_22px_24px]">
                <h3 className="text-[21px] font-semibold">{p.name}</h3>
                <p className="flex-1 text-sm leading-[1.55] text-[#a7afbb]">{p.desc}</p>
                <div className="flex flex-wrap gap-[7px]">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-[7px] border border-white/[0.09] bg-white/5 px-[11px] py-[5px] text-[11.5px] tracking-[0.03em] text-[#bcc4d0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-1.5 flex gap-2.5">
                  <button
                    onClick={() => setModalIndex(i)}
                    className="flex-1 rounded-[11px] py-[11px] text-[13.5px] font-semibold text-[#0c0c10] [background:linear-gradient(180deg,#eef1f4,#aab0ba)]"
                  >
                    Ver capturas
                  </button>
                  <button
                    disabled={!p.live}
                    onClick={() => p.live && window.open(p.live, "_blank")}
                    title={p.live ? "Abrir demo en vivo" : "Demo en vivo próximamente"}
                    className="flex-1 rounded-[11px] border border-white/[0.14] bg-white/5 py-[11px] text-[13.5px] font-medium disabled:cursor-not-allowed"
                    style={{ color: p.live ? "#e9ecf1" : "#6b7384", cursor: p.live ? "pointer" : "not-allowed" }}
                  >
                    {p.live ? "Ver demo en vivo" : "Demo en vivo · pronto"}
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {modalIndex !== null && (
        <DemoModal project={projects[modalIndex]} onClose={() => setModalIndex(null)} />
      )}
    </>
  );
}
