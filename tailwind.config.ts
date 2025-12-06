import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf9f7',
        'background-alt': '#f5f4f1',
        'background-card': '#ffffff',
        'text-primary': '#0d0d0d',
        'text-secondary': '#353535',
        'text-muted': '#6b6b6b',
        border: '#e5e5e5',
        'border-hover': '#d0d0d0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
