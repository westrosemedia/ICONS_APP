import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/help/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--font-cormorant-garamond)", ...defaultTheme.fontFamily.serif],
        serif: ["var(--font-cormorant-garamond)", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        accent: {
          DEFAULT: "#ff3131",
          50: "#fff5f5",
          100: "#ffe5e5",
          500: "#ff3131",
          600: "#e62e2e",
          700: "#cc2626",
        },
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "parallax": "parallax 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        parallax: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-100px)" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      fontSize: {
        /* ~20% larger than default for display / heading sizes */
        xl: ["1.5rem", { lineHeight: "2.1rem" }],
        "2xl": ["1.8rem", { lineHeight: "2.4rem" }],
        "3xl": ["2.25rem", { lineHeight: "2.7rem" }],
        "4xl": ["2.7rem", { lineHeight: "3rem" }],
        "5xl": ["3.6rem", { lineHeight: "1" }],
        "6xl": ["4.5rem", { lineHeight: "1" }],
        "7xl": ["5.4rem", { lineHeight: "1" }],
        "8xl": ["7.2rem", { lineHeight: "1" }],
        "9xl": ["9.6rem", { lineHeight: "1" }],
      },
      lineHeight: {
        relaxed: "1.8",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config; 