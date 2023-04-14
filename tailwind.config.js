/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
    },
    extend: {
      backgroundImage: {
        'purple-tree': "url('./public/images/purpletree.jpg')",
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      fontFamily:{
        mukta: ['Mukta', 'sans-serif'],
        cormo: ['Cormorant', 'serif'],
      },
      spacing: {
        '15':'3.75rem',
      },
    },
  },
  plugins: [],
}

