import PieChartMain from "./PieChartMain";
import PieCharMobile from "./PieChartMobile";
import { useSelector } from "react-redux";

export default function QuizPerformance() {
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  console.log(quizzes);

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
    <div className="w-full sm:w-[80%] md:w-[47%] lg:w-[23rem] h-[27rem] sm:h-[30rem] lg:order-1 p-6 flex justify-start items-center flex-col rounden-[2rem] bg-white dashboard_boxes">
      <p className="text-sm sm:text-2xl font-medium w-full text-left font-Rubik text-textColorNeutralBlack_0C092A leading-10 mb-6 ">
        Quiz Performance
      </p>
      <PieChartMain totalLength={quizzes.length} sortedData={result} />
      <PieCharMobile totalLength={quizzes.length} sortedData={result} />
    </div>
  );
}

// const categories = Object.keys(quizzes.categories);
// console.log(categories);
// console.log(Object.keys(quizzes.categories).length);

// const quizzData = quizzes ? Object.entries(quizzes.categories || {}) : [];

// const totalLength = quizzData.reduce(
//   (acc, [, items]) => acc + items.length,
//   0
// );

// const sortedData = [...quizzData]
//   .sort(([, a], [, b]) => b.length - a.length)
//   .slice(0, 3);
