/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        veryDarkblue: "hsl(233, 47%, 7%)",
        darkDesaturatedblue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",
        // Neutral
        whitee: "hsl(0, 0%, 100%)",
        slightlyTransmain: "hsla(0, 0%, 100%, 0.75)",
        slightlyTranshead: "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
