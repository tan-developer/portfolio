/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mons :['Montserrat',...defaultTheme.fontFamily.sans]
      },
      colors : {
        "dark-grey" : "#131316"
      },
      height : {
        "60vh" : "60vh",
        "80vh" : "80vh",
        "screen/2": "50vh"
      },
    },
  }
}