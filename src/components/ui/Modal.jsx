import { useEffect, useState } from "react";
import ModalButtons from "./ModalButtons";
import ModalQuizItem from "./ModalQuizItem";
import searchIcon from "./images/searchIcon2.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setDiscoverMainPage,
  setQuizDetailsPage,
  setSelectedQuiz,
} from "../Discover/discoverSlice";

const Modal = ({ HandleCloseModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const [searchQuery, setSearchQuery] = useState("");
  const [quizzesForDisplay, setQuizzesForDisplay] = useState([]);
  const [value, setValue] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const languageArray = useSelector((state) => state.language.languageArray);
  useEffect(() => {
    function displaySearchedQuizzes() {
      let filteredQuizzes = [];
      if (value === "Top") {
        const firstFilteredQuizzes = quizzes.filter((quiz) => {
          const isMatchingSearch =
            quiz &&
            quiz.title &&
            quiz.title.toLowerCase().includes(searchQuery.toLowerCase());

          return isMatchingSearch;
        });
        filteredQuizzes = [...firstFilteredQuizzes].sort(
          (a, b) => b.timesPlayed - a.timesPlayed
        );
      } else if (value === "Quiz") {
        filteredQuizzes = quizzes.filter((quiz) => {
          const isMatchingSearch =
            quiz &&
            quiz.title &&
            quiz.title.toLowerCase().includes(searchQuery.toLowerCase());

          return isMatchingSearch;
        });
      } else if (value === "Categories") {
        filteredQuizzes = quizzes.filter((quiz) => {
          const isMatchingCategory =
            quiz &&
            quiz.categoryName &&
            quiz.categoryName.toLowerCase().includes(searchQuery.toLowerCase());

          return isMatchingCategory;
        });
      }
      setQuizzesForDisplay(filteredQuizzes);
    }
    displaySearchedQuizzes();
  }, [searchQuery, quizzes, value]);

  function handleClickQuizItems(id) {
    const clickedQuiz = quizzes.find((quiz) => quiz.id === id);
    if (clickedQuiz) {
      dispatch(setSelectedQuiz(clickedQuiz));
    }
    navigate("/discover");
    dispatch(setDiscoverMainPage(false));
    dispatch(setQuizDetailsPage(true));
  }
  function handleClickClearAll() {
    setQuizzesForDisplay([]);
    setValue("");
    setSearchQuery("");
  }

  return (
    <div
      className="overlay flex  justify-center items-center z-30"
      onClick={() => HandleCloseModal()}
    >
      <div
        className="w-[30rem] h-[40rem] rounded-[2rem] bg-white p-8 flex flex-col gap-6 items-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative flex items-center justify-center w-full">
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={languageArray[0].QuizAndCategories}
            className="w-full h-[3.5rem] p-4 pl-14 rounded-[1.25rem] bg-BackRCLigthGrey_EFEEFC HoverAndFocus font-normal text-base font-Rubik text-textColorLigthGrey3_B9B4E4"
          />
          <img
            src={searchIcon}
            alt="Search icon"
            className="absolute left-0 z-20 translate-x-4"
          />
        </div>

        <ModalButtons value={value} setValue={setValue} />
        {value ? (
          <div className="w-full flex justify-between items-center">
            <p className="font-Rubik font-medium text-lg text-textColorNeutralBlack_0C092A">
              {languageArray[0].RecentSearchers}
            </p>
            <button
              onClick={() => handleClickClearAll()}
              className="font-Rubik font-medium text-sm text-primaryColor"
            >
              {languageArray[0].ClearAll}
            </button>
          </div>
        ) : (
          ""
        )}
        <div className="w-full gap-3 pr-1 h-full flex flex-col justify-start items-start overflow-auto">
          {quizzesForDisplay?.map((quiz, index) => (
            <button
              className="w-full"
              key={index}
              onClick={() => handleClickQuizItems(quiz?.id)}
            >
              <ModalQuizItem
                quizName={quiz?.title}
                cover={quiz?.coverImage}
                category={quiz?.categoryName}
                QuizzesInThisCategory={
                  quizzes.filter(
                    (item) =>
                      item?.categoryName &&
                      item?.categoryName === quiz?.categoryName
                  ).length
                }
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Modal;
