import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/*.{ts,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.mdx',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: {
          DEFAULT: '#f2efe8',
          deep: '#eae5db',
          card: '#f7f5f0',
        },
        ink: {
          DEFAULT: '#16150f',
          soft: '#4b473d',
          faint: '#7d786c',
          ghost: '#a8a294',
        },
        rule: {
          DEFAULT: '#d5cfc1',
          soft: '#e2ddd1',
        },
        accent: {
          DEFAULT: '#9c3b1c',
          soft: '#bf5a33',
        },
      },
      letterSpacing: {
        label: '0.14em',
      },
      maxWidth: {
        measure: '62ch',
      },
    },
  },
  plugins: [],
}

export default config
