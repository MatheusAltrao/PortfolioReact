/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      keyframes: {
        top: {
          '0%': { transform: 'translateY(-30px)', opacity: 0, },
          '100%': { transform: 'translateY(0px)', opacity: 1 }
        },
        bottom: {
          '0%': { transform: 'translateY(30px)', opacity: 0, },
          '100%': { transform: 'translateY(0px)', opacity: 1 }
        },
        left: {
          '0%': { transform: 'translateX(-20px)', opacity: 0, },
          '100%': { transform: 'translateX(0px)', opacity: 1 }
        },
        leftOpacity: {
          '0%': { transform: 'translateX(-30px)', opacity: 0, },
          '100%': { transform: 'translateX(0px)', opacity: 0.6 }
        },
        right: {
          '0%': { transform: 'translateX(30px)', opacity: 0, },
          '100%': { transform: 'translateX(0px)', opacity: 1 }
        },
      },
      animation: {
        top4: 'top  ease 0.5s  backwards',
        top6: 'top  ease 0.5s  backwards',
        top10: 'top  ease 0.5s  backwards',
        bottom20: 'bottom  ease 0.3s  backwards',
        bottom22: 'bottom  ease 0.3s  backwards',
        bottom24: 'bottom  ease 0.3s  backwards',
        bottom30: 'bottom  ease 0.3s  backwards',
        left4: 'left  ease  0.5s  backwards',
        left14: 'left  ease  0.5s  backwards',
        left16: 'leftOpacity  ease  0.5s  backwards',
        left18: 'leftOpacity  ease  0.5s  backwards',
        right: 'right  ease 0.5s  backwards',

      },
    },
  },
  plugins: [],
}
