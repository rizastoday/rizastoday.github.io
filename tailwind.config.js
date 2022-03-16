module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 10s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(1.1)"
          },
          "66%": {
            transform: "scale(0.8)"
          },
          "100%": {
            transform: "scale(1)"
          }
        }
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    themes: ["dark", {
      light: {
        ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        primary: "#38bdf8"
      }
    }],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: 'dark'
  }
}