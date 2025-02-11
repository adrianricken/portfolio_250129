/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "class"],
  content: ["./src/components/**/*.jsx", "./src/app/**/*.js"],
  plugins: [],
  theme: {
    extend: {
      screens: {
        md: "815px",
      },
    },
  },
};
