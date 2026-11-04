/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./app.js"
  ],
  safelist: [
    "from-blue-600",
    "to-cyan-500",
    "from-indigo-600",
    "to-blue-600",
    "from-emerald-600",
    "to-teal-500",
    "from-primary",
    "to-accent-cyan",
    "border-primary",
    "border-accent-cyan",
    "border-accent-emerald",
    "bg-emerald-500/10",
    "text-emerald-400",
    "bg-amber-500/10",
    "text-amber-400",
    "text-accent-emerald",
    "text-accent-cyan",
    "text-primary",
    "bg-primary",
    "bg-white/5",
    "hidden",
    "block",
    "flex"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0d59f2",
        "primary-hover": "#0b4bc9",
        "primary-light": "#3b82f6",
        "microchip-red": "#e31837",
        "accent-cyan": "#0db9f2",
        "accent-emerald": "#13ecc8",
        "accent-pink": "#f20da6",
        "background-dark": "#101622",
        "surface-dark": "#161e2e",
        "border-dark": "#2d3748",
      },
      fontFamily: {
        "sans": ["Space Grotesk", "sans-serif"],
        "display": ["Space Grotesk", "sans-serif"]
      }
    }
  },
  plugins: [],
};
