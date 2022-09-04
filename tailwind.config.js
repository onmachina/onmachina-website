const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'darkblue': {
        200: '#2D3245',
        500: '#21242B',
        700: '#312E3B',
        800: '#363844'
      },
      salmon: '#F4879E',
      peach: '#FFAA00',
      cherry: '#EA3347',
      sea: '#5BEBEF',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    fontFamily: {
      sans: ['Futura PT', 'Helvetica', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontWeight: {
      light: 300,
      book: 400,
      medium: 500,
      demi: 600,
      heavy: 700,
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      }
    }
  },
}