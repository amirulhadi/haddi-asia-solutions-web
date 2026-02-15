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
        // HANS Brand Colors
        'hans-navy': '#0B1F3F',
        'hans-white': '#FFFFFF',
        'hans-grey': '#F5F5F5',
        'hans-teal': '#00BFA6',
        'hans-orange': '#FF6B35',
        // Legacy support
        primary: {
          DEFAULT: '#0B1F3F',
          light: '#1a2f4f',
        },
        secondary: {
          DEFAULT: '#00BFA6',
          light: '#00d9c0',
        },
        neutral: {
          DEFAULT: '#64748b',
          dark: '#475569',
          light: '#cbd5e1',
        },
        // Base colors
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
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.01em' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '500' }],
        'h4': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'h5': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

