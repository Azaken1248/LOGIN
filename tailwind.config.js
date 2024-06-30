/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'backdrop-desktop': "url('./src/assets/bg1.png')",
      },
      backgroundPosition: {
        'top-adjust': 'center top 50%',
      },
      backdropBlur: {
        'xs': '2px',
      },
      colors: {
        'custom-blue': '#569CEE',
        'custom-blue-darker': '#0963CD',

      },
    },
  },
  plugins: [],
}
