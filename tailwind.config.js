/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: 'rgb(254,254,0)',
          red: 'rgb(255,15,0)',
          ash: 'rgb(64,64,64)',
          silver: 'rgb(191,191,191)',
        },
        ink: '#121212',
        'ink-soft': '#1f1f1f',
        'ink-light': '#f5f5f5',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Urbanist Variable"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 25px rgba(255, 15, 0, 0.35)',
      },
      animation: {
        'wiggle-slow': 'wiggle 8s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite',
        flicker: 'flicker 4s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.95' },
          '55%': { opacity: '0.5' },
          '65%': { opacity: '1' },
        },
      },
    },
  },
};
