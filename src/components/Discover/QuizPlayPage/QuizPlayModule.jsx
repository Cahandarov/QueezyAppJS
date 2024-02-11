import pointsIcon from "../images/pointsIconWhite.svg";
import MultiAnswer from "./MultiAnswer";
import TrueAndFalse from "./TrueAndFalse";
import TypeAnswer from "./TypeAnswer";
import VoiceAnswer from "./VoiceAnswer";
import VoiceQuestion from "./VoiceQuestion";
import Poll from "./Poll";
import CheckboxAnswer from "./CheckboxAnswer";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnswer,
  setChangeQuizIndex,
  setNumberOfSkippedQuestions,
  setPlayedQuizz,
  setRunningTime,
  setGainedPointsForQuestion,
  setDisabled,
  // setTriggerChild,
} from "./quizPlaySlice";
import { setEndOfQuizModule } from "../discoverSlice";
import Puzzle from "./Puzzle";
import { useEffect, useRef } from "react";

export default function QuizPlayModule() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  const quizRunningTime = useSelector((state) => state.quizPlay.runningTime);
  const playedQuiz = useSelector((state) => state.quizPlay.playedQuizz);
  // const gainedPoints = useSelector((state) => state.quizPlay.gainedPoints);
  const gainedPointsForQuestion = useSelector(
    (state) => state.quizPlay.gainedPointsForQuestion
  );

  let index = useSelector((state) => state.quizPlay.index);
  const answer = useSelector((state) => state.quizPlay.answer);
  const numberOfSkippedQuestions = useSelector(
    (state) => state.quizPlay.numberOfSkippedQuestions
  );
  const progRef = useRef(0);
  const progress = ((index + 1) / selectedQuiz.questions.length) * 100 + "%";
  const answeredQuestion = {
    id: selectedQuiz.questions[index].id,
    type: selectedQuiz.questions[index].type,
    question: selectedQuiz.questions[index].question,
    options: selectedQuiz.questions[index].options,
    correctAnswer: selectedQuiz.questions[index].correctAnswer,
    explanation: selectedQuiz.questions[index].explanation,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    progRef.current.style.width = progress;
    progRef.current.style.transition = "1s ease-in-out";
  }, [index, progress]);

  // function handleNextQuiz(calculate) {
  // if (calculate) {
  //   hesablamani yerine yetirsin
  // }
  function handleNextQuiz() {
    if (index < selectedQuiz.questions.length - 1) {
      // if (selectedQuiz?.questions[index]?.type === "Checkbox") {
      //   dispatch(setTriggerChild(true));
      // }
      dispatch(setChangeQuizIndex(index + 1));
      dispatch(setDisabled(false));
      dispatch(setAnswer(null));
      dispatch(setRunningTime(selectedQuiz?.questions[index]?.answerTime));
      answeredQuestion.answeredOption = answer;

      answeredQuestion.gainedPoints = gainedPointsForQuestion;
      dispatch(setGainedPointsForQuestion(0));
      const updatedQuestions = [...playedQuiz.questions, answeredQuestion];
      dispatch(setPlayedQuizz({ ...playedQuiz, questions: updatedQuestions }));
    } else if (index === selectedQuiz.questions.length - 1) {
      answeredQuestion.answeredOption = answer;
      answeredQuestion.gainedPoints = gainedPointsForQuestion;
      dispatch(setGainedPointsForQuestion(0));
      const updatedQuestions = [...playedQuiz.questions, answeredQuestion];
      dispatch(setPlayedQuizz({ ...playedQuiz, questions: updatedQuestions }));
      dispatch(setEndOfQuizModule(true));
    }
  }
  function handleBackQuiz() {
    if (index > 0) {
      dispatch(setChangeQuizIndex(index - 1));
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (quizRunningTime > 0) {
        dispatch(setRunningTime(quizRunningTime - 1));
      } else if (
        quizRunningTime === 0 &&
        index < selectedQuiz.questions.length - 1
      ) {
        if (answer === null) {
          // console.log("Test");

          dispatch(setNumberOfSkippedQuestions(numberOfSkippedQuestions + 1));
        }
        answeredQuestion.answeredOption = answer;
        answeredQuestion.gainedPoints = gainedPointsForQuestion;
        dispatch(setGainedPointsForQuestion(0));
        // answeredQuestion.gainedPoints = gainedPoints;
        const updatedQuestions = [...playedQuiz.questions, answeredQuestion];
        dispatch(
          setPlayedQuizz({ ...playedQuiz, questions: updatedQuestions })
        );
        dispatch(setChangeQuizIndex(index + 1));
        dispatch(setDisabled(false));
        dispatch(setRunningTime(selectedQuiz?.questions[index]?.answerTime));
      } else if (
        quizRunningTime === 0 &&
        index === selectedQuiz.questions.length - 1
      ) {
        dispatch(setEndOfQuizModule(true));
        dispatch(setDisabled(false));
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [quizRunningTime, dispatch]);

  return (
    <div className="w-[70%] h-[33rem] flex flex-col p-8 z-10 rounded-3xl bg-white mx-auto mt-6">
      <div className="flex justify-between items-start">
        <div className="flex flex-col justify-evenly items-start w-[50%]">
          <div className="w-full flex gap-4 justify-evenly items-center">
            <div className="w-20 h-10 rounded-xl bg-[#9087E5] flex justify-center items-center gap-2">
              <i className="pi pi-question" style={{ color: "white" }}></i>
              <p className="font-Rubik font-medium text-base text-white">
                {index + 1} / {selectedQuiz.questions.length}
              </p>
            </div>
            <div className="w-[14rem] h-2 bg-[#EFEEFC] rounded-xl flex">
              <div ref={progRef} className="h-2 bg-[#6A5AE0] rounded-xl"></div>
            </div>
            <div className="w-20 h-10 rounded-xl bg-[#FF9B57] flex justify-center items-center gap-4">
              <img src={pointsIcon} alt="Points" />
              <p className="font-Rubik font-medium text-base text-white">
                {selectedQuiz?.questions[index]?.score &&
                  selectedQuiz.questions[index].score}
              </p>
            </div>
          </div>

          {selectedQuiz?.questions[index]?.type === "Multiple Answer" && (
            <MultiAnswer />
          )}
          {selectedQuiz?.questions[index]?.type === "True and False" && (
            <TrueAndFalse />
          )}
          {selectedQuiz?.questions[index]?.type === "Type Answer" && (
            <TypeAnswer />
          )}
          {selectedQuiz?.questions[index]?.type === "Voice Answer" && (
            <VoiceAnswer />
          )}
          {selectedQuiz?.questions[index]?.type === "Voice Question" && (
            <VoiceQuestion />
          )}
          {selectedQuiz?.questions[index]?.type === "Poll" && <Poll />}
          {selectedQuiz?.questions[index]?.type === "Checkbox" && (
            <CheckboxAnswer />
          )}
          {selectedQuiz?.questions[index]?.type === "Puzzle" && <Puzzle />}
        </div>

        <div className="w-[50%] flex flex-col justify-start items-start pl-6">
          <div className="w-full flex justify-end items-center gap-4">
            <p className="font-Rubik font-normal text-base text-[#858494]">
              {languageArray[0].timeRemaining}
            </p>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-primaryColor font-Rubik font-semibold text-base text-white">
              {quizRunningTime}
            </div>
          </div>
          {selectedQuiz.questions[index].image ? (
            <img
              src={selectedQuiz.questions[index].image}
              alt="Question Image"
              className="w-full max-h-[20rem] rounded-xl mt-4"
            />
          ) : (
            <div className="w-full h-[20rem] rounded-xl mt-4"></div>
          )}
          <div className="w-full flex justify-end items-center gap-4">
            {!index === 0 && (
              <button
                onClick={() => handleBackQuiz()}
                className="w-[35%] h-[3.2rem] mt-8 rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-primaryColor bg-white border-2 border-primaryColor hover:bg-slate-100 focus:ring-primaryColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"
              >
                {languageArray[0].Back}
              </button>
            )}
            {answer && index < selectedQuiz.questions.length && (
              <button
                disabled={!answer}
                // onClick={() =>
                //   handleNextQuiz(
                //     selectedQuiz?.questions[index]?.type === "Puzzle"
                //       ? true
                //       : false
                //   )
                // }
                onClick={() => handleNextQuiz()}
                className="w-[35%] h-[3.2rem] mt-8 rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-primaryColor focus:secondColor focus:ring-offset-2 transition-colors duration-300"
              >
                {languageArray[0].Next}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
