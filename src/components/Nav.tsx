"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-white/[0.06] px-[clamp(20px,5vw,72px)] py-4 backdrop-blur-2xl [background:linear-gradient(180deg,rgba(0,0,0,.72),rgba(0,0,0,.35))]">
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-[13px]">
          <Image src="/images/astria-logo.png" alt="Astria" width={46} height={46} className="block rounded-full" priority />
          <span className="gradient-text-chrome font-chakra text-[23px] font-semibold tracking-[0.22em]">ASTRIA</span>
        </Link>

        <div className="hidden items-center gap-1.5 min-[841px]:flex">
          {navItems.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-[10px] px-[15px] py-[9px] text-[14.5px] tracking-[0.04em] transition-colors duration-200 hover:bg-white/[0.06] hover:text-white ${
                  active ? "text-white" : "text-[#aab2bf]"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link href="/contacto" className="btn-gold ml-2.5 !px-5 !py-2.5 text-sm">
            Cotizar proyecto
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-[10px] border border-white/[0.16] px-3 py-2.5 text-lg text-white min-[841px]:hidden"
          aria-label="Abrir menú"
        >
          ≡
        </button>
      </nav>

      {menuOpen && (
        <div className="sticky top-[74px] z-[49] flex flex-col gap-1 border-b border-white/[0.08] bg-black/[0.92] px-[clamp(20px,5vw,72px)] py-3.5 backdrop-blur-2xl min-[841px]:hidden">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/[0.05] px-1.5 py-3 text-left text-base text-[#cfd4dc]"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
