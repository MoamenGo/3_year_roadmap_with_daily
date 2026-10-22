/** @type {import('tailwindcss').Config} */
// Steep design tokens: near-monochrome warm paper with a single peach / sienna accent.
module.exports = {
  darkMode: 'class',
  content: ['./www/index.html'],
  theme: {
    extend: {
      colors: {
        zinc: {
          50: '#fafafb',
          100: '#f2f2f3',
          200: '#ececec',
          300: '#dcdcdf',
          400: '#a3a6af',
          500: '#777b86',
          600: '#5f636d',
          700: '#3b3e45',
          800: '#2a2c31',
          900: '#17191c',
          950: '#101113'
        },
        // Completion / success states use the peach + sienna pair
        emerald: {
          50: '#fdf1e9',
          300: '#f3c9ad',
          400: '#f0b892',
          500: '#a8603d',
          600: '#5d2a1a',
          700: '#5d2a1a',
          800: '#7a3e27',
          950: '#2a150d'
        },
        // Featured / highlight surfaces: Blush Peach with Sienna ink
        amber: {
          50: '#fbe1d1',
          200: '#f3c9ad',
          400: '#f0b892',
          500: '#c26a3c',
          700: '#5d2a1a',
          900: '#5d2a1a',
          950: '#2a150d'
        },
        sky: {
          400: '#f0b892',
          700: '#5d2a1a'
        },
        peach: '#fbe1d1',
        sienna: '#5d2a1a'
      },
      borderRadius: {
        md: '12px',
        lg: '16px',
        xl: '24px'
      },
      fontFamily: {
        serif: ['"Source Serif 4 Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        artifact: '0 0 0 1px rgba(4,23,43,0.05), 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
        modal: '0 0 0 1px rgba(0,0,0,0.05), 0 8px 40px 0 rgba(0,0,0,0.1)',
        popover: '0 0 0 1px rgba(0,0,0,0.05), 0 4px 24px 0 rgba(0,0,0,0.08)'
      }
    }
  }
};
