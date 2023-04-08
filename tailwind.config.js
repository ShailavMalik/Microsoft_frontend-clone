/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        sm: '540px',
        md: '858px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      }
    },
  },
  plugins: [],
};
