import { useDispatch, useSelector } from "react-redux";
import {
  setAnswer,
  setGainedPoints,
  setNumberOfCorrectAnswers,
  setNumberOfIncorrectAnswers,
  setGainedPointsForQuestion,
} from "./quizPlaySlice";
import { useMemo } from "react";

export default function CheckboxAnswer() {
  const dispatch = useDispatch();
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  let answer = useSelector((state) => state.quizPlay.answer);
  const correctAnswer = selectedQuiz?.questions[index]?.correctAnswer;
  const gainedPoints = useSelector((state) => state.quizPlay.gainedPoints);

  const numberOfCorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfCorrectAnswers
  );
  const numberOfIncorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfIncorrectAnswers
  );

  const mixedOptions = useMemo(() => {
    const originalOptions = selectedQuiz?.questions[index]?.options;

    const optionsCopy = [...originalOptions, ...correctAnswer.flat()];
    for (let i = optionsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
    }

    return optionsCopy;
  }, [selectedQuiz, index, correctAnswer]);

  function handleCheckOptions(CheckedValue) {
    const isChecked = answer ? answer.includes(CheckedValue) : false;

    let updatedAnswer;

    if (isChecked) {
      updatedAnswer = answer.filter((value) => value !== CheckedValue);
    } else {
      updatedAnswer = answer ? [...answer, CheckedValue] : [CheckedValue];
    }

    dispatch(setAnswer(updatedAnswer));

    const allCorrectAnswersChecked =
      correctAnswer &&
      updatedAnswer &&
      correctAnswer.every((answer) => updatedAnswer.includes(answer));

    const allCorrectAnswersIncorrect =
      correctAnswer &&
      updatedAnswer &&
      correctAnswer.every((answer) => !updatedAnswer.includes(answer));

    if (allCorrectAnswersChecked) {
      const updatedPoints = gainedPoints + selectedQuiz.questions[index].score;
      dispatch(setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1));
      dispatch(setGainedPoints(updatedPoints));
      dispatch(setGainedPointsForQuestion(selectedQuiz.questions[index].score));
    } else if (allCorrectAnswersIncorrect) {
      if (correctAnswer.includes(CheckedValue)) {
        dispatch(setNumberOfIncorrectAnswers(numberOfIncorrectAnswers + 1));
      }
    }
  }

  return (
    <div className="flex flex-col mt-4 w-full">
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
            <label htmlFor={Index} className="absolute px-40 py-6 "></label>
            <input
              onChange={() => handleCheckOptions(option)}
              type="checkbox"
              id={Index}
              className="appearance-none absolute top-0 left-0 translate-x-4 translate-y-4 addCheckboxAnswers w-6 h-6 checked:bg-primaryColor bg-[#EFEEFC] rounded-lg border-2 border-[#6A5AE0] "
            />{" "}
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

// import { useDispatch, useSelector } from "react-redux";
// import {
//   setAnswer,
//   setGainedPoints,
//   setNumberOfCorrectAnswers,
//   setNumberOfIncorrectAnswers,
//   setGainedPointsForQuestion,
//   setTriggerChild,
// } from "./quizPlaySlice";
// import { useEffect, useMemo, useState } from "react";

// export default function CheckboxAnswer() {
//   const [updatedAnswerState, setUpdatedAnswerState] = useState(null);
//   const dispatch = useDispatch();
//   const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
//   let index = useSelector((state) => state.quizPlay.index);
//   let answer = useSelector((state) => state.quizPlay.answer);
//   const correctAnswer = selectedQuiz?.questions[index]?.correctAnswer;
//   const gainedPoints = useSelector((state) => state.quizPlay.gainedPoints);
//   const triggerChild = useSelector((state) => state.quizPlay.triggerChild);

//   const numberOfCorrectAnswers = useSelector(
//     (state) => state.quizPlay.numberOfCorrectAnswers
//   );
//   const numberOfIncorrectAnswers = useSelector(
//     (state) => state.quizPlay.numberOfIncorrectAnswers
//   );

//   const mixedOptions = useMemo(() => {
//     const originalOptions = selectedQuiz?.questions[index]?.options || [];

//     const optionsCopy = [...originalOptions, ...correctAnswer];
//     for (let i = optionsCopy.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
//     }

//     return optionsCopy;
//   }, [selectedQuiz, index, correctAnswer]);

//   function handleCheckOptions(CheckedValue) {
//     const isChecked = answer ? answer.includes(CheckedValue) : false;

//     let updatedAnswer;

//     if (isChecked) {
//       updatedAnswer = answer.filter((value) => value !== CheckedValue);
//     } else {
//       updatedAnswer = answer ? [...answer, CheckedValue] : [CheckedValue];
//     }
//     setUpdatedAnswerState(updatedAnswer);

//     dispatch(setAnswer(updatedAnswer));
//   }

//   useEffect(() => {
//     console.log(triggerChild);
//     const allCorrectAnswersChecked =
//       correctAnswer &&
//       updatedAnswerState &&
//       correctAnswer.every((answer) => updatedAnswerState.includes(answer));

//     const allCorrectAnswersIncorrect =
//       correctAnswer &&
//       updatedAnswerState &&
//       correctAnswer.every((answer) => !updatedAnswerState.includes(answer));
//     if (allCorrectAnswersChecked) {
//       const updatedPoints = gainedPoints + selectedQuiz.questions[index].score;
//       dispatch(setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1));
//       dispatch(setGainedPoints(updatedPoints));
//       dispatch(setGainedPointsForQuestion(selectedQuiz.questions[index].score));
//     } else if (allCorrectAnswersIncorrect) {
//       dispatch(setNumberOfIncorrectAnswers(numberOfIncorrectAnswers + 1));
//     }
//     dispatch(setTriggerChild(false));
//   }, [triggerChild]);

//   return (
//     <div className="flex flex-col mt-4">
//       <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1">
//         {selectedQuiz?.questions[index].question}
//       </p>
//       <div className="w-full flex  flex-col items-start justify-start gap-3 mt-4">
//         {mixedOptions.map((option, Index) => (
//           <button
//             key={Index}
//             className="answer-input relative flex justify-start items-center w-full h-[3.5rem] rounded-[1.25rem] px-14 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
//             type="text mt-3 "
//           >
//             <label htmlFor={Index} className="absolute px-40 py-6 "></label>
//             <input
//               onChange={() => handleCheckOptions(option)}
//               type="checkbox"
//               id={Index}
//               className="appearance-none absolute top-0 left-0 translate-x-4 translate-y-4 addCheckboxAnswers w-6 h-6 checked:bg-primaryColor bg-[#EFEEFC] rounded-lg border-2 border-[#6A5AE0] "
//             />{" "}
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
