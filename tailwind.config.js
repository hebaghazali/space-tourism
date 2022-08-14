module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      fontSize: {
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '3.5rem',
        '8xl': '6.25rem',
        '9xl': '9.375rem',
      },
      lineHeight: {
        1: '1.0625rem',
        2: '1.1875rem',
        3: '1.75rem',
        4: '1.8rem',
        5: '2rem',
        6: '2.125rem',
        7: '2.325rem',
        8: '4rem',
        9: '7.1875rem',
        10: '10.75rem',
      },
      spacing: {
        'box-width': '27.75rem',
      },
      letterSpacing: {
        tight: '2px',
        normal: '2.3625px',
        wide: '2.7px',
        wider: '4.725px',
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        black: '#0B0D17',
        gray: '#D0D6F9',
      },
      boxShadow: {
        w: '0 0 0 88px rgba(255, 255, 255, 0.1)',
      },
      opacity: {
        17: '.17',
      },
    },
  },
  plugins: [],
};
