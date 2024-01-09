import Friends from "./Friends/Friends";
import LastAddesQuizzes from "./LastAddedQuizzes/LastAddedQuizzes";
import LeaderBoard from "./LeaderBoard/LeaderBoard";

import OnGoningQuiz from "./OngoingQuiz/OnGoningQuiz";
import QuizPerformance from "./QuizPerformance/QuizPerformance";
import RecentQuiz from "./RecentQuiz/RecentQuiz";

export default function DashboardMain() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly gap-6 flex-wrap w-full h-full  min-h-[1086px] px-8 pt-10 pb-[1.6rem] bg-[#FBFBFC]">
      <QuizPerformance />
      <div className="flex order-2 flex-col w-full sm:w-[80%] md:w-[47%] lg:w-[23rem] sm:h-[30rem] gap-8">
        <RecentQuiz />
        <OnGoningQuiz />
      </div>
      <LeaderBoard />
      <LastAddesQuizzes />
      <Friends />
    </div>
  );
}
