import Link from "next/link";
import Reveal from "@/components/Reveal";
import { AiIcon, BoltIcon, DesignIcon, SatIcon } from "@/components/Icons";
import { homeServices, why, type WhyItem } from "@/lib/data";

const whyIcons: Record<WhyItem["icon"], typeof BoltIcon> = {
  bolt: BoltIcon,
  ai: AiIcon,
  design: DesignIcon,
  sat: SatIcon,
};

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative flex flex-col items-center px-[22px] pb-[clamp(60px,9vh,110px)] pt-[clamp(70px,12vh,150px)] text-center">
        <div
          className="absolute top-[8%] h-[min(560px,85vw)] w-[min(560px,85vw)] rounded-full border border-[rgba(180,200,240,.1)]"
          style={{ animation: "spin 60s linear infinite" }}
        >
          <div className="absolute -left-1 -top-[5px] h-[9px] w-[9px] rounded-full bg-[#dfe7ff] shadow-[0_0_18px_4px_rgba(150,180,255,.8)]" />
        </div>

        <Reveal>
          <span className="mb-[26px] font-chakra text-[13px] tracking-[0.42em] text-[#8fa0c4]">
            AGENCIA DE SOFTWARE &amp; AGENTES IA
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="gradient-text mb-6 max-w-[14ch] text-[clamp(40px,7vw,82px)] font-semibold leading-[1.04] tracking-[-0.02em]">
            Convertimos negocios en sistemas inteligentes
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mb-10 max-w-[60ch] text-[clamp(16px,2vw,20px)] leading-[1.6] text-[#aeb6c2]">
            Diseñamos software a medida, agentes de IA y automatizaciones que ponen en órbita tu empresa. Del primer
            pixel al sistema que trabaja por vos.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demos" className="btn-gold">
              Ver demos en vivo
            </Link>
            <Link href="/precios" className="btn-ghost">
              Ver planes
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ===== SERVICES CARDS ===== */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,40px)] pb-[90px] pt-[30px]">
        <Reveal>
          <div className="mb-[38px] flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="eyebrow">LÍNEAS DE TRABAJO</span>
              <h2 className="mt-2.5 text-[clamp(28px,4vw,42px)] font-semibold tracking-[-0.01em]">
                Cuatro órbitas de servicio
              </h2>
            </div>
            <Link href="/servicios" className="text-[15px] text-[#9fc0ff] hover:text-white">
              Ver todos los servicios →
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          {homeServices.map((s, i) => (
            <Reveal key={s.label} delay={(i % 6) * 0.06}>
              <Link
                href={s.href}
                className="glass-card group flex flex-col gap-[15px] p-[28px_26px] text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(150,180,255,.5)] hover:shadow-[0_18px_50px_rgba(60,90,200,.28)]"
              >
                <div className="relative grid h-[54px] w-[54px] place-items-center">
                  <div className="absolute inset-0 rounded-full border border-[rgba(180,200,250,.5)]" />
                  <div className="absolute inset-2 rotate-[28deg] scale-y-[0.5] rounded-full border border-[rgba(180,200,250,.24)]" />
                  <div className="h-[11px] w-[11px] rounded-full bg-gradient-to-b from-white to-[#9aa3ad] shadow-[0_0_14px_2px_rgba(160,190,255,.7)]" />
                </div>
                <h3 className="text-xl font-semibold text-[#f4f6f9]">{s.label}</h3>
                <p className="text-[14.5px] leading-[1.55] text-[#b6bdc9]">{s.desc}</p>
                <div className="chip-gold mt-0.5">
                  <span className="text-[11px]">✦</span>
                  {s.benefit}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== WHY ASTRIA ===== */}
      <section className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,40px)] pb-[100px]">
        <Reveal>
          <div className="mb-11 text-center">
            <span className="eyebrow">DIFERENCIAL</span>
            <h2 className="gradient-text mt-3 text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.01em]">
              ¿Por qué ASTRIA?
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {why.map((w, i) => {
            const Icon = whyIcons[w.icon];
            return (
              <Reveal key={w.title} delay={(i % 6) * 0.06}>
                <div className="group relative flex flex-col gap-4 overflow-hidden rounded-[22px] border border-white/[0.12] p-[30px_28px] backdrop-blur-[14px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(150,180,255,.5)] hover:shadow-[0_22px_60px_rgba(60,90,200,.28)] [background:linear-gradient(160deg,rgba(255,255,255,.09),rgba(255,255,255,.02))]">
                  <div
                    className="pointer-events-none absolute -right-[20%] -top-[30%] h-[180px] w-[180px] rounded-full"
                    style={{
                      background: "radial-gradient(50% 50% at 50% 50%,rgba(120,150,255,.18),transparent 70%)",
                    }}
                  />
                  <div className="relative grid h-[60px] w-[60px] place-items-center">
                    <div className="absolute inset-0 rounded-full border border-[rgba(180,200,250,.5)]" />
                    <div
                      className="absolute inset-[9px] rounded-full border border-[rgba(180,200,250,.24)]"
                      style={{ transform: `rotate(${w.tilt}) scaleY(.5)` }}
                    />
                    <div className="relative drop-shadow-[0_0_9px_rgba(150,180,255,.55)]">
                      <Icon />
                    </div>
                  </div>
                  <h3 className="relative text-[19px] font-semibold text-[#f4f6f9]">{w.title}</h3>
                  <p className="relative text-[14.5px] leading-[1.58] text-[#b6bdc9]">{w.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ===== BIG CTA ===== */}
      <section className="mx-auto mb-[110px] max-w-[1100px] px-[clamp(20px,5vw,40px)]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 p-[clamp(48px,7vw,84px)_28px] text-center [background:linear-gradient(160deg,rgba(40,60,130,.28),rgba(255,255,255,.02))]">
            <div
              className="pointer-events-none absolute -left-[30%] -top-[40%] h-[160%] w-[60%] animate-pulseGlow"
              style={{ background: "radial-gradient(50% 50% at 50% 50%,rgba(120,150,255,.25),transparent 70%)" }}
            />
            <h2 className="relative mb-[18px] text-[clamp(28px,4.5vw,48px)] font-semibold tracking-[-0.01em]">
              ¿Listo para entrar en órbita?
            </h2>
            <p className="relative mx-auto mb-8 max-w-[52ch] text-[17px] leading-[1.6] text-[#b3bccb]">
              Contanos qué necesitás y armamos un sistema a tu medida. Sin plantillas, sin humo.
            </p>
            <div className="relative flex flex-wrap justify-center gap-[15px]">
              <Link href="/contacto" className="btn-gold">
                Cotizar mi proyecto
              </Link>
              <Link
                href="/demos"
                className="cursor-pointer rounded-[13px] border border-white/[0.18] bg-white/[0.06] px-8 py-[15px] text-[15.5px] font-medium text-[#e9ecf1]"
              >
                Explorar demos
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
