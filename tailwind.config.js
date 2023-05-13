/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        main: "0 0px 10px rgba(0, 0, 0, 0.7)",
        link: "0 0px 10px 0px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        heroPattern:
          "url('https://cdn.shopify.com/s/files/1/1772/1703/t/25/assets/cowboy-care--hero_1920x@2x.jpg?v=74443919696595493301681222101')",
        specs:
          "url('https://cdn.shopify.com/s/files/1/1772/1703/t/24/assets/cowboy-4--hero-atc_1920x@2x.png?v=76720704000224421131678268070')",
      },
      blur: {
        main: "100px",
      },
      height: {
        "2/5": "40%",
        calcFull: "calc(100% - 80px)",
      },
      spacing: {
        "1/5": "20%",
        "1/10": "10%",
      },
      keyframes: {
        arrDown: {
          "0%": { transform: "translateY(0)", opacity: 0.2 },
          "50%": { transform: "translateY(50%)", opacity: 1 },
          "100%": { transform: "translateY(0)", opacity: 0.2 },
        },
      },
      animation: {
        arrDown: "arrDown 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
