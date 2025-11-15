// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,jsx}",
//     "./components/**/*.{js,jsx}",
//     "./pages/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           500: "#FF7A00",
//           600: "#ff6a00",
//         },
//       },
//     },
//   },
//   plugins: [],
// };




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: '#181818', // Main background
        surface: '#252525',   // Card/modal background
        primary: {
          DEFAULT: '#F97316', // Orange
          hover: '#FB923C',   // Lighter orange for hover
        },
        text: {
          primary: '#F5F5F5',   // Off-white
          secondary: '#A3A3A3', // Muted gray
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/homepage-hero.jpg')", // Add your hero image path
      },
    },
  },
  plugins: [],
};