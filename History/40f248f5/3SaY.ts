import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-lg': { max: '1024px' },
        'max-sm': { max: '550px' },
      },
      colors: {
        brand: 'hsla(14, 77%, 54%,  1)',
      },
    },
  },
  daisyui: {
    themes: ['retro'],
  },

  plugins: [daisyui],
} satisfies Config;
