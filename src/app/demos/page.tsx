import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import DemosGrid from "@/components/DemosGrid";

export const metadata: Metadata = {
  title: "Demos — ASTRIA",
  description: "Casos reales en órbita: SIPE, Prima Terra, Concesionaria 2.0, E-commerce Galáctico y más.",
};

export default function DemosPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,40px)] pb-[100px] pt-[clamp(50px,8vh,90px)]">
      <Reveal>
        <span className="font-chakra text-[13px] tracking-[0.36em] text-[#8fa0c4]">SHOWCASE</span>
      </Reveal>
      <Reveal delay={0.06}>
        <h1 className="my-[14px] max-w-[16ch] text-[clamp(34px,5.5vw,60px)] font-semibold tracking-[-0.02em]">
          Demos &amp; proyectos reales
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mb-[50px] max-w-[56ch] text-lg leading-[1.6] text-[#aeb6c2]">
          Casos que ya están en órbita. Explorá las capturas o entrá a la demo en vivo cuando esté disponible.
        </p>
      </Reveal>

      <DemosGrid />
    </div>
  );
}
