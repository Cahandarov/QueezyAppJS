import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { useSelector } from "react-redux";

const calculatedPercent = Math.round((34 / 50) * 100);
const props = {
  percent: calculatedPercent,
  colorSlice: "#6A5AE0",
  colorCircle: "#FFFFFF",
  size: 140,
  stroke: 10,
  strokeBottom: 10,
  speed: 60,
  rotation: -90,
  fill: "#E8E5FA",
  animationOff: false,
  round: true,
  number: false,
  linearGradient: ["#6A5AE0"],
  styles: {
    borderRadius: "50%",
  },
};
export default function CircularSettings({ selectedOption, monthly, annual }) {
  const languageArray = useSelector((state) => state.language.languageArray);
  return (
    <div className="relative flex justify-center items-center">
      <CircularProgressBar {...props} />
      <div className="flex flex-col justify-center items-center absolute top-9 left-8">
        <p className="font-Rubik font-bold text-[1.75rem] text-textColorNeutralBlack_0C092A">
          {selectedOption === "Monthly" ? monthly : annual}{" "}
          <span className="font-Rubik font-medium text-base text-[#807CA7]">
            {" "}
            / 50
          </span>
        </p>
        <p className="font-Rubik font-normal text-sm text-[#858494]">
          {languageArray[0].quizPlayed}
        </p>
      </div>
    </div>
  );
}
