/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./lib/classes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { primary: "#1f2b6c" },
    },
  },
  plugins: [],
};
