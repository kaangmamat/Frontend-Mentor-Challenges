/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",

        // Neutral
        veryDarkBlueMain: "hsl(217, 54%, 11%)",
        veryDarkBlueCard: "hsl(216, 50%, 16%)",
        veryDarkBlueLine: "hsl(215, 32%, 27%)",
        whitee: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
