/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        moderateViolet: "hsl(263, 55%, 52%)",
        veryDarkGrayishblue: "hsl(217, 19%, 35%)",
        veryDarkBlackishblue: "hsl(219, 29%, 14%)",
        whitee: "hsl(0, 0%, 100%)",
        // Neutral
        lightGray: "hsl(0, 0%, 81%)",
        lightGrayishblue: "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
