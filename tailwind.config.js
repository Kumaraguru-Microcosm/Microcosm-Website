export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This will scan all JS, JSX, TS, and TSX files in your src directory
    "./public/index.html", // Also scan the main HTML file
  ],
  theme: {
    extend: {
      animation: {
        'zoom-in-5s': 'zoom-in 5s ease-in-out forwards',
      },
      keyframes: {
        'zoom-in': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
