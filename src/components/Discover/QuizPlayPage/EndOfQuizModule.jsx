import { useDispatch, useSelector } from "react-redux";
import kupa from "../images/Kupa.png";
import shareIcon from "../images/shareIcon.svg";
import {
  setDiscoverMainPage,
  setEndOfQuizModule,
  setQuizPlayPage,
  setReviewAnswerModule,
} from "../discoverSlice";
import { useNavigate } from "react-router-dom";
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
import { setQuizLibraryMainPage } from "../../QuizLibary/createQuizSlice";
import { setDashboardMainPage } from "../../Dashboard/dashboardSlice";
import { setSideBarPage } from "../../ui/uiSlice";

export default function EndOfQuizModule() {
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  const liveQuizzes = useSelector((state) => state.quizPlay.liveQuizzes);
  const gainedPoints = useSelector((state) => state.quizPlay.gainedPoints);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numberOfCorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfCorrectAnswers
  );
  const numberOfIncorrectAnswers = useSelector(
    (state) => state.quizPlay.numberOfIncorrectAnswers
  );
  const numberOfSkippedQuestions = useSelector(
    (state) => state.quizPlay.numberOfSkippedQuestions
  );
  const completion =
    ((selectedQuiz?.questions?.length - numberOfSkippedQuestions) * 100) /
    selectedQuiz?.questions?.length;

  const updatedLiveQuizzes = liveQuizzes.filter(
    (q) => q.id !== selectedQuiz.id
  );
  function hanndleToNextModule() {
    dispatch(setEndOfQuizModule(false));
    dispatch(setReviewAnswerModule(true));
  }
  function handleCkickDone() {
    dispatch(setQuizPlayStatus("ended"));
    dispatch(setLiveQuizzes(updatedLiveQuizzes));
    dispatch(setQuizPlayPage(false));
    dispatch(setChangeQuizIndex(0));
    navigate(-1);
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
    <div className="w-full h-full overflow-hidden fixed bg-[#0000002a] top-0 left-0 flex justify-center items-center">
      <div className="w-[30%] h-[95vh] rounded-3xl z-30 bg-[#fff] mt-4 p-8 flex flex-col justify-start">
        <div className="flex justify-between items-center">
          <p className="font-Rubik font-medium text-2xl text-textColorNeutralBlack_0C092A">
            Good job!
          </p>

          <button onClick={() => dispatch(setEndOfQuizModule(false))}>
            <span className="pi pi-times"></span>
          </button>
        </div>
        <div className="w-[70%] h-[18rem] bg-[#FF8FA2] rounded-2xl mx-auto mt-4 flex flex-col justify-between items-center gap-4 p-4 ">
          <img src={kupa} alt="Kupa" />
          <p className="font-Rubik font-medium text-base text-white">
            You get {gainedPoints} Quiz Points
          </p>
          <button
            onClick={() => hanndleToNextModule()}
            className="bg-[#FFD6DD] w-[80%] h-12 rounded-2xl font-Rubik font-medium text-base text-[#FF8FA2] hover:bg-[#ffd6e0ab] hover:text-white transition-all duration-300"
          >
            Check Correct Answer
          </button>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex flex-col items-start justify-start gap-2">
            <p className="font-Rubik font-medium text-base text-[#858494]">
              COMPLETION
            </p>
            <p className="font-Rubik font-medium text-lg text-textColorNeutralBlack_0C092A">
              {completion}%
            </p>

            <p className="font-Rubik font-medium text-base text-[#858494] mt-2">
              SKIPPED
            </p>
            <p className="font-Rubik font-medium text-lg text-textColorNeutralBlack_0C092A">
              {numberOfSkippedQuestions}
            </p>
          </div>

          <div className="flex flex-col items-start justify-start gap-2">
            <p className="font-Rubik font-medium text-base text-[#858494]">
              CORRECT ANSWER
            </p>
            <p className="font-Rubik font-medium text-lg text-textColorNeutralBlack_0C092A">
              {numberOfCorrectAnswers}
            </p>

            <p className="font-Rubik font-medium text-base text-[#858494] mt-2">
              INCORRECT ANSWER
            </p>
            <p className="font-Rubik font-medium text-lg text-textColorNeutralBlack_0C092A">
              {numberOfIncorrectAnswers}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <button
            // onClick={() => handleBackQuiz()}
            className="w-[47%] h-[3.2rem] mt-8 gap-4 rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-primaryColor bg-white border-2 border-primaryColor hover:bg-slate-100 focus:ring-primaryColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"
          >
            <img src={shareIcon} alt="Share Icon" />
            <p className="font-medium text-base font-Rubik text-primaryColor">
              Share
            </p>
          </button>
          <button
            onClick={() => handleCkickDone()}
            className="w-[47%] h-[3.2rem] mt-8 rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-primaryColor focus:secondColor focus:ring-offset-2 transition-colors duration-300"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
