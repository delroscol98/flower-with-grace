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
      "secondary-blushy-pink": "#CC9586",
      "secondary-blush-pink": "#E4405F",
      "accent-dark-brown": "#332111",
      "accent-light-brown": "#D0A27D",
      "neutral-beige": "#FFEFD8",
      "neutral-off-white": "#FCF4EA",
      "neutral-white": "#FFF",
    },
    fontSize: {
      "heading-sm": "1.5rem",
      "heading-md": "2rem",
      "heading-lg": "3rem",
      "heading-xl": "4rem",
      "paragraph-sm": ".875rem",
      paragraph: "1.125rem",
      "paragraph-lg": "1.25rem",
    },
    lineHeight: {
      tight: "1.1",
      normal: "1.5",
      auto: "auto",
    },
  },
  plugins: [],
};
