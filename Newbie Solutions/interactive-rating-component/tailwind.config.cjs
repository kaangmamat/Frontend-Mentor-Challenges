/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white2: "hsl(0, 0%, 100%)",
        lightGray: "hsl(217, 12%, 63%)",
        onStar: "#283B4E",
        mediumGray: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue2: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
