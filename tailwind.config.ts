import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        TailGrids: {
          'Text-Color': '#637381',
        },
      },
      fontFamily: {
        inter: ["Inter, sans-serif"],
        roboto: ["Roboto, sans-serif"],
        manrope: ["Manrope, sans-serif"],
        montserrat: ["Montserrat, sans-serif"],
        outfit: ["Outfit, sans-serif"],
        ABeeZee: ["ABeeZee, sans-serif"],
      },
      backgroundColor: {
        primary: '#3c50e0',
      },
    },
  },
  plugins: [],
};
export default config;
