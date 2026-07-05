import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT_EMAIL } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — ASTRIA",
  description: "Contanos tu proyecto y armamos una propuesta a medida. somos@somosastria.com.ar",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(30px,5vw,64px)] px-[clamp(20px,5vw,40px)] pb-[110px] pt-[clamp(50px,8vh,90px)]">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-[18px] grid h-[min(300px,70vw)] w-[min(300px,70vw)] place-items-center">
          <div
            className="absolute inset-0 rounded-full border border-[rgba(180,200,250,.22)]"
            style={{ animation: "spin 40s linear infinite" }}
          />
          <div
            className="absolute inset-[34px] rounded-full border border-[rgba(180,200,250,.16)]"
            style={{ transform: "rotate(30deg) scaleY(.5)" }}
          />
          <div
            className="absolute inset-[60px] rounded-full border border-[rgba(180,200,250,.1)]"
            style={{ animation: "spin-r 26s linear infinite" }}
          />
          <div
            className="absolute inset-0 animate-pulseGlow rounded-full"
            style={{ background: "radial-gradient(50% 50% at 50% 50%,rgba(110,140,255,.18),transparent 70%)" }}
          />
          <Image
            src="/images/astria-logo.png"
            alt="Astria"
            width={126}
            height={126}
            className="animate-floaty rounded-full"
          />
        </div>
        <span className="mb-2 font-chakra text-xs tracking-[0.32em] text-[#8fa0c4]">ESCRIBINOS</span>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="gradient-text-chrome text-[clamp(18px,3vw,24px)] font-medium no-underline"
        >
          {CONTACT_EMAIL}
        </a>
      </div>

      <ContactForm />
    </div>
  );
}
