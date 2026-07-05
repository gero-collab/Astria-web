import type { Metadata } from "next";
import { Chakra_Petch, Sora } from "next/font/google";
import BackgroundLayers from "@/components/BackgroundLayers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const title = "ASTRIA — Agencia de software & agentes IA";
const description =
  "Diseñamos y desarrollamos sistemas a medida, páginas web premium, e-commerce y agentes IA para empresas y comercios. Desde Neuquén para todo el mundo.";

export const metadata: Metadata = {
  metadataBase: new URL("https://somosastria.com.ar"),
  title,
  description,
  icons: {
    icon: "/images/astria-logo.png",
  },
  openGraph: {
    title,
    description,
    url: "https://somosastria.com.ar",
    images: ["/images/astria-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sora.variable} ${chakraPetch.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden bg-black font-sora text-[#e9ecf1] antialiased">
        <BackgroundLayers />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Nav />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
