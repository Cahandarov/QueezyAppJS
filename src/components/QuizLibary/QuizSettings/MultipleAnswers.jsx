import { useContext, useEffect, useState } from "react";
import { FormikContext } from "../CreateQuizModal/FormikContext";

export default function MultipleAnswers() {
  const formik = useContext(FormikContext);
  const [addWrongOptions, setAddWrongOptions] = useState(["", "", ""]);
  const handleOptions = (index, value) => {
    const updatedWrongOptions = [...addWrongOptions];
    updatedWrongOptions[index] = value;
    setAddWrongOptions(updatedWrongOptions);
    formik.setFieldValue("addOptions", updatedWrongOptions);
  };

  useEffect(() => {
    if (formik.submitCount > 0) {
      setAddWrongOptions(["", "", ""]);
    }
  }, [formik.submitCount]);
  return (
    <div className="flex flex-col w-full mt-4">
      <label
        htmlFor="addQuestionToMultipleAnswers"
        className="font-medium my-0 mb-1 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Question
      </label>
      <input
        id="addQuestionToMultipleAnswers"
        name="addQuestion"
        value={formik.values.addQuestion}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Enter your question"
      />

      <label
        htmlFor="addExplanationToMultipleAnswers"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Explanation
      </label>

      <input
        id="addExplanationToMultipleAnswers"
        name="addExplanation"
        value={formik.values.addExplanation}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Enter explanation to question"
      />
      <label
        htmlFor="addExplanationToMultipleAnswers"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Correct Option
      </label>

      <input
        id="addCorrectOptionToMultipleAnswers"
        name="addCorrectOption"
        value={formik.values.addCorrectOption}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Enter correct option"
      />

      <label
        htmlFor="addExplanationToMultipleAnswers"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Wrong Options
      </label>

      {addWrongOptions.map((wrongOption, index) => (
        <input
          key={index}
          name="addOptions"
          onChange={(e) => handleOptions(index, e.target.value)}
          value={wrongOption}
          className="w-full h-[3.5rem] rounded-[1.25rem] py-4 px-4 mb-4 bg-white border-2 border-[#EFEEFC] hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
          type="text"
          placeholder="Enter wrong option"
        />
      ))}
    </div>
  );
}
