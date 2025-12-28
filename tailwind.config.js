/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#333',
        'gray-light': '#8e8e93',
      },
      fontFamily: {
        'huninn': ['jf-openhuninn-2.1', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

