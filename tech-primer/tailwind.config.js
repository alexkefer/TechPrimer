/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'catalogue-background': "url('./cataloguebackground.png')",
        'windows-bg': "url('./windows-bg.jpg')",
      }
    },
  },
  plugins: [],
}

