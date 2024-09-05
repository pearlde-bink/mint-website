/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Press Start 2P", "VT323"],
      body: ["Press Start 2P", "VT323"],
      text: "VT323",
    },
    extend: {
      height: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
