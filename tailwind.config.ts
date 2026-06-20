import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#00D9FF',
        'neon-cyan': '#00F0FF',
        'deep-purple': '#1A0033',
        'violet': '#9D00FF',
        'ultra-dark': '#000000',
        'dark-navy': '#0A0E27',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #0A0E27 50%, #1A0033 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 217, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(0, 217, 255, 0.4), 0 0 80px rgba(157, 0, 255, 0.2)',
        'glow-xl': '0 0 60px rgba(0, 217, 255, 0.3), 0 0 120px rgba(157, 0, 255, 0.15)',
      },
      backdropFilter: {
        'glass': 'backdrop-filter: blur(10px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        pulse-glow: {
          '0%, 100%': { opacity: '1', 'box-shadow': '0 0 20px rgba(0, 217, 255, 0.5)' },
          '50%': { opacity: '0.8', 'box-shadow': '0 0 40px rgba(0, 217, 255, 0.8)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
