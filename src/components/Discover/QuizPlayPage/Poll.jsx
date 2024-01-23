import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { setAnswer } from "./quizPlaySlice";

export default function Poll() {
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  let index = useSelector((state) => state.quizPlay.index);
  let answer = useSelector((state) => state.quizPlay.answer);

  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  const mixedOptions = useMemo(() => {
    const originalOptions = selectedQuiz?.questions[index]?.options || [];

    const optionsCopy = [...originalOptions];
    for (let i = optionsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
    }

    return optionsCopy;
  }, [selectedQuiz, index]);

  const totalVotes = mixedOptions.reduce(
    (totalVotes, option) => totalVotes + Number(Object.values(option)),
    0
  );

  function handleClickOptions(ClickedValue) {
    dispatch(setAnswer(ClickedValue));
    setDisabled(true);
  }

  return (
    <div className="flex flex-col mt-4">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1">
        {selectedQuiz?.questions[index].question}
      </p>
      <div className="w-full flex flex-col items-start justify-start gap-3 mt-4">
        {mixedOptions.map((option, Index) => (
          <button
            onClick={() => handleClickOptions(option)}
            disabled={disabled}
            key={Index}
            className={`w-full z-10 relative h-[3rem] flex justify-between items-center text-left px-8 border-2 border-[#EFEEFC] font-Formik font-medium text-lg  ${
              answer === option ? "border-green-600" : ""
            } rounded-2xl  transition-colors duration-300`}
          >
            {Object.keys(option)}
            {answer && (
              <div
                className={`pollDiv h-full absolute -z-10 top-0 left-0 rounded-2xl bg-secondColor`}
                style={{
                  width:
                    answer === option
                      ? `${Math.round(
                          ((Number(Object.values(option)) + 1) / totalVotes) *
                            100
                        )}%`
                      : `${Math.round(
                          (Number(Object.values(option)) / totalVotes) * 100
                        )}%`,
                }}
              ></div>
            )}{" "}
            {answer && (
              <div>
                {answer === option ? (
                  <p className="font-Rubik font-medium text-base text-primaryColor text-right">
                    {Math.round(
                      ((Number(Object.values(option)) + 1) / totalVotes) * 100
                    )}{" "}
                    %
                  </p>
                ) : (
                  <p className="font-Rubik font-medium text-base text-primaryColor text-right">
                    {Math.round(
                      (Number(Object.values(option)) / totalVotes) * 100
                    )}{" "}
                    %
                  </p>
                )}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
