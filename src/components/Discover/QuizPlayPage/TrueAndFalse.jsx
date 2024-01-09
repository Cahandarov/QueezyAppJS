import { useSelector } from "react-redux";

export default function TrueAndFalse() {
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  return (
    <div className="flex flex-col mt-4">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1">
        {selectedQuiz?.questions[index].question}
      </p>
      <div className="w-full flex items-center justify-start gap-3 mt-6">
        <button
          value="False"
          className="w-[30%] h-[3.2rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-white bg-red-600 border-none hover:bg-red-400 hover:border-red-800 focus:outline-none focus:ring focus:ring-red-400 focus:bg-red-500 focus:ring-offset-2 transition-colors duration-300"
        >
          False
        </button>
        <button
          value="True"
          className="w-[30%] h-[3.2rem]  rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-green-600 border-none hover:bg-green-400 hover:border-green-800 focus:outline-none focus:ring-green-400 focus:bg-green-500  focus:ring-offset-2 focus:ring transition-colors duration-300"
        >
          True
        </button>
      </div>
    </div>
  );
}
