/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        softOrange: "hsl(35, 77%, 62%)",
        softRed: "hsl(5, 85%, 63%)",
        // Neutral
        offWhite: "hsl(36, 100%, 99%)",
        grayishBlue: "hsl(233, 8%, 63%)",
        darkGrayishblue: "hsl(236, 13%, 42%)",
        veryDarkblue: "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
