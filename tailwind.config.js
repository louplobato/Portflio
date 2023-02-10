/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '511px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
    extend: {
      "fontFamily": {
        "Chopper": ["'Chopper'"],
      },

      "fontSize": {
        "350": ["350px"],
        "200": ["200px"],
        "150": ["150px"],
      },

      "height": {
        "1000": ["1000px"],
      },
    },
    plugins: [],
  }
}
