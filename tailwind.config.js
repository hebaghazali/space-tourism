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
      backgroundImage: {
        home: "url('../public/assets/home/background-home-desktop.jpg')",
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        black: '#0B0D17',
      },
      boxShadow: {
        w: '0 0 0 88px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
