let colors = require('tailwindcss/colors')

// fix tailwind build issue https://github.com/tailwindlabs/tailwindcss/issues/4690
delete colors.lightBlue
delete colors.coolGray
delete colors.warmGray
delete colors.trueGray
delete colors.blueGray

colors = { ...colors, ...{ transparent: 'transparent' } }

module.exports = {
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  contents: ['./layouts/**/*.vue', './pages/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '20rem': 'repeat(auto-fill, minmax(20rem, 1fr))',
        '15rem': 'repeat(auto-fill, minmax(15rem, 1fr))',
      },
      width: {
        25: '6.25rem',
      },
      colors: {
        primary: '#2FBAD3',
        nav: 'rgb(38 38 38)',
        test: 'linear-gradient(#eee, #333)',
      },
    },
    colors,
  },
}
