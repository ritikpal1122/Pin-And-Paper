/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"],
      },
      colors: {
        papBlue: "#0C1A4F",
        papSky: "#C5D8FF",
        papSoft: "#EAF0FF",
        papPeach: "#FFB27A",
        papGreen: "#4AD17A",
        papNavy: "#001B4E",
      },
      boxShadow: {
        soft: "0 20px 40px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};


