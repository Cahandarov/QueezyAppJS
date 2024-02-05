import { useDispatch, useSelector } from "react-redux";
import questionIcon from "./images/questionIcon.svg";
import pointsIcon from "./images/pointsIcon.svg";
import avatarPNG from "./images/Avatar.png";
import SuggestedQuizItem from "./SuggestedQuizItem";
import { useNavigate } from "react-router-dom";
import { setDashboardMainPage } from "../Dashboard/dashboardSlice";
import { setQuizLibraryMainPage } from "../QuizLibary/createQuizSlice";
import {
  setDiscoverMainPage,
  setQuizDetailsPage,
  setQuizPlayPage,
  setSelectedQuiz,
} from "./discoverSlice";
import { useEffect, useRef, useState } from "react";
import { setSideBarPage } from "../ui/uiSlice";
import {
  setLiveQuizzes,
  setPlayedQuizz,
  setQuizPlayStatus,
  setRunningTime,
} from "./QuizPlayPage/quizPlaySlice";

export default function QuizDetails() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  const liveQuizzes = useSelector((state) => state.quizPlay.liveQuizzes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sortedSuggestedQuizzes = [...quizzes].sort(
    (a, b) => b.timesPlayed - a.timesPlayed
  );
  const slicedSuggestedQuizzes = sortedSuggestedQuizzes.slice(0, 5);
  const [suggestedQuizzes, setQuggestedQuizzes] = useState(
    slicedSuggestedQuizzes
  );
  const [showAllQuiezzez, setShowAllQuizzes] = useState(false);

  // console.log(selectedQuiz);

  const totalPoints = selectedQuiz
    ? selectedQuiz.questions.reduce((total, question) => {
        if (question.score !== undefined) {
          return total + question.score;
        } else {
          console.error("Question does not have a 'score' property:", question);
          return total;
        }
      }, 0)
    : 0;

  function handleClickQuizItems(id) {
    const clickedQuiz = quizzes.find((quiz) => quiz.id === id);

    if (clickedQuiz) {
      dispatch(setSelectedQuiz(clickedQuiz));
    }
  }
  useEffect(() => {
    return () => {
      // console.log("Selected Quiz:", selectedQuiz);
    };
  }, [selectedQuiz]);

  useEffect(() => {
    // console.log(liveQuizzes);
  }, [liveQuizzes]);

  const scrollRef = useRef(null);
  function handleSeeAll() {
    if (!showAllQuiezzez) {
      setQuggestedQuizzes(sortedSuggestedQuizzes);
      setShowAllQuizzes(true);
      scrollRef.current.style.overflow = "auto";
      scrollRef.current.style.gap = "10px";
    } else {
      setQuggestedQuizzes(slicedSuggestedQuizzes);
      setShowAllQuizzes(false);
      scrollRef.current.style.overflow = "hidden";
    }
  }

  function handleBackToDiscoverMain() {
    dispatch(setDiscoverMainPage(true));
    dispatch(setQuizDetailsPage(false));
    dispatch(setQuizLibraryMainPage(true));
    navigate(-1);
    dispatch(setDashboardMainPage(true));
  }

  function handlePlayQuiz() {
    navigate("/discover/quizPlay");
    dispatch(setSideBarPage(false));
    dispatch(setQuizPlayPage(true));
    dispatch(setQuizDetailsPage(false));
    dispatch(setQuizPlayStatus("playing"));
    dispatch(setRunningTime(selectedQuiz.questions[0].answerTime));
    // console.log(selectedQuiz);
    dispatch(setLiveQuizzes([...liveQuizzes, selectedQuiz]));
    // console.log(liveQuizzes);
    document.body.style.height = "100vh";
    const playedQuiz = {
      id: selectedQuiz.id,
      categoryName: selectedQuiz.categoryName,
      title: selectedQuiz.title,
      questions: [],
    };
    dispatch(setPlayedQuizz(playedQuiz));
  }

  return (
    <div className="w-full max-h-fit min-h-[1084px] flex flex-col px-10 pt-10 pb-4 bg-[#FBFBFC] gap-6 justify-start items-center">
      <p className="w-full font-Rubik font-medium text-base text-primaryColor">
        {languageArray[0].discover}{" "}
        <span className="w-full font-Rubik font-normal text-base text-[#858494]">
          {" "}
          / {languageArray[0].detailQuiz}
        </span>
      </p>
      <div className="flex w-full justify-center items-start gap-8 mx-auto">
        <div className="boxShadow flex flex-col max-h-fit w-[60%] rounded-[2rem] p-8 mb-2 border-2 border-[#EFEEFC] bg-white ">
          <img
            src={selectedQuiz.coverImage}
            alt="Cover Image"
            className="w-full max-h-[23rem] mb-6"
          />
          <p className="font-Rubik font-medium text-base text-[#858494] uppercase">
            {selectedQuiz.categoryName}
          </p>
          <p className="font-Rubik font-medium text-2xl text-textColorNeutralBlack_0C092A">
            {selectedQuiz.title}
          </p>
          <div className="w-[60%] h-16 rounded-2xl bg-[#EFEEFC] flex justify-center items-center mt-6 p-4">
            <div className="flex items-center justify-start gap-3 border-r-2 border-slate-200 w-[50%]">
              <img src={questionIcon} alt="Question Icon" />
              <p className="font-Rubik font-medium text-base text-textColorNeutralBlack_0C092A">
                {selectedQuiz.questions.length}{" "}
                <span> {languageArray[0].questions}</span>
              </p>
            </div>
            <div className="flex items-center justify-start gap-3 w-[50%] pl-4">
              <img src={pointsIcon} alt="Points Icon" />
              <p className="font-Rubik font-medium text-base text-textColorNeutralBlack_0C092A">
                {totalPoints} <span> {languageArray[0].points}</span>
              </p>
            </div>
          </div>
          <p className="font-Rubik font-medium text-base text-[#858494] uppercase mt-6">
            {languageArray[0].description}
          </p>
          <p className="font-Rubik  font-normal text-base text-[#49465F] mt-2">
            {selectedQuiz.description}
          </p>
          <div className="w-full flex items-center mt-6 gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C4D0FB] flex justify-center items-center ">
              <img
                src={avatarPNG}
                alt="Avatar"
                className="w-[2.4rem] h-[2.5rem]"
              />
            </div>
            <div className="flex flex-col item-start gap-1">
              <p className="font-Rubik font-medium text-base text-textColorNeutralBlack_0C092A">
                Brandon Curtis
              </p>
              <p className="font-Rubik font-normal text-sm text-[#858494]">
                {languageArray[0].Creator}
              </p>
            </div>
          </div>
          <div className="w-full border-t-2 border-[#EFEEFC] flex justify-end items-center gap-4 mt-6">
            <button
              onClick={() => handleBackToDiscoverMain()}
              className="w-[25%] h-[3.2rem] mt-8 rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-primaryColor bg-white border-2 border-primaryColor hover:bg-slate-100 hover:border-slate-400 focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
            >
              {languageArray[0].Back}
            </button>
            <button
              onClick={() => handlePlayQuiz()}
              className="w-[35%] h-[3.2rem] mt-8 rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
            >
              {languageArray[0].Play}
            </button>
          </div>
        </div>
        <div className="boxShadow flex flex-col h-[41rem] w-[40%] rounded-[2rem] p-8 mb-2 border-2 border-[#EFEEFC] bg-white ">
          <div className="w-full flex justify-between items-center mb-6">
            <p className="font-Rubik font-medium text-2xl text-textColorNeutralBlack_0C092A">
              {languageArray[0].suggestForYou}
            </p>
            <button
              onClick={() => handleSeeAll()}
              className="font-Rubik font-medium text-sm text-primaryColor"
            >
              {!showAllQuiezzez
                ? languageArray[0].seeAll
                : languageArray[0].seeLess}
            </button>
          </div>
          <div
            className="flex flex-col justify-start gap-4 pr-1"
            ref={scrollRef}
          >
            {suggestedQuizzes.map((quiz, index) => (
              <button
                onClick={() => handleClickQuizItems(quiz?.id)}
                className="flex justify-center items-center"
                key={index}
              >
                <SuggestedQuizItem
                  quizName={quiz.title}
                  cover={quiz.coverImage}
                  category={quiz.categoryName}
                  QuizzesInThisCategory={
                    quizzes.filter(
                      (item) => item.categoryName === quiz.categoryName
                    ).length
                  }
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
