/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-dark-green": "#0D4015",
      "primary-light-green": "#6A9A63",
      "secondary-dark-pink": "#F6CCC7",
      "secondary-light-pink": "#F8DFDC",
      "accent-dark-brown": "#332111",
      "accent-light-brown": "#A1836A",
      "neutral-beige": "#FFEFD8",
      "neutral-off-white": "#FCF4EA",
    },
  },
  plugins: [],
};
