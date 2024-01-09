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

export default function CreateQuizSecondModal() {
  const newQuiz = useSelector((state) => state.quizzes.newQuiz);
  const quizzes = useSelector((state) => state.quizzes.quizzes);

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
    dispatch(setCreateQuizSecondModal(false));
    dispatch(setQuizLibraryMainPage(false));
  }

  return (
    <div className="overlay flex justify-center items-center z-10">
      <div className="w-[30%] h-[98vh] rounded-[2rem] bg-white py-6 px-8 flex flex-col gap-3 items-center">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-2xl font-Rubik text-textColorNeutralBlack_0C092A">
            Create Quiz
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
              Back
            </button>
            <button
              onClick={() => handleNextToSetQuestionsPage()}
              className="w-[44%] h-[3.2rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
            >
              Set Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDI1LjhDMjAuOTY0NiAyNS44IDI1Ljc5OTkgMjAuOTY0NiAyNS43OTk5IDE1QzI1Ljc5OTkgOS4wMzUyOCAyMC45NjQ2IDQuMTk5OTUgMTUgNC4xOTk5NUM5LjAzNTI4IDQuMTk5OTUgNC4xOTk5NSA5LjAzNTI4IDQuMTk5OTUgMTVDNC4xOTk5NSAyMC45NjQ2IDkuMDM1MjggMjUuOCAxNSAyNS44WiIgc3Ryb2tlPSIjNkE1QUUwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy4zOCA3LjM4TDIyLjYyIDIyLjYyIiBzdHJva2U9IiM2QTVBRTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03LjM4IDIyLjYyTDIyLjYyIDcuMzgiIHN0cm9rZT0iIzZBNUFFMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE1IDQuMTk5OTVDMTUgNy4wNjQyOSAxNi4xMzc5IDkuODExMzEgMTguMTYzMiAxMS44MzY3QzIwLjE4ODYgMTMuODYyMSAyMi45MzU3IDE1IDI1LjggMTUiIHN0cm9rZT0iIzZBNUFFMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQuMTk5OTUgMTVDNy4wNjQyOSAxNSA5LjgxMTMxIDE2LjEzNzkgMTEuODM2NyAxOC4xNjMyQzEzLjg2MjEgMjAuMTg4NiAxNC45OTk5IDIyLjkzNTcgMTQuOTk5OSAyNS44IiBzdHJva2U9IiM2QTVBRTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=");
