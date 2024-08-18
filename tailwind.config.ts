import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    darkMode: true,
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      colors: {
        whiteSnow: '#FFFAFA',
        lightGray: '#e6e8ec',
        mediumGray: '#bcbaba',
        deepGray: '#51646E',
        starYellow: '#FFA000',
        errorRed: '#F00'
      }
    }
  },
  plugins: []
};
export default config;
