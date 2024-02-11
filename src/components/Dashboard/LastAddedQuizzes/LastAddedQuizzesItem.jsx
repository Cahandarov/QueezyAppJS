import { useDispatch, useSelector } from "react-redux";
import heart from "./images/heartUnfilled.svg";
import heartRed from "./images/heartRed.svg";
import { setFavorites } from "../Favorits/favoritesSlice";
import { useEffect, useState } from "react";

export default function LastAddedQuizzesItem({
  id,
  QuizName,
  cover,
  category,
  QuizzesInThisCategory,
}) {
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const languageArray = useSelector((state) => state.language.languageArray);
  const favorites = useSelector((state) => state.favorites.favorites);
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
    <div className="w-full h-full  justify-center items-center flex-col">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 md:w-[4rem] md:h-[4rem] mb-3 md:mb-6 bg-BackRCLigthBlue_C4D0FB rounded-3xl flex justify-center items-center">
          <div className="w-9 h-9 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center">
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
      <p className="liveQuizName text-left w-full font-medium text-xs md:text-base font-Romik text-textColorNeutralBlack_0C092A mb-[0.38rem] flex flex-nowrap overflow-hidden">
        {QuizName}
      </p>
      <p className="liveQuizCategory text-left font-normal text-xs md:text-sm font-Romik text-textColorLigthGrey2_858494">
        {category}{" "}
        <span>
          • {QuizzesInThisCategory} {languageArray[0].quizzes}
        </span>
      </p>
    </div>
  );
}
