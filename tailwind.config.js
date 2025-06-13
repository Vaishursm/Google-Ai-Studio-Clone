/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        'gray-850': '#1f2937', // For headers or slightly lighter dark elements
        'gray-950': '#0d1117', // For the darkest elements like the sidebar
      }
    },
  },
  plugins: [],
}