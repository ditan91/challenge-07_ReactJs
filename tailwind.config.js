/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica'],
      },
      color:{
        darkblue: ['#1e40af'],
      }
    },
    
  },
  plugins: [],
}
