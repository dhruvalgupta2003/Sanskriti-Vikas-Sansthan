/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)", // Example custom shadow
      },
    },
    colors: {
      secondary: "#0E1B1B",
      white: "#ffffff",
      tertiary: "#FFC94B",
      black: "#000",
      green: "#0C6C2B",
      brown: "#6D3516",
    },
  },
  plugins: [],
};
