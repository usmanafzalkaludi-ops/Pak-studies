/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        slate950: "#0E1311",
        emerald: {
          DEFAULT: "#10B981",
          deep: "#047857",
          forest: "#065F46",
          mint: "#34D399",
        },
        canvas: "#FBFCFB",
        haze: "#F1F5F3",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Sora",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(16,185,129,0.25), 0 18px 50px -12px rgba(16,185,129,0.45)",
        soft: "0 24px 60px -24px rgba(11,11,12,0.25)",
        panel: "0 30px 80px -30px rgba(6,95,70,0.35)",
      },
      backgroundImage: {
        "mesh-emerald":
          "radial-gradient(60% 60% at 80% 0%, rgba(52,211,153,0.18) 0%, rgba(251,252,251,0) 60%), radial-gradient(50% 50% at 0% 100%, rgba(16,185,129,0.14) 0%, rgba(251,252,251,0) 55%)",
        "grid-faint":
          "linear-gradient(to right, rgba(11,11,12,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,11,12,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        marqueeY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
