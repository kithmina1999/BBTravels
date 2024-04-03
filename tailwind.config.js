/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-1':"url('src/assets/hero-bg-image.jpg')"
      }
    },
  },
  plugins: [],
}