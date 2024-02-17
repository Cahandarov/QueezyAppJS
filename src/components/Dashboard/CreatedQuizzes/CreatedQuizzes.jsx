import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setDiscoverMainPage,
  setQuizDetailsPage,
  setSelectedQuiz,
} from "../../Discover/discoverSlice";
import CreatedQuizItem from "./CreatedQuizItem";

export default function CreatedQuizzes() {
  const scrollRef = useRef(null);
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  const languageArray = useSelector((state) => state.language.languageArray);
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const token = JSON.parse(localStorage.getItem("token"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findCreatedQuizFromLibrary = quizzes.filter((quiz) =>
    token?.createdQuizzes?.some((createdQuiz) => createdQuiz.id === quiz.id)
  );

  const slicedCreatedQuizzes = findCreatedQuizFromLibrary?.slice(0, 4);
  const [createdList, setCreatedList] = useState(slicedCreatedQuizzes);
  const [showAll, setShowAll] = useState(false);
  //

  function handleSeeAll() {
    if (!showAll) {
      setCreatedList(findCreatedQuizFromLibrary);
      setShowAll(true);
      scrollRef.current.style.overflow = "auto";
      scrollRef.current.style.gap = "8px";
    } else {
      setCreatedList(slicedCreatedQuizzes);
      setShowAll(false);
      scrollRef.current.style.overflow = "hidden";
    }
  }
  function handleClickQuizItems(id) {
    const clickedQuiz = quizzes.find((quiz) => quiz.id === id);
    if (clickedQuiz) {
      dispatch(setSelectedQuiz(clickedQuiz));
    }
    navigate("/discover/quizDetails");
    dispatch(setDiscoverMainPage(false));
    dispatch(setQuizDetailsPage(true));
  }
  useEffect(() => {
    return () => {};
  }, [selectedQuiz]);

  useEffect(() => {
    setCreatedList(
      findCreatedQuizFromLibrary?.slice(
        0,
        showAll ? findCreatedQuizFromLibrary?.length : 4
      )
    );
  }, [token?.createdQuizzes?.length, showAll, setCreatedList]);

  return (
    <div className="w-full sm:w-[80%] md:w-[47%] lg:w-[23rem] h-[30rem] order-4 2xl:order-5 p-6 flex flex-col gap-4 rounden-[2rem] bg-white dashboard_boxes">
      <div className="flex justify-between items-center w-full pr-2">
        <p className="text-sm sm:text-xl md:text-2xl font-medium text-left font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          {languageArray[0].createdQuizzes}
        </p>
        {findCreatedQuizFromLibrary?.length > 4 && (
          <button
            className="text-sm sm:text-base font-medium font-Rubik text-primaryColor z-40"
            onClick={handleSeeAll}
          >
            {!showAll ? languageArray[0].seeAll : languageArray[0].seeLess}
          </button>
        )}
      </div>
      {createdList.length ? (
        <div
          className="flex flex-col justify-start w-full gap-1 pt-4 pr-[5px]"
          ref={scrollRef}
        >
          {createdList?.map((quiz, index) => (
            <button onClick={() => handleClickQuizItems(quiz?.id)} key={index}>
              <CreatedQuizItem
                id={quiz?.id}
                quizName={quiz.title}
                cover={quiz.coverImage}
                category={quiz.categoryName}
                QuizzesInThisCategory={
                  quizzes.filter(
                    (item) => item.categoryName === quiz.categoryName
                  ).length
                }
                onClick={() => handleClickQuizItems(quiz?.id)}
              />
            </button>
          ))}
        </div>
      ) : (
        <p className="text-center my-auto text-xs sm:text-xl font-medium font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          {languageArray[0].createdQuizzesText}
        </p>
      )}
    </div>
  );
}
