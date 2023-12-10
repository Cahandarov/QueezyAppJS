/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#6A5AE0",
        secondColor: "#9087E5",
        thirdColor: "#C4D0FB",
        Modal: "rgba(0, 0, 0, 0.30)",
        BackRCLigthBlue_C4D0FB: "#C4D0FB",
        BackRCLigthGrey_EFEEFC: "#EFEEFC",
        BackRCPink_FF8FA2: "#FF8FA2",
        BackRCLigthPink_FFD6DD: "#FFD6DD",
        BackRCLigthPink2_FFB3C0: "#FFB3C0",
        textColorWhite: "#fff",
        textColorBlack: "#000",
        textColorLigthGrey_D2CDF6: "#D2CDF6",
        textColorLigthGrey2_858494: "#858494",
        textColorLigthGrey3_B9B4E4: "#B9B4E4",
        textColorDarkGrey_49465F: "#49465F",
        textColorNeutralBlack_0C092A: "#0C092A",
        textColorDarkBrown_660012: "#660012",
      },
      fontFamily: {
        Rubik: "Rubik",
      },
    },
  },
  plugins: [],
};
