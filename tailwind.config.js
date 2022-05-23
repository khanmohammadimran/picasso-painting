module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'finger': 'Finger Paint',
        'josefin': 'Josefin Sans'
      }
    },
  },
  daisyui: {
    themes: [
      {
        picassoPaintingTheme: {
          primary: "#2C3941",
          secondary: "#019A85",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
