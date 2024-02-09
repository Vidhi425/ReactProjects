/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: '#010203', // Replace '#010203' with the hex code of your desired rich black color
      },
    },
  },
}

