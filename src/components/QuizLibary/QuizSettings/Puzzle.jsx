import { useEffect, useState } from "react";
import "primeicons/primeicons.css";
import { useContext } from "react";
import { FormikContext } from "../CreateQuizModal/FormikContext";

export default function Puzzle() {
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

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    formik.setFieldValue("addOptions", newAnswers);
  };

  return (
    <div className="flex flex-col w-full mt-4">
      <label
        htmlFor="addQuestion"
        className="font-medium my-0 mb-2 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Question
      </label>
      <input
        id="addQuestionToPoll"
        name="addQuestion"
        value={formik.values.addQuestion}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Enter your questions"
      />

      <label
        htmlFor="addExplanationToPuzzle"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Explanation
      </label>

      <input
        id="addExplanationToPuzzle"
        name="addExplanation"
        value={formik.values.addExplanation}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Enter explanation to question"
      />

      <label
        htmlFor="addCorrectOptionToPuzzle"
        className="font-medium my-0 mb-1 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Correct Option
      </label>

      <input
        id="addCorrectOptionToPuzzle"
        name="addCorrectOption"
        value={formik.values.addCorrectOption}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Enter correct option"
      />
      <div className="flex items-center justify-start gap-4  mt-6">
        <label
          htmlFor="addAnswersToPuzzle"
          className="font-medium my-0 text-base font-Rubik text-left text-textColorNeutralBlack_0C092A"
        >
          Add Answers
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
              name={`addAnswerToPuzzle${index + 1}`}
              id={`addAnswerTo${index + 1}Puzzle`}
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              className="addAnswerToPuzzle w-full h-full rounded-[1.25rem] p-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
              type="text"
              placeholder={`Add choice answer ${index + 1}`}
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
