import { useSelector } from "react-redux";
import DiscoverMain from "./DiscoverMain";
import Header from "./Header";
import QuizDetails from "./QuizDetails";
import QuizPlayPage from "./QuizPlayPage/QuizPlayPage";

export default function Discover() {
  const quizDetailsPage = useSelector(
    (state) => state.discover.quizDetailsPage
  );
  const discoverMainPage = useSelector(
    (state) => state.discover.discoverMainPage
  );
  const quizPlayPage = useSelector((state) => state.discover.quizPlayPage);
  return (
    <div className="discover w-full h-full max-h-max flex flex-col">
      <Header />
      {discoverMainPage && <DiscoverMain />}
      {quizDetailsPage && <QuizDetails />}
      {quizPlayPage && <QuizPlayPage />}
    </div>
  );
}
