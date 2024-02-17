import LeaderboardButton from "./LeaderboardButton";
import Podium from "./Podium";
// import { UsersData } from "./LeaderBoardData";
import { useEffect, useState } from "react";
import LeaderboardButtonMobile from "./LeaderBoardButtonMobile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LeaderBoard() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const [viewType, setViewType] = useState("Weekly");
  const users = useSelector((state) => state?.login?.users);
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    function ToggleLeaderBoard() {
      if (viewType === "Weekly") {
        const OneWeekInMseconds = 7 * 24 * 60 * 60 * 1000;
        const dateNowInMseconds = new Date().getTime();
        const OneWeek_AGO_InMseconds = dateNowInMseconds - OneWeekInMseconds;
        const WeeklyData = users
          .map((users) => ({
            Name: users.firstName,
            Surname: users.lastName,
            avatar: users.avatar,
            country: users.country,
            pointsTotal: users.pointsTotal.reduce((acc, entry) => {
              const gainedPointInMseconds = new Date(
                entry.gainedDate
              ).getTime();
              if (gainedPointInMseconds >= OneWeek_AGO_InMseconds) {
                acc += entry.point;
              }
              return acc;
            }, 0),
          }))
          .sort((a, b) => b.pointsTotal - a.pointsTotal)
          .slice(0, 3);
        setLeaderBoardData(WeeklyData);
      } else if (viewType === "All Time") {
        const AllTimesData = users
          .map((users) => ({
            Name: users.firstName,
            Surname: users.lastName,
            avatar: users.avatar,
            country: users.country,
            pointsTotal: users.pointsTotal.reduce((acc, entry) => {
              acc += entry.point;
              return acc;
            }, 0),
          }))
          .sort((a, b) => b.pointsTotal - a.pointsTotal)
          .slice(0, 3);
        setLeaderBoardData(AllTimesData);
      }
    }

    ToggleLeaderBoard();
  }, [viewType]);

  return (
    <div className="w-full sm:w-[80%] md:w-[47%] lg:w-[23rem] h-[25rem] sm:h-[30rem] order-3 px-6 pt-6 pb-0 flex flex-col justify-between gap-0 sm:gap-6 rounden-[2rem] bg-white dashboard_boxes">
      <div className="flex justify-between items-center">
        <p className="text-sm sm:text-xl md:text-2xl font-medium text-left font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          {languageArray[0].leaderboard}
        </p>
        <button
          onClick={() => navigate("/leaderboard")}
          className="text-sm sm:text-base font-medium font-Rubik text-primaryColor"
        >
          {languageArray[0].seeAll}
        </button>
      </div>
      <div className="z-0">
        <LeaderboardButton setViewType={setViewType} />
        <LeaderboardButtonMobile setViewTypeM={setViewType} />
      </div>

      <Podium leaderBoardData={leaderBoardData} />
    </div>
  );
}
