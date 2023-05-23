const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

const focusedSiblingPlugin = plugin(function ({ addVariant, e }) {
  addVariant('focused-sibling', ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `:focus + .focused-sibling \\: ${rule.selector.slice(1)}`;
    });
  });
});

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
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          size: (value) => ({
            width: value,
            height: value,
          }),
        },
        {
          values: theme('width'),
        }
      );
    }),
    plugin(function ({ matchVariant }) {
      const values = {
        hover: 'hover',
        active: 'active',
        focus: 'focus',
      };
      matchVariant(
        'on-child',
        (value) => {
          if (value.includes(',')) {
            console.log('----------', value);
            const temp = value
              .split(',')
              .map((v) => `&:has(.child:${v.trim()})`);

            console.log('tem', temp);
            return temp;
          }

          return `&:has(.child:${value.trim()})`;
        },
        {
          values,
        }
      );
      matchVariant(
        'group-on-child',
        (value) => {
          if (value.includes(',')) {
            const temp = value
              .split(',')
              .map((v) => `:merge(.group):has(.child:${v.trim()}) &`);
            console.log(temp);

            return temp;
          }

          return `:merge(.group):has(.child:${value.trim()}) &`;
        },
        {
          values,
        }
      );
    }),

    focusedSiblingPlugin,
    plugin(function ({ addVariant }) {
      addVariant('optional', '&:optional');
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('inverted-colors', '@media (inverted-colors: inverted)');
    }),
  ],
  variants: {
    extend: {
      backgroundColor: ['focused-sibling'],
    },
  },
};
