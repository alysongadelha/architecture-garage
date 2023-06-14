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
      colors: {
        primaryColor: "#2A3B4F",
        secondaryColor: "#C9D7E1",
        accentColor: "#FF6F00",
        whiteColor: {
          header: "#F7F7F7",
        },
        orangeColor: {
          logo: "",
        },
        logoColor: {
          grayAG: "#363432",
          blackAG: "#212322",
          orangeAG: "#ED9B33",
        },
      },
    },
  },
  plugins: [],
};
