import dotsIcon from "../images/6dots.svg";
import dots3Icon from "../images/3dotsBlack.svg";
import timeIcon from "../images/timeIcon.svg";
export default function QuizSettingsItemLast({ question }) {
  return (
    <div className="w-[100%] h-[9.5rem] flex items-start justify-center">
      <div className="w-full h-full flex items-start border-2 border-[#EFEEFC] rounded-2xl hover:border-primaryColor">
        <div className="w-[13%] h-full p-6 flex justify-start items-start">
          <div className="w-14 h-14 rounded-2xl bg-[#C4D0FB] flex justify-center items-center">
            <img
              src={question.image}
              alt="Question image"
              className="w-12 h-12"
            />
          </div>
        </div>
        <div className="w-[87%] h-full flex flex-col p-6 gap-2">
          <div className="w-full flex justify-between items-center">
            <p className="font-Rubik font-bold text-base text-[#49465F]">
              Question {question.id}
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
              <span> Sec</span>
            </div>
            <p className="font-Rubik font-medium text-sm text-[#49465F]">
              {question.type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}