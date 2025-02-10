/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("tailwindcss-animate")],
  theme: {
    screens: {
      md: "815px",
    },
  },
};
