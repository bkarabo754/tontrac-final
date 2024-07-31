/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideIn: 'slideIn 0.3s ease-out',
      },
    
    
      colors: {
        primary: {
          DEFAULT: "#f68432",
          light: "#374151",
        },
        secondary: {
          DEFAULT: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#D1D5DB",
          light: "#E5E7EB",
        },
        text: {
          DEFAULT: "#F3F4F6",
          secondary: "#9CA3AF",
          light: "#D1D5DB",
        },
        background: {
          DEFAULT: "#282828",
          light: "#2b2b2b",
        },
        border: {
          DEFAULT: "#5c5c5d",
        },
        destructive: {
          DEFAULT: "#e3342f",
          light: "#f9acaa",
        },
        toast: {
          DEFAULT: "#15803d"
        }
      },
    
    },
  },
  plugins: [require("tailwindcss-animate")],
}