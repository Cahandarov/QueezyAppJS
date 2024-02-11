import { useDispatch, useSelector } from "react-redux";
import puzzle from "../images/puzzleIcon.svg";
import rigthBottom from "../images/rigthBottom.png";
import centerBottom from "../images/centerBottom.png";
import smallTop from "../images/smallTop.png";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
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
import {
  setDiscoverMainPage,
  setEndOfQuizModule,
  setQuizPlayPage,
  setReviewAnswerModule,
} from "../discoverSlice";
import { useNavigate } from "react-router-dom";
import { setQuizLibraryMainPage } from "../../QuizLibary/createQuizSlice";
import { setDashboardMainPage } from "../../Dashboard/dashboardSlice";
import { setSideBarPage } from "../../ui/uiSlice";

export default function ReviewAnswersModule() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  const liveQuizzes = useSelector((state) => state.quizPlay.liveQuizzes);
  const playedQuizz = useSelector((state) => state.quizPlay.playedQuizz);
  const numberOfSkippedQuestions = useSelector(
    (state) => state.quizPlay.numberOfSkippedQuestions
  );
  const answeredQuestions =
    playedQuizz?.questions?.length - numberOfSkippedQuestions;

  const calculatedPercent = Math.round(
    (answeredQuestions / playedQuizz?.questions?.length) * 100
  );
  console.log(calculatedPercent);

  const props = {
    percent: calculatedPercent,
    colorSlice: "#FFFFFF",
    colorCircle: "#FFA5B5",
    size: 100,
    stroke: 10,
    strokeBottom: 10,
    speed: 60,
    rotation: -90,
    fill: "#FF8FA2",
    animationOff: false,
    round: true,
    number: false,
    linearGradient: ["#ffffff", "white"],
    styles: {
      borderRadius: "50%",
    },
  };
  const updatedLiveQuizzes = liveQuizzes.filter(
    (q) => q.id !== selectedQuiz.id
  );
  function handleClickSubmit() {
    dispatch(setQuizPlayStatus("ended"));
    dispatch(setLiveQuizzes(updatedLiveQuizzes));
    dispatch(setQuizPlayPage(false));
    dispatch(setReviewAnswerModule(false));
    dispatch(setEndOfQuizModule(false));
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
    dispatch(setReviewAnswerModule(false));
  }

  return (
    <div className="w-full h-full overflow-hidden fixed bg-[#0000002a] top-0 left-0 flex justify-center items-center">
      <div className="w-[30%] h-[95vh] rounded-3xl z-30 bg-[#fff] mt-4 px-8 pt-8 pb-4  flex flex-col justify-start">
        <div className="flex justify-between items-center">
          <p className="font-Rubik font-medium text-2xl text-textColorNeutralBlack_0C092A">
            {languageArray[0].reviewAnswers}
          </p>
        </div>
        <div className="w-full h-[15rem] px-6 pt-6 mt-4 bg-primaryColor rounded-2xl flex flex-col justify-between items-center">
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col items-center justify-start w-full">
              <p className="font-Rubik font-medium text-base text-white opacity-70 w-full text-left">
                {languageArray[0].QUIZNAME}
              </p>
              <p className="font-Rubik font-medium text-xl text-white w-full text-left overflow-hidden">
                {playedQuizz?.title}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#796Be3] flex justify-center items-center">
              <img src={puzzle} alt="Puzzle Image" />
            </div>
          </div>
          <div className="flex items-center p-6 mt-2 gap-4 justify-between w-full h-[8rem] relative rounded-t-2xl bg-[#FF8FA2]">
            <img
              src={rigthBottom}
              alt="Background Image"
              className="absolute bottom-0 right-0"
            />
            <img
              src={centerBottom}
              alt="Background Image"
              className="absolute bottom-0 left-28"
            />
            <img
              src={smallTop}
              alt="Background Image"
              className="absolute top-4 right-16"
            />
            <div className="relative">
              <CircularProgressBar {...props} />
              <p className="absolute top-9 left-6 font-Rubik font-medium text-xl text-white">
                {answeredQuestions}/{playedQuizz?.questions?.length}
              </p>
            </div>
            {language === "eng" && (
              <p className="font-Rubik font-medium text-base text-white">
                You answered {answeredQuestions} out of{" "}
                {playedQuizz?.questions?.length} questions
              </p>
            )}
            {language === "aze" && (
              <p className="font-Rubik font-medium text-base text-white">
                Siz {playedQuizz?.questions?.length} sualdan {answeredQuestions}{" "}
                sualı cavablandırdınız.
              </p>
            )}
          </div>
        </div>
        <p className="font-Rubik font-medium text-xl text-textColorNeutralBlack_0C092A mt-6">
          {languageArray[0].yourGainedPoinst}
        </p>
        <div className="bg-[#EFEEFC] w-full h-[30rem] pl-6 pr-2 pt-6 mt-4 rounded-2xl flex flex-col justify-start items-center gap-3 overflow-y-auto">
          {playedQuizz?.questions?.map((question, index) => (
            <div
              key={index}
              className="w-full flex justify-between items-start gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                {question.id}
              </div>
              {question.type !== "Voice note" ? (
                <p className="w-[80%] break-words font-Rubik font-medium text-base text-textColorNeutralBlack_0C092A">
                  {question.question}
                </p>
              ) : (
                <p className="w-[80%] break-words font-Rubik font-medium text-base text-textColorNeutralBlack_0C092A">
                  Voive Question
                </p>
              )}
              <p className="font-Rubik font-medium text-base text-primaryColor">
                {question.gainedPoints}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end items-center w-full mt-4">
          <button
            onClick={() => handleClickSubmit()}
            className="w-[47%] h-[3.2rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-primaryColor focus:secondColor focus:ring-offset-2 transition-colors duration-300"
          >
            {languageArray[0].submit}
          </button>
        </div>
      </div>
    </div>
  );
}
