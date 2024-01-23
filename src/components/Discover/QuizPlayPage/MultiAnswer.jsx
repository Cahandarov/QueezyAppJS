import { useDispatch, useSelector } from "react-redux";
import {
  setAnswer,
  setGainedPoints,
  setNumberOfCorrectAnswers,
  setNumberOfIncorrectAnswers,
} from "./quizPlaySlice";
import { useState } from "react";

export default function MultiAnswer() {
  const dispatch = useDispatch();
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  let answer = useSelector((state) => state.quizPlay.answer);
  const [disabled, setDisabled] = useState(false);
  const originalOptions = selectedQuiz?.questions[index]?.options || [];
  const correctAnswer = selectedQuiz?.questions[index]?.correctAnswer || [];
  const gainedPoints = useSelector((state) => state.quizPlay.gainedPoints);
  const numberOfCorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfCorrectAnswers
  );
  const numberOfIncorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfIncorrectAnswers
  );

  let Options = [];

  const randomIndex = Math.round(Math.random() * Options.length);
  for (let i = 0; i < originalOptions.length; i++) {
    Options.push(originalOptions[i]);
    Options.push(Options.splice(randomIndex - 1, 1)[0]);
  }
  const randomizedOptions = [
    ...Options.slice(0, randomIndex),
    correctAnswer[0],
    ...Options.slice(randomIndex),
  ];

  // console.log(randomizedOptions);

  function handleClickOptions(ClickedValue) {
    dispatch(setAnswer(ClickedValue));
    setDisabled(true);
    if (ClickedValue === correctAnswer[0]) {
      const updatedPoints = gainedPoints + selectedQuiz.questions[index].score;
      dispatch(setGainedPoints(updatedPoints));
      dispatch(setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1));
    } else {
      dispatch(setNumberOfIncorrectAnswers(numberOfIncorrectAnswers + 1));
      // return gainedPoints;
    }
    // console.log(gainedPoints);
  }

  return (
    <div className="flex flex-col mt-4">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1">
        {selectedQuiz?.questions[index].question}
      </p>
      <div className="w-full flex flex-col items-start  justify-start gap-3 mt-4">
        {randomizedOptions.map((option, Index) => (
          <button
            onClick={() => handleClickOptions(option)}
            disabled={disabled}
            key={Index}
            value={option}
            className={`w-full h-[3rem] text-left px-8 border-2 border-[#EFEEFC] font-Formik font-medium text-lg  ${
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
