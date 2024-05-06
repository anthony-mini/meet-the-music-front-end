/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#OE1218',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
