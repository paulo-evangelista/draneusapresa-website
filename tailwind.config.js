/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
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
      screens: {
        xs: '400px',
      },
      backgroundImage: {
        linePattern: 'url(../../assets/pattern.svg)',
      },
    },
  },
  plugins: [],
}
