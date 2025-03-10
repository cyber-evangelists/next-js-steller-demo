/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "425px" },
      // => @media (max-width: 420px) { ... }

      "min-2xl": { min: "1535px" },
      // => @media (min-width: 1535px) { ... }

      "min-xl": { min: "1279px" },
      // => @media (min-width: 1279px) { ... }

      "min-lg": { min: "1024px" },
      // => @media (min-width: 1023px) { ... }

      "min-md": { min: "768px" },
      // => @media (min-width: 767px) { ... }

      "min-sm": { min: "639px" },
      // => @media (min-width: 639px) { ... }

      "min-xs": { min: "425px" },
      // => @media (min-width: 420px) { ... }
    },
    extend: {
      backgroundImage: {
        signUpGradient:
          "linear-gradient(#0f172a,#0f172a) padding-box,conic-gradient(#94a3b8,#334155 25%,#334155 75%,#94a3b8 100%) border-box",
      },
      colors: {
        textPrimary: "#ABB2BC",
        themeColor: "#0F172A",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        headerBg: "#111827",
      },
      boxShadow: {
        "custom-all-sides": "0px 3px 24px 10px rgba(116, 88, 160, 0.7)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
    },
  },
  plugins: [],
};
