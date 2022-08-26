/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'dark':'#00040F',
        'lightblue':'#5CE1E6',
        'lightgray':'#FFFFFFB2'
      },
      fontFamily:{
        Poppins:['Poppins']
      },
      width:{
        '47':'47%',
        '30':'30%'
      }
    },
  },
  plugins: [],
}
