/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        tertiary: "#8892b0",
        dark: "#020c1b",
        light: "#ccd6f6"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      animation: {
        'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        'fade-in': 'fade-in 1s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        'text-reveal': {
          '0%': {
            transform: 'translate(0, 100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translate(0, 0)',
            opacity: '1'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
}