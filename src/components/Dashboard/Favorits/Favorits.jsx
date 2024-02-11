import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setDiscoverMainPage,
  setQuizDetailsPage,
  setSelectedQuiz,
} from "../../Discover/discoverSlice";
import FavoritesItem from "./FavoritesItem";

export default function Favorits() {
  const scrollRef = useRef(null);
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  const languageArray = useSelector((state) => state.language.languageArray);
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const slicedFavoritesQuizzes = favorites.slice(0, 4);
  const [favoritesList, setFavoritesList] = useState(slicedFavoritesQuizzes);
  const [showAllFavorites, setShowAllFavorites] = useState(false);
  //

  function handleSeeAll() {
    if (!showAllFavorites) {
      setFavoritesList(favorites);
      setShowAllFavorites(true);
      scrollRef.current.style.overflow = "auto";
      scrollRef.current.style.gap = "8px";
    } else {
      setFavoritesList(slicedFavoritesQuizzes);
      setShowAllFavorites(false);
      scrollRef.current.style.overflow = "hidden";
    }
  }
  function handleClickQuizItems(id) {
    const clickedQuiz = quizzes.find((quiz) => quiz.id === id);
    if (clickedQuiz) {
      dispatch(setSelectedQuiz(clickedQuiz));
    }
    navigate("/discover/quizDetails");
    dispatch(setDiscoverMainPage(false));
    dispatch(setQuizDetailsPage(true));
  }
  useEffect(() => {
    return () => {
      // console.log("Selected Quiz:", selectedQuiz);
    };
  }, [selectedQuiz]);

  useEffect(() => {
    setFavoritesList(
      favorites.slice(0, showAllFavorites ? favorites.length : 4)
    );
  }, [favorites, showAllFavorites]);
  return (
    <div className="w-full sm:w-[80%] md:w-[47%] lg:w-[23rem] h-[27rem] sm:h-[30rem] order-2 py-6 pl-6 pr-3 flex justify-start items-center flex-col rounden-[2rem] bg-white dashboard_boxes">
      <div className="flex justify-between items-center w-full pr-2">
        <p className="text-sm sm:text-xl md:text-2xl font-medium text-left font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          {languageArray[0].favoriteQuizzes}
        </p>
        {favorites.length > 4 && (
          <button
            className="text-sm sm:text-base font-medium font-Rubik text-primaryColor z-40"
            onClick={handleSeeAll}
          >
            {!showAllFavorites
              ? languageArray[0].seeAll
              : languageArray[0].seeLess}
          </button>
        )}
      </div>
      {favoritesList.length > 0 ? (
        <div
          className="flex flex-col justify-start w-full gap-1 pt-4 pr-[5px]"
          ref={scrollRef}
        >
          {favoritesList.map((quiz, index) => (
            <button onClick={() => handleClickQuizItems(quiz?.id)} key={index}>
              <FavoritesItem
                id={quiz?.id}
                quizName={quiz.title}
                cover={quiz.coverImage}
                category={quiz.categoryName}
                QuizzesInThisCategory={
                  quizzes.filter(
                    (item) => item.categoryName === quiz.categoryName
                  ).length
                }
                onClick={() => handleClickQuizItems(quiz?.id)}
              />
            </button>
          ))}
        </div>
      ) : (
        <p className="text-center my-auto text-xs sm:text-xl font-medium font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          {languageArray[0].favaritsText}
        </p>
      )}
    </div>
  );
}
