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
      sm: "640px", // Standard Breakpoint
      md: "815px", // Deinen angepassten Breakpoint
      lg: "1024px", // Standard Breakpoint
      xl: "1280px", // Standard Breakpoint
    },
  },
};
