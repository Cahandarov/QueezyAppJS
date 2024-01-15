import {
  setQuizLibraryMainPage,
  setSetQuestionsLastPage,
  setSetQuestionsPage,
} from "../createQuizSlice";
import edit from "../images/editIcon.svg";
import photo from "../images/photo.png";
import { postNewQuizThunk } from "../quizzesSlice";
import QuizSettingsItemLast from "./QuizSettingsItem";
import { useDispatch, useSelector } from "react-redux";
export default function CreateQuizLastPage() {
  const dispatch = useDispatch();
  const newQuiz = useSelector((state) => state.quizzes.newQuiz);
  const quizzes = useSelector((state) => state.quizzes.quizzes);

  const filteredData =
    quizzes && newQuiz
      ? quizzes.filter((item) => {
          // console.log("item:", item);
          // console.log("newQuiz:", newQuiz);
          return item?.categoryName === newQuiz?.categoryName;
        })
      : [];

  console.log(quizzes);

  function handleSaveQuizzes() {
    if (newQuiz) {
      dispatch(postNewQuizThunk(newQuiz));
      console.log(quizzes);
    } else {
      console.error("newQuiz is null or undefined");
    }
    dispatch(setQuizLibraryMainPage(true));
    dispatch(setSetQuestionsLastPage(false));
  }

  function handleBackPreviusPage() {
    dispatch(setSetQuestionsLastPage(false));
    dispatch(setSetQuestionsPage(true));
  }
  return (
    <div className="flex flex-col w-full h-full  min-h-[1086px] px-10 pt-10 pb-4 bg-BackRCLigthGrey_EFEEFC">
      <div className="quizlibrary flex flex-col justify-between mx-auto h-[63.5rem] w-[98%] rounded-[2rem] p-6 mb-2 border-2 border-[#EFEEFC] bg-white ">
        <div className="flex justify-between items-start gap-10">
          <div className="w-[35%] h-[27rem] p-6 flex flex-col gap-4 rounded-3xl border-2 border-[#EFEEFC] bg-white">
            <div className="w-full flex justify-between items-start">
              <p className="font-Rubik font-medium text-2xl text-textColorNeutralBlack_0C092A">
                Quiz Information
              </p>
              <img src={edit} alt="Edit Icon" />
            </div>
            <img src={photo} alt="Quiz Cover" className="w-full" />
            <p className="font-Rubik font-medium text-xl text-textColorNeutralBlack_0C092A">
              {newQuiz.title}
            </p>
            <p className="font-Rubik font-normal text-base text-[#858494]">
              {newQuiz.description}
            </p>
            <div className="w-full flex gap-1 items-center">
              <p className="font-Rubik font-normal text-base text-[#49465F]">
                {newQuiz.categoryName}
              </p>
              <div className="w-[5px] h-[5px] rounded-full bg-[#49465F]"></div>
              <p className="font-Rubik font-normal text-base text-[#49465F]">
                {filteredData.length} <span>Quizzes</span>
              </p>
            </div>
          </div>
          <div className="flex w-[65%] mb-8 max-h-[860px] pr-6 flex-col gap-3 overflow-auto">
            {newQuiz?.questions?.map((question, index) => (
              <QuizSettingsItemLast key={index} question={question} />
            ))}
          </div>
        </div>
        <div className="w-full h-[11%] px-2 flex items-center justify-end gap-4 overflow-auto">
          <button
            onClick={() => handleBackPreviusPage()}
            className="w-[8rem] h-[3.2rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-primaryColor bg-white border-2 border-primaryColor hover:bg-slate-100 hover:border-slate-400 focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
          >
            Back
          </button>
          <button
            onClick={() => handleSaveQuizzes()}
            className="w-[8rem] h-[3.2rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
