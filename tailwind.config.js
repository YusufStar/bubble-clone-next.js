/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        "nav": "#242424",
        "activeNav": "#424df8",
      },
      boxShadow: {
        "modalShadow": "0 0 10px 0 rgba(17,18,38,.15)",
      },
    },
  },
  plugins: [],
}
