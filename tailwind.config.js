/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#f7f4ff",
          100: "#f0eaff",
          200: "#e1d6ff",
          300: "#ccb6ff",
          400: "#af89ff",
          500: "#9463f3",
          600: "#7c4ee0",
          700: "#663cc0",
        },
        skysoft: {
          50: "#f5fbff",
          100: "#e9f6ff",
          200: "#cfeeff",
          300: "#b3e2ff",
        },
        mintsoft: {
          100: "#def8f1",
          300: "#71d8be",
          500: "#1fa388",
        },
        ink: {
          700: "#26315f",
          800: "#1d2450",
          900: "#141a39",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(125, 93, 214, 0.12)",
        card: "0 12px 32px rgba(68, 84, 140, 0.10)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        aura:
          "radial-gradient(circle at top, rgba(189, 174, 255, 0.28), transparent 38%), radial-gradient(circle at bottom right, rgba(166, 226, 255, 0.24), transparent 30%), linear-gradient(180deg, #fcfbff 0%, #f5f8ff 100%)",
      },
    },
  },
  plugins: [],
};
