/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from 'tailwindcss-animated';
import tailwindcssIntersect from 'tailwindcss-intersect';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['Avigea', 'serif'],
    },
    extend: {
      screens: {
        touch: { raw: '(pointer: coarse)' },
      },
    },
  },
  plugins: [tailwindcssAnimated, tailwindcssIntersect],
};
