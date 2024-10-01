/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "min-lg": "980px",
        custom: "500px",

        "lg-custom": "1020px",
      },
    },
  },
  plugins: [],
};
