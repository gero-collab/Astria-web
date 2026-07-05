import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { servicios } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios — ASTRIA",
  description: "Páginas web, CRM & automatización IA, e-commerce y CRM administrativo-contable.",
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,40px)] pb-[100px] pt-[clamp(50px,8vh,90px)]">
      <Reveal>
        <span className="font-chakra text-[13px] tracking-[0.36em] text-[#8fa0c4]">SERVICIOS</span>
      </Reveal>
      <Reveal delay={0.06}>
        <h1 className="my-[14px] max-w-[18ch] text-[clamp(34px,5.5vw,60px)] font-semibold tracking-[-0.02em]">
          Sistemas que trabajan a la velocidad de tu negocio
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mb-[54px] max-w-[58ch] text-lg leading-[1.6] text-[#aeb6c2]">
          Cada servicio es una pieza de ingeniería: diseño premium por fuera, automatización e IA por dentro.
        </p>
      </Reveal>

      <div className="flex flex-col gap-[22px]">
        {servicios.map((s, i) => (
          <Reveal key={s.glyph} delay={(i % 6) * 0.06}>
            <div className="grid grid-cols-[auto_1fr] items-start gap-[clamp(20px,4vw,46px)] rounded-[24px] border border-white/10 p-[clamp(28px,4vw,44px)] backdrop-blur-[14px] transition-all duration-300 hover:border-[rgba(150,180,255,.4)] hover:shadow-[0_20px_60px_rgba(60,90,200,.18)] [background:linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.015))]">
              <div className="relative grid h-[92px] w-[92px] place-items-center">
                <div className="absolute inset-0 animate-spin28 rounded-full border-[1.5px] border-[rgba(190,205,245,.5)]" />
                <div className="absolute inset-[14px] rotate-[32deg] scale-y-[0.46] rounded-full border border-[rgba(190,205,245,.25)]" />
                <div className="absolute inset-[14px] rotate-[-32deg] scale-y-[0.46] rounded-full border border-[rgba(190,205,245,.18)]" />
                <span className="gradient-text-silver font-chakra text-[26px] font-semibold">{s.glyph}</span>
              </div>
              <div>
                <h3 className="mb-3 text-[clamp(22px,3vw,30px)] font-semibold">{s.title}</h3>
                <p className="mb-[18px] max-w-[62ch] text-base leading-[1.62] text-[#aeb6c2]">{s.desc}</p>
                <div className="flex flex-wrap gap-[9px]">
                  {s.bullets.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-white/10 bg-white/5 px-[14px] py-[7px] text-[13px] tracking-[0.02em] text-[#c4cbd6]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
