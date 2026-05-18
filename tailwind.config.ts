import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef4fb',
          100: '#dce8f7',
          600: '#3b72c4',
          700: '#2d5a9e',
          800: '#1e3a5f',
          900: '#0f1f33',
        },
        accent: {
          100: '#faf3dc',
          300: '#e8c96a',
          500: '#c9a84c',
          700: '#9e7a2a',
        },
      },
      fontFamily: {
        sans: ['Noto Sans KR', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      keyframes: {
        'scale-in': {
          '0%':   { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)',    opacity: '1' },
        },
        'slide-right': {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'scale-in':    'scale-in 0.1s ease-out',
        'slide-right': 'slide-right 0.25s ease-out',
        'fade-in':     'fade-in 0.2s ease-out',
      },
    },
  },
}

export default config
