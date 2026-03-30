import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        velvet: '#0a0a0c',
        graphite: '#161618',
        gold: '#c6a66a',
        smoke: '#9d9da2',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-radial': 'radial-gradient(circle at top, rgba(198, 166, 106, 0.15), transparent 40%)',
      },
      boxShadow: {
        'gold-glow': '0 0 50px rgba(198, 166, 106, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
