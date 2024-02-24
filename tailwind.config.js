/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit,minmax(100px,1fr))",
      },
      colors: {
        current: "currentColor",

        membio: {
          main: "#48576A",
          header: "#29323D",
          accent: "#EFF2F7",
          "accent-200": "#F9FAFC",
          border: "#D3DCE6",
          "base-grey": "#8492A6",
        },
      },
    },
  },
  plugins: [],
};
