/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          coopBlue: "#00adef",
          coopBlueHover: "#0086ba",
          coopOrange: "#E38524",
          // You can add more custom colors here if needed
        },
      },
    },
    plugins: [],
  }