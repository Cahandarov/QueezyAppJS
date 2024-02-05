import { useSelector } from "react-redux";

export default function SelectedCreateQuizItem({ newQuiz }) {
  const languageArray = useSelector((state) => state.language.languageArray);
  const quizzes = useSelector((state) => state.quizzes.quizzes);

  const QuizzesInThisCategory = quizzes.filter(
    (item) => item.categoryName === newQuiz.categoryName
  ).length;

  return (
    <div className="w-[47%] h-[9,25rem] p-6 flex flex-col gap-2 items-center justify-center rounded-[1.25rem] bg-[#FF8FA2] border-none">
      <div className="w-12 h-12 rounded-2xl bg-white opacity-20 flex justify-center items-center">
        <img src={newQuiz.coverImage} alt="coverSVG" className="w-10 h-10" />
      </div>
      <p className="font-medium text-base font-Rubik text-[#fff]">
        {newQuiz.categoryName}
      </p>
      <p className="font-normal text-sm font-Rubik text-[#fff] opacity-70">
        <span>{QuizzesInThisCategory} </span>
        <span>{languageArray[0].quizzes}</span>
      </p>
    </div>
  );
}
