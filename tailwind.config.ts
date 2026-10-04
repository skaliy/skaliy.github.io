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
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        nord0: "#292d2b",
        nord1: "#343b36",
        nord2: "#48514a",
        nord3: "#60685f",
        nord4: "#d9d8ce",
        nord5: "#f5f3ec",
        nord6: "#faf9f5",
        nord7: "#8fbcbb",
        nord8: "#b5c9b0",
        nord9: "#81a1c1",
        nord10: "#5e81ac",
        accent: "#49634f",
        accentDark: "#b5c9b0",
      },
    },
  },
  plugins: [],
}

export default config
