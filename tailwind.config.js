/** @type {import('tailwindcss').Config} */
import * as defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['"Bungee Shade"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
