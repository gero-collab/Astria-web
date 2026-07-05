import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export default function DemoDetailLayout({ children }: { children: React.ReactNode }) {
  return <div className={urbanist.variable}>{children}</div>;
}
