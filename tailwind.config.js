/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          spotifyGreen: '#1DB954',
          spotifyBlack: '#121212',
          spotifyDarkGray: '#181818',
          spotifyLightGray: '#282828',
        },
      },
    },
    plugins: [],
  }