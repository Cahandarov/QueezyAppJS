import { useDispatch, useSelector } from "react-redux";
import {
  setAnswer,
  setGainedPoints,
  setNumberOfCorrectAnswers,
  setNumberOfIncorrectAnswers,
  setGainedPointsForQuestion,
  setDisabled,
} from "./quizPlaySlice";
import { useMemo } from "react";

export default function MultiAnswer() {
  const dispatch = useDispatch();
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  let answer = useSelector((state) => state.quizPlay.answer);
  const correctAnswer = selectedQuiz?.questions[index]?.correctAnswer;
  const gainedPoints = useSelector((state) => state.quizPlay.gainedPoints);
  const disabled = useSelector((state) => state.quizPlay.disabled);

  const numberOfCorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfCorrectAnswers
  );
  const numberOfIncorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfIncorrectAnswers
  );

  const randomizedOptions = useMemo(() => {
    const originalOptions = selectedQuiz?.questions[index]?.options || [];

    const optionsCopy = [...originalOptions, ...correctAnswer];
    for (let i = optionsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
    }

    return optionsCopy;
  }, [selectedQuiz, index, correctAnswer]);

  function handleClickOptions(ClickedValue) {
    dispatch(setAnswer(ClickedValue));
    if (ClickedValue) {
      dispatch(setDisabled(true));
    }

    if (ClickedValue === correctAnswer[0]) {
      const updatedPoints = gainedPoints + selectedQuiz.questions[index].score;
      dispatch(setGainedPointsForQuestion(selectedQuiz.questions[index].score));
      dispatch(setGainedPoints(updatedPoints));
      dispatch(setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1));
    } else {
      dispatch(setNumberOfIncorrectAnswers(numberOfIncorrectAnswers + 1));
      // return gainedPoints;
    }
    // console.log(gainedPoints);
  }

  return (
    <div className="flex flex-col mt-4 w-full">
      <p className="font-Rubik font-medium text-lg text-[#0C092A] mt-1">
        {selectedQuiz?.questions[index].question}
      </p>
      <div className="w-full flex flex-col items-start  justify-start gap-3 mt-4">
        {randomizedOptions.map((option, Index) => (
          <button
            onClick={() => handleClickOptions(option)}
            disabled={disabled}
            key={Index}
            value={option}
            className={`w-full h-[4rem] text-left px-8 border-2 border-[#EFEEFC] font-Formik font-medium text-base  ${
              answer === option
                ? option === correctAnswer[0]
                  ? "border-green-600"
                  : "border-red-600"
                : ""
            } rounded-2xl hover:bg-slate-200 hover:border-slate-300  transition-colors duration-300`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
