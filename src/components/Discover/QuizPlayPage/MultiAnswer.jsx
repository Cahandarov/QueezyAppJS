import { useSelector } from "react-redux";

export default function MultiAnswer() {
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  const originalOptions = selectedQuiz?.questions[index]?.options || [];
  const Options = [];

  for (let i = 0; i < originalOptions.length; i++) {
    Options.push(originalOptions[i]);
    const randomIndex = Math.round(Math.random() * Options.length);
    Options.push(Options.splice(randomIndex - 1, 1)[0]);
  }

  // console.log(selectedQuiz?.questions[index]?.options);
  // console.log(Options);

  // allOptions.push(selectedQuiz?.questions[index]?.correctAnswer);
  return (
    <div className="flex flex-col mt-4">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1">
        {selectedQuiz?.questions[index].question}
      </p>
      <div className="w-full flex flex-col items-start justify-start gap-3 mt-4">
        {Options.map((option, Index) => (
          <button
            key={Index}
            className="w-full h-[3rem] text-left px-8 border-2 border-[#EFEEFC] rounded-2xl hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
