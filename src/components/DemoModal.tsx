"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/lib/data";

type DemoModalProps = {
  project: Project;
  onClose: () => void;
};

export default function DemoModal({ project, onClose }: DemoModalProps) {
  const [shot, setShot] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setShot((s) => (s + 1) % project.shots.length);
      if (e.key === "ArrowLeft") setShot((s) => (s - 1 + project.shots.length) % project.shots.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, project.shots.length]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center bg-black/[0.82] p-[22px] backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-[min(920px,96vw)] overflow-auto rounded-[24px] border border-white/[0.14] shadow-[0_40px_120px_rgba(0,0,0,.7)] [background:linear-gradient(160deg,rgba(20,24,34,.96),rgba(8,9,13,.96))]"
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
          <div>
            <span className="font-chakra text-[11px] tracking-[0.16em] text-[#9fb0d4]">{project.cat}</span>
            <h3 className="mt-1 text-[22px] font-semibold">{project.name}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="grid h-[38px] w-[38px] place-items-center rounded-full border border-white/[0.16] bg-white/[0.07] text-lg text-white"
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <div
            className="relative grid aspect-video place-items-center overflow-hidden rounded-2xl border border-white/[0.08]"
            style={{
              background:
                "repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 13px,rgba(255,255,255,.018) 13px 26px)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(60% 80% at 50% 0%,rgba(80,110,220,.2),transparent 70%)" }}
            />
            <span className="rounded-[9px] border border-dashed border-white/20 px-4 py-[9px] font-chakra text-[13px] tracking-[0.14em] text-[#8b94a4]">
              captura · {project.shots[shot]}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShot((s) => (s - 1 + project.shots.length) % project.shots.length);
              }}
              aria-label="Anterior"
              className="absolute left-[14px] top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/[0.18] bg-black/50 text-lg text-white"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShot((s) => (s + 1) % project.shots.length);
              }}
              aria-label="Siguiente"
              className="absolute right-[14px] top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/[0.18] bg-black/50 text-lg text-white"
            >
              ›
            </button>
            <span className="absolute bottom-3 right-[14px] rounded-lg bg-black/50 px-[10px] py-1 text-xs text-[#aeb6c2]">
              {shot + 1} / {project.shots.length}
            </span>
          </div>
          <p className="my-5 text-[15px] leading-[1.6] text-[#aeb6c2]">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/10 bg-white/5 px-[13px] py-1.5 text-xs text-[#bcc4d0]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
