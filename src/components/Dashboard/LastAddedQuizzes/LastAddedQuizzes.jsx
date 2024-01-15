import { useEffect, useRef, useState } from "react";
import LastAddesQuizzesItem from "./LastAddedQuizzesItem";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedQuiz,
  setQuizDetailsPage,
  setDiscoverMainPage,
} from "../../Discover/discoverSlice";
import { useNavigate } from "react-router-dom";

export default function LastAddesQuizzes() {
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClickQuizItems(id) {
    const clickedQuiz = quizzes.find((quiz) => quiz.id === id);
    // console.log(id);
    // console.log(clickedQuiz);
    if (clickedQuiz) {
      dispatch(setSelectedQuiz(clickedQuiz));
    }
    navigate("/discover");
    dispatch(setDiscoverMainPage(false));
    dispatch(setQuizDetailsPage(true));
  }
  useEffect(() => {
    return () => {
      console.log("Selected Quiz:", selectedQuiz);
    };
  }, [selectedQuiz]);

  const quizDataSortedByDate = quizzes
    .slice()
    .sort((a, b) => {
      const dateA = new Date(
        a.createdDate.replace(
          /(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2}):(\d{2})/,
          "$2/$1/$3 $4:$5:$6"
        )
      );
      const dateB = new Date(
        b.createdDate.replace(
          /(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2}):(\d{2})/,
          "$2/$1/$3 $4:$5:$6"
        )
      );
      return dateB - dateA;
    })
    .slice(0, 6);

  // console.log(quizDataSortedByDate);
  const [Quizzes, setQuizzes] = useState(quizDataSortedByDate);
  const [showAllQuiezzez, setShowAllQuizzes] = useState(false);
  const scrollRef = useRef(null);
  function handleSeeAll() {
    if (!showAllQuiezzez) {
      setQuizzes(quizzes);
      setShowAllQuizzes(true);
      scrollRef.current.style.overflow = "auto";
      scrollRef.current.style.gap = "10px";
    } else {
      setQuizzes(quizDataSortedByDate);
      setShowAllQuizzes(false);
      scrollRef.current.style.overflow = "hidden";
    }
  }
  return (
    <div className="w-full sm:w-[80%] md:w-[98%] lg:w-[48rem] h-[30rem] order-5 xl:order-4 p-6 flex flex-col gap-4 rounden-[2rem] bg-white dashboard_boxes">
      <div className="flex justify-between items-center">
        <p className="text-sm sm:text-2xl font-medium font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          Last Added Quizzes
        </p>
        <button
          className="text-sm sm:text-base font-medium font-Rubik text-primaryColor"
          onClick={() => handleSeeAll()}
        >
          {!showAllQuiezzez ? "See all" : "See less"}
        </button>
      </div>
      <div
        className="flex flex-wrap overflow-auto sm:overflow-clip justify-center md:justify-start items-start gap-3 sm:gap-5 mx-auto"
        ref={scrollRef}
      >
        {Quizzes.map((Quiz, index) => (
          <button
            className="w-[10rem] h-[7.5rem] sm:w-[31%] sm:h-[11rem] p-2 sm:p-4  rounded-[1.25rem] bg-white border-2 border-solid border-[#EFEEFC] hover:bg-slate-100 hover:border-transparent transition-colors duration-300"
            key={index}
            onClick={() => handleClickQuizItems(Quiz?.id)}
          >
            <LastAddesQuizzesItem
              QuizName={Quiz.title}
              cover={Quiz.coverImage}
              category={Quiz.categoryName}
              QuizzesInThisCategory={
                quizzes.filter(
                  (item) => item.categoryName === Quiz?.categoryName
                )?.length
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}
