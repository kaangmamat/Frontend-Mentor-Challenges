/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkGrayishblue: "hsl(217, 19%, 35%)",
        desDarkblue: "hsl(214, 17%, 51%)",
        grayishBlue: "hsl(212, 23%, 69%)",
        lightGrayishblue: "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
