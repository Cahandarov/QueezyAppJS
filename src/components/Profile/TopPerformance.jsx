import chart from "../Profile/images/chart.svg";
import { useSelector } from "react-redux";
import divider from "./images/Divider.svg";

export default function TopPerformance() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const token = JSON.parse(localStorage.getItem("token"));
  const quizzes = useSelector((state) => state.quizzes.quizzes);

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
        category: quiz.categoryName,
        correctAnswers: playedQuiz ? playedQuiz.correctAnswers : [],
        incorrectAnswers: playedQuiz ? playedQuiz.wrongAnswers : [],
      };
    });

  const categoryTotals = findPlayedQuizFromLibrary.reduce((acc, quiz) => {
    const { category, correctAnswers, incorrectAnswers } = quiz;

    if (!acc[category]) {
      acc[category] = { correctAnswers: 0, incorrectAnswers: 0 };
    }

    acc[category].correctAnswers += correctAnswers;
    acc[category].incorrectAnswers += incorrectAnswers;

    return acc;
  }, {});

  const categoryTotalsArray = Object.entries(categoryTotals).map(
    ([category, { correctAnswers, incorrectAnswers }]) => ({
      category,
      correctAnswers,
      incorrectAnswers,
    })
  );
  categoryTotalsArray.sort(
    (b, a) =>
      b.incorrectAnswers / b.correctAnswers -
      a.incorrectAnswers / a.correctAnswers
  );
  const top3Categories = categoryTotalsArray.slice(0, 3);
  const percent1 = Math.round(
    (top3Categories[0]?.correctAnswers /
      (top3Categories[0]?.correctAnswers +
        top3Categories[0]?.incorrectAnswers)) *
      100
  );

  console.log(percent1);
  const percent2 = Math.round(
    (top3Categories[1]?.correctAnswers /
      (top3Categories[1]?.correctAnswers +
        top3Categories[1]?.incorrectAnswers)) *
      100
  );
  const percent3 = Math.round(
    (top3Categories[2]?.correctAnswers /
      (top3Categories[2]?.correctAnswers +
        top3Categories[2]?.incorrectAnswers)) *
      100
  );

  return (
    <div className="w-full h-[22rem] relative bg-[#6A5AE0] rounded-[1.25rem] px-6 pt-4 pb-14 flex flex-col">
      <div className="w-full flex justify-between items-center">
        <p className="font-Rubik font-medium text-xl text-white">
          {languageArray[0].topPerformanceByCategory}
        </p>
        <div className="bg-[#887BE6] w-10 h-10 rounded-xl flex justify-center items-center">
          <img src={chart} alt="Chart Icone" />
        </div>
      </div>
      {top3Categories.length ? (
        <div className="relative">
          <div className="flex flex-col w-[80%] gap-5 mt-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="w-full flex justify-start items-center gap-1"
              >
                <p className="font-Rubik font-medium text-base text-white">
                  {index === 0
                    ? "100%"
                    : index === 1
                    ? "75%"
                    : index === 2
                    ? "50%"
                    : index === 3
                    ? "25%"
                    : "0%"}
                </p>
                <img src={divider} alt="Divider" className="w-full" />
              </div>
            ))}
          </div>

          {top3Categories.length && (
            <div className="gap-[19px] -right-8 top-[0.8rem]  absolute flex flex-col items-start">
              {top3Categories.length && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-4 rounded-md bg-[#FFD6DD]"></div>
                  <p className="font-Rubik font-medium text-base text-white overflow-hidden w-24">
                    {top3Categories[0]?.category}
                  </p>
                </div>
              )}
              {top3Categories.length > 1 && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-4 rounded-md bg-[#C4D0FB]"></div>
                  <p className="font-Rubik font-medium text-base text-white overflow-hidden w-24">
                    {top3Categories[1]?.category}
                  </p>
                </div>
              )}
              {top3Categories.length > 2 && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-4 rounded-md bg-[#A9ADF3]"></div>
                  <p className="font-Rubik font-medium text-base text-white overflow-hidden w-24">
                    {top3Categories[2]?.category}
                  </p>
                </div>
              )}
            </div>
          )}
          <div className="flex justify-start h-44 items-end gap-12 absolute bottom-3 left-[5.8rem]">
            <div
              className="w-14 rounded-lg bg-[#FFD6DD] chart"
              style={{
                height: `${percent1}%`,
              }}
            ></div>
            <div
              className="w-14 rounded-lg bg-[#C4D0FB] chart"
              style={{
                height: `${percent2}%`,
              }}
            ></div>
            <div
              className="w-14 h-[${percent3}] rounded-lg bg-[#A9ADF3] chart"
              style={{
                height: `${percent3}%`,
              }}
            ></div>
          </div>

          {top3Categories.length && (
            <div className="w-[79.3%] h-[2rem] pl-[1.5rem] gap-6 left-14 -bottom-12  absolute flex items-center">
              {top3Categories.length && (
                <div className="flex flex-col items-center justify-center">
                  <p className="font-Rubik font-medium text-base text-white text-center">
                    {top3Categories[0]?.incorrectAnswers} /{" "}
                    {top3Categories[0]?.correctAnswers}
                  </p>

                  <p className="font-Rubik font-normal text-sm text-white text-center w-20">
                    {languageArray[0]?.questionsAswered}
                  </p>
                </div>
              )}
              {top3Categories.length > 1 && (
                <div className="flex flex-col items-center justify-center">
                  <p className="font-Rubik font-medium text-base text-white text-center ">
                    {top3Categories[1]?.incorrectAnswers} /{" "}
                    {top3Categories[1]?.correctAnswers}
                  </p>
                  <p className="font-Rubik font-normal text-sm text-white text-center w-20">
                    {languageArray[0]?.questionsAswered}
                  </p>
                </div>
              )}
              {top3Categories.length > 2 && (
                <div className="flex flex-col items-center justify-center">
                  <p className="font-Rubik font-medium text-base text-white text-center">
                    {top3Categories[2]?.incorrectAnswers} /{" "}
                    {top3Categories[2]?.correctAnswers}
                  </p>
                  <p className="font-Rubik font-normal text-sm text-white text-center w-20">
                    {languageArray[0]?.questionsAswered}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center z-50">
          <p className="font-Rubik font-medium text-lg text-white">
            You have not played the quiz yet.
          </p>
        </div>
      )}
    </div>
  );
}
