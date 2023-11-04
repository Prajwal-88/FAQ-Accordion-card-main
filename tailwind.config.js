/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        kumb: "'Kumbh Sans', sans-serif",
      },
      colors:{
        // Primary
        // Text
        Very_dark_desaturated_blue: 'hsl(238, 29%, 16%)',
        Soft_red: 'hsl(14, 88%, 65%)',
        // Gradient
        // Background gradient:

        Soft_violet: 'hsl(273, 75%, 66%)',
        Soft_blue: 'hsl(240, 73%, 65%)',
        // Neutral
        // Text
        Very_dark_grayish_blue: 'hsl(237, 12%, 33%)',
        Dark_grayish_blue: 'hsl(240, 6%, 50%)',
        // Dividers
        Light_grayish_blue: 'hsl(240, 5%, 91%)',

      },
      maxWidth:{
        _326:'328.9px'
      },

      inset: {
        _26: '6.3rem',
      }
    },
  },
  plugins: [],
}

