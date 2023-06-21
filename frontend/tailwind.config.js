export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#94BEE9", //Primary for main color
        secondary: "#CBD5E1", //secondary for second main color
        lightblue: "#D8E7EC", //Extra color
        bgColor: "#f3f4f6", //Background color
      },
    },
    screens: {
      sm: "480px", // Small mobile devices (up to 480px)
      md: "760px", // Medium-sized mobile devices (up to 767px)
      lg: "962px", // Tablets and small laptops (up to 1024px)
      xl: "1024px", // Larger tablets and small laptops (up to 1366px)
      "2xl": "1440px", // Standard desktop screens (up to 1440px)
      "3xl": "1600px", // Large desktop screens (up to 1600px)
    },
  },
  plugins: [],
};
