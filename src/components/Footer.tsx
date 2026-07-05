import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, footerLinks } from "@/lib/data";

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
            CONVERTIMOS NEGOCIOS EN SISTEMAS INTELIGENTES
          </p>
          <p className="text-[13.5px] leading-[1.6] text-[#7e8696]">
            Agencia de software &amp; agentes IA. Convertimos negocios en sistemas inteligentes.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col gap-[11px]">
            <span className="mb-[3px] text-[11px] tracking-[0.2em] text-[#5f6878]">NAVEGAR</span>
            {footerLinks.map((n) => (
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
            <span className="flex items-center gap-[7px] text-sm text-[#5a6373]" title="WhatsApp: próximamente">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.06-1.33A10 10 0 1 0 12 2Zm0 18.2a8.16 8.16 0 0 1-4.17-1.14l-.3-.18-3.1.82.83-3-.2-.31A8.19 8.19 0 1 1 12 20.2Zm4.52-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.8.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.7-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
              </svg>
              WhatsApp: Próximamente
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.05] px-[clamp(20px,5vw,40px)] py-[18px] text-center text-[12.5px] text-[#5a6373]">
        © {new Date().getFullYear()} ASTRIA · Inteligencia que pone en órbita tu empresa
      </div>
    </footer>
  );
}
