import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#00acb1',

          'primary-content': '#000b0c',

          secondary: '#00e1c2',

          'secondary-content': '#00120e',

          accent: '#006cb6',

          'accent-content': '#d1e1f2',

          neutral: '#181706',

          'neutral-content': '#cbcbc6',

          'base-100': '#ffffff',

          'base-200': '#dedede',

          'base-300': '#bebebe',

          'base-content': '#161616',

          info: '#009efe',

          'info-content': '#000916',

          success: '#00ffc3',

          'success-content': '#00160e',

          warning: '#b76400',

          'warning-content': '#0c0300',

          error: '#ff8586',

          'error-content': '#160606',
        },
      },
    ],
  },

  plugins: [require('daisyui')],
} satisfies Config;
