/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange-q':'#FB9333',
        'black-q': '#575757',
      }
    },
  },
  plugins: [],
}

