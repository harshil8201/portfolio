/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        colorWhite: "#FFFFFF",
        colorDarkWhite: "#EDF1F4",
        colorBlack: "#000000",
        colorDarkGray: "#767676",
        colorRed: "#C90030",
        colorLightBlack: "#393939",
        colorBlue: "#0075FF",
      },
      screens: {
        mobile: "640px",
        tablet: "768px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
