import "primeicons/primeicons.css";
import { useDispatch } from "react-redux";
import {
  setCreateQuizSecondModal,
  setCreateQuizModal,
} from "../createQuizSlice";
import CreateQuizItem from "./CreateQuizItem";
import { QuizCoverData } from "../QuizCoverData";
import { setSetQuestionsPage } from "../createQuizSlice";

export default function CreateQuizSecondModal() {
  const dispatch = useDispatch();
  function handleBackModule() {
    dispatch(setCreateQuizSecondModal(false));
    dispatch(setCreateQuizModal(true));
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
            {QuizCoverData.slice(0, 6).map((quiz, index) => (
              <CreateQuizItem
                key={index}
                cover={quiz.cover}
                category={quiz.category}
                quizNumber={quiz.numberOfQuizzes}
              />
            ))}
          </div>
          <div className="w-full h-[11%] px-2 flex items-center justify-between overflow-auto">
            <button
              onClick={() => handleBackModule()}
              className="w-[44%] h-[3.2rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-primaryColor bg-white border-2 border-primaryColor hover:bg-slate-100 hover:border-slate-400 focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"
            >
              Back
            </button>
            <button
              onClick={() => dispatch(setSetQuestionsPage(true))}
              className="w-[44%] h-[3.2rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"
            >
              Set Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
