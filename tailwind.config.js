module.exports = {
  purge: [],
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
    
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: {
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8d5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95'
        },
      },
      backdropBlur: {
        'none': '0',
        'blur': 'blur(20px)',
      }
    },
  },
  variants: {
    extend: {backdropBlur: ['responsive']},
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite')({
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
    }),
  ]
}
