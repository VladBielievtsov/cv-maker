/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': '#ffffff00',
      'white': '#fff',
      'black': '#1e1e2e',
      'lavender': '#c6d0f5',
      'crust': '#11111b',
      'mantle': '#181825',
      'maroon': '#e64553'
    },
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

