import dotsIcon from "../images/6dots.svg";
import dots3Icon from "../images/3dotsBlack.svg";
import timeIcon from "../images/timeIcon.svg";
import { useSelector } from "react-redux";
import { eng } from "../../ui/languageData";

export default function QuizSettingsItem({ question }) {
  const languageArray = useSelector((state) => state.language.languageArray);
  const enteries = Object.entries(eng);
  return (
    <div className="w-full h-[9.5rem] flex items-start group border-2 border-[#EFEEFC] rounded-2xl hover:border-primaryColor">
      <div className="w-[13%] h-full flex justify-center items-center gap-1 border-r-2 border-[#EFEEFC] group-hover:border-primaryColor ">
        <img src={dotsIcon} alt="icon" />
        <img src={dotsIcon} alt="icon" />
      </div>
      <div className="w-[87%] flex justify-between flex-col p-6 gap-3">
        <div className="w-full flex justify-between items-center">
          <p className="font-Rubik font-bold text-base text-[#49465F]">
            {languageArray[0].Question} {question.id}
          </p>
          <img src={dots3Icon} alt="icon" />
        </div>
        <p className="font-Rubik font-normal text-base text-textColorLigthGrey2_858494">
          {question.question}
        </p>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center justify-center gap-1 font-Rubik font-medium text-sm text-textColorNeutralBlack_0C092A">
            <img src={timeIcon} alt="Time icon" />
            <span>{question.answerTime} </span>
            <span> {languageArray[0].Sec}</span>
          </div>
          <p className="font-Rubik font-medium text-sm text-[#49465F]">
            {
              languageArray[0][
                enteries.find((data) => data[1] === question.type)[0]
              ]
            }
          </p>
        </div>
      </div>
    </div>
  );
}
