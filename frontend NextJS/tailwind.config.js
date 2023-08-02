/** @type {import('tailwindcss').Config} */

module.exports =  {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#9333ea',
        secondary: '#4b5563',
        navbarprimary: '#7e22ce',
        white: '#fff',
        black: '#000000'
      },
      animation: {
        wiggle: 'wiggle 0.15s linear infinite',
        'fade-in-down': 'fade-in-down 1s ease-out',
        'left-slide-in': 'left-slide-in 1s ease-out',
        pulseSlow: 'pulse 5s infinite',
        spinSlow: 'spin 3s linear infinite',
        pingSlow: 'ping 4s cubic-bezier(0, 0, 0.4, 1) infinite',
        bounce: 'bounce 2.5s infinite',
        'waving-hand': 'wave 1s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(24deg)' },
          '20%': { transform: 'rotate(-16deg)' },
          '30%': { transform: 'rotate(19deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(20.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(55px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'left-slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-55px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        }
      },
    },
  },
  plugins: [],
}