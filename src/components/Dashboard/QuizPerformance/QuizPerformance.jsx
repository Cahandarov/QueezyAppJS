import PieChartMain from "./PieChartMain";
import PieCharMobile from "./PieChartMobile";
import { useSelector } from "react-redux";

export default function QuizPerformance() {
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const quizzData = quizzes ? Object.entries(quizzes.categories || {}) : [];

  const totalLength = quizzData.reduce(
    (acc, [, items]) => acc + items.length,
    0
  );
  console.log(totalLength);
  const sortedData = [...quizzData]
    .sort(([, a], [, b]) => b.length - a.length)
    .slice(0, 3);
  return (
    <div className="w-full sm:w-[80%] md:w-[47%] lg:w-[23rem] h-[27rem] sm:h-[30rem] lg:order-1 p-6 flex justify-start items-center flex-col rounden-[2rem] bg-white dashboard_boxes">
      <p className="text-sm sm:text-2xl font-medium w-full text-left font-Rubik text-textColorNeutralBlack_0C092A leading-10 mb-6 ">
        Quiz Performance
      </p>
      <PieChartMain totalLength={totalLength} sortedData={sortedData} />
      <PieCharMobile totalLength={totalLength} sortedData={sortedData} />
    </div>
  );
}

// const categories = Object.keys(quizzes.categories);
// console.log(categories);
// console.log(Object.keys(quizzes.categories).length);
