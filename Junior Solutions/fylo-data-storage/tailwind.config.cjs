/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        gradientFrom: "hsl(6, 100%, 80%)",
        gradientTo: "hsl(335, 100%, 65%)",
        // Neutral
        paleBlue: "hsl(243, 100%, 93%)",
        grayishBlue: "hsl(229, 7%, 55%)",
        darkBlue: "hsl(228, 56%, 26%)",
        veryDarkblue: "hsl(229, 57%, 11%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
