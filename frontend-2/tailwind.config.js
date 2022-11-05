module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#F539F8",
        purple: "#5356FB",
        "light-gray": "#E5E5E5",
        "thin-light-gray": "#858D98",
        "dark-gray": "#374557",
        "lighter-gray": "#878F9A",
        "light-purple": "#E3E4FE",
        gold: "#F2994A",
        "light-green": "#27AE60",
        "light-red": "#EB5757",
        "white-opacity": "#7B7EFC",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
