/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      /** Read more about colors:
          https://tailwindcss.com/docs/customizing-colors#using-custom-colors
      */

      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        amber200: 'rgb(var(--color-amber-200) / <alpha-value>)',
        amber500: 'rgb(var(--color-amber-500) / <alpha-value>)',
        'regal-blue': '#243c5a',
        'gold1': '#F6F7B0',
        'gold2': '#FFE898',
        'gold3': '#E29A05',
        'gold4': '#CF984D',
        'gold5': '#56380E',
        'myWhite': '#FEFEFE',
        'myGrey': '#9B9DB1',
        'myLiBlue': '#666F98',
        'myBlue': '#404668',
        'myDaBlue': '#2B324E',
        'myAmber': '#F8B076',
        
      },
      fontFamily: {
        librefranklin: ["Libre Franklin", "sans-serif"],
      },                                        
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1280px",
      xl: "1700px",
    },
  },
  plugins: [],
};

