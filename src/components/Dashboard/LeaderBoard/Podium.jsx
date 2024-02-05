import Place1 from "./images/Rank1.png";
import Place2 from "./images/Rank2.png";
import Place3 from "./images/Rank3.png";
import medal from "./images/Medal.svg";
import CountryFlag from "react-country-flag";
import { CountriesData } from "../../ui/CountriesData";
import AvatarColoredLetter from "../../ui/AvatarColoredLetter";
import { useSelector } from "react-redux";

export default function Podium({ leaderBoardData }) {
  const languageArray = useSelector((state) => state.language.languageArray);
  if (!leaderBoardData || leaderBoardData.length < 3) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex mb-0 pb-0 mx-auto items-end justify-end">
      <div className="flex flex-col items-center pr-0 mr-0 translate-x-1">
        <div className="relative flex items-center justify-center">
          {leaderBoardData[1].avatar ? (
            <img
              src={leaderBoardData[1].avatar}
              alt="avatar"
              className="w-10 h:10 sm:w-12 sm:h-12 rounded-full mb-2 sm:mb-4"
            />
          ) : (
            <AvatarColoredLetter
              name={leaderBoardData[1]?.Name}
              surname={leaderBoardData[1]?.Surname}
            />
          )}

          <div className="absolute translate-x-5 translate-y-1 rounded-sm w-3 h-3 sm:w-4 sm:h-4">
            {
              <CountryFlag
                countryCode={
                  CountriesData.filter(
                    (country) => country.name === leaderBoardData[1]?.country
                  )[0]?.code
                }
                svg
                style={{ width: "1.53rem", height: "1.2rem" }}
              />
            }
          </div>
        </div>

        <p className="font-medium text-xs sm:text-base font-Rubik text-textColorNeutralBlack_0C092A mb-2">
          {leaderBoardData[1].Name}
        </p>
        <div className="w-[3.2rem] h-[1.50rem] sm:w-[4.1rem] sm:h-[1.9rem] rounded-[0.4rem] mb-4 sm:mb-6 border-none bg-secondColor flex items-center justify-center font-normal text-xs sm:text-sm font-Rubik text-textColorWhite">
          <span>{String(leaderBoardData[1].pointsTotal)} </span>
          <span> {languageArray[0].point}</span>
        </div>
        <img
          src={Place2}
          alt="Place2"
          className="w-[58px] h-[85px] sm:w-[76px] sm:h-[110px]"
        />
      </div>

      <div className="flex flex-col items-center relative mx-0 px-0">
        <div className="relative flex items-center justify-center">
          <img
            src={medal}
            alt="Medal"
            className="absolute z-10 top-[-0.7rem]"
          />
          {leaderBoardData[0].avatar ? (
            <img
              src={leaderBoardData[0].avatar}
              alt="avatar"
              className="w-10 h:10 sm:w-12 sm:h-12 rounded-full mb-2 sm:mb-4"
            />
          ) : (
            <AvatarColoredLetter
              name={leaderBoardData[0]?.Name}
              surname={leaderBoardData[0]?.Surname}
            />
          )}

          <div className="absolute translate-x-5 translate-y-1 rounded-sm w-3 h-3 sm:w-4 sm:h-4">
            {
              <CountryFlag
                countryCode={
                  CountriesData.filter(
                    (country) => country.name === leaderBoardData[0]?.country
                  )[0]?.code
                }
                svg
                style={{ width: "1.53rem", height: "1.2rem" }}
              />
            }
          </div>
        </div>
        <p className="font-medium text-xs sm:text-base font-Rubik text-textColorNeutralBlack_0C092A mb-2">
          {leaderBoardData[0].Name}
        </p>
        <div className="w-[3.2rem] h-[1.50rem] sm:w-[4.1rem] sm:h-[1.9rem] rounded-[0.4rem] mb-4 sm:mb-6 border-none bg-secondColor flex items-center justify-center font-normal text-xs sm:text-sm font-Rubik text-textColorWhite">
          <span>{String(leaderBoardData[0].pointsTotal)} </span>{" "}
          <span> {languageArray[0].point}</span>
        </div>
        <img
          src={Place1}
          alt="Place1"
          className="w-[80px] h-[110px] sm:w-[100px] sm:h-[151px]"
        />
      </div>

      <div className="flex flex-col items-center ml-0 pl-0 -translate-x-1">
        <div className="relative flex items-center justify-center">
          {leaderBoardData[2].avatar ? (
            <img
              src={leaderBoardData[2].avatar}
              alt="avatar"
              className="w-10 h:10 sm:w-12 sm:h-12 rounded-full mb-2 sm:mb-4"
            />
          ) : (
            <div className="mb-2 sm:mb-4">
              <AvatarColoredLetter
                name={leaderBoardData[2]?.Name}
                surname={leaderBoardData[2]?.Surname}
              />
            </div>
          )}

          <div className="absolute translate-x-5 translate-y-1 rounded-sm w-3 h-3 sm:w-4 sm:h-4">
            {
              <CountryFlag
                countryCode={
                  CountriesData.filter(
                    (country) => country.name === leaderBoardData[2]?.country
                  )[0]?.code
                }
                svg
                style={{ width: "1.53rem", height: "1.2rem" }}
              />
            }
          </div>
        </div>
        <p
          id="namePlace3"
          className="font-medium text-xs sm:text-base font-Rubik text-textColorNeutralBlack_0C092A mb-2"
        >
          {leaderBoardData[2].Name}
        </p>
        <div className="w-[3.2rem] h-[1.50rem] sm:w-[4.1rem] sm:h-[1.9rem] rounded-[0.4rem] mb-4 sm:mb-6 border-none bg-secondColor flex items-center justify-center font-normal text-xs sm:text-sm font-Rubik text-textColorWhite">
          <span>{String(leaderBoardData[2].pointsTotal)} </span>
          <span> {languageArray[0].point}</span>
        </div>
        <img
          src={Place3}
          alt="Place3"
          className="w-[58px] h-[85px] sm:w-[76px] sm:h-[90px] translate-x-[2px]"
        />
      </div>
    </div>
  );
}
