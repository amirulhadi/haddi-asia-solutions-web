/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - McKinsey × Stripe × AWS Partner inspired
        primary: {
          DEFAULT: '#0F172A', // Charcoal Navy
          light: '#1e293b',
        },
        secondary: {
          DEFAULT: '#334155', // Slate Blue
          light: '#475569',
        },
        neutral: {
          DEFAULT: '#94A3B8', // Cool Gray
          dark: '#64748b',
          light: '#cbd5e1',
        },
        accent: {
          DEFAULT: '#38BDF8', // Soft Steel Blue (used sparingly)
          dark: '#0ea5e9',
          light: '#7dd3fc',
        },
        // Base colors for text/backgrounds that are not brand-specific
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}

