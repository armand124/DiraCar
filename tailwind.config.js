/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["autumn", "dark", "cupcake"],
  },
  content: ["./frontend/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  
}

