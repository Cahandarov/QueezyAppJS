import { useSelector } from "react-redux";

export default function CategoriesItem({
  cover,
  category,
  QuizzesInThisCategory,
}) {
  const languageArray = useSelector((state) => state.language.languageArray);
  return (
    <div className="w-full h-full flex justify-start items-center gap-6">
      <div className="w-16 h-12 rounded-xl bg-white flex justify-center items-center">
        <img src={cover} alt="Cover image" className="w-[1.70rem] h-[1.7rem]" />
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-1">
        <p className="w-full text-left overflow-hidden font-Rubik font-medium text-base text-primaryColor group-hover:text-white transition-colors duration-300">
          {category}
        </p>
        <p className="font-Rubik font-normal text-sm opacity-75 text-primaryColor group-hover:text-white transition-colors duration-300">
          {QuizzesInThisCategory} <span> {languageArray[0].quizzes}</span>
        </p>
      </div>
    </div>
  );
}
