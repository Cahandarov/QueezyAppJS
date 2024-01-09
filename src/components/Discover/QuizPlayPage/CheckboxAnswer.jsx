export default function CheckboxAnswer() {
  return (
    <div className="flex flex-col mt-4">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1">
        Which player scored the fastest hat-trick in the Premier League?
      </p>
      <div className="w-full flex  flex-col items-start justify-start gap-3 mt-4">
        <button
          className="answer-input relative flex justify-start items-center w-full h-[3.5rem] rounded-[1.25rem] px-14 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
          type="text mt-3 "
        >
          <input
            type="checkbox"
            className="appearance-none absolute top-0 left-0 translate-x-4 translate-y-4 addCheckboxAnswers w-6 h-6 checked:bg-primaryColor bg-[#EFEEFC] rounded-lg border-2 border-[#6A5AE0] "
          />
        </button>
      </div>
    </div>
  );
}
