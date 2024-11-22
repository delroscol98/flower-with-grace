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
      "accent-light-brown": "#A1836A",
      "neutral-beige": "#FFEFD8",
      "neutral-off-white": "#FCF4EA",
    },
    fontSize: {
      "heading-xs": "20px",
      "heading-sm": "24px",
      "heading-md": "32px",
      "heading-lg": "48px",
      "heading-xl": "64px",
      "paragraph-xs": "14px",
      "paragraph-sm": "18px",
    },
    lineHeight: {
      tight: "1.1",
      normal: "1.5",
      auto: "auto",
    },
  },
  plugins: [],
};
