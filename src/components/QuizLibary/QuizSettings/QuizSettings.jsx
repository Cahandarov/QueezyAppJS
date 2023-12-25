import plusIcon from "../images/plusIcon.svg";
import addFile from "../images/addFile.svg";
import SelectTime from "./SelectTime";
import { useState } from "react";
import SelectQuestionType from "./SelectQuestionType";
import MultipleAnswers from "./MultipleAnswers";

export default function QuizSettings() {
  const [selectedTime, setSelectedTime] = useState("10");
  const [selectedQuestionType, setSelectedQuestionType] =
    useState("Multiple Answer");
  return (
    <div className="flex flex-col gap-8 w-full h-full  min-h-[1086px] px-10 pt-10 pb-4 bg-BackRCLigthGrey_EFEEFC">
      <div className="quizlibrary flex flex-col mx-auto justify-between h-[63.5rem] w-[98%] rounded-[2rem] p-8 mb-2 border-2 border-[#EFEEFC] bg-white ">
        <div className="w-full flex justify-between items-center">
          <p className="font-medium text-2xl text-textColorNeutralBlack_0C092A font-Rubik text-left">
            Quiz Settings
          </p>
          <button
            onClick={() => {}}
            className="w-[8,43rem] h-14 buttons  HoverAndFocusDark flex justify-center items-center gap-4 py-4 px-8"
          >
            Continue
          </button>
        </div>
        <div className="flex items-center w-full h-full pt-6">
          <div className="flex flex-col w-[50%] h-full items-start pr-6 border-r border-[#EFEEFC]">
            <button className="w-full h-14 rounded-2xl bg-[#EFEEFC] font-Rubik font-medium text-base text-primaryColor flex justify-center items-center gap-3  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300">
              <img src={plusIcon} alt="plus" /> Add New Question
            </button>
          </div>
          <div className="flex flex-col w-[50%] h-full items-start pl-6">
            <div className="flex justify-center items-center w-full h-[10rem] border-[3px] border-dashed border-[#6A5AE0] rounded-2xl  hover:bg-slate-200 hover:border-none focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300">
              <input
                id="addCoverFile"
                // onChange={handleFileChange}
                name="addCoverFile"
                type="file"
                className="w-full h-full hidden"
              />

              <label
                htmlFor="addCoverFile"
                className="py-6 px-28 flex flex-col justify-center items-center gap-2"
              >
                <img src={addFile} alt="addFileSVG" />
                <p className="w-[160px] text-center font-Rubik font-medium text-baseS text-primaryColor">
                  Add Cover Image
                </p>
              </label>
            </div>

            <div className="flex w-full justify-between items-center mt-6">
              <SelectTime
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />
              <SelectQuestionType
                selectedQuestionType={selectedQuestionType}
                setSelectedQuestionType={setSelectedQuestionType}
              />
            </div>
            <MultipleAnswers />
          </div>
        </div>
      </div>
    </div>
  );
}
