/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rojo-rodar':'#BA0909'
      },
      fontFamily:{
        primary:['Josefin Sans'],
        secondary:['Mooli']
      }
    },
  },
  plugins: [],
}

