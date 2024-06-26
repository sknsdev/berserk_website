import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      '2k': { min: '1439px' },
      // => @media (min-width: 1440px) { ... }

      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '773px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      lp: { max: '320px' },
      // => @media (max-width: 320px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/hero/orange_abstract.jpg')",
      },
    },
    colors: {
      transparent: 'transparent',
      mainDark: '#101010',
      mainOrange: '#ED8B49',
      mainRose: '#FF4747',
      // list colors
      dark: '#101010',
      grayDark: '#202020',
      grayLight: '#808080',
      white: '#eee',
      black: '#000',

      // button colors
      buttonDark: '#101010',
      buttonLight: '#fff',
    },
  },

  plugins: [],
};
export default config;
