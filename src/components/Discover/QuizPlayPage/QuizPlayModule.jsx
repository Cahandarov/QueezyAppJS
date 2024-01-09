import pointsIcon from "../images/pointsIconWhite.svg";
import MultiAnswer from "./MultiAnswer";
import TrueAndFalse from "./TrueAndFalse";
import TypeAnswer from "./TypeAnswer";
import VoiceAnswer from "./VoiceAnswer";
import VoiceQuestion from "./VoiceQuestion";
import Poll from "./Poll";
import CheckboxAnswer from "./CheckboxAnswer";
import { useDispatch, useSelector } from "react-redux";
import { setChangeQuizIndex } from "./quizPlaySlice";

export default function QuizPlayModule() {
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  console.log(selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  const dispatch = useDispatch();

  function handleNextQuiz() {
    if (index <= selectedQuiz.questions.length) {
      dispatch(setChangeQuizIndex(index++));
    }
  }
  function handleBackQuiz() {
    if (index > 0) {
      dispatch(setChangeQuizIndex(index--));
    }
  }
  return (
    <div className="w-[70%] h-[33rem] flex flex-col p-8 rounded-3xl bg-white mx-auto mt-10">
      <div className="flex justify-between items-start">
        <div className="flex flex-col justify-evenly items-start w-[50%]">
          <div className="w-full flex gap-4 justify-evenly items-center">
            <div className="w-20 h-10 rounded-xl bg-[#9087E5] flex justify-center items-center gap-2">
              <i className="pi pi-question" style={{ color: "white" }}></i>
              <p className="font-Rubik font-medium text-base text-white">
                {index + 1} / {selectedQuiz.questions.length}
              </p>
            </div>
            <div className="w-[14rem] h-2 bg-[#EFEEFC] rounded-xl">
              <div className="w-[14rem] h-2 bg-[#6A5AE0] rounded-xl"></div>
            </div>
            <div className="w-20 h-10 rounded-xl bg-[#FF9B57] flex justify-center items-center gap-4">
              <img src={pointsIcon} alt="Points" />
              <p className="font-Rubik font-medium text-base text-white">
                {selectedQuiz?.questions[index]?.score &&
                  selectedQuiz.questions[index].score}
              </p>
            </div>
          </div>

          {/* <p className="font-Rubik font-medium text-base text-[#858494] mt-3">
            QUESTION <span>1</span> <span>OF</span> <span>10</span>
          </p> */}
          {selectedQuiz?.questions[index].type === "Multiple" && (
            <MultiAnswer />
          )}
          {selectedQuiz?.questions[index].type === "True and False" && (
            <TrueAndFalse />
          )}
          {selectedQuiz?.questions[index].type === "Type answer" && (
            <TypeAnswer />
          )}
          {selectedQuiz?.questions[index].type === "Voice answer" && (
            <VoiceAnswer />
          )}
          {selectedQuiz?.questions[index].type === "Voice note" && (
            <VoiceQuestion />
          )}
          {selectedQuiz?.questions[index].type === "Poll" && <Poll />}
          {selectedQuiz?.questions[index].type === "Checkbox" && (
            <CheckboxAnswer />
          )}
        </div>

        <div className="w-[50%] flex flex-col justify-start items-start pl-6">
          <div className="w-full flex justify-end items-center gap-4">
            <p className="font-Rubik font-normal text-base text-[#858494]">
              Time Remaining
            </p>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-primaryColor font-Rubik font-semibold text-base text-white">
              12
            </div>
          </div>
          <img
            src={selectedQuiz.questions[index].image}
            alt="Question Image"
            className="w-full max-h-[20rem] rounded-xl mt-4"
          />
          <div className="w-full flex justify-end items-center gap-4">
            <button
              onClick={() => handleBackQuiz()}
              className="w-[35%] h-[3.2rem] mt-8 rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-primaryColor bg-white border-2 border-primaryColor hover:bg-slate-100 focus:ring-primaryColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"
            >
              Back
            </button>
            <button
              onClick={() => handleNextQuiz()}
              className="w-[35%] h-[3.2rem] mt-8 rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-primaryColor focus:secondColor focus:ring-offset-2 transition-colors duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
