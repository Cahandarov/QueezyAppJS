import { useState } from "react";
import arrowToBottom from "../Profile/images/ArrowToBottom.svg";
import { useSelector } from "react-redux";

const SelectOptionStats = ({ selectedOption, setSelectedOption }) => {
  const languageArray = useSelector((state) => state.language.languageArray);
  const [showOptions, setShowOptions] = useState(false);
  const options = ["Monthly", "Annual"];
  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div className="relative w-[30%] h-full">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setShowOptions((prev) => !prev)}
        name="option"
        className="w-full rounded-[1.25rem] px-6 py-[0.9rem] bg-[#EFEEFC] border-2 border-primaryColor  hover:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-offset-2 transition-colors duration-300"
      >
        <div className="w-full h-full font-normal flex items-center text-base font-Rubik text-[#6A5AE0]">
          {`${languageArray[0][selectedOption]}`}
        </div>
        {showOptions && (
          <div className="absolute top-full mt-1 left-0 w-full max-h-[200px] bg-white border-2 border-[#EFEEFC] overflow-y-auto">
            {options?.map((option) => (
              <div
                onClick={() => handleSelectChange(option)}
                className="flex gap-6 items-center w-full h-8 pl-6 py-2 font-normal text-base font-Rubik hover:bg-violet-400 focus:bg-violet-600 cursor-pointer"
                key={option}
              >
                {languageArray[0][option]}
              </div>
            ))}
          </div>
        )}
      </div>
      <img src={arrowToBottom} alt="arrow" className="absolute top-4 right-2" />
    </div>
  );
};

export default SelectOptionStats;
