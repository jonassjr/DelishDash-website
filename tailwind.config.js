/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color':'hsla(253, 89%, 83%, 1)',
        'title-color': 'hsla(245, 12%, 21%, 1)',
        'body-color':'hsla(0, 0%, 96%, 1)',
        'mobile-menu':'hsla(0, 0%, 96%, .70)',
        'shadow-button':'rgba(155, 128, 231, 0.4)'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
    // boxShadow: {
    //   custom: "0px 4px 24px 0px rgba(155, 128, 231, 0.4)"
    // }
  },
  plugins: [],
}

