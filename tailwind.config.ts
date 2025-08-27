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
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Cooper Hewitt Bold", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        accent: {
          DEFAULT: "#ff3131",
        },
      },
    },
  },
  plugins: [],
};

export default config; 