/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'], // Add Roboto if you plan to use it
      },
    },
  },
  plugins: [],
}
