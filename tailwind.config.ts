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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'main': 'url(\'../public/images/bg.webp\')',
      },
      boxShadow: {
        'main': '0 0 20px 0 rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        xss: '0.6rem'
      },
    },
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1164px'
    }
  },
  plugins: [],
}
export default config
