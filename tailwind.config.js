/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        home: "url('/image/bg-image-home.png')",
        maintenance: "url('/image/underConstruction.png')",
        arrowDown: "url('/icons/arrow-down.png')",
      },
      fontFamily: {
        heading: "var(--font-montserrat)",
        accent: "var(--font-playfair-display)",
      },
      fontSize: {
        heading1: "64px",
        heading2: "32px",
        heading3: "24px",
        heading4: "18px",
        heading5: "16px",
        LargeP: "24px",
        paragraph: "18px",
        button: "18px",
        icon: "10px",
      },
      colors: {
        primaryColor: "#363432",
        secondaryColor: "#C9D7E1",
        accentColor: "#FF6F00",
        logoColor: {
          neutralMutedAG: "#363432",
          neutralShadedAG: "#D9D9D9",
          neutralAG: "#212322",
          brandAG: "#ED9B33",
          surface: "#FFFFFF",
          surfaceMuted: "#F7F7F7",
        },
      },
      extend: {
        visibility: ["group-hover"],
        transform: ["group-hover"],
        translate: ["group-hover"],
      },
      boxShadow: {
        bot: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
      },
      screens: {
        cardContainer: "1155px",
      },
      minHeight: {
        container: "58vh",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
