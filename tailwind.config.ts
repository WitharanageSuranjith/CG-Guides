import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1124px',
        'xl': '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter-Regular', 'sans-serif'],
        interSemibold: ['Inter-Semibold', 'sans-serif'],
        interBold: ['Inter-Bold', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Embedcode: ['Edu NSW ACT Cursive', 'cursive'],


      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      screens: {

        "xs": "480px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
          colors: {
        transparent: "transparent",
        current: "currentColor",
        
        primary: "#e55a2b",      // brand orange   
        white: "#fff", //  white
        black: "#000", // black
        light: "#fff",      // light background
        dark: "#121212",       // dark background


      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};

export default config;