import { useState } from "react";
import timeIcon from "../images/timeIcon.svg";
import { useSelector } from "react-redux";

const SelectTime = ({ handleChange, formik }) => {
  const languageArray = useSelector((state) => state.language.languageArray);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedTime, setSelectedTime] = useState("10");

  const handleSelectChange = (time) => {
    setSelectedTime(time);
    handleChange({
      target: { name: "addQuizTimeToQuestion", value: time },
    });
    setShowOptions(false);
  };

  const times = ["10", "20", "30", "40", "50", "60"];

  return (
    <div className="relative w-[8rem] h-12">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setShowOptions((prev) => !prev)}
        name="addQuizTimeToQuestion"
        aria-expanded={showOptions}
        aria-haspopup="true"
        className="w-full rounded-[1.25rem] px-6 py-[0.9rem] bg-[#fff] border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
      >
        <div className="w-full h-full font-normal flex items-center text-base font-Rubik text-[#49465F]">
          {selectedTime && (
            <div className="flex items-center justify-center gap-4">
              <img src={timeIcon} alt="time" />
              <div className="flex items-center justify-center gap-1">
                {/* {`${selectedTime}`} <span>Sec</span> */}
                {`${formik}`} <span>{languageArray[0].Sec}</span>
              </div>
            </div>
          )}
        </div>
        {showOptions && (
          <div className="absolute z-40 top-full mt-4 left-0 w-full max-h-[200px] bg-white border-2 border-[#EFEEFC] overflow-y-auto">
            {times?.map((time) => (
              <div
                onClick={() => handleSelectChange(time)}
                className="flex gap-3 items-center w-full h-8 pl-6 py-2 font-normal text-base font-Rubik hover:bg-violet-400 focus:bg-violet-600 cursor-pointer"
                key={time}
              >
                <img src={timeIcon} alt="time" />
                <div>
                  {time}
                  <span> {languageArray[0].Sec}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectTime;
