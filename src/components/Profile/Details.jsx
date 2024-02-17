import { useSelector } from "react-redux";
import SelectOptionDetails from "./SelectOptionDetails";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function Details() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const token = JSON.parse(localStorage.getItem("token"));
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const [selectedOption, setSelectedOption] = useState("Monthly");

  const OneMonthInMseconds = 30 * 24 * 60 * 60 * 1000;
  const OneYearInMseconds = 365 * 24 * 60 * 60 * 1000;
  const dateNowInMseconds = new Date().getTime();
  const OneMonth_AGO_InMseconds = dateNowInMseconds - OneMonthInMseconds;
  const OneYear_AGO_InMseconds = dateNowInMseconds - OneYearInMseconds;

  const findPlayedQuizFromLibrary = quizzes
    .filter((quiz) =>
      token?.playedQuizzes?.some((playedQuiz) => playedQuiz.id === quiz.id)
    )
    .map((quiz) => {
      const playedQuiz = token.playedQuizzes.find(
        (playedQuiz) => playedQuiz.id === quiz.id
      );

      return {
        id: quiz.id,
        title: quiz.title,
        category: quiz.categoryName,
        score: playedQuiz ? playedQuiz.score : [],
        result: playedQuiz ? playedQuiz.result : [],
        date: playedQuiz ? playedQuiz.date : [],
      };
    });
  console.log(findPlayedQuizFromLibrary);

  const playedQuizzesMonthly = findPlayedQuizFromLibrary
    .filter((quiz) => {
      const playedDateInMseconds = new Date(quiz.date).getTime();
      if (playedDateInMseconds >= OneMonth_AGO_InMseconds) {
        return quiz;
      }
    })
    .sort((b, a) => a.date - b.date);
  // const slicedPlayedQuizzesMonthly = playedQuizzesMonthly.slice(0, 4);

  const playedQuizzesAnnual = findPlayedQuizFromLibrary
    .filter((quiz) => {
      const playedDateInMseconds = new Date(quiz.date).getTime();
      if (playedDateInMseconds >= OneYear_AGO_InMseconds) {
        return quiz;
      }
    })
    .sort((b, a) => a.date - b.date);
  // const slicedPlayedQuizzesAnnual = playedQuizzesAnnual.slice(0, 4);

  useEffect(() => {
    if (selectedOption === "Monthly") {
      setPlayedQuizzes(playedQuizzesMonthly);
    } else if (selectedOption === "Annual") {
      setPlayedQuizzes(playedQuizzesAnnual);
    }
  }, [selectedOption]);
  const [playedQuizzes, setPlayedQuizzes] = useState(playedQuizzesMonthly);
  console.log(playedQuizzes);
  return (
    <div className="w-full flex flex-wrap justify-start items-start gap-4 mt-6">
      <div className="flex items-center justify-between w-full">
        <p className="font-Rubik font-medium text-[1.25rem] text-black">
          Played Quizzes
        </p>
        <SelectOptionDetails
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <div className="w-full h-[33rem] px-6 py-2 border-2 border-[#EFEEFC] rounded-2xl flex flex-col gap-4 overflow-auto">
        {playedQuizzes.map((quiz, index) => (
          <div key={index} className="flex items-center w-full">
            <div className="flex flex-col w-[60%] py-4 border-b border-[#EFEEFC]">
              <div className="flex justify-start items-center gap-2 ">
                <p className="w-[4.5rem] font-Rubik font-normal  text-sm text-[#858494] overflow-hidden">
                  {languageArray[0].Category}:
                </p>
                <p className="font-Rubik font-medium text-base text-black overflow-hidden">
                  {quiz.category}
                </p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="w-[4.5rem] font-Rubik font-normal text-sm text-[#858494] overflow-hidden">
                  {languageArray[0].quizName}:
                </p>
                <p className="font-Rubik font-medium text-base text-black overflow-hidden">
                  {quiz.title}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-[30%]">
              <p className="font-Rubik font-normal text-sm text-[#858494] overflow-hidden">
                {languageArray[0].date}
              </p>
              <p className="font-Rubik font-medium text-base text-black overflow-hidden">
                {format(quiz.date, "dd.MM.yyyy")}
              </p>
            </div>
            <div
              className={`w-[10%] h-8 rounded-md ${
                quiz.result === "Passed" ? "bg-[#5BD7BC]" : "bg-[#FF6681]"
              } flex justify-center items-center font-Rubik font-normal text-base text-white`}
            >
              {quiz.score}
            </div>
          </div>
        ))}
        {playedQuizzes.length === 0 && (
          <div className="w-full h-[33rem] flex justify-center items-center z-50">
            <p className="font-Rubik font-medium text-lg text-black">
              You have not played the quiz yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
