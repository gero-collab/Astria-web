import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PreciosGrid from "@/components/PreciosGrid";

export const metadata: Metadata = {
  title: "Precios — ASTRIA",
  description: "Precios base por producto en ARS o USD, con el Agente IA como módulo opcional. Proyectos a medida, cotizados según alcance.",
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
            Precios base por producto. Elegí la moneda, sumá el Agente IA si lo necesitás, y cotizamos el resto a medida.
          </p>
        </Reveal>
      </div>

      <PreciosGrid />
    </div>
  );
}
