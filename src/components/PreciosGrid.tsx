"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { priceProducts } from "@/lib/data";

type Currency = "ARS" | "USD";

function formatPrice(amount: number) {
  return amount.toLocaleString("es-AR");
}

export default function PreciosGrid() {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
          {(["USD", "ARS"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                currency === c ? "bg-[#EDEDF2] text-black" : "text-[#aeb6c2] hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-stretch gap-[22px]">
        {priceProducts.map((p, i) => {
          const basePrice = currency === "USD" ? p.basePriceUSD : p.basePriceARS;
          const aiAddon = currency === "USD" ? p.aiAddonUSD : p.aiAddonARS;
          return (
            <Reveal key={p.slug} delay={(i % 6) * 0.06}>
              <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.015))] p-[30px_26px] backdrop-blur-[14px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(150,180,255,.4)] hover:shadow-[0_22px_60px_rgba(60,90,200,.2)]">
                <h3 className="mb-2 text-xl font-semibold">{p.name}</h3>
                <p className="mb-5 min-h-[42px] text-sm leading-[1.5] text-[#a7afbb]">{p.tagline}</p>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-[13px] text-[#8a93a2]">desde</span>
                  <span className="gradient-text-silver text-[26px] font-semibold">
                    {currency} {formatPrice(basePrice)}
                  </span>
                </div>
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#9fc0ff]/30 bg-[#9fc0ff]/[0.08] px-3 py-[6px] text-[12px] font-medium text-[#9fc0ff]">
                  + Agente IA disponible · {currency} {formatPrice(aiAddon)}
                </div>
                <div className="mb-7 flex flex-1 flex-col gap-[10px]">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-[10px] text-sm leading-[1.45] text-[#c4cbd6]">
                      <span className="mt-px text-[#9fc0ff]">◇</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contacto#cotizar"
                  className="w-full rounded-[13px] bg-white/[0.08] py-3.5 text-center text-[15px] font-semibold text-[#e9ecf1] transition-colors duration-200 hover:bg-white/[0.14]"
                >
                  Cotizar a medida
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
