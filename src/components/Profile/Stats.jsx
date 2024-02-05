import { useState } from "react";
import SelectOptionStats from "./SelectOptionStats ";
import edit from "../Profile/images/edit.svg";
import won from "../Profile/images/won.svg";
import chart from "../Profile/images/chart.svg";
import CircularSettings from "./CircularSettings";
import StatsChart from "./StatsChart";
import { useSelector } from "react-redux";

export default function Stats() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const language = useSelector((state) => state.language.language);
  const [selectedOption, setSelectedOption] = useState("Montly");
  return (
    <div className="w-full flex flex-wrap justify-start items-start gap-6 mt-4">
      <div className="w-full h-[15rem] bg-[#E8E5FA] rounded-[1.25rem] p-6 flex flex-col">
        <div className="w-full flex justify-between items-center">
          {language === "eng" && (
            <p className="font-Rubik font-medium text-xl text-textColorNeutralBlack_0C092A">
              You have played a total{" "}
              <span className="font-Rubik font-medium text-xl text-primaryColor">
                24
                <br /> quizzes
              </span>{" "}
              this {selectedOption === "Montly" ? "month!" : "year!"}
            </p>
          )}
          {language === "aze" && (
            <p className="font-Rubik font-medium text-xl text-textColorNeutralBlack_0C092A">
              Siz bu {selectedOption === "Montly" ? "ay" : "il"}{" "}
              <span className="font-Rubik font-medium text-xl text-primaryColor">
                24
                <br /> kuiz
              </span>{" "}
              oynamısınız!
            </p>
          )}
          <SelectOptionStats
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className="w-full flex items-center justify-evenly gap-5 mt-3">
          <CircularSettings />
          <div className="w-[32%] h-[5.25rem] bg-white rounded-[1.25rem] p-4 flex flex-col">
            <div className="flex justify-between items-center ">
              <p className="font-Rubik font-medium text-xl text-textColorNeutralBlack_0C092A">
                5
              </p>
              <img src={edit} alt="Edit" />
            </div>
            <p className="font-Rubik font-normal text-base text-textColorNeutralBlack_0C092A">
              {languageArray[0].quizCreated}
            </p>
          </div>
          <div className="w-[32%] h-[5.25rem] bg-primaryColor rounded-[1.25rem] p-4 flex flex-col">
            <div className="flex justify-between items-center ">
              <p className="font-Rubik font-medium text-xl text-white">21</p>
              <img src={won} alt="Won" />
            </div>
            <p className="font-Rubik font-normal text-base text-white">
              {languageArray[0].quizWon}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[22rem] relative bg-[#E8E5FA] rounded-[1.25rem] px-6 pt-4 pb-14 flex flex-col">
        <div className="w-full flex justify-between items-center">
          <p className="font-Rubik font-medium text-xl text-black">
            {languageArray[0].topPerformanceByCategory}
          </p>
          <div className="bg-[#887BE6] w-10 h-10 rounded-xl flex justify-center items-center">
            <img src={chart} alt="Chart Icone" />
          </div>
        </div>
        <StatsChart />
        <div className="w-[79.3%] h-[2rem] pl-8 gap-[68px] left-14 top-14 bg-[#E8E5FA]  absolute flex items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-4 rounded-md bg-[#FFD6DD]"></div>
            <p className="font-Rubik font-medium text-base text-black">Math</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-4 rounded-md bg-[#C4D0FB]"></div>
            <p className="font-Rubik font-medium text-base text-black">Sport</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-4 rounded-md bg-[#A9ADF3]"></div>
            <p className="font-Rubik font-medium text-base text-black">Music</p>
          </div>
        </div>

        <div className="w-[79.3%] h-[2rem] pl-[3.5rem] gap-[85px] left-14 top-[19rem] bg-[#E8E5FA]  absolute flex items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-Rubik font-medium text-base text-black text-center">
              3 / 10
            </p>
            <p className="font-Rubik font-normal text-sm text-black text-center">
              {languageArray[0].questionsAswered}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-Rubik font-medium text-base text-black text-center">
              8 / 10
            </p>
            <p className="font-Rubik font-normal text-sm text-black text-center">
              {languageArray[0].questionsAswered}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-Rubik font-medium text-base text-black text-center">
              6 / 10
            </p>
            <p className="font-Rubik font-normal text-sm text-black text-center">
              {languageArray[0].questionsAswered}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
