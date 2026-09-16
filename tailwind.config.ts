/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nord0: "#2e3440",
        nord1: "#3b4252",
        nord2: "#434c5e",
        nord3: "#4c566a",
        nord4: "#d8dee9",
        nord5: "#e5e9f0",
        nord6: "#eceff4",
        nord7: "#8fbcbb",
        nord8: "#88c0d0",
        nord9: "#81a1c1",
        nord10: "#5e81ac",
        accent: "#4c6b94",
        accentDark: "#88c0d0",
      },
    },
  },
  plugins: [],
}

export default config
