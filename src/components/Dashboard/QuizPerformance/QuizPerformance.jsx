import PieChartMain from "./PieChartMain";
import PieCharMobile from "./PieChartMobile";
import { useSelector } from "react-redux";

export default function QuizPerformance() {
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const languageArray = useSelector((state) => state.language.languageArray);

  const categoryCounts =
    quizzes &&
    quizzes?.reduce((counts, quiz) => {
      const categoryName = quiz?.categoryName;
      counts[categoryName] = (counts[categoryName] || 0) + 1;
      return counts;
    }, {});
  // console.log(categoryCounts);

  const sortedCategories =
    categoryCounts &&
    Object.keys(categoryCounts).sort(
      (a, b) => categoryCounts[b] - categoryCounts[a]
    );
  // console.log(sortedCategories);
  const mostThreeCategories = sortedCategories.slice(0, 3);
  const result = [];

  mostThreeCategories.forEach((category) => {
    const quizzesForCategory = quizzes?.filter(
      (quiz) => quiz?.categoryName === category
    );
    result.push({ category, quizzes: quizzesForCategory });
  });

  // console.log(result);

  return (
    <div className="w-full sm:w-[80%] md:w-[47%] lg:w-[23rem] h-[27rem] sm:h-[30rem] order-1 p-6 flex justify-start items-center flex-col rounden-[2rem] bg-white dashboard_boxes">
      <p className="text-sm sm:text-xl mb-2 w-full md:text-2xl font-medium text-left font-Rubik text-textColorNeutralBlack_0C092A leading-10">
        {languageArray[0].quizPerformance}
      </p>
      <PieChartMain totalLength={quizzes.length} sortedData={result} />
      <PieCharMobile totalLength={quizzes.length} sortedData={result} />
    </div>
  );
}
