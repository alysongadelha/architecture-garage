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
      },
      fontFamily: {
        body: "var(--font-arimo)",
        heading: "var(--font-montserrat)",
        accent: "var(--font-playfair-display)",
      },
      fontSize: {
        heading1: "64px",
        heading2: "36px",
        heading3: "24px",
        heading4: "18px",
        heading5: "16px",
        LargeP: "24px",
        paragraph: "18px",
        button: "18px",
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
    },
  },
  plugins: [],
};
