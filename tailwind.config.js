/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '350px',
        'tablet': '640px',
        'laptop': '1440px',
        'desktop': '1920px',
      },
      colors: {
        gray: '#828282',
        'rating-gray': '#4F4F4F',
        black: '#333333',
      },
      boxShadow: {
        '4xl': '60px 60px 60px 60px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

