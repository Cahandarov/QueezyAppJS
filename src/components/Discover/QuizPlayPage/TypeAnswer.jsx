import { useSelector } from "react-redux";

export default function TypeAnswer() {
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  return (
    <div className="flex flex-col mt-4">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1">
        {selectedQuiz?.questions[index]?.question}
      </p>
      <input
        name="addTypeAnswer"
        // value={formik.values.addCorrectOption}
        // onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem] mt-4 py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Write your answer"
      />
    </div>
  );
}
