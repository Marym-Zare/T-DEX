/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      // center: true,
      padding: {
        DEFAULT: '1.25rem',
        // sm: '1.25rem',
        // lg: '5rem',
        // xl: '5rem',
        // '2xl': '5rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Roboto']
      },
      // colors: {
      //   'gradient-start': '#54BBF4',
      //   'gradient-end': '#0D0D0D',
      // },
      animation: {
        marquee: 'marquee 6s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-70%)' },
          '100%': { transform: 'translateX(70%)' },
        },
      },
    },
  },
  plugins: [],
}