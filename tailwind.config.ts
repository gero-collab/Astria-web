import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        chakra: ["var(--font-chakra)", "sans-serif"],
        urbanist: ["var(--font-urbanist)", "sans-serif"],
        "agente-inter": ["var(--font-agente-inter)", "sans-serif"],
      },
      keyframes: {
        spin360: { to: { transform: "rotate(360deg)" } },
        spinR: { to: { transform: "rotate(-360deg)" } },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        spin120: "spin360 120s linear infinite",
        spinR90: "spinR 90s linear infinite",
        spin60: "spin360 60s linear infinite",
        spin28: "spin360 28s linear infinite",
        spin40: "spin360 40s linear infinite",
        spinR26: "spinR 26s linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
