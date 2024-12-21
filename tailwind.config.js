/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ban_bg: "URL(./src/assets/banner.jpg)"
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT:'1rem',
      },
    },
  },
  plugins: [],
}