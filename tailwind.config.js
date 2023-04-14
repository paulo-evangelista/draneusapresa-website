/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainPink: '#DD0F50',
        secondPink: '#A62951',
        thirdPink: '#893449',
      },
      fontFamily: {
        sans: ['pulp'],
      },
    },
  },
  plugins: [],
}
