import PieChartMain from "./PieChartMain";
import PieCharMobile from "./PieChartMobile";

export default function QuizPerformance() {
  return (
    <div className="w-full sm:w-[80%] md:w-[47%] lg:w-[23rem] h-[27rem] sm:h-[30rem] lg:order-1 p-6 flex justify-start items-center flex-col rounden-[2rem] bg-white dashboard_boxes">
      <p className="text-sm sm:text-2xl font-medium w-full text-left font-Rubik text-textColorNeutralBlack_0C092A leading-10 mb-6 ">
        Quiz Performance
      </p>
      <PieChartMain />
      <PieCharMobile />
    </div>
  );
}
