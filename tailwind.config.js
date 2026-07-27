/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#022C22',
          900: '#064E3B',
          800: '#065F46',
          700: '#047857',
          600: '#059669',
          500: '#10B981',
          50: '#ECFDF5',
        },
        gold: {
          100: '#FFFDF0',
          200: '#FDF7CE',
          300: '#F5E6AB',
          400: '#E8D279',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#976E07',
          800: '#735205',
          900: '#4A3403',
        },
        cream: {
          50: '#FFFEFA',
          100: '#FAF9F6',
          200: '#F5F3EC',
          300: '#EFECE1',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.3)',
        'emerald-glow': '0 10px 30px rgba(6, 78, 59, 0.25)',
        'card-soft': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        }
      }
    },
  },
  plugins: [],
}
