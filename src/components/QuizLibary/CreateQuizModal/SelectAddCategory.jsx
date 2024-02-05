import { useEffect, useState } from "react";
import arrowToRigth from "../images/ArrowBlackToRigth.svg";
import { useSelector } from "react-redux";

const SelectAddCategory = ({ handleChange }) => {
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const languageArray = useSelector((state) => state.language.languageArray);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(quizzes?.map((quiz) => quiz?.categoryName))
    );
    const updatedCategories = [...uniqueCategories, "addNewCategory"];
    setCategories(updatedCategories);
  }, [quizzes]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setNewCategory("");
    handleChange({
      target: { name: "addQuizCategory", value: category },
    });
    setShowOptions(false);
  };

  const handleNewCategoryChange = (event) => {
    const newCategoryValue = event.target.value;

    setNewCategory(newCategoryValue);

    handleChange({
      target: { name: "addQuizCategory", value: newCategoryValue },
    });
  };

  return (
    <div className="relative w-full">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setShowOptions((prev) => !prev)}
        name="addQuizCategory"
        aria-expanded={showOptions}
        aria-haspopup="true"
        className="w-full rounded-[1.25rem] px-4 py-[0.9rem] bg-[#FFF] border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
      >
        <div className="w-full h-full font-normal flex items-center text-base font-Rubik text-[#858494]">
          {selectedCategory && selectedCategory !== "addNewCategory"
            ? `${selectedCategory}`
            : selectedCategory === "addNewCategory"
            ? ""
            : languageArray[0].chooseQuizCategory}
        </div>
        {showOptions && (
          <div className="absolute scroll-auto mt-6 left-0 w-full max-h-[150px] bg-white border-2 border-[#EFEEFC] overflow-y-auto">
            {categories.map((category) => (
              <div
                onClick={() => handleCategoryChange(category)}
                className="flex gap-6 items-center w-full h-8 pl-6 py-2 font-normal text-base font-Rubik hover:bg-violet-400 focus:bg-violet-600 cursor-pointer"
                key={category}
              >
                {category === "addNewCategory"
                  ? languageArray[0][category]
                  : category}
              </div>
            ))}
          </div>
        )}
        {selectedCategory === "addNewCategory" && (
          <input
            className="w-full h-full bg-transparent outline-none hover:bg-slate-200 focus:bg-slate-300 transition-colors duration-300"
            type="text"
            name="addQuizCategory"
            value={newCategory}
            onChange={handleNewCategoryChange}
            placeholder={languageArray[0].enterNewCategory}
          />
        )}
      </div>
      <img src={arrowToRigth} alt="arrow" className="absolute top-4 right-2" />
    </div>
  );
};

export default SelectAddCategory;
