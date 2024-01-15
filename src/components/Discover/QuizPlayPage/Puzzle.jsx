import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer, setGainedPoints } from "./quizPlaySlice";

export default function Puzzle() {
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  let answer = useSelector((state) => state.quizPlay.answer);
  const gainedPoints = useSelector((state) => state.quizPlay.gainedPoints);
  const dispatch = useDispatch();
  const [answerArray, setAnswerArray] = useState([]);

  const mixedOptions = useMemo(() => {
    const originalOptions = selectedQuiz?.questions[index]?.options || [];

    const optionsCopy = [...originalOptions];
    for (let i = optionsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
    }

    return optionsCopy;
  }, [selectedQuiz, index]);

  function handleClickOptions(ClickedValue) {
    const uniqeAnswers = Array.from(new Set([...answerArray, ClickedValue]));
    setAnswerArray(uniqeAnswers);
    dispatch(setAnswer(uniqeAnswers));
  }
  function handleCancelClickOptions(answer) {
    const answersAfterDelete = answerArray.filter(
      (option) => option !== answer
    );
    setAnswerArray(answersAfterDelete);
    dispatch(setAnswer(answersAfterDelete));
  }

  return (
    <div className="flex flex-col mt-4">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1">
        {selectedQuiz?.questions[index].question}
      </p>
      <div className="w-full h-32 flex justify-start items-start mt-4 flex-wrap gap-4">
        {answerArray.map((answer, index) => (
          <button
            onClick={() => handleCancelClickOptions(answer)}
            key={index}
            className="px-4 flex items-center justify-between gap-4  py-2 border-2 border-[#EFEEFC] rounded-lg"
          >
            <p>{answer}</p>
            <span className="pi pi-times"></span>
          </button>
        ))}
      </div>
      <div className="w-full flex flex-wrap  items-start justify-start gap-3 mt-6">
        {mixedOptions.map((option, Index) => (
          <button
            onClick={() => handleClickOptions(option)}
            key={Index}
            value={option}
            className="max-w-max h-[3rem] text-left px-8 border-2 border-[#EFEEFC] rounded-2xl hover:bg-slate-200 hover:border-slate-300  duration-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
