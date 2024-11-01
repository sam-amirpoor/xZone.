/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      "xl": {"max": "1250px"},
      "lg": {"max": "1050px"},
      "md": {"max": "850px"},
      "sm": {"max": "650px"},
      "xs": {"max": "450px"},
    },
    extend: {
      fontFamily: {
        "poppins": "poppins"
      },
      width: {
        'calc-2rem': 'calc(100% - 2rem)',
      },
    },
  },
  plugins: [],
}

