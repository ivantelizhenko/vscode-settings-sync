/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    theme: {
      fontFamily: {
        pizza: ['Roboto Mono', ' monospace'],
      },
    },
  },
  plugins: [],
};
