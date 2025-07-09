import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Montserrat", ...defaultTheme.fontFamily.sans],
        heading: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb", // Brand blue
          dark: "#1e40af",
          light: "#60a5fa",
        },
        secondary: {
          DEFAULT: "#f59e42", // Brand orange
          dark: "#b45309",
          light: "#fde68a",
        },
        accent: {
          DEFAULT: "#10b981", // Brand green
          dark: "#047857",
          light: "#6ee7b7",
        },
      },
    },
  },
  plugins: [],
};

export default config; 