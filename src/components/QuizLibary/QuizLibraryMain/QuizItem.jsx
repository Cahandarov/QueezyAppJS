import dots3 from "../images/3dots.svg";

export default function QuizItem({
  QuizName,
  cover,
  category,
  numberOfQuizzes,
}) {
  return (
    <div className="w-[10rem] h-[7.5rem] sm:w-[15.5rem] sm:h-[14rem] p-2 sm:p-4 justify-center items-center flex-col rounded-[1.25rem] bg-white border-2 border-solid border-[#EFEEFC] gap-8">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 sm:w-[4.4rem] sm:h-[4.4rem] mb-3 sm:mb-6 bg-BackRCLigthBlue_C4D0FB rounded-3xl flex justify-center items-center">
          <div className="w-9 h-9 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center">
            <img src={cover} alt="cover" className="w-7 h-7" />
          </div>
        </div>
        <img src={dots3} alt="dots" />
      </div>
      <p className="liveQuizName font-medium text-base sm:text-base font-Romik text-textColorNeutralBlack_0C092A mb-[0.38rem] mt-4 flex flex-nowrap overflow-hidden">
        {QuizName}
      </p>
      <p className="liveQuizCategory font-normal text-xs sm:text-sm font-Romik text-textColorLigthGrey2_858494 mt-4">
        {category} <span>• {numberOfQuizzes} Quizzes</span>
      </p>
    </div>
  );
}
