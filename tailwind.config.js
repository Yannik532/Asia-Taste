/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'asia-green': '#16A34A',
        'asia-beige': '#F5F5DC',
        'asia-dark': '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-200px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-in-top': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-200px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(200px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'slide-in-top': 'slide-in-top 1s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s ease-out forwards',
      },
    },
  },
  plugins: [],
  // Aggressive purging for smaller CSS
  safelist: [], // Keine Klassen auf Whitelist
  corePlugins: {
    // Disable unused plugins for smaller CSS
    preflight: true,
  },
}

