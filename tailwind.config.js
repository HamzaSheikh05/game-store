/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        navigation:
          "linear-gradient(180deg, rgba(0, 5, 0, 1) 7.99%, rgba(0, 5, 0, 1) 86.64%)",
        "video-img": "url('./assets/bgImage.png')",
        "cover-img": "url('./assets/Background.png')",
      },
      fontFamily: {
        Eremitage: "Eremitage",
        Oyko: "Oyko",
      },
    },
  },
  plugins: [],
};
