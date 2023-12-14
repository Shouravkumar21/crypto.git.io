/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1e1e1e",
          "200": "#171819",
          "300": "rgba(0, 0, 0, 0.7)",
          "400": "rgba(255, 255, 255, 0.2)",
        },
        white: "#fff",
        greenyellow: "#aceb2f",
        gainsboro: "rgba(217, 217, 217, 0.2)",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "46xl-5": "65.5px",
        "11xl": "30px",
      },
    },
    fontSize: {
      "13xl": "32px",
      "5xl": "24px",
      "17xl": "36px",
      "29xl": "48px",
      "77xl": "96px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
