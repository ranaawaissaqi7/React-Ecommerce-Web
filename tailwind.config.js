/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
       'xs': {'min': '420px', 'max': '640px'},
      }
    },
  },
  plugins: [],
}
