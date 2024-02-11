import { useDispatch, useSelector } from "react-redux";
import {
  setAnswer,
  setGainedPoints,
  setNumberOfCorrectAnswers,
  setNumberOfIncorrectAnswers,
  setGainedPointsForQuestion,
} from "./quizPlaySlice";

export default function VoiceQuestion() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  const dispatch = useDispatch();
  const correctAnswer = selectedQuiz?.questions[index]?.correctAnswer || [];
  const gainedPoints = useSelector((state) => state.quizPlay.gainedPoints);

  const numberOfCorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfCorrectAnswers
  );
  const numberOfIncorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfIncorrectAnswers
  );

  function handleGetAnswer(typedAnswer) {
    dispatch(setAnswer(typedAnswer));
    if (typedAnswer === correctAnswer[0]) {
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
    <div className="flex flex-col mt-4 w-full">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1 mb-4">
        {languageArray[0].pleaseAnswerSoundedQuestion}
      </p>

      <audio
        src={`data:audio/wav;base64,${selectedQuiz?.questions[index]?.question}`}
        controls
      ></audio>
      <input
        name="addTypeAnswer"
        onChange={(e) => {
          handleGetAnswer(e.target.value);
        }}
        className="w-full h-[3.5rem] rounded-[1.25rem] mt-4 py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].writeYourAnswer}
      />
    </div>
  );
}
