/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        dark:`rgb(2,2,2)`,
        black:'rgb(1,1,1)'
      }
    },
  },
  plugins: [],
}

