import { useSelector } from "react-redux";
import AudioRecorderAnswer from "./AudioRecorderAnswer";

export default function VoiceAnswer() {
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  return (
    <div className="flex flex-col mt-4">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1 mb-4">
        {selectedQuiz?.questions[index].question}
      </p>
      <AudioRecorderAnswer />
    </div>
  );
}
