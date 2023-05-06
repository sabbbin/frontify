const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-out': {
          from: { opacity: 0, transform: 'none' },
          to: { opacity: 1, transform: 'translateY(-30px)' },
        },

        'fade-in': {
          from: { opacity: 1, transform: 'translateY(-30px)' },
          to: { opacity: 0, transform: 'translateY(0px)' },
        },
      },
      animation: {
        'fade-out': 'fade-out var(--animation-time) 0ms ease forwards',
        'fade-in': 'fade-in 10ms ease forwards',
      },
    },
  },
  plugins: [],
};
