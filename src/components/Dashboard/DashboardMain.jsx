import Favorits from "./Favorits/Favorits";
import Friends from "./Friends/Friends";
import LastAddesQuizzes from "./LastAddedQuizzes/LastAddedQuizzes";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import QuizPerformance from "./QuizPerformance/QuizPerformance";

export default function DashboardMain() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly gap-6 flex-wrap w-full h-full  min-h-[1086px] px-8 pt-10 pb-[1.6rem] bg-[#FBFBFC]">
      <QuizPerformance />
      <Favorits />
      <LeaderBoard />
      <LastAddesQuizzes />
      <Friends />
    </div>
  );
}
