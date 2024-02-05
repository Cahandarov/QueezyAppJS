import { useDispatch, useSelector } from "react-redux";
import groupLeft from "../images/GroupLeft.png";
import groupRigth from "../images/GroupRigth.png";
import logo from "../images/Logo.svg";
import QuizPlayModule from "./QuizPlayModule";
import {
  setAnswer,
  setChangeQuizIndex,
  setGainedPoints,
  setLiveQuizzes,
  setNumberOfCorrectAnswers,
  setNumberOfIncorrectAnswers,
  setNumberOfSkippedQuestions,
  setPlayedQuizz,
  setQuizPlayStatus,
  setRunningTime,
} from "./quizPlaySlice";
import { setDiscoverMainPage, setQuizPlayPage } from "../discoverSlice";
import { useNavigate } from "react-router-dom";
import { setSideBarPage } from "../../ui/uiSlice";
import { setDashboardMainPage } from "../../Dashboard/dashboardSlice";
import { setQuizLibraryMainPage } from "../../QuizLibary/createQuizSlice";
import EndOfQuizModule from "./EndOfQuizModule";
import ReviewAnswersModule from "./ReviewAnswersModule";

export default function QuizPlayPage() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  const liveQuizzes = useSelector((state) => state.quizPlay.liveQuizzes);
  const endOfQuizModule = useSelector(
    (state) => state.discover.endOfQuizModule
  );
  const reviewAnswerModule = useSelector(
    (state) => state.discover.reviewAnswerModule
  );

  const navigate = useNavigate();
  const updatedLiveQuizzes = liveQuizzes.filter(
    (q) => q.id !== selectedQuiz.id
  );
  const dispatch = useDispatch();

  function handleQuitQuiz() {
    dispatch(setQuizPlayStatus("ended"));
    dispatch(setLiveQuizzes(updatedLiveQuizzes));
    dispatch(setQuizPlayPage(false));
    dispatch(setChangeQuizIndex(0));
    navigate(-2);
    dispatch(setDiscoverMainPage(true));
    dispatch(setQuizLibraryMainPage(true));
    dispatch(setDashboardMainPage(true));
    dispatch(setSideBarPage(true));
    dispatch(setPlayedQuizz({}));
    dispatch(setNumberOfSkippedQuestions(0));
    dispatch(setNumberOfIncorrectAnswers(0));
    dispatch(setNumberOfCorrectAnswers(0));
    dispatch(setGainedPoints(0));
    dispatch(setAnswer(null));
    dispatch(setRunningTime(0));
  }

  return (
    <div className="quizPlayPage z-0 w-full h-screen px-[8.75rem] py-8 bg-primaryColor absolute top-0 left-0">
      <img
        src={groupLeft}
        alt="GroupLeft"
        className="absolute bottom-0 left-0"
      />
      <img
        src={groupRigth}
        alt="GroupRigth"
        className="absolute right-0 top-28"
      />
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" />
        <button
          onClick={() => handleQuitQuiz()}
          className="w-[6.68rem] h-[3rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-transparent border border-[#EFEEFC] hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"
        >
          {languageArray[0].endQuiz}
        </button>
      </div>
      <QuizPlayModule />
      {endOfQuizModule && <EndOfQuizModule />}
      {reviewAnswerModule && <ReviewAnswersModule />}
    </div>
  );
}
