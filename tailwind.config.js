/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: { void: '#080808', electric: '#00f0ff', crimson: '#ff0055', emerald: '#00ff88' },
      fontFamily: { display: ['var(--font-display)', 'Inter', 'sans-serif'], mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'] },
      boxShadow: { electric: '0 0 40px rgba(0,240,255,.16)', crimson: '0 0 40px rgba(255,0,85,.14)' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};