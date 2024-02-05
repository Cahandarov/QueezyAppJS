import { useContext, useEffect, useState } from "react";
import { FormikContext } from "../CreateQuizModal/FormikContext";
import { useSelector } from "react-redux";

export default function MultipleAnswers() {
  const languageArray = useSelector((state) => state.language.languageArray);
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
        {languageArray[0].addQuestion}
      </label>
      <input
        id="addQuestionToMultipleAnswers"
        name="addQuestion"
        value={formik.values.addQuestion}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].enterYourQuestion}
      />

      <label
        htmlFor="addExplanationToMultipleAnswers"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        {languageArray[0].addExplanation}
      </label>

      <input
        id="addExplanationToMultipleAnswers"
        name="addExplanation"
        value={formik.values.addExplanation}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].enterExplanationToQuestion}
      />
      <label
        htmlFor="addCorrectOptionToMultipleAnswers"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        {languageArray[0].addCorectOption}
      </label>

      <input
        id="addCorrectOptionToMultipleAnswers"
        name="addCorrectOption"
        value={formik.values.addCorrectOption}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].enterCorectOption}
      />

      <label
        htmlFor="addExplanationToMultipleAnswers"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        {languageArray[0].addWrongOption}
      </label>

      {addWrongOptions.map((wrongOption, index) => (
        <input
          key={index}
          name="addOptions"
          onChange={(e) => handleOptions(index, e.target.value)}
          value={wrongOption}
          className="w-full h-[3.5rem] rounded-[1.25rem] py-4 px-4 mb-4 bg-white border-2 border-[#EFEEFC] hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
          type="text"
          placeholder={languageArray[0].enterWrongOption}
        />
      ))}
    </div>
  );
}
