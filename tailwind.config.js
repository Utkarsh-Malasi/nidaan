/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D9488', // teal-600
          dark: '#0F766E',   // teal-700
          light: '#14B8A6',  // teal-500
        },
        secondary: {
          DEFAULT: '#134E4A', // teal-800
          light: '#0F766E',  // teal-700
        },
        background: {
          light: '#F0FDFA',   // teal-50
          DEFAULT: '#FFFFFF', // white
          alt: '#F0F9FF',     // sky-50
        },
        text: {
          DEFAULT: '#374151', // gray-700
          light: '#6B7280',   // gray-500
          dark: '#1F2937',    // gray-800
        }
      },
    },
  },
  plugins: [],
}