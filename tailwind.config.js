const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'apps/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, 'libs/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      width: {
        120: '30rem',
        128: '32rem',
        160: '40rem',
        192: '48rem',
        256: '64rem',
      },
      height: {
        120: '30rem',
        128: '32rem',
        160: '40rem',
        192: '48rem',
        256: '64rem',
      },
    },
  },
  plugins: [],
};
