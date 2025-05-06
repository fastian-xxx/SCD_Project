module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        backgroundDark: '#121212',
        backgroundLight: '#f9fafb',
        primary: '#3b82f6',
        secondary: '#06b6d4',
        golden: '#FFD700',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px #FFD700' },
          '50%':    { boxShadow: '0 0 20px #FFD700' },
        }
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
