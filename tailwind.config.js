/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    screens: {
      'sm': '526px',
      // => @media (min-width: 576px) { ... }

      'md': '730px',
      // => @media (min-width: 960px) { ... }

      'lg': '1100px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        'pop': "'Poppins', sans-serif",
        'lato': "'Lato', sans-serif",
        'pro': "'Source Code Pro', monospace",
      }
    },
  },
  plugins: [],
}

