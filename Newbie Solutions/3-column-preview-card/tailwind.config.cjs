/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        brightOrange: "hsl(31, 77%, 52%)",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkcyan: "hsl(179, 100%, 13%)",
        // Neutral
        transparentWhite: "hsla(0, 0%, 100%, 0.75)",
        veryLightgray: "hsl(0, 0%, 95%)",
      },
      fontFamily: {
        lexendDeca: ["Lexend Deca", "sans-serif"],
        bigShoulders: ["Big Shoulders Display", "display"],
      },
    },
  },
  plugins: [],
};
