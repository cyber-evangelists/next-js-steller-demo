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
        "signUp-Gradient":
          "linear-gradient(#0f172a,#0f172a) padding-box,conic-gradient(#94a3b8,#334155 25%,#334155 75%,#94a3b8 100%) border-box",
        "marquee-gradient":
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
        "text-gradient": "linear-gradient(to right, #a855f7, #e9d5ff)",
        "text-gradient-2":
          "linear-gradient(to right, rgb(194 148 237), rgb(226 232 240 / 0.6))",
        "feature-gradient":
          "radial-gradient(circle, rgba(168,85,247,1) 50%, rgba(15,23,42,1) 100%)",
        "feature-gradient-2":
          "radial-gradient(circle, rgba(219,183,255,1) 50%, rgba(15,23,42,1) 100%)",
        "business-gradient":
          "radial-gradient(circle, rgba(192,132,252,1) 50%, rgba(15,23,42,1) 100%)",
        loginBox: "url(../public/assets/bg_img.png)",
        trustUs: "url(../public/assets/trustUs_img.png)",
        glowBottom: "url(../public/assets/glow-bottom.svg)",
        glowTop: "url(../public/assets/glow-top.svg)",
        smartFeature: "url(../public/assets/smartFeature_bg_img.png)",
        featureGlow: "url(../public/assets/featureone.png)",
      },
      colors: {
        textPrimary: "#ABB2BC",
        themeColor: "#0F172A",
        background: "var(--background)",
        foreground: "var(--foreground)",
        bordorColor: "#363E48",
        loginBoxColor: "#A855F7",
        featureBg: "#A855F7",
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
