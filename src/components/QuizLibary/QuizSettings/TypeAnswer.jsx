import { useContext } from "react";
import { FormikContext } from "../CreateQuizModal/FormikContext";
import { useSelector } from "react-redux";
export default function TypeAnswer() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const formik = useContext(FormikContext);
  return (
    <div className="flex flex-col w-full mt-4">
      <label
        htmlFor="addQuestion"
        className="font-medium my-0 mb-1 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        {languageArray[0].addQuestion}
      </label>
      <input
        id="addQuestionToTypeAnswer"
        name="addQuestion"
        value={formik.values.addQuestion}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].enterYourQuestion}
      />

      <label
        htmlFor="addExplanationToTypeAnswer"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        {languageArray[0].addExplanation}
      </label>

      <input
        id="addExplanationToTypeAnswer"
        name="addExplanation"
        value={formik.values.addExplanation}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].enterExplanationToQuestion}
      />
      <label
        htmlFor="addAnswerToTypeAnswer"
        className="font-medium my-0 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        {languageArray[0].addAnswer}
      </label>
      <input
        id="addAnswerToTypeAnswer"
        name="addCorrectOption"
        value={formik.values.addCorrectOption}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem] mt-2 py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].enterYourAnswer}
      />
    </div>
  );
}
