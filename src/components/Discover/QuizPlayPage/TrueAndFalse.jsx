import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnswer,
  setGainedPoints,
  setNumberOfCorrectAnswers,
  setNumberOfIncorrectAnswers,
  setGainedPointsForQuestion,
} from "./quizPlaySlice";

export default function TrueAndFalse() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  let answer = useSelector((state) => state.quizPlay.answer);
  const correctAnswer = selectedQuiz?.questions[index]?.correctAnswer || [];
  const gainedPoints = useSelector((state) => state.quizPlay.gainedPoints);

  const numberOfCorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfCorrectAnswers
  );
  const numberOfIncorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfIncorrectAnswers
  );

  function handleClickOptions(ClickedValue) {
    dispatch(setAnswer(ClickedValue));
    setDisabled(true);
    if (ClickedValue === correctAnswer[0]) {
      const updatedPoints = gainedPoints + selectedQuiz.questions[index].score;
      dispatch(setGainedPointsForQuestion(selectedQuiz.questions[index].score));
      dispatch(setGainedPoints(updatedPoints));
      dispatch(setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1));
    } else {
      dispatch(setNumberOfIncorrectAnswers(numberOfIncorrectAnswers + 1));
      // return gainedPoints;
    }
  }
  return (
    <div className="flex flex-col mt-4">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1">
        {selectedQuiz?.questions[index].question}
      </p>
      <div className="w-full flex items-center justify-start gap-3 mt-6">
        <button
          onClick={() => handleClickOptions("False")}
          disabled={disabled}
          value="False"
          className={`w-[30%] h-[3.2rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-red-600 bg-white border-2 border-[#EFEEFC]  transition-colors duration-300 ${
            answer === "False"
              ? "False" === correctAnswer[0]
                ? "border-green-600"
                : "border-red-600"
              : ""
          }`}
        >
          {languageArray[0].false}
        </button>

        <button
          onClick={() => handleClickOptions("True")}
          disabled={disabled}
          value="True"
          className={`w-[30%] h-[3.2rem]  rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-green-600 bg-white border-2 border-[#EFEEFC]  transition-colors duration-300 ${
            answer === "True"
              ? "True" === correctAnswer[0]
                ? "border-green-600"
                : "border-red-600"
              : ""
          }`}
        >
          {languageArray[0].true}
        </button>
      </div>
    </div>
  );
}
