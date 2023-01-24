/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "280px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      roboto: ["Roboto Mono", "monospace"],
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      unbounded: ["Unbounded", 'cursive'],
    },

    extend: {
      colors: {
        navLinkBlack: "#171717",
        veryLightBrown: "#fef3c7",
        lightGray: "#94a3b8",
        veryLightGray: "#f1f5f9",
        lightBrown: "#fdba74",
        brown: '#fb923c',
        deepBrown: "#fb923c",
        darkMoon: "#0f172a",
        whiteSmoke: "#f4f4f5",
        thinDark: "#1e293b",
      },
    },
  },
  plugins: [],
};
