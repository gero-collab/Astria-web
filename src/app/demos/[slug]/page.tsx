import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { demoDetails, projects } from "@/lib/data";

type PageProps = {
  params: { slug: string };
};

function getData(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  const detail = demoDetails.find((d) => d.slug === slug);
  if (!project || !detail) return null;
  return { project, detail };
}

export function generateStaticParams() {
  return demoDetails.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const data = getData(params.slug);
  if (!data) return {};
  const { project } = data;
  return {
    title: `${project.name} — ASTRIA`,
    description: project.desc,
  };
}

export default function DemoDetailPage({ params }: PageProps) {
  const data = getData(params.slug);
  if (!data) notFound();
  const { project, detail } = data;

  return (
    <div className="mx-auto max-w-[1000px] px-[clamp(20px,5vw,32px)] pb-[110px] pt-[clamp(50px,8vh,90px)]">
      <Reveal>
        <Link href="/demos" className="mb-8 flex w-fit items-center gap-2 text-sm text-[#8fa0c4] hover:text-[#c3d2f0]">
          ← Volver a demos
        </Link>
      </Reveal>

      {/* HERO */}
      <Reveal delay={0.04}>
        <span className="font-chakra text-[13px] tracking-[0.36em] text-[#8fa0c4]">{project.cat}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="my-[14px] max-w-[20ch] font-urbanist text-[clamp(32px,5.5vw,52px)] font-bold leading-[1.1] tracking-[-0.02em]">
          {project.name}
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mb-9 max-w-[62ch] text-lg leading-[1.6] text-[#aeb6c2]">{detail.who}</p>
      </Reveal>
      <Reveal delay={0.16}>
        <div className="mb-14 flex flex-wrap gap-3.5">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-[#EDEDF2] px-7 py-[15px] text-[15px] font-bold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
          >
            Cotizar este proyecto →
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-7 py-[15px] text-[15px] font-semibold transition-colors duration-200 hover:border-[#9fc0ff]/50 hover:bg-white/[0.04]"
            >
              Ver demo en vivo
            </a>
          )}
        </div>
      </Reveal>

      {project.thumbnail && (
        <Reveal delay={0.2}>
          <div className="relative mb-16 aspect-[16/10] overflow-hidden rounded-[22px] border border-white/10">
            <Image
              src={project.thumbnail}
              alt={`Captura de ${project.name}`}
              fill
              sizes="(max-width: 1000px) 100vw, 1000px"
              className="object-cover object-top"
              priority
            />
          </div>
        </Reveal>
      )}

      {/* BENEFICIOS */}
      <section className="mb-16">
        <Reveal>
          <h2 className="mb-6 font-urbanist text-[clamp(22px,3vw,28px)] font-bold tracking-[-0.01em]">
            Beneficios concretos para tu negocio
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {project.benefits.map((b, i) => (
            <Reveal key={b} delay={i * 0.06}>
              <div className="flex items-start gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-[10px]">
                <span className="mt-0.5 flex-shrink-0 text-[#9fc0ff]">◇</span>
                <span className="text-[15px] leading-[1.55] text-[#dfe3ea]">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUE INCLUYE */}
      <section className="mb-16">
        <Reveal>
          <h2 className="mb-6 font-urbanist text-[clamp(22px,3vw,28px)] font-bold tracking-[-0.01em]">
            Qué incluye el desarrollo
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {detail.developmentIncludes.map((item, i) => (
            <Reveal key={item} delay={i * 0.05}>
              <div className="flex items-start gap-3 rounded-[14px] border border-white/[0.08] bg-white/[0.02] p-4">
                <span className="mt-0.5 flex-shrink-0 text-[#a9b6d4]">✓</span>
                <span className="text-sm leading-[1.5] text-[#aeb6c2]">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTEGRA IA */}
      <section className="mb-16">
        <Reveal>
          <div className="rounded-[22px] border border-[#9fc0ff]/25 bg-[linear-gradient(160deg,rgba(120,150,255,.09),rgba(120,150,255,.02))] p-[clamp(24px,4vw,40px)] backdrop-blur-[14px]">
            <span className="font-chakra text-[12px] tracking-[0.28em] text-[#9fc0ff]">INTEGRÁ IA A ESTA PLATAFORMA</span>
            <p className="mt-3 max-w-[68ch] text-base leading-[1.6] text-[#dfe3ea]">{detail.aiIntro}</p>
            <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              {detail.aiItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-[1.55] text-[#c7cedb]">
                  <span className="mt-0.5 flex-shrink-0 text-[#9fc0ff]">◇</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/agente-ia"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#9fc0ff] hover:text-[#c3d2f0]"
            >
              Conocé el Agente IA →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <Reveal>
        <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-[clamp(28px,5vw,48px)] text-center backdrop-blur-[10px]">
          <h2 className="mx-auto mb-4 max-w-[36ch] font-urbanist text-[clamp(22px,3.5vw,30px)] font-bold leading-[1.2] tracking-[-0.01em]">
            ¿Te imaginás algo así para tu negocio?
          </h2>
          <p className="mx-auto mb-7 max-w-[52ch] text-base leading-[1.6] text-[#aeb6c2]">
            Armamos una propuesta a medida de tu rubro, con o sin agente de IA integrado.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-[#EDEDF2] px-7 py-[15px] text-[15px] font-bold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
          >
            Cotizar este proyecto →
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
