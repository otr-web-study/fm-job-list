/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        radii: '5px',
        'radii-full': '50%',
      },
      boxShadow: {
        main: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
      },
      backgroundImage: {
        'header-mobile': 'url("assets/images/bg-header-mobile.svg")',
        'header-desktop': 'url("assets/images/bg-header-desktop.svg")',
        'icon-remove': 'url("assets/images/icon-remove.svg")',
      },
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        'gr-100': 'hsl(180, 52%, 96%)',
        'gr-200': 'hsl(180, 31%, 95%)',
        'gr-800': 'hsl(180, 8%, 52%)',
        'gr-900': 'hsl(180, 14%, 20%)',
      },
      fontFamily: {
        spartan: ['Spartan', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        normal: '15px',
      },
    },
  },
  plugins: [],
};
