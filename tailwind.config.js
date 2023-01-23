module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: {
          darkRed: '#870c0b',


        },
        index:{
          color1:"#181F21",
          color2:"#272727",
          color3:"#292323",
          color4:"#282A3A",
          color5:"#735F32",
        },
        home:{
          cl1:"#181f21",
          cl2:"#181f21",
          cl3:"#870c0b",
          cl4:"#292323",
          cl5:"#282a3a",
          cl6:"#735f32"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
