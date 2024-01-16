import plusIcon from "../images/plusIcon.svg";
import addFile from "../images/addFile.svg";
import SelectTime from "./SelectTime";
import { useState } from "react";
import { useFormik } from "formik";
import { FormikContext } from "../CreateQuizModal/FormikContext";
import SelectQuestionType from "./SelectQuestionType";
import MultipleAnswers from "./MultipleAnswers";
import TrueAndFalseAnswers from "./TrueAndFalseAnswers";
import TypeAnswer from "./TypeAnswer";
import VoiceAnswer from "./VoiceAnswer";
import VoiceQuestion from "./VoiceQuestion";
import AddCheckboxAnswer from "./AddCheckboxAnswer";
import Poll from "./Poll";
import Puzzle from "./Puzzle";
import SelectPoint from "./SelectPoint";
import QuizSettingsItem from "./QuizSettingsItem";
import { useSelector, useDispatch } from "react-redux";
import { setSetQuestionsLastPage } from "../createQuizSlice";
import { setSetQuestionsPage } from "../createQuizSlice";
import { setAddQuiz } from "../quizzesSlice";
import convertFileToBase64ForAllTypeFiles from "../../App/fileToBase64";

// import { setQuestionType } from "./questionTypesslice";
const questions = [];
export default function QuizSettings() {
  const newQuiz = useSelector((state) => state.quizzes.newQuiz);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      addCoverFileToQuestion: "",
      addQuizTimeToQuestion: "10",
      addPointsToQuestion: "10",
      selectedQuestionType: "Multiple Answer",
      addQuestion: "",
      addExplanation: "",
      addOptions: [],
      addCorrectOption: [],
    },
    onSubmit: (values) => {
      // if (
      //   values.addCoverFileToQuestion &&
      //   values.addQuizTimeToQuestion &&
      //   values.addPointsToQuestion &&
      //   values.selectedQuestionType &&
      //   values.addQuestion &&
      //   values.addOptions &&
      //   values.addCorrectOption &&
      //   values.addExplanation
      // ) {
      const newQuestion = {
        id: questions.length + 1,
        type: values.selectedQuestionType,
        question: values.addQuestion,
        options: values.addOptions,
        correctAnswer: values.addCorrectOption,
        explanation: values.addExplanation,
        answerTime: values.addQuizTimeToQuestion,
        score: values.addPointsToQuestion,
        image: values.addCoverFileToQuestion,
      };

      questions.push(newQuestion);
      console.log(questions);
      formik.setFieldValue("addCoverFileToQuestion", "");
      formik.setFieldValue("addQuizTimeToQuestion", "10");
      formik.setFieldValue("addPointsToQuestion", "10");
      formik.setFieldValue("selectedQuestionType", "Multiple Answer");
      formik.setFieldValue("addQuestion", "");
      formik.setFieldValue("addExplanation", "");
      formik.setFieldValue("addCorrectOption", []);
      formik.setFieldValue("addOptions", []);
      // }

      // formik.resetForm();
    },
  });
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const base64String = await convertFileToBase64ForAllTypeFiles(file);
    formik.setFieldValue("addCoverFileToQuestion", base64String);
  };
  function handleOpenLastPage() {
    const updatedNewQuiz = { ...newQuiz, questions: [...questions] };
    dispatch(setSetQuestionsLastPage(true));
    dispatch(setSetQuestionsPage(false));
    dispatch(setAddQuiz(updatedNewQuiz));
    console.log(updatedNewQuiz);
  }

  return (
    <FormikContext.Provider value={formik}>
      <div className="flex flex-col w-full h-full  min-h-[1086px] px-10 pt-10 pb-4 bg-BackRCLigthGrey_EFEEFC">
        <div className="quizlibrary flex flex-col mx-auto justify-between h-[63.5rem] w-[98%] rounded-[2rem] p-6 mb-2 border-2 border-[#EFEEFC] bg-white ">
          <div className="w-full flex justify-between items-center">
            <p className="font-medium text-2xl text-textColorNeutralBlack_0C092A font-Rubik text-left">
              Quiz Settings
            </p>
            <button
              onClick={() => {
                handleOpenLastPage();
              }}
              className="w-[8,43rem] h-14 buttons  HoverAndFocusDark flex justify-center items-center gap-4 py-4 px-8"
            >
              Continue
            </button>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex items-center w-full h-full pt-6"
          >
            <div className="flex flex-col w-[50%] h-full max-h-[890px] items-start pr-6 border-r border-[#EFEEFC]">
              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-[#EFEEFC] font-Rubik font-medium text-base text-primaryColor flex justify-center items-center gap-3  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
              >
                <img src={plusIcon} alt="plus" /> Add New Question
              </button>
              <div className="w-full h-full flex flex-col items-start justify-start gap-3 mt-4 pb-4 overflow-auto ">
                {questions.map((question, index) => (
                  <QuizSettingsItem question={question} key={index} />
                ))}
              </div>
            </div>
            <div className="flex flex-col w-[50%] h-full items-start pl-6">
              <div className="flex justify-center items-center w-full h-[10rem] border-[3px] border-dashed border-[#6A5AE0] rounded-2xl  hover:bg-slate-200 hover:border-none focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300">
                <input
                  id="addCoverFileToQuestion"
                  onChange={handleFileChange}
                  name="addCoverFileToQuestion"
                  type="file"
                  className="w-full h-full hidden"
                />

                <label
                  htmlFor="addCoverFileToQuestion"
                  className="py-6 px-28 flex flex-col justify-center items-center gap-2"
                >
                  <img src={addFile} alt="addFileSVG" />

                  <p className="w-[160px] text-center font-Rubik font-medium text-baseS text-primaryColor">
                    {!formik.values.addCoverFileToQuestion
                      ? "Add Cover Image"
                      : "Cover Image Added"}
                  </p>
                </label>
              </div>

              <div className="flex w-full justify-between items-center mt-6">
                <div className="flex items-center justify-start gap-3">
                  <SelectTime
                    handleChange={formik.handleChange}
                    formik={formik.values.addQuizTimeToQuestion}
                  />
                  <SelectPoint
                    handleChange={formik.handleChange}
                    formik={formik.values.addPointsToQuestion}
                  />
                </div>

                <SelectQuestionType
                  handleChange={formik.handleChange}
                  formik={formik.values.selectedQuestionType}
                />
              </div>
              {formik.values.selectedQuestionType === "Multiple Answer" && (
                <MultipleAnswers />
              )}
              {formik.values.selectedQuestionType === "True or False" && (
                <TrueAndFalseAnswers />
              )}
              {formik.values.selectedQuestionType === "Type Answer" && (
                <TypeAnswer />
              )}
              {formik.values.selectedQuestionType === "Voice Answer" && (
                <VoiceAnswer />
              )}
              {formik.values.selectedQuestionType === "Voice Question" && (
                <VoiceQuestion />
              )}
              {formik.values.selectedQuestionType === "Checkbox" && (
                <AddCheckboxAnswer />
              )}
              {formik.values.selectedQuestionType === "Poll" && <Poll />}
              {formik.values.selectedQuestionType === "Puzzle" && <Puzzle />}
            </div>
          </form>
        </div>
      </div>
    </FormikContext.Provider>
  );
}
