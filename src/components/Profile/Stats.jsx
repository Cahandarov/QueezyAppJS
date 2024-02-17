import { useState } from "react";
import SelectOptionStats from "./SelectOptionStats ";
import edit from "../Profile/images/edit.svg";
import won from "../Profile/images/won.svg";
import CircularSettings from "./CircularSettings";
import { useSelector } from "react-redux";
import TopPerformance from "./TopPerformance";

export default function Stats() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const language = useSelector((state) => state.language.language);
  const [selectedOption, setSelectedOption] = useState("Monthly");
  const token = JSON.parse(localStorage.getItem("token"));

  const OneMonthInMseconds = 30 * 24 * 60 * 60 * 1000;
  const OneYearInMseconds = 365 * 24 * 60 * 60 * 1000;
  const dateNowInMseconds = new Date().getTime();
  const OneMonth_AGO_InMseconds = dateNowInMseconds - OneMonthInMseconds;
  const OneYear_AGO_InMseconds = dateNowInMseconds - OneYearInMseconds;

  const playedQuizzesMonthly = token.playedQuizzes.reduce((acc, quiz) => {
    const playedDateInMseconds = new Date(quiz.date).getTime();
    if (playedDateInMseconds >= OneMonth_AGO_InMseconds) {
      acc += 1;
    }
    return acc;
  }, 0);
  const createdQuizzesMonthly = token.createdQuizzes.reduce((acc, quiz) => {
    const playedDateInMseconds = new Date(quiz.date).getTime();
    if (playedDateInMseconds >= OneMonth_AGO_InMseconds) {
      acc += 1;
    }
    return acc;
  }, 0);
  const PassedQuizzesMonthly = token.playedQuizzes.reduce((acc, quiz) => {
    const playedDateInMseconds = new Date(quiz.date).getTime();
    if (
      playedDateInMseconds >= OneMonth_AGO_InMseconds &&
      quiz.result === "Passed"
    ) {
      acc += 1;
    }
    return acc;
  }, 0);

  const playedQuizzesAnnual = token.playedQuizzes.reduce((acc, quiz) => {
    const playedDateInMseconds = new Date(quiz.date).getTime();
    if (playedDateInMseconds >= OneYear_AGO_InMseconds) {
      acc += 1;
    }
    return acc;
  }, 0);
  const createdQuizzesAnnual = token.createdQuizzes.reduce((acc, quiz) => {
    const playedDateInMseconds = new Date(quiz.date).getTime();
    if (playedDateInMseconds >= OneYear_AGO_InMseconds) {
      acc += 1;
    }
    return acc;
  }, 0);
  const PassedQuizzesAnnual = token.playedQuizzes.reduce((acc, quiz) => {
    const playedDateInMseconds = new Date(quiz.date).getTime();
    if (
      playedDateInMseconds >= OneYear_AGO_InMseconds &&
      quiz.result === "Passed"
    ) {
      acc += 1;
    }
    return acc;
  }, 0);

  return (
    <div className="w-full flex flex-wrap justify-start items-start gap-6 mt-4">
      <div className="w-full h-[15rem] bg-[#E8E5FA] rounded-[1.25rem] p-6 flex flex-col">
        <div className="w-full flex justify-between items-center">
          {language === "eng" && (
            <p className="font-Rubik font-medium text-xl text-textColorNeutralBlack_0C092A">
              You have played a total{" "}
              <span className="font-Rubik font-medium text-xl text-primaryColor">
                {selectedOption === "Monthly"
                  ? playedQuizzesMonthly
                  : playedQuizzesAnnual}
                <br /> quizzes
              </span>{" "}
              this {selectedOption === "Monthly" ? "month!" : "year!"}
            </p>
          )}
          {language === "aze" && (
            <p className="font-Rubik font-medium text-xl text-textColorNeutralBlack_0C092A">
              Siz bu {selectedOption === "Monthly" ? "ay" : "il"}{" "}
              <span className="font-Rubik font-medium text-xl text-primaryColor">
                {selectedOption === "Monthly"
                  ? playedQuizzesMonthly
                  : playedQuizzesAnnual}
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
          <CircularSettings
            selectedOption={selectedOption}
            monthly={playedQuizzesMonthly}
            annual={playedQuizzesAnnual}
          />
          <div className="w-[32%] h-[5.25rem] bg-white rounded-[1.25rem] p-4 flex flex-col">
            <div className="flex justify-between items-center ">
              <p className="font-Rubik font-medium text-xl text-textColorNeutralBlack_0C092A">
                {selectedOption === "Monthly"
                  ? createdQuizzesMonthly
                  : createdQuizzesAnnual}
              </p>
              <img src={edit} alt="Edit" />
            </div>
            <p className="font-Rubik font-normal text-base text-textColorNeutralBlack_0C092A">
              {languageArray[0].quizCreated}
            </p>
          </div>
          <div className="w-[32%] h-[5.25rem] bg-primaryColor rounded-[1.25rem] p-4 flex flex-col">
            <div className="flex justify-between items-center ">
              <p className="font-Rubik font-medium text-xl text-white">
                {selectedOption === "Monthly"
                  ? PassedQuizzesMonthly
                  : PassedQuizzesAnnual}
              </p>
              <img src={won} alt="Won" />
            </div>
            <p className="font-Rubik font-normal text-base text-white">
              {languageArray[0].quizPassed}
            </p>
          </div>
        </div>
      </div>
      <TopPerformance />
    </div>
  );
}
