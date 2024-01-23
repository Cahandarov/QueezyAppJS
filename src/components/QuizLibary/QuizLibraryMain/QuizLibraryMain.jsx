import PaginationCompanent from "./PaginationCompanent";
import searchIcon from "../images/searchIcon2.svg";
import QuizItem from "./QuizItem";
import { useState } from "react";
import CreateQuizModal from "../CreateQuizModal/CreateQuizModal";
import { useDispatch, useSelector } from "react-redux";
import { setCreateQuizModal } from "../createQuizSlice";
import CreateQuizSecondModal from "../CreateQuizSecondModal/CreateQuizSecondModal";
import SelectOption from "./SelectOption";
import { useNavigate } from "react-router-dom";
import {
  setSelectedQuiz,
  setDiscoverMainPage,
  setQuizDetailsPage,
} from "../../Discover/discoverSlice";

export default function QuizLibraryMain() {
  const quizzes = useSelector((state) => state.quizzes.quizzes);

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const showCreateQuizModal = useSelector(
    (state) => state.addQuiz.createQuizModal
  );
  const showCreateQuizSecondModal = useSelector(
    (state) => state.addQuiz.createQuizSecondModal
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredQuizzes = quizzes.filter((quiz) => {
    const isMatchingSearch =
      quiz &&
      quiz.title &&
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase());

    const isMatchingCategory = selectedCategory
      ? quiz && quiz?.categoryName === selectedCategory
      : true;

    return isMatchingSearch && isMatchingCategory;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const quizzesToDisplay = filteredQuizzes.slice(startIndex, endIndex);

  function handleClickQuizItems(id) {
    const clickedQuiz = quizzes.find((quiz) => quiz.id === id);
    if (clickedQuiz) {
      dispatch(setSelectedQuiz(clickedQuiz));
    }
    navigate("/discover");
    dispatch(setDiscoverMainPage(false));
    dispatch(setQuizDetailsPage(true));
  }

  return (
    <div className="flex flex-col gap-8 w-full h-full  min-h-[1086px] px-10 pt-10 pb-4 bg-[#FBFBFC]">
      <div className="boxShadow flex flex-col mx-auto justify-between h-[63.5rem] w-full rounded-[2rem] p-8 mb-2 border-2 border-[#EFEEFC] bg-white ">
        <div className="">
          <p className="font-medium text-2xl text-textColorNeutralBlack_0C092A font-Rubik text-left">
            Quiz List
          </p>
          <div className="my-6 flex items-center justify-between w-full">
            <div className="relative flex items-center justify-center w-[20.43rem] h-[3.5rem]">
              <input
                id="QuizLibraryInput"
                type="search"
                placeholder="Find quiz name or categories"
                className="HoverAndFocus w-full h-[3.5rem] p-4 pl-14 rounded-[1.25rem] text-textColorBlack font-normal text-base font-Rubik"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <img
                src={searchIcon}
                alt="Search icon"
                className="absolute left-0 z-20 translate-x-4"
              />
            </div>
            <div className="flex items-center justify-end gap-4">
              <div className="w-[12.5rem] h-[3.5rem] rounded-[1.25rem] ">
                <SelectOption
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>

              <button
                onClick={() => {
                  dispatch(setCreateQuizModal(true));
                }}
                className="w-[12.12rem] buttons  HoverAndFocusDark flex justify-center items-center gap-4 py-4 px-8"
              >
                Create Quiz <span className="font-semibol text-2xl">+</span>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap overflow-auto sm:overflow-clip justify-center md:justify-start items-start gap-3 sm:gap-8 mx-auto">
            {quizzesToDisplay.map((quiz, index) =>
              quiz && quiz.title && quiz.coverImage && quiz.categoryName ? (
                <button
                  onClick={() => handleClickQuizItems(quiz?.id)}
                  key={index}
                >
                  <QuizItem
                    QuizName={quiz?.title}
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
              ) : (
                <div key={index}>Incomplete Quiz Data</div>
              )
            )}
          </div>
        </div>

        <div className="w-full flex justify-center items-end ">
          <PaginationCompanent
            totalItems={filteredQuizzes.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      {showCreateQuizModal ? <CreateQuizModal /> : ""}
      {showCreateQuizSecondModal ? <CreateQuizSecondModal /> : ""}
    </div>
  );
}
