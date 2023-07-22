/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cursive: ['ui-cursive', 'Tektur'],
      sans: ['ui-sans-serif', 'Anton']
    },
    extend: {
      colors: {
        'grad-uno': '#130713',
        'grad-dos': 'rgb(8, 145, 178)',
        'grad-tres': 'rgb(96, 165, 250)',
      },
    },
  },
  plugins: [],
}
