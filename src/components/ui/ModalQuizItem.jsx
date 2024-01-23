// import arrow from "./images/arrowToRigth.svg";
import arrow from "./images/arrowToRigth.svg";
export default function ModalQuizItem({
  quizName,
  cover,
  category,
  QuizzesInThisCategory,
}) {
  return (
    <div className="w-full h-[5rem] p-6 flex justify-start items-center rounded-[1.25rem] bg-white border-2 border-solid border-[#EFEEFC] gap-6  hover:bg-slate-100 hover:border-transparent transition-colors duration-300">
      <div className="w-10 h-10 sm:w-[6rem] sm:h-[3.8rem] bg-BackRCLigthBlue_C4D0FB rounded-2xl flex justify-center items-center">
        <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center">
          <img src={cover} alt="cover" className="w-8 h-8" />
        </div>
      </div>

      <div className="flex flex-col justify-between items-start w-full">
        <p className="w-full font-medium text-base font-Romik text-textColorNeutralBlack_0C092A flex  overflow-hidden">
          {quizName}
        </p>
        <p className="liveQuizCategory font-normal text-xs sm:text-sm font-Romik text-textColorLigthGrey2_858494 mt-2">
          {category} <span>• {QuizzesInThisCategory} Quizzes</span>
        </p>
      </div>
      <img src={arrow} alt="Arrow" />
    </div>
  );
}
