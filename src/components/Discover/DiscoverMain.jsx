import { useSelector, useDispatch } from "react-redux";
import CategoriesItem from "./CategoriesItem";
import QuizItemDiscover from "./QuizItem";
import { useEffect, useState } from "react";
import {
  setDiscoverMainPage,
  setQuizDetailsPage,
  setSelectedQuiz,
} from "./discoverSlice";
import { useNavigate } from "react-router-dom";

export default function DiscoverMain() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LiveQuizzes = useSelector((state) => state.quizPlay.liveQuizzes);
  let [quizzesForDisplay, setQuizzesForDisplay] = useState(LiveQuizzes);
  const [title, setTitle] = useState(null);

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

  function handleClickCategoryButtons(category) {
    setQuizzesForDisplay([]);

    if (category) {
      const filteredQuizzes = quizzes.filter(
        (q) => q.categoryName === category
      );
      // console.log(filteredQuizzes);
      setQuizzesForDisplay(filteredQuizzes);
      setTitle(category);
    }
  }

  const categoryCounts =
    quizzes &&
    quizzes?.reduce((counts, quiz) => {
      const categoryName = quiz?.categoryName;
      counts[categoryName] = (counts[categoryName] || 0) + 1;
      return counts;
    }, {});

  const sortedCategories =
    categoryCounts &&
    Object.keys(categoryCounts).sort(
      (a, b) => categoryCounts[b] - categoryCounts[a]
    );

  const result = [];

  sortedCategories.forEach((category) => {
    const quizzesForCategory = quizzes?.filter(
      (quiz) => quiz?.categoryName === category
    );
    result.push({ category, quizzes: quizzesForCategory });
  });
  const slicedCategories = result.slice(0, 8);

  return (
    <div className="w-full h-full min-h-[1086px] flex flex-col px-10 pt-10 pb-4 bg-[#FBFBFC] gap-6 justify-start items-center">
      <p className="w-full font-Rubik font-bold text-[1.75rem] text-textColorNeutralBlack_0C092A">
        {languageArray[0].Categories}
      </p>
      <div className="flex flex-wrap w-full flex-start items-center gap-4 mx-auto">
        {slicedCategories.map((quiz, index) => (
          <button
            onClick={() => handleClickCategoryButtons(quiz.category)}
            className="HoverAndFocusDark group w-[23.9%] h-[6rem] rounded-[1.25rem] p-6 bg-[#EFEEFC] transition-colors duration-300"
            key={index}
          >
            <CategoriesItem
              cover={quiz && quiz.quizzes?.[0]?.coverImage}
              category={quiz.category}
              QuizzesInThisCategory={quiz && quiz.quizzes?.length}
            />
          </button>
        ))}
      </div>
      <div className="boxShadow flex flex-col mx-auto justify-between h-[63.5rem] w-full rounded-[2rem] p-8 mb-2 border-2 border-[#EFEEFC] bg-white ">
        <div className="w-full flex justify-between items-center">
          <p className="font-Rubik font-medium text-2xl text-textColorNeutralBlack_0C092A">
            {title ? title : languageArray[0].liveQuiz}
          </p>
        </div>
        <div className="w-full h-full mt-4 relative">
          {quizzesForDisplay.length ? (
            <div className="flex flex-wrap overflow-auto sm:overflow-clip justify-center md:justify-start items-start gap-3 sm:gap-6 mx-auto">
              {quizzesForDisplay.map((quiz, index) => (
                <button
                  onClick={() => handleClickQuizItems(quiz?.id)}
                  key={index}
                >
                  <QuizItemDiscover
                    QuizName={quiz?.title}
                    cover={quiz?.coverImage}
                    category={quiz?.categoryName}
                    QuizzesInThisCategory={
                      quizzes.filter(
                        (item) => item.categoryName === quiz.categoryName
                      ).length
                    }
                  />
                </button>
              ))}
            </div>
          ) : (
            <p className="absolute left-[28%] bottom-[50%] font-Rubik font-medium text-3xl text-textColorNeutralBlack_0C092A">
              {languageArray[0].liveQuizText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
