import { useDispatch, useSelector } from "react-redux";
import heart from "./images/heartUnfilled.svg";
import heartRed from "./images/heartRed.svg";
import { useEffect, useState } from "react";
import { setFavorites } from "../Dashboard/Favorits/favoritesSlice";

export default function QuizItemDiscover({
  id,
  QuizName,
  cover,
  category,
  QuizzesInThisCategory,
}) {
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const favorites = useSelector((state) => state.favorites.favorites);
  const languageArray = useSelector((state) => state.language.languageArray);
  const [checkFavorites, setCheckFavorites] = useState(null);
  const dispatch = useDispatch();

  function addFavorites(id) {
    const clickedQuiz = quizzes.find((quiz) => quiz.id === id);
    const checkIFFavorites = favorites.includes(clickedQuiz);

    if (!checkIFFavorites) {
      dispatch(setFavorites([...favorites, clickedQuiz]));
    } else {
      const filteredQuizzes = favorites.filter(
        (quiz) => quiz.id !== clickedQuiz.id
      );
      dispatch(setFavorites(filteredQuizzes));
    }

    setCheckFavorites(!checkIFFavorites);
  }
  useEffect(() => {
    const initialCheckFavorites = favorites.some((quiz) => quiz.id === id);
    setCheckFavorites(initialCheckFavorites);
  }, [favorites, id]);
  return (
    <div className="p-2 sm:p-4 justify-center items-center flex-col rounded-[1.25rem] bg-white border-2 border-solid border-[#EFEEFC] gap-8  hover:bg-slate-100 hover:border-transparent transition-colors duration-300">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 sm:w-[4.4rem] sm:h-[4.4rem] mb-3 sm:mb-6 bg-BackRCLigthBlue_C4D0FB rounded-3xl flex justify-center items-center">
          <div className="w-9 h-9 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center">
            <img src={cover} alt="cover" className="w-7 h-7" />
          </div>
        </div>
        <div
          onClick={(e) => (e.stopPropagation(), addFavorites(id))}
          id={id}
          className="flex justify-end items-start w-14 h-14 pr-1 pt-1"
        >
          {!checkFavorites && (
            <img src={heart} alt="Unfilled Heart" className="w-6 h-6 fill" />
          )}
          {checkFavorites && (
            <img src={heartRed} alt="Heart Red" className="w-6 h-6" />
          )}
        </div>
      </div>
      <p className="liveQuizName w-full font-normal sm:font-medium text-xs sm:text-base lg:text-xs xl:text-base font-Romik text-textColorNeutralBlack_0C092A mb-[0.38rem] mt-4 flex overflow-hidden">
        {QuizName}
      </p>
      <p className="liveQuizCategory text-left font-normal text-[0.65rem] sm:text-sm lg:text-[0.65rem] xl:text-sm font-Romik text-textColorLigthGrey2_858494 mt-4">
        {category}{" "}
        <span>
          • {QuizzesInThisCategory} {languageArray[0].quizzes}
        </span>
      </p>
    </div>
  );
}
