import { useRef, useState } from "react";
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
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [showAllQuiezzez, setShowAllQuizzes] = useState(false);
  const [value, setValue] = useState("Top");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortedTopQuizzes = [...quizzes].sort(
    (a, b) => b.timesPlayed - a.timesPlayed
  );
  const slicedTopQuizzes = sortedTopQuizzes.slice(0, 4);
  const [quizzesForDisplay, setQuizzesForDisplay] = useState(slicedTopQuizzes);

  const filteredQuizzes = quizzes.filter((quiz) => {
    const isMatchingSearch =
      quiz &&
      quiz.title &&
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase());

    const isMatchingCategory =
      quiz &&
      quiz.categoryName &&
      quiz.categoryName.toLowerCase().includes(searchQuery.toLowerCase());

    return isMatchingSearch && isMatchingCategory;
  });

  function handleClickQuizItems(id) {
    const clickedQuiz = quizzes.find((quiz) => quiz.id === id);
    if (clickedQuiz) {
      dispatch(setSelectedQuiz(clickedQuiz));
    }
    navigate("/discover");
    dispatch(setDiscoverMainPage(false));
    dispatch(setQuizDetailsPage(true));
  }

  const scrollRef = useRef(null);
  function handleSeeAll() {
    if (!showAllQuiezzez) {
      setQuizzesForDisplay(sortedTopQuizzes);
      setShowAllQuizzes(true);
      scrollRef.current.style.overflow = "auto";
      scrollRef.current.style.gap = "10px";
    } else {
      setQuizzesForDisplay(slicedTopQuizzes);
      setShowAllQuizzes(false);
      scrollRef.current.style.overflow = "hidden";
    }
  }
  return (
    <div
      className="overlay flex  justify-center items-center z-20"
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
            placeholder="Quiz, categories, or friends"
            className="w-full h-[3.5rem] p-4 pl-14 rounded-[1.25rem] bg-BackRCLigthGrey_EFEEFC HoverAndFocus font-normal text-base font-Rubik text-textColorLigthGrey3_B9B4E4"
          />
          <img
            src={searchIcon}
            alt="Search icon"
            className="absolute left-0 z-20 translate-x-4"
          />
        </div>

        <ModalButtons value={value} setValue={setValue} />
        <div className="w-full flex justify-between items-center">
          <p className="font-Rubik font-medium text-lg text-textColorNeutralBlack_0C092A">
            Recent Searches
          </p>
          <button
            onClick={() => handleSeeAll()}
            className="font-Rubik font-medium text-sm text-primaryColor"
          >
            See All
          </button>
        </div>
        <div
          className="w-full gap-3 h-full flex flex-col justify-start items-start overflow-auto"
          ref={scrollRef}
        >
          {quizzesForDisplay.map((quiz, index) => (
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
