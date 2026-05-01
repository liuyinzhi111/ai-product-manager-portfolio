import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "8vw",
        lg: "10vw",
      },
    },
    extend: {
      colors: {
        primary: "#202020",
        secondary: "#5F5F5F",
        tertiary: "#F8F8F8",
        accent: "#A66A3F",
        line: "#E5E5E5",
        background: "#FBFAF7",
        // override Tailwind's default `white` so `bg-white` is the warm-white page tone.
        // pure white is still available via `bg-[#FFFFFF]` if needed.
        white: "#FBFAF7",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "PingFang SC",
          "Microsoft YaHei",
          "Hiragino Sans GB",
          "Source Han Sans SC",
          "Noto Sans SC",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      borderRadius: {
        card: "14px",
      },
      fontSize: {
        // editorial display sizes
        "display-hero": [
          "clamp(112px, 16vw, 220px)",
          { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "500" },
        ],
        "display-section": [
          "clamp(64px, 9vw, 120px)",
          { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "500" },
        ],
        "card-title": ["32px", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "500" }],
        "card-title-lg": ["40px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.75" }],
        "body-md": ["16px", { lineHeight: "1.7" }],
        "body-sm": ["14px", { lineHeight: "1.6" }],
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
