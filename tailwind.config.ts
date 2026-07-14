import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        background: "#0A0A0A",
        surface: "#121212",
        surface2: "#1A1A1A",
        border: "rgba(255,255,255,0.1)",
        primary: "#FF3B30",
        "primary-hover": "#E0352A",
        muted: "#A1A1AA",
        foreground: "#E0E0E0",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
