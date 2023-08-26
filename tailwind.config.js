/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
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

