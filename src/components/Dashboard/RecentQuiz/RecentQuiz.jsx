import vectorTop from "./images/RecentQuizVectorTop.svg";
import vectorBottom from "./images/RecentQuizVector.svg";
// import CircularProgressBar from "./CircularProgressBar";
import CircularProgressBar from "./CircularProgressBar";
import { useSelector } from "react-redux";
// import CircularWithValueLabel from "./CircularWithValueLabel";

export default function RecentQuiz() {
  const languageArray = useSelector((state) => state.language.languageArray);
  return (
    <div className="w-full h-full p-3 sm:p-6 flex flex-col gap-2 sm:gap-6 rounden-[2rem] bg-white dashboard_boxes">
      <p className="text-sm sm:text-2xl font-medium font-Rubik text-textColorNeutralBlack_0C092A leading-10">
        {languageArray[0].recentQuiz}
      </p>
      <div className="w-[97%] h-24 mx-auto bg-BackRCLigthPink_FFD6DD rounded-[1.25rem] p-4 relative flex justify-between items-center">
        <img src={vectorTop} alt="vector" className="absolute top-0 rigth-0" />
        <img src={vectorBottom} alt="vector" className="absolute top-0" />
        <div className="flex flex-col gap-1 items-start justify-center">
          <p
            id="recent_QuizName"
            className="text-sm sm:text-base font-medium font-Rubik text-textColorDarkBrown_660012"
          >
            Statistics Math Quiz
          </p>
          <p
            id="recentQuizCategory"
            className="text-xs font-normal font-Rubik text-textColorDarkBrown_660012"
          >
            Math <span>•</span> <span id="recentQuizCount">12 </span>
            <span>{languageArray[0].quizzes}</span>
          </p>
        </div>
        {/* <CircularWithValueLabel /> */}
        <CircularProgressBar />
      </div>
    </div>
  );
}
