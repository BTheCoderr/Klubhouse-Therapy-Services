/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'klubhouse': {
          gold: '#FFD700',  // Rich gold color
          black: '#000000', // Pure black
          accent: '#DAA520' // Darker gold for accents/highlights
        },
        primary: '#000000',   // Black as primary
        secondary: '#FFD700', // Gold as secondary
        background: '#FFD700' // Gold background
      },
      backgroundImage: {
        'puzzle-pattern': "url('/puzzle-bg.png')",
      },
    },
  },
  plugins: [],
} 