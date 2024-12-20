import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
    extend: {
      height: {
        nav: "var(--nav-height)",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)", "sans-serif"],
        "secular-one": ["var(--font-secular-one)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        primary: "#F54F35",
        secondary: "#FEF1EF",
        "text-emphasize-primary": "#A10F0F",
        "text-primary": "#1F1F1F",
        "text-heading-primary": "#191A15",
        "text-primary-foreground": "#475467",
        "text-navigation-blue": "#0000EE",
        "border-primary-light": "#E5E7EB",
        "text-placeholder": "#CACACA",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
