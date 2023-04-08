/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#828282',
        'rating-gray': '#4F4F4F',
        black: '#333333',
      }
    },
  },
  plugins: [],
}

