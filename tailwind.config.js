/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    textColor: (theme) => ({
      ...theme('colors'),
      main: '#fff',
      secondary: '#F5D26D',
      gray: '#9e9e9e',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      secondary: '#F5D26D',
      gray: '#9e9e9e',
    }),
    extend: {},
  },
  plugins: [require('daisyui'), require('prettier-plugin-tailwindcss')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'light',
  },
};
