// import MyCalendar from "./MyCalendar";

import { useSelector } from "react-redux";
import CalendarShort from "./CalendarShort";

export default function OnGoningQuiz() {
  const languageArray = useSelector((state) => state.language.languageArray);
  return (
    <div className="w-full h-full p-6 flex flex-col gap-4 rounden-[2rem] bg-white dashboard_boxes z-0">
      <div className="flex justify-between items-center">
        <p className="text-sm sm:text-2xl font-medium font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          {languageArray[0].ongoingQuiz}
        </p>
        <button className="text-sm sm:text-base font-medium font-Rubik text-primaryColor">
          {languageArray[0].seeAll}
        </button>
      </div>

      {/* <MyCalendar /> */}

      <CalendarShort />
    </div>
  );
}
