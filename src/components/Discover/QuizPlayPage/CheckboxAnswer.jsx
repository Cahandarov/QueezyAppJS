import { useDispatch, useSelector } from "react-redux";
import { setAnswer, setGainedPoints } from "./quizPlaySlice";
import { useMemo, useState } from "react";

export default function CheckboxAnswer() {
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  // let answer = useSelector((state) => state.quizPlay.answer);
  const correctAnswer = selectedQuiz?.questions[index]?.correctAnswer || [];
  const gainedPoints = useSelector((state) => state.quizPlay.gainedPoints);
  const dispatch = useDispatch();
  const [checkedOptions, setCheckedOptions] = useState([]);

  const mixedOptions = useMemo(() => {
    const originalOptions = selectedQuiz?.questions[index]?.options || [];

    const optionsCopy = [...originalOptions, ...correctAnswer];
    for (let i = optionsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
    }

    return optionsCopy;
  }, [selectedQuiz, index]);

  function handleCheckOptions(CheckedValue) {
    setCheckedOptions((prevCheckedOptions) => {
      const updatedCheckedOptions = [...prevCheckedOptions, CheckedValue];
      dispatch(setAnswer(updatedCheckedOptions));

      const allCorrectAnswersChecked = correctAnswer.every((answer) =>
        updatedCheckedOptions.includes(answer)
      );

      if (allCorrectAnswersChecked) {
        const updatedPoints =
          gainedPoints + selectedQuiz.questions[index].score;
        dispatch(setGainedPoints(updatedPoints));
        console.log(updatedPoints);
      }

      return updatedCheckedOptions;
    });
  }

  return (
    <div className="flex flex-col mt-4">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1">
        {selectedQuiz?.questions[index].question}
      </p>
      <div className="w-full flex  flex-col items-start justify-start gap-3 mt-4">
        {mixedOptions.map((option, Index) => (
          <button
            key={Index}
            className="answer-input relative flex justify-start items-center w-full h-[3.5rem] rounded-[1.25rem] px-14 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
            type="text mt-3 "
          >
            <input
              onChange={() => handleCheckOptions(option)}
              checked={checkedOptions[option]}
              type="checkbox"
              className="appearance-none absolute top-0 left-0 translate-x-4 translate-y-4 addCheckboxAnswers w-6 h-6 checked:bg-primaryColor bg-[#EFEEFC] rounded-lg border-2 border-[#6A5AE0] "
            />{" "}
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
