import { useContext } from "react";
import { FormikContext } from "../CreateQuizModal/FormikContext";
export default function TypeAnswer() {
  const formik = useContext(FormikContext);
  return (
    <div className="flex flex-col w-full mt-4">
      <label
        htmlFor="addQuestion"
        className="font-medium my-0 mb-1 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Question
      </label>
      <input
        id="addQuestionToTypeAnswer"
        name="addQuestion"
        value={formik.values.addQuestion}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Enter your questions"
      />

      <label
        htmlFor="addExplanationToTypeAnswer"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Explanation
      </label>

      <input
        id="addExplanationToTypeAnswer"
        name="addExplanation"
        value={formik.values.addExplanation}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Enter explanation to question"
      />
      <label
        htmlFor="addAnswerToTypeAnswer"
        className="font-medium my-0 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Answer
      </label>
      <input
        id="addAnswerToTypeAnswer"
        name="addCorrectOption"
        value={formik.values.addCorrectOption}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem] mt-2 py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Add answer"
      />
    </div>
  );
}
