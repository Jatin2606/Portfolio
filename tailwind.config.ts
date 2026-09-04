import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          light: "#f8fafc",
          dark: "#0b0f19",
          cardLight: "#ffffff",
          cardDark: "#111827",
          borderLight: "#e2e8f0",
          borderDark: "#1f293d",
        },
        brand: {
          blue: "#38bdf8",
          cyan: "#06b6d4",
          emerald: "#10b981",
          violet: "#8b5cf6",
          amber: "#f59e0b",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-slow": "glow 6s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.4", transform: "scale(0.98)" },
          "100%": { opacity: "0.8", transform: "scale(1.02)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
