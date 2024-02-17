import React, { useEffect, useState } from "react";
import LeaderboardPageButton from "./LeaderboardPageButton";
import pattern from "./images/bg-pattern.png";
import medalSilver from "./images/MedalSilver.png";
import medalGold from "./images/MedalGold.png";
import medalBronz from "./images/MedalBronz.png";
import CountryFlag from "react-country-flag";
import { CountriesData } from "../ui/CountriesData";
import "./leaderboard.css";
import AvatarColoredLetter from "../ui/AvatarColoredLetter";
import { useSelector } from "react-redux";
import { eng } from "../ui/languageData";

export default function LeaderboardMain() {
  const [viewType, setViewType] = useState("Weekly");
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const languageArray = useSelector((state) => state.language.languageArray);
  const enteries = Object.entries(eng);
  const users = useSelector((state) => state?.login?.users);

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
          .sort((a, b) => b.pointsTotal - a.pointsTotal);
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
          .sort((a, b) => b.pointsTotal - a.pointsTotal);
        setLeaderBoardData(AllTimesData);
      }
    }

    ToggleLeaderBoard();
  }, [viewType, users.length]);
  return (
    <div className="flex flex-col w-full h-full min-h-[1086px] px-10 pt-10 bg-[#FBFBFC]">
      <div className="boxShadow flex flex-col mx-auto justify-start items-start h-full md:h-[65.5rem] w-full rounded-t-[2rem] p-8 border-2 border-[#EFEEFC] bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <p className="font-Rubik font-medium text-lg sm:text-xl md:text-2xl text-[#49465F]">
            {languageArray[0].leaderboard}
          </p>
          <div className="w-[150px] sm:w-[280px] h-[30px] sm:h-[50px] your-required-wrapper font-medium font-base">
            <LeaderboardPageButton
              viewType={viewType}
              setViewType={setViewType}
            />
          </div>
        </div>
        <div className="w-full max-h-max sm:h-[17rem] flex flex-col sm:flex-row justify-center items-center sm:items-end gap-8 rounded-[1.25rem] relative mt-7 bg-primaryColor px-8 pt-8 pb-10">
          <img
            src={pattern}
            alt="Pattern"
            className="absolute bottom-0 hidden sm:table "
          />
          <div className="sm:w-[10rem] h-[11rem] order-2 sm:order-1 bg-white rounded-2xl px-4 pt-6 pb-10 flex flex-col justify-between items-center relative">
            <div className="w-8 h-8 rounded-full border-2 border-primaryColor absolute flex justify-center items-center font-Rubik font-medium text-base text-primaryColor bg-white -bottom-4">
              2
            </div>
            <div className="flex relative w-20 mx-auto">
              <div className="w-[40px] h-[40px] rounded-full bg-[#FFD6DD] z-10">
                {leaderBoardData[1]?.avatar ? (
                  <img
                    src={leaderBoardData[1]?.avatar}
                    alt="Avatar"
                    className="rounded-b-full absolute bottom-0 left-[2px] w-[38px]"
                  />
                ) : (
                  <AvatarColoredLetter
                    name={leaderBoardData[1]?.Name}
                    surname={leaderBoardData[1]?.Surname}
                  />
                )}

                <div className="absolute bottom-0 left-8 ">
                  {
                    <CountryFlag
                      countryCode={
                        CountriesData.filter(
                          (country) =>
                            country.name === leaderBoardData[1]?.country
                        )[0]?.code
                      }
                      svg
                      style={{ width: "1.33rem", height: "1rem" }}
                    />
                  }
                </div>
              </div>
              <img
                src={medalSilver}
                alt="Silver Medal"
                className="absolute left-9 z-0 w-[40px]"
              />
            </div>
            <p className="font-Rubik text-center font-medium text-xs sm:text-sm md:text-base text-[#49465F] mx-auto">
              {leaderBoardData[1]?.Name} {leaderBoardData[1]?.Surname}
            </p>
            <p className="font-Rubik font-normal text-xs md:text-sm text-[#858494] text-center">
              <span>{leaderBoardData[1]?.pointsTotal}</span>{" "}
              {languageArray[0].points}
            </p>
          </div>
          <div className="sm:w-[10rem] h-[12rem] order-1 sm:order-2 bg-white rounded-2xl px-4 pt-6 pb-10 flex flex-col justify-between items-center relative">
            <div className="w-8 h-8 rounded-full border-2 border-primaryColor absolute flex justify-center items-center font-Rubik font-medium text-base text-primaryColor bg-white -bottom-4">
              1
            </div>
            <div className="flex relative w-20 mx-auto">
              <div className="w-[40px] h-[40px] rounded-full bg-[#C9F2E9] z-10">
                {leaderBoardData[0]?.avatar ? (
                  <img
                    src={leaderBoardData[0]?.avatar}
                    alt="Avatar"
                    className="rounded-b-full absolute bottom-0 left-[2px] w-[38px]"
                  />
                ) : (
                  <AvatarColoredLetter
                    name={leaderBoardData[0]?.Name}
                    surname={leaderBoardData[0]?.Surname}
                  />
                )}

                <div className="absolute bottom-0 left-8 ">
                  {
                    <CountryFlag
                      countryCode={
                        CountriesData.filter(
                          (country) =>
                            country.name === leaderBoardData[0]?.country
                        )[0]?.code
                      }
                      svg
                      style={{ width: "1.33rem", height: "1rem" }}
                    />
                  }
                </div>
              </div>
              <img
                src={medalGold}
                alt="Silver Medal"
                className="absolute left-9 z-0 w-[40px]"
              />
            </div>
            <p className="font-Rubik text-center font-medium text-xs sm:text-sm md:text-base text-[#49465F] mx-auto">
              {leaderBoardData[0]?.Name} {leaderBoardData[0]?.Surname}
            </p>
            <p className="font-Rubik font-normal text-xs md:text-sm text-[#858494] text-center">
              <span>{leaderBoardData[0]?.pointsTotal}</span>{" "}
              {languageArray[0].points}
            </p>
          </div>
          <div className="sm:w-[10rem] h-[10rem] order-3 sm:order-3 bg-white rounded-2xl px-4 pt-6 pb-10 flex flex-col justify-between items-center relative">
            <div className="w-8 h-8 rounded-full border-2 border-primaryColor absolute flex justify-center items-center font-Rubik font-medium text-base text-primaryColor bg-white -bottom-4">
              3
            </div>
            <div className="flex relative w-20 mx-auto">
              <div className="w-[40px] h-[40px] rounded-full bg-[#C4D0FB] z-10">
                {leaderBoardData[2]?.avatar ? (
                  <img
                    src={leaderBoardData[2]?.avatar}
                    alt="Avatar"
                    className="rounded-b-full absolute bottom-0 left-[2px] w-[38px]"
                  />
                ) : (
                  <AvatarColoredLetter
                    name={leaderBoardData[2]?.Name}
                    surname={leaderBoardData[2]?.Surname}
                  />
                )}
                <div className="absolute bottom-0 left-8 ">
                  {
                    <CountryFlag
                      countryCode={
                        CountriesData.filter(
                          (country) =>
                            country.name === leaderBoardData[2]?.country
                        )[0]?.code
                      }
                      svg
                      style={{ width: "1.33rem", height: "1rem" }}
                    />
                  }
                </div>
              </div>
              <img
                src={medalBronz}
                alt="Silver Medal"
                className="absolute left-9 z-0 w-[40px]"
              />
            </div>
            <p className="font-Rubik text-center font-medium text-xs sm:text-sm md:text-base text-[#49465F] mx-auto">
              {leaderBoardData[2]?.Name} {leaderBoardData[2]?.Surname}
            </p>
            <p className="font-Rubik font-normal text-xs md:text-sm text-[#858494] text-center">
              <span>{leaderBoardData[2]?.pointsTotal}</span>{" "}
              {languageArray[0].points}
            </p>
          </div>
        </div>

        <table className="tableLeaderBoard w-full max-h-max mt-6 hidden sm:table ">
          <thead className="h-16 font-Rubik font-normal text-xs sm:text-sm md:text-base text-[#858494]">
            <tr className="p-2 sm:p-4 md:p-6 border-b-2 border-[#EFEEFC]">
              <td className="w-[7%] text-center">{languageArray[0].Rank}</td>
              <td className="pl-2 sm:pl-4 md:pl-6 w-[43%]">
                {languageArray[0].Name}
              </td>
              <td className="pl-2 sm:pl-4 md:pl-6 w-[20%]">
                {languageArray[0].Quiz}
              </td>
              <td className="pl-2 sm:pl-4 md:pl-6 w-[30%]">
                {languageArray[0].Country}
              </td>
            </tr>
          </thead>
          <tbody className="font-Rubik font-normal text-xs sm:text-sm md:text-base text-[#49465F]">
            {leaderBoardData.slice(3, 10).map((user, index) => (
              <tr
                key={index}
                className="h-[4.8rem] border-b-2 border-[#EFEEFC]"
              >
                <td className="w-[7%]">
                  <div className="w-5 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 rounded-full mx-auto border-2 border-[#EFEEFC] flex justify-center items-center mr-1 sm:mr-3 md:mr-6">
                    {index + 4}
                  </div>
                </td>
                <td className="pl-2 sm:pl-4 md:pl-6 w-[43%]">
                  <div className="flex items-center justify-start">
                    {user?.avatar ? (
                      <div className="w-10 h-10 rounded-full bg-[#6223A9] relative">
                        <img
                          src={user.avatar}
                          alt={user.avatar}
                          className="rounded-b-full w-9 absolute bottom-0 left-[2px]"
                        />
                      </div>
                    ) : (
                      <AvatarColoredLetter
                        name={user.Name}
                        surname={user.Surname}
                      />
                    )}
                    <p className="pl-2 sm:pl-4 md:pl-6 overflow-hidden">
                      {user.Name} {user.Surname}
                    </p>
                  </div>
                </td>
                <td className="pl-2 sm:pl-4 md:pl-6 w-[20%]">
                  <p className="text-left">
                    <span>{user.pointsTotal}</span> {languageArray[0].points}
                  </p>
                </td>
                <td className="pl-2 sm:pl-4 md:pl-6 w-[30%]">
                  <div className="flex items-center justify-start">
                    {
                      <CountryFlag
                        countryCode={
                          CountriesData.filter(
                            (country) => country.name === user.country
                          )[0].code
                        }
                        svg
                        style={{ width: "1.5em", height: "1.5em" }}
                      />
                    }

                    <p className="pl-2 sm:pl-4 md:pl-6 overflow-hidden">
                      {
                        languageArray[0][
                          enteries.find((data) => data[1] === user.country)[0]
                        ]
                      }
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="tableLeaderBoard w-full max-h-max mt-6 table sm:hidden ">
          <thead className="h-16 font-Rubik font-normal text-xs sm:text-sm md:text-base text-[#858494] border-b-2 border-b-[#EFEEFC]">
            <tr className="p-2 sm:p-4 md:p-6 ">
              <td rowSpan={3} className="w-[7%] text-center">
                {languageArray[0].Rank}
              </td>
              <td></td>
              <td className="pl-2 sm:pl-4 md:pl-6 w-[43%]">
                {languageArray[0].Name}
              </td>
            </tr>
            <tr className="p-2 sm:p-4 md:p-6">
              <td></td>
              <td className="pl-2 sm:pl-4 md:pl-6 w-[20%]">
                {languageArray[0].Quiz}
              </td>
            </tr>
            <tr className="p-2 sm:p-4 md:p-6">
              <td></td>
              <td className="pl-2 sm:pl-4 md:pl-6 w-[30%]">
                {languageArray[0].Country}
              </td>
            </tr>
          </thead>
          <tbody className="font-Rubik font-normal text-xs sm:text-sm md:text-base text-[#49465F]">
            {leaderBoardData.slice(3, 10).map((user, Index) => (
              <React.Fragment key={Index + 456}>
                <tr>
                  <td rowSpan={3} className="w-[7%]">
                    <div className="w-5 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 rounded-full mx-auto border-2 border-[#EFEEFC] flex justify-center items-center mr-1 sm:mr-3 md:mr-6">
                      {Index + 4}
                    </div>
                  </td>
                  <td rowSpan={3} className="pl-2 sm:pl-4 md:pl-6 w-[11%]">
                    <div className="flex items-center justify-start">
                      {user?.avatar ? (
                        <div className="w-10 h-10 rounded-full bg-[#6223A9] relative">
                          <img
                            src={user.avatar}
                            alt={user.avatar}
                            className="rounded-b-full w-9 absolute bottom-0 left-[2px]"
                          />
                        </div>
                      ) : (
                        <AvatarColoredLetter
                          name={user.Name}
                          surname={user.Surname}
                        />
                      )}
                    </div>
                  </td>
                  <td className="pl-2 sm:pl-4 md:pl-6 w-[60%]">
                    <p className="overflow-hidden">
                      {user.Name} {user.Surname}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="pl-2 sm:pl-4 md:pl-6 w-[20%]">
                    <p className="text-left">
                      <span>{user.pointsTotal}</span> {languageArray[0].points}
                    </p>
                  </td>
                </tr>
                <tr className="border-b-2 border-[#EFEEFC]">
                  <td className="pl-2 sm:pl-4 md:pl-6 w-[30%]">
                    <div className="flex items-center justify-start">
                      {
                        <CountryFlag
                          countryCode={
                            CountriesData.filter(
                              (country) => country.name === user.country
                            )[0].code
                          }
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                        />
                      }

                      <p className="pl-2 sm:pl-4 md:pl-6 overflow-hidden">
                        {
                          languageArray[0][
                            enteries.find((data) => data[1] === user.country)[0]
                          ]
                        }
                      </p>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
