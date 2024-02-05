import { useSelector } from "react-redux";
// import dots3 from "./images/3dots.svg";
import heart from "./images/heartUnfilled.svg";
import { setFavorites } from "../../QuizLibary/favoritesSlice";

export default function LastAddesQuizzesItem({
  id,
  QuizName,
  cover,
  category,
  QuizzesInThisCategory,
}) {
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const favorites = useSelector((state) => state.favorites.favorites);
  const languageArray = useSelector((state) => state.language.languageArray);
  function addFavorites() {
    const clickedQuiz = quizzes.find((quiz) => quiz.id === id);
    setFavorites;
    console.log(clickedQuiz);
  }
  return (
    <div className="w-full h-full  justify-center items-center flex-col">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 sm:w-[4rem] sm:h-[4rem] mb-3 sm:mb-6 bg-BackRCLigthBlue_C4D0FB rounded-3xl flex justify-center items-center">
          <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center">
            <img src={cover} alt="cover" className="w-7 h-7" />
          </div>
        </div>
        <div
          onClick={(e) => (e.stopPropagation(), addFavorites(id))}
          id={id}
          className="flex justify-end items-start w-14 h-14 pr-1 pt-1"
        >
          <img src={heart} alt="Unfilled Heart" className="w-6 h-6" />
        </div>
      </div>
      <p className="liveQuizName text-left w-full font-medium text-xs sm:text-base font-Romik text-textColorNeutralBlack_0C092A mb-[0.38rem] flex flex-nowrap overflow-hidden">
        {QuizName}
      </p>
      <p className="liveQuizCategory text-left font-normal text-xs sm:text-sm font-Romik text-textColorLigthGrey2_858494">
        {category}{" "}
        <span>
          • {QuizzesInThisCategory} {languageArray[0].quizzes}
        </span>
      </p>
    </div>
  );
}
