import { useContext } from "react";
import { FormikContext } from "../CreateQuizModal/FormikContext";
import { useSelector } from "react-redux";

export default function TrueAndFalseAnswers() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const formik = useContext(FormikContext);
  return (
    <div className="flex flex-col w-full mt-4">
      <label
        htmlFor="addQuestionToTrueAndFalse"
        className="font-medium my-0 mb-1 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        {languageArray[0].addQuestion}
      </label>
      <input
        id="addQuestionToTrueAndFalse"
        name="addQuestion"
        value={formik.values.addQuestion}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].enterYourQuestion}
      />

      <label
        htmlFor="addExplanationToTrueAndFalse"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        {languageArray[0].addExplanation}
      </label>

      <input
        id="addExplanationToTrueAndFalse"
        name="addExplanation"
        value={formik.values.addExplanation}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].enterExplanationToQuestion}
      />

      <label
        htmlFor="addTrueAnswer"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        {languageArray[0].addTrueOption}
      </label>

      <input
        id="addTrueAnswer"
        name="addCorrectOption"
        value={formik.values.addCorrectOption}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].enterTrueOption}
      />

      {/* <label
        htmlFor="addFalseAnswer"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add false answer
      </label>

      <input
        id="addFalseAnswer"
        name="addOptions"
        value={formik.values.addOptions}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Enter false answer"
      /> */}
    </div>
  );
}
