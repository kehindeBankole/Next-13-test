/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#050038',
      },
      animation: {
        tilt: 'tilt 3s linear infinite',
        moveFromBottom: 'moveFromBottom .6s ease both',
      },
      keyframes: {
        tilt: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        moveFromBottom: {
          from: {
            opacity: '0',
            transform: 'scale(.8)',
          },
        },
      },
      fontFamily: {
        mont: "'Montserrat', sans-serif",
        manrope: "'Manrope', sans-serif",
      },
    },
  },
  plugins: [],
};
