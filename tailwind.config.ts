import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        surface: '#0a0a0a',
        accent: {
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
          glow: 'rgba(6, 182, 212, 0.15)',
        },
      },
      animation: {
        'gradient-text': 'gradientText 5s ease infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        gradientText: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseDot: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(6,182,212,0.5)' },
          '50%': { boxShadow: '0 0 0 7px rgba(6,182,212,0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
