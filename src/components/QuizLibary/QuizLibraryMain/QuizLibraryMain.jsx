import PaginationCompanent from "./PaginationCompanent";
import searchIcon from "../images/searchIcon2.svg";
import QuizItem from "./QuizItem";
import { useEffect, useState } from "react";
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
  const languageArray = useSelector((state) => state.language.languageArray);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Set itemsPerPage based on screen width
    if (window.innerWidth < 640) {
      setItemsPerPage(5);
    } else if (window.innerWidth < 1024) {
      setItemsPerPage(8);
    }
    // else if (window.innerWidth < 1280) {
    //   setItemsPerPage(9);
    // }
    else {
      setItemsPerPage(12);
    }
  }, []);

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
    navigate("/discover/quizDetails");
    dispatch(setDiscoverMainPage(false));
    dispatch(setQuizDetailsPage(true));
  }

  return (
    <div className="flex flex-col gap-3 sm:gap-8 w-full h-full min-h-[1086px] px-10 pt-2 sm:pt-10 pb-4 bg-[#FBFBFC]">
      <div className="boxShadow flex flex-col mx-auto justify-between h-[87rem]  sm:h-[85rem] lg:h-[78rem] xl:h-[63.5rem] w-full rounded-[2rem] p-4 sm:p-8 mb-2 border-2 border-[#EFEEFC] bg-white ">
        <div className="">
          <p className="font-medium text-2xl text-textColorNeutralBlack_0C092A font-Rubik text-left">
            {languageArray[0].quizList}
          </p>
          <div className="my-6 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between w-full">
            <div className="relative flex items-center justify-center w-full sm:w-[92%] md:w-[48%] xl:w-[30%] h-[3.5rem]">
              <input
                id="QuizLibraryInput"
                type="search"
                placeholder={languageArray[0].findQuizzes}
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
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 w-full md:w-[70%]">
              <div className="w-full sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[28%] h-12 lg:h-14 rounded-[1.25rem] ">
                <SelectOption
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>

              <button
                onClick={() => {
                  dispatch(setCreateQuizModal(true));
                }}
                className="w-full sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[28%] HoverAndFocusDark flex justify-center items-center gap-2 xl:gap-4 h-12 lg:h-14 rounded-[1.25rem] bg-primaryColor text-textColorWhite font-normal md:font-medium text-xs sm:text-base md:text-sm xl:text-base font-Rubik"
              >
                {languageArray[0].createQuiz}{" "}
                <span className="font-semibol text-lg md:text-xl xl:text-2xl">
                  +
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap w-full h-[62rem] md:h-[68rem] lg:h-[61rem] xl:h-[49rem] xl:max-h-[57rem] overflow-auto justify-center md:justify-start items-center sm:items-start gap-4 md:gap-6 mx-auto">
            {quizzesToDisplay.map((quiz, index) =>
              quiz && quiz.title && quiz.coverImage && quiz.categoryName ? (
                <button
                  className="w-[80%] sm:w-[45%] md:w-[48%] lg:w-[30.5%] xl:w-[22.8%] 2xl:w-[23.1%] h-[14rem]"
                  onClick={() => handleClickQuizItems(quiz?.id)}
                  key={index}
                >
                  <QuizItem
                    id={quiz?.id}
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
