import Header from "./Header";
import QuizLibraryMain from "./QuizLibraryMain/QuizLibraryMain";
import QuizSettings from "./QuizSettings/QuizSettings";
import { useSelector } from "react-redux";

export default function QuizLibrary() {
  const setQuestionsPage = useSelector(
    (state) => state.addQuiz.setQuestionsPage
  );
  return (
    <div>
      <Header />
      {!setQuestionsPage && <QuizLibraryMain />}
      {setQuestionsPage && <QuizSettings />}
    </div>
  );
}
