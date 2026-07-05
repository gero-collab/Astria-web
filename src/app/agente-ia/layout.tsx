import { Urbanist, Inter } from "next/font/google";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const agenteInter = Inter({
  variable: "--font-agente-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function AgenteIALayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${urbanist.variable} ${agenteInter.variable} font-agente-inter`}>
      {children}
    </div>
  );
}
