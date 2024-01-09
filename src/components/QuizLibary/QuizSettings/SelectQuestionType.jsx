import { useState } from "react";
import arrowToBottom from "../images/ArrowToBottom.svg";
import { useDispatch } from "react-redux";
import { setQuestionType } from "../createQuizSlice";

const SelectQuestionType = ({ handleChange, formik }) => {
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);
  const [selectedQuestionType, setSelectedQuestionType] =
    useState("Multiple Answer");

  const handleSelectChange = (question) => {
    setSelectedQuestionType(question);
    handleChange({
      target: { name: "selectedQuestionType", value: question },
    });
    setShowOptions(false);
    dispatch(setQuestionType(selectedQuestionType));
  };

  const questions = [
    "Multiple Answer",
    "True or False",
    "Type Answer",
    "Voice Answer",
    "Voice Question",
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
        name="selectedQuestionType"
        aria-expanded={showOptions}
        aria-haspopup="true"
        className="w-full rounded-[1.25rem] px-6 py-[0.9rem] bg-[#fff] border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
      >
        <div className="w-full h-full font-normal flex items-center text-base font-Rubik text-[#49465F]">
          {selectedQuestionType && `${formik}`}
        </div>
        {showOptions && (
          <div className="absolute z-40 top-full mt-4 left-0 w-full max-h-[200px] bg-white border-2 border-[#EFEEFC] overflow-y-auto">
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
