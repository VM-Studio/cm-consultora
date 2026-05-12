import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wine:       '#9e2750',
        pink:       '#f58fad',
        olive:      '#676537',
        sage:       '#a7a255',
        gold:       '#fbd576',
        terracotta: '#c46d31',
        offwhite:   '#faf8f5',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
