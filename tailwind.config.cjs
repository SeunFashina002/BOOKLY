/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
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
      montserrat: ["Montserrat", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
      alegreya: ["Alegreya Sans", "sans-serif"],
    },
    

    extend: {
      colors: {
        navLinkBlack: "#171717",
        veryLightBrown: "#fef3c7",
        lightGray: "#94a3b8",
        gray: '#4b5563',
        veryLightGray: "#f1f5f9",
        transparent: "rgba(225,225,225,0.5)",
        slightTransparent: "rgba(225,225,225,0.8)",
        lightBrown: "#fdba74",
        brown: "#fb923c",
        deepBrown: "#fb923c",
        darkMoon: "#0f172a",
        whiteSmoke: "#f4f4f5",
        thinDark: "#1e293b",
      },
    },
  },
  plugins: [],
};
