
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: 'rgb(3,3,3)',
        dark: `rgb(5,5,5)`,
        primary: 'rgb(3,3,3)',
        secondary: `rgb(5,5,5)`
      },
      screens:{
        xs: '320px',
        cardPhone: '425px'
      }
    },
  },
  plugins: [nextui({
    defaultTheme: "dark",
    addCommonColors: true,
    defaultExtendTheme: "dark",
  })],
}


