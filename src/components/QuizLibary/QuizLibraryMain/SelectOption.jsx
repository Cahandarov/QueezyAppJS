import { useEffect, useState } from "react";
import arrowToBottom from "../images/ArrowToBottom.svg";
import { useSelector } from "react-redux";

const SelectOption = ({ selectedCategory, setSelectedCategory }) => {
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const [showOptions, setShowOptions] = useState(false);

  const [categories, setCategories] = useState([]);
  const languageArray = useSelector((state) => state.language.languageArray);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(quizzes?.map((quiz) => quiz?.categoryName))
    );
    setCategories(uniqueCategories);
  }, [quizzes.length]);

  const handleSelectChange = (category) => {
    setSelectedCategory(category);
    setShowOptions(false);
  };

  return (
    <div className="relative w-full h-full ">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setShowOptions((prev) => !prev)}
        name="category"
        aria-expanded={showOptions}
        aria-haspopup="true"
        className="w-full h-full rounded-[1.25rem] px-2 md:px-2 xl:px-6  bg-[#EFEEFC] border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
      >
        {/* text-normal md:font-medium text-xs md:text-sm xl:text-base */}
        <div className="w-full h-full font-normal flex items-center text-sm sm:text-base md:text-sm xl:text-base font-Rubik text-[#6A5AE0]">
          {selectedCategory
            ? `${selectedCategory}`
            : languageArray[0].Category + " (" + categories?.length + ")"}
        </div>
        {showOptions && (
          <div className="absolute top-full mt-1 left-0 w-full max-h-[200px] bg-white border-2 border-[#EFEEFC] overflow-y-auto">
            {categories?.map((category, index) => (
              <div
                onClick={() => handleSelectChange(category)}
                className="flex gap-6 items-center w-full h-8 pl-6 py-2 font-normal text-base font-Rubik hover:bg-violet-400 focus:bg-violet-600 cursor-pointer"
                key={index}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
      <img
        src={arrowToBottom}
        alt="arrow"
        className="absolute top-3 right-2 md:right-0 lg:right-1 xl:right-2"
      />
    </div>
  );
};

export default SelectOption;
