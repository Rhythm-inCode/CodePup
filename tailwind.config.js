module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cpaccent: '#06b6d4',
        cpblue: '#2563eb',
        filmLight: 'rgba(255,255,255,0.02)'
      },
      backgroundImage: {
        'grain': "url('/assets/noise.svg')"
      },
      keyframes: {
        bgPulse: {
          '0%': { transform: 'scale(1)', opacity: 0.98 },
          '50%': { transform: 'scale(1.02)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 0.98 }
        },
        inputGlow: {
          '0%': { boxShadow: '0 0 0 rgba(6,182,212,0)' },
          '50%': { boxShadow: '0 0 28px rgba(6,182,212,0.06)' },
          '100%': { boxShadow: '0 0 0 rgba(6,182,212,0)' }
        }
      },
      animation: {
        bgPulse: 'bgPulse 14s ease-in-out infinite',
        inputGlow: 'inputGlow 3.8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
