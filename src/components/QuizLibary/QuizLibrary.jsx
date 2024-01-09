import CreateQuizLastPage from "./CreateQuizLastPage/CreateQuizLastPage";
import Header from "./Header";
import QuizLibraryMain from "./QuizLibraryMain/QuizLibraryMain";
import QuizSettings from "./QuizSettings/QuizSettings";
import { useSelector } from "react-redux";

export default function QuizLibrary() {
  const quizLibraryMainPage = useSelector(
    (state) => state.addQuiz.quizLibraryMainPage
  );
  const setQuestionsPage = useSelector(
    (state) => state.addQuiz.setQuestionsPage
  );
  const setCreateQuizLastPage = useSelector(
    (state) => state.addQuiz.setQuestionsLastPage
  );
  return (
    <div>
      <Header />
      {quizLibraryMainPage && <QuizLibraryMain />}
      {setQuestionsPage && <QuizSettings />}
      {setCreateQuizLastPage && <CreateQuizLastPage />}
    </div>
  );
}
