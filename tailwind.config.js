/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff4ff',
          100: '#dce6fd',
          200: '#c0d2fc',
          300: '#97b4fa',
          400: '#6c8df6',
          500: '#4a6cf7',
          600: '#3251ee',
          700: '#293fdb',
          800: '#2435b1',
          900: '#22338c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
