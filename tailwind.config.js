/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],

  theme: {
    extend: {
      colors: {
        primary: "#000000",
        dropdown: "#181818",
        dropDownTitle: "#EBEBF5",
        dropdownButton: "#1C1C1E",
        checkbox: "#F1F1F1",
        inputField: "#F6F6F6",
        card: "#B9B9B9",
      },
    },
  },
  plugins: [],
};
