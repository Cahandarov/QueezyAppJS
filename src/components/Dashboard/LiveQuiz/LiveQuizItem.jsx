import dots3 from "./images/3dots.svg";

export default function LiveQuizItem({
  QuizName,
  cover,
  category,
  numberOfQuizzes,
}) {
  return (
    <div className="w-[10rem] h-[7.5rem] sm:w-[13.85rem] sm:h-[11.62rem] p-2 sm:p-4 justify-center items-center flex-col rounded-[1.25rem] bg-white border-2 border-solid border-[#EFEEFC]">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 sm:w-[4rem] sm:h-[4rem] mb-3 sm:mb-6 bg-BackRCLigthBlue_C4D0FB rounded-3xl flex justify-center items-center">
          <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center">
            <img src={cover} alt="cover" className="w-7 h-7" />
          </div>
        </div>
        <img src={dots3} alt="dots" />
      </div>
      <p className="liveQuizName font-medium text-xs sm:text-base font-Romik text-textColorNeutralBlack_0C092A mb-[0.38rem] flex flex-nowrap overflow-hidden">
        {QuizName}
      </p>
      <p className="liveQuizCategory font-normal text-xs sm:text-sm font-Romik text-textColorLigthGrey2_858494">
        {category} <span>• {numberOfQuizzes} Quizzes</span>
      </p>
    </div>
  );
}
