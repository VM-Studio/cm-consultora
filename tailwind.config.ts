import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wine:        '#73223e',
        'wine-dark': '#5a1a30',
        pink:        '#f58fad',
        'pink-pale': '#fdf0f4',
        olive:       '#676537',
        sage:        '#a7a255',
        gold:        '#fbd576',
        terracotta:  '#c46d31',
        offwhite:    '#faf7f4',
        cream:       '#f5ede8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['Jost', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}

export default config
