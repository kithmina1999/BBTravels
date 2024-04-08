/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-1':"url('src/assets/travel-concept.jpg')",
        'hero-2':"url('src/assets/hero-bg-image.jpg')",
        'daytour-1':"url('src/assets/day-tour-1.jpg')",
        'daytour-2':"url('src/assets/day-tour-2.jpg')",
      }
    },
  },
  plugins: [],
}