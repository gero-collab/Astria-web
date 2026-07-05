import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07] bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-between gap-[34px] px-[clamp(20px,5vw,40px)] py-12">
        <div className="max-w-[320px]">
          <div className="mb-3 flex items-center gap-[11px]">
            <Image src="/images/astria-logo.png" alt="Astria" width={40} height={40} className="block rounded-full" />
            <span className="gradient-text-chrome font-chakra text-[21px] font-semibold tracking-[0.24em]">ASTRIA</span>
          </div>
          <p className="mb-4 font-chakra text-[11px] tracking-[0.22em] text-[#8a93a2]">
            INTELIGENCIA QUE PONE EN ÓRBITA TU EMPRESA
          </p>
          <p className="text-[13.5px] leading-[1.6] text-[#7e8696]">
            Agencia de software &amp; agentes IA. Convertimos negocios en sistemas inteligentes.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col gap-[11px]">
            <span className="mb-[3px] text-[11px] tracking-[0.2em] text-[#5f6878]">NAVEGAR</span>
            {navItems.map((n) => (
              <Link key={n.href} href={n.href} className="text-left text-sm text-[#aab2bf] hover:text-white">
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-[11px]">
            <span className="mb-[3px] text-[11px] tracking-[0.2em] text-[#5f6878]">CONTACTO</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-[#aab2bf] hover:text-white">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.05] px-[clamp(20px,5vw,40px)] py-[18px] text-center text-[12.5px] text-[#5a6373]">
        © {new Date().getFullYear()} ASTRIA · Inteligencia que pone en órbita tu empresa
      </div>
    </footer>
  );
}
