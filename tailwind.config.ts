import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      direction: {
        'rtl': 'rtl',
        'ltr': 'ltr',
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'fade-up': 'fadeUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeUp: {
          '0%': { 
            transform: 'translateY(10px)',
            opacity: '0',
            filter: 'blur(5px)'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1',
            filter: 'blur(0)'
          },
        },
      },
      transitionProperty: {
        'hover': 'transform, box-shadow, background-color',
      },
      backdropBlur: {
        'xs': '2px',
      },
      colors: {
        dark: {
          50: '#f6f6f7',
          100: '#e1e3e5',
          200: '#c2c5ca',
          300: '#9da3ac',
          400: '#787f8c',
          500: '#5c636e',
          600: '#454a54',
          700: '#343941',
          800: '#23272e',
          900: '#171b21',
        },
      },
    },
  },
  plugins: [],
}

export default config 