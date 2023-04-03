/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize:{
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '110%': '110%',
      'heroCover': '150%',
      'lgHeroCover':'100%',
    },
    extend: {},
    fontFamily:{
      'Jura': ['Jura', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif'],
      'Gilroy': ['Gilroy', 'sans-serif']
    },
    backgroundImage:{
      'Hero': "url('img/hero.webp')",
      'Journey': "url('img/journey.jpg')",
      'Book': "url('img/book.webp')",
      'BookSec1': "url('img/bookSec1.webp')",
      'BookSec2': "url('img/bookSec2.webp')",
      'BookSec3': "url('img/bookSec3.webp')",
      'BookSec4': "url('img/bookSec4.webp')",
      'BookSec5': "url('img/bookSec5.webp')",
    }
  },
  plugins: [],
}
