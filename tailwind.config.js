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
        forest: {
          DEFAULT: '#1B4332',
          50:  '#EAF2EC',
          100: '#C6DECA',
          200: '#9EC4A5',
          300: '#76AA80',
          400: '#4E905B',
          500: '#1B4332',
          600: '#163828',
          700: '#112D1F',
          800: '#0C2216',
          900: '#07160D',
        },
        sage: {
          DEFAULT: '#52796F',
          50:  '#F0F5F4',
          100: '#D5E5E2',
          200: '#B3CEC9',
          300: '#91B7AF',
          400: '#6FA096',
          500: '#52796F',
          600: '#436459',
          700: '#344F45',
          800: '#253A31',
          900: '#16251D',
        },
        cream: {
          DEFAULT: '#F8F5F0',
          100: '#FDFCFA',
          200: '#F8F5F0',
          300: '#EDE8DF',
          400: '#E2DBCE',
          500: '#D7CEBD',
        },
        paw:  '#D4A853',
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'sans-serif'],
        body:    ['var(--font-inter)',      'sans-serif'],
      },
      backgroundImage: {
        'gradient-forest': 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #52796F 100%)',
        'gradient-sage':   'linear-gradient(180deg, #F8F5F0 0%, #EAF2EC 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':      'fadeUp 0.7s ease forwards',
        'fade-in':      'fadeIn 0.6s ease forwards',
        'slide-right':  'slideRight 0.6s ease forwards',
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)'  },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'forest':    '0 20px 60px rgba(27,67,50,0.25)',
        'forest-sm': '0 4px 20px rgba(27,67,50,0.15)',
        'card':      '0 2px 40px rgba(27,67,50,0.08)',
        'card-hover':'0 20px 60px rgba(27,67,50,0.18)',
      },
    },
  },
  plugins: [],
};
