/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Palette matches the navy used on the resume and cover letters.
      colors: {
        paper: "#F7F9FC", // page background
        ink: "#0F172A", // headings and primary text
        slate: "#475569", // body text
        line: "#E2E8F0", // borders and dividers
        navy: {
          DEFAULT: "#1F3A5F",
          dark: "#152A46",
        },
        accent: "#2F6FDE", // small highlights: eyebrows, bullets, ticks
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
