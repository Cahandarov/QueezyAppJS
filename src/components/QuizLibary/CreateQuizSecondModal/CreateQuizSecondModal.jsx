import "primeicons/primeicons.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setCreateQuizSecondModal,
  setCreateQuizModal,
  setQuizLibraryMainPage,
} from "../createQuizSlice";
import CreateQuizItem from "./CreateQuizItem";
import { setSetQuestionsPage } from "../createQuizSlice";
import SelectedCreateQuizItem from "./SelectedCreateQuizItem";
import { useNavigate } from "react-router-dom";

export default function CreateQuizSecondModal() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const newQuiz = useSelector((state) => state.quizzes.newQuiz);
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const navigate = useNavigate();

  const filteredData = quizzes.filter(
    (item) => item.categoryName !== newQuiz.categoryName
  );

  const lastFilteredData = filteredData.map((quiz) => {
    const uniqueCategories = new Set();

    return filteredData.filter((filteredQuiz) => {
      if (
        filteredQuiz.categoryName !== quiz.categoryName &&
        !uniqueCategories.has(filteredQuiz.categoryName)
      ) {
        uniqueCategories.add(filteredQuiz.categoryName);

        return true;
      }
      return false;
    });
  });

  const dispatch = useDispatch();
  function handleBackModule() {
    dispatch(setCreateQuizSecondModal(false));
    dispatch(setCreateQuizModal(true));
  }

  function handleNextToSetQuestionsPage() {
    dispatch(setSetQuestionsPage(true));
    navigate("/quizlibrary/quizsettings");
    dispatch(setCreateQuizSecondModal(false));
    dispatch(setQuizLibraryMainPage(false));
  }

  return (
    <div className="overlay flex justify-center items-center z-10">
      <div className="w-[30%] h-[98vh] rounded-[2rem] bg-white py-6 px-8 flex flex-col gap-3 items-center">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-2xl font-Rubik text-textColorNeutralBlack_0C092A">
            {languageArray[0].createQuiz}
          </p>
          <i
            onClick={() => dispatch(setCreateQuizSecondModal(false))}
            className="pi pi-times"
          ></i>
        </div>
        <div className="w-full h-[100%] flex flex-col justify-between gap-4">
          <div className="w-full h-[90%] flex flex-wrap gap-4 items-start justify-start mx-auto overflow-hidden">
            <SelectedCreateQuizItem newQuiz={newQuiz} />

            {lastFilteredData[0].slice(0, 5).map((filteredQuiz, index) => (
              <CreateQuizItem
                key={index}
                cover={filteredQuiz.coverImage}
                category={filteredQuiz.categoryName}
                QuizzesInThisCategory={
                  filteredData.filter(
                    (item) => item.categoryName === filteredQuiz.categoryName
                  ).length
                }
              />
            ))}
          </div>
          <div className="w-full h-[11%] px-2 flex items-center justify-between overflow-auto">
            <button
              onClick={() => handleBackModule()}
              className="w-[44%] h-[3.2rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-primaryColor bg-white border-2 border-primaryColor hover:bg-slate-100 hover:border-slate-400 focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
            >
              {languageArray[0].Back}
            </button>
            <button
              onClick={() => handleNextToSetQuestionsPage()}
              className="w-[44%] h-[3.2rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
            >
              {languageArray[0].setQuestion}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
