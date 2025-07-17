/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from "tailwindcss-animated";
import tailwindcssIntersect from "tailwindcss-intersect";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      sans: ["Onest", "sans-serif"],
      serif: ["Avigea", "serif"],
    },
    extend: {
      screens: {
        touch: { raw: "(pointer: coarse)" },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
            filter: "blur(10px)",
          },
          "50%": {
            opacity: "0.7",
            filter: "blur(5px)",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
            filter: "blur(0px)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
            filter: "blur(0px)",
          },
          "50%": {
            opacity: "0.7",
            filter: "blur(5px)",
          },
          "100%": {
            transform: "translateX(-100%)",
            opacity: "0",
            filter: "blur(10px)",
          },
        },
        "slide-right-out": {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
            filter: "blur(0px)",
          },
          "50%": {
            opacity: "0.7",
            filter: "blur(5px)",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
            filter: "blur(10px)",
          },
        },
        "slide-left-in": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
            filter: "blur(10px)",
          },
          "50%": {
            opacity: "0.7",
            filter: "blur(5px)",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
            filter: "blur(0px)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-down": "fade-down 0.6s ease-out 0.2s both",
        "slide-right": "slide-right 0.3s ease-in-out forwards",
        "slide-left": "slide-left 0.3s ease-in-out forwards",
        "slide-right-out": "slide-right-out 0.3s ease-in-out forwards",
        "slide-left-in": "slide-left-in 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimated, tailwindcssIntersect],
};
