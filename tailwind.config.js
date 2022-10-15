/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        fest: "url('../assets/img/bg.jpg')",
      },
      colors: {
        iFest: "#001951",
        "fest-blue": "#00febe",
      },
      fontFamily: {
        fest: "Helvetica"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
