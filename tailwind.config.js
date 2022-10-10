/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: "#065f46",
        skyBlue: "#67e8f9",
        light: "#fafaf9",
        dark: "#292524",
      },
    },
  },
  plugins: [],
};
