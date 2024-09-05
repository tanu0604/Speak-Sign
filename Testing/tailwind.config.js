/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"], // Adjust this to include paths to your HTML files or components
  theme: {
    extend: {
      
      transitionProperty: {
        'opacity': 'opacity',
        'transform': 'transform',
      },
      opacity: {
        '0': '0',
        '100': '1',
      },
      // You can add more customizations if needed
    },
  },
  plugins: [],
}

