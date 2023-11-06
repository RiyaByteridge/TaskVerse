/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      backgroundColor:"#f8fafc",
      primaryText:"#181e25",
      secondaryText:"#788BA5",
      inputLablesColor:"#000000",
      textColor:"#117DF9",
      primaryButtonColor:"#624DE3",
      formBorder:"#dee4ed",
      borderColor:"#94a3b8",
      iconBackground:"#dee4ed",
      white:"#FFFFFF",
      focusBorder:"#c4b5fd",
      inputBorderColor:"#624dff",
      primaryButton:"#3730a3"
    }
  },
  plugins: [],
}

