import { useState } from "react";
import arrowToBottom from "../images/ArrowToBottom.svg";
import { useSelector } from "react-redux";

const SelectOption = ({ selectedCategory, setSelectedCategory }) => {
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const categories = [];

  const uniqueCategories = Array.from(
    new Set(quizzes?.map((quiz) => quiz?.categoryName))
  );

  uniqueCategories.forEach((category) => {
    const quizzesForCategory = quizzes?.filter(
      (quiz) => quiz?.categoryName === category
    );
    categories.push(category);

    // console.log(quizzesForCategory);
  });
  // console.log(categories);

  const [showOptions, setShowOptions] = useState(false);

  const handleSelectChange = (category) => {
    setSelectedCategory(category);
    setShowOptions(false);
  };

  return (
    <div className="relative w-full h-full">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setShowOptions((prev) => !prev)}
        name="category"
        aria-expanded={showOptions}
        aria-haspopup="true"
        className="w-full rounded-[1.25rem] px-6 py-[0.9rem] bg-[#EFEEFC] border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
      >
        <div className="w-full h-full font-normal flex items-center text-base font-Rubik text-[#6A5AE0]">
          {selectedCategory
            ? `${selectedCategory}`
            : "Category" + " (" + categories?.length + ")"}
        </div>
        {showOptions && (
          <div className="absolute top-full mt-1 left-0 w-full max-h-[200px] bg-white border-2 border-[#EFEEFC] overflow-y-auto">
            {categories?.map((category) => (
              <div
                onClick={() => handleSelectChange(category)}
                className="flex gap-6 items-center w-full h-8 pl-6 py-2 font-normal text-base font-Rubik hover:bg-violet-400 focus:bg-violet-600 cursor-pointer"
                key={category}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
      <img src={arrowToBottom} alt="arrow" className="absolute top-4 right-2" />
    </div>
  );
};

export default SelectOption;
