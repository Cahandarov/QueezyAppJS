import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "./favoritesSlice";
import { useEffect, useState } from "react";
import heart from "./images/heartUnfilled.svg";
import heartRed from "./images/heartRed.svg";

export default function FavoritesItem({
  id,
  quizName,
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
    console.log(clickedQuiz);
    const checkIFFavorites = favorites.includes(clickedQuiz);

    if (!checkIFFavorites) {
      dispatch(setFavorites([...favorites, clickedQuiz]));
      setCheckFavorites(true);
    } else {
      const filteredQuizzes = favorites.filter(
        (quiz) => quiz.id !== clickedQuiz.id
      );
      dispatch(setFavorites(filteredQuizzes));
      setCheckFavorites(false);
    }
  }
  useEffect(() => {}, [favorites, checkFavorites, dispatch, id]);
  return (
    <div className="w-full h-[4.5rem] sm:h-[5.5rem] py-6 px-4 flex justify-start items-center rounded-[1.25rem] bg-white border-2 border-solid border-[#EFEEFC] gap-3  hover:bg-slate-100 hover:border-transparent transition-colors duration-300">
      <div className="w-12 h-12 sm:w-[6rem] sm:h-[4.2rem] bg-BackRCLigthBlue_C4D0FB rounded-2xl flex justify-center items-center">
        <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center">
          <img src={cover} alt="cover" className="w-8 h-8" />
        </div>
      </div>

      <div className="flex flex-col justify-between items-start w-full">
        <p className="liveQuizName w-full font-light sm:font-normal text-xs sm:text-base font-Romik text-textColorNeutralBlack_0C092A mb-[0.38rem] flex  overflow-hidden">
          {quizName}
        </p>
        <p className="liveQuizCategory font-light sm:font-normal text-xs sm:text-sm font-Romik text-textColorLigthGrey2_858494 mt-4">
          {category}{" "}
          <span>
            • {QuizzesInThisCategory} {languageArray[0].quizzes}
          </span>
        </p>
      </div>
      <div
        onClick={(e) => (e.stopPropagation(), addFavorites(id))}
        id={id}
        className="flex justify-end items-start w-20 h-20 pt-4 pr-1 sm:pt-2"
      >
        <img src={heartRed} alt="Heart Red" className="w-6 h-6" />
      </div>
    </div>
  );
}
