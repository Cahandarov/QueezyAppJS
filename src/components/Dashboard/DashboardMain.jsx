import { useEffect } from "react";
import Favorits from "./Favorits/Favorits";
import LastAddesQuizzes from "./LastAddedQuizzes/LastAddedQuizzes";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import QuizPerformance from "./QuizPerformance/QuizPerformance";
import CreatedQuizzes from "./CreatedQuizzes/CreatedQuizzes";

export default function DashboardMain() {
  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      try {
        const token = JSON.parse(tokenString);
        console.log("User logged in with token:", token);
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    } else {
      console.log("No token found. User not logged in.");
    }
  });
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly gap-6 flex-wrap w-full h-full  min-h-[1086px] px-8 pt-10 pb-[1.6rem] bg-[#FBFBFC]">
      <QuizPerformance />
      <Favorits />
      <LeaderBoard />
      <LastAddesQuizzes />
      <CreatedQuizzes />
    </div>
  );
}
