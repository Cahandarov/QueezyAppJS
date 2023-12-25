import { useState } from "react";
import arrowToBottom from "../images/ArrowToBottom.svg";

const SelectQuestionType = ({
  selectedQuestionType,
  setSelectedQuestionType,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleSelectChange = (question) => {
    setSelectedQuestionType(question);
    setShowOptions(false);
  };

  const questions = [
    "Multiple Answer",
    "True or False",
    "Type Answer",
    "Voisce Note",
    "Checkbox",
    "Poll",
    "Puzzle",
  ];

  return (
    <div className="relative w-[12.75rem] h-12">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setShowOptions((prev) => !prev)}
        name="question"
        aria-expanded={showOptions}
        aria-haspopup="true"
        className="w-full rounded-[1.25rem] px-6 py-[0.9rem] bg-[#fff] border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
      >
        <div className="w-full h-full font-normal flex items-center text-base font-Rubik text-[#49465F]">
          {selectedQuestionType && `${selectedQuestionType}`}
        </div>
        {showOptions && (
          <div className="absolute top-full mt-4 left-0 w-full max-h-[200px] bg-white border-2 border-[#EFEEFC] overflow-y-auto">
            {questions.map((question) => (
              <div
                onClick={() => handleSelectChange(question)}
                className="flex gap-3 items-center w-full h-8 pl-6 py-2 font-normal text-base font-Rubik hover:bg-violet-400 focus:bg-violet-600 cursor-pointer"
                key={question}
              >
                {question}
              </div>
            ))}
          </div>
        )}
      </div>
      <img src={arrowToBottom} alt="arrow" className="absolute top-4 right-2" />
    </div>
  );
};

export default SelectQuestionType;
