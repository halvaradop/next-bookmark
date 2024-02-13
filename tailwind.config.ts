import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      colors: {
        prim: {
          DEFAULT: 'hsl(231, 69%, 60%)',
          100: 'hsl(0, 94%, 66%)'
        },
        neut: {
          DEFAULT: 'hsl(229, 8%, 60%)',
          100: 'hsl(229, 31%, 21%)'
        }
      }
    },
  },
  plugins: [],
};
export default config;
