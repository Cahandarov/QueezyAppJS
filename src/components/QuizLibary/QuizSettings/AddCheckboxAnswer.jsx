import { useEffect, useState } from "react";
import "primeicons/primeicons.css";
import { useContext } from "react";
import { FormikContext } from "../CreateQuizModal/FormikContext";
import { useSelector } from "react-redux";

export default function AddCheckboxAnswer() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const formik = useContext(FormikContext);
  const [answers, setAnswers] = useState([""]);

  useEffect(() => {
    if (formik.submitCount > 0) {
      setAnswers([""]);
    }
  }, [formik.submitCount]);

  const addAnswer = () => {
    setAnswers([...answers, ""]);
  };

  const removeAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers.splice(index, 1);
    setAnswers(newAnswers);
  };

  const handleAnswerChange = (index, value, isChecked) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);

    const newCorrectOptions = newAnswers
      .map((answer, i) => (i !== index ? answer : isChecked ? "Correct" : null))
      .filter((option) => option && option.toLowerCase() === "correct");

    const newOtherOptions = newAnswers
      .map((answer, i) => (i !== index ? answer : isChecked ? null : "Wrong"))
      .filter((option) => option && option.toLowerCase() === "wrong");

    // console.log("New Answers:", newAnswers);
    // console.log("New Correct Options:", newCorrectOptions);
    // console.log("New Other Options:", newOtherOptions);

    formik.setFieldValue("addOptions", newOtherOptions);
    formik.setFieldValue("addCorrectOption", newCorrectOptions);
  };

  return (
    <div className="flex flex-col w-full mt-6">
      <label
        htmlFor="addQuestion"
        className="font-medium my-0 mb-1 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        {languageArray[0].addQuestion}
      </label>
      <input
        id="addQuestionToCheckboxAnswer"
        name="addQuestion"
        value={formik.values.addQuestion}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].enterYourQuestion}
      />
      <label
        htmlFor="addExplanationToCheckbox"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        {languageArray[0].addExplanation}
      </label>

      <input
        id="addExplanationToCheckbox"
        name="addExplanation"
        value={formik.values.addExplanation}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder={languageArray[0].enterExplanationToQuestion}
      />
      <div className="flex items-center justify-start gap-4  mt-6">
        <label
          htmlFor="addAnswersToCheckbox"
          className="font-medium my-0 text-base font-Rubik text-left text-textColorNeutralBlack_0C092A"
        >
          {languageArray[0].addAnswer}
        </label>
        <button type="button" onClick={addAnswer}>
          <i className="pi pi-plus-circle font-extrabold text-2xl scale-75 hover:scale-110 transition-all duration-300"></i>
        </button>
      </div>

      <div>
        {answers.map((answer, index) => (
          <div
            key={index}
            className="answer-input relative flex justify-start items-center w-full h-[3.5rem] rounded-[1.25rem] mt-3 "
          >
            <input
              type="checkbox"
              onChange={(e) =>
                handleAnswerChange(index, answer, e.target.checked)
              }
              className="appearance-none absolute top-0 left-0 translate-x-4 translate-y-4 addCheckboxAnswers w-6 h-6 checked:bg-primaryColor bg-[#EFEEFC] rounded-lg border-2 border-[#6A5AE0] "
            />

            <input
              id={`addAnswerTo${index + 1}Checkbox`}
              name="addAnswerToCheckbox"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              className="addAnswerToCheckbox w-full h-full rounded-[1.25rem] px-14 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
              type="text"
              placeholder={`${languageArray[0].addAnswers} ${index + 1}`}
            />
            {answers.length > 1 && (
              <button
                type="button"
                onClick={() => removeAnswer(index)}
                className="absolute right-0 top-0 -translate-x-4 translate-y-3"
              >
                <i className="pi pi-times-circle font-extrabold text-2xl scale-75 hover:scale-110 transition-all duration-300"></i>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
