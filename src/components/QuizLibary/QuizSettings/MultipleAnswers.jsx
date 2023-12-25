import { useState } from "react";
import plus from "../images/plusIcon.svg";
import AddMultipleAnswers from "./AddMultipleAnswers";
export default function MultipleAnswers() {
  const [addAnswer, setAddAnswer] = useState(false);
  return (
    <div className="flex flex-col w-full mt-8">
      <label
        htmlFor="addQuestion"
        className="font-medium my-0 mb-1 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Question
      </label>
      <input
        id="addQuestion"
        name="addQuestion"
        // value={formik.values.addQuestion}
        // onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Enter your questions"
      />
      <div className="flex flex-wrap w-full items-center gap-4 mt-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <button
            onClick={() => setAddAnswer(true)}
            key={index}
            className="w-[48%] h-[7rem] flex flex-col justify-center items-center gap-4 bg-[#EFEEFC] rounded-2xl  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
          >
            <img src={plus} alt="plus" />
            <p className="font-medium text-base font-Rubik text-primaryColor">
              Add answer
            </p>
          </button>
        ))}
      </div>
      {addAnswer && (
        <AddMultipleAnswers addAnswer={addAnswer} setAddAnswer={setAddAnswer} />
      )}
    </div>
  );
}
