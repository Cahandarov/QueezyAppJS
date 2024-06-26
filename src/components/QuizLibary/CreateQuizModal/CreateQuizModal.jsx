import "primeicons/primeicons.css";
import addFile from "../images/addFile.svg";
import SelectAddCategory from "./SelectAddCategory";
import { useFormik } from "formik";
import {
  setCreateQuizModal,
  setCreateQuizSecondModal,
} from "../createQuizSlice";
import { setAddQuiz } from "../quizzesSlice";
import { useDispatch, useSelector } from "react-redux";
import convertFileToBase64ForAllTypeFiles from "../../App/fileToBase64";
import { format } from "date-fns";

export default function CreateQuizModal() {
  const token = JSON.parse(localStorage.getItem("token"));
  const languageArray = useSelector((state) => state.language.languageArray);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      addCoverFile: "",
      addQuizTitle: "",
      addQuizCategory: "",
      addQuizDescription: "",
    },
    onSubmit: (values) => {
      if (
        values.addCoverFile &&
        values.addQuizTitle &&
        values.addQuizCategory &&
        values.addQuizDescription
      ) {
        const newQuiz = {
          id: Date.now(),
          categoryName: values.addQuizCategory,
          title: values.addQuizTitle,
          description: values.addQuizDescription,
          coverImage: values.addCoverFile,
          createdDate: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
          timesPlayed: 0,
          creator: {
            firstName: token.firstName,
            lastName: token.lastName,
            userId: token.userId,
            avatar: token.avatar,
          },
        };
        dispatch(setAddQuiz(newQuiz));
        dispatch(setCreateQuizModal(false));
        dispatch(setCreateQuizSecondModal(true));
        console.log(values);
        formik.setFieldValue("addCoverFile", "");
        formik.setFieldValue("addQuizTitle", "");
        formik.setFieldValue("addQuizCategory", "");
        formik.setFieldValue("addQuizDescription", "");
      }
    },
  });

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const base64String = await convertFileToBase64ForAllTypeFiles(file);
    formik.setFieldValue("addCoverFile", base64String);
  };

  return (
    <div className="overlay flex justify-center items-center z-10">
      <form
        onSubmit={formik.handleSubmit}
        className="w-[30%] h-[98vh] rounded-[2rem] bg-white py-6 px-8 flex flex-col gap-3 items-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-2xl font-Rubik text-textColorNeutralBlack_0C092A">
            {languageArray[0].createQuiz}
          </p>
          <i
            onClick={() => dispatch(setCreateQuizModal(false))}
            className="pi pi-times"
          ></i>
        </div>
        <div
          className="flex justify-center items-center w-full h-[10rem] border-[3px] border-dashed border-[#6A5AE0] 
           rounded-2xl  hover:bg-slate-200 hover:border-none focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
        >
          <input
            id="addCoverFile"
            onChange={handleFileChange}
            name="addCoverFile"
            type="file"
            className="w-full h-full hidden"
          />

          <label
            htmlFor="addCoverFile"
            className="py-6 px-28 flex flex-col justify-center items-center gap-2"
          >
            <img src={addFile} alt="addFileSVG" />

            <p className="w-[170px] text-center font-Rubik font-medium text-baseS text-primaryColor">
              {!formik.values.addCoverFile
                ? languageArray[0].addCoverImage
                : languageArray[0].coverImageAdded}
            </p>
          </label>
        </div>
        <label
          htmlFor="addQuizTitle"
          className="font-medium my-0 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
        >
          {languageArray[0].Title}
        </label>
        <input
          id="addQuizTitle"
          name="addQuizTitle"
          value={formik.values.addQuizTitle}
          onChange={formik.handleChange}
          className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
          type="text"
          placeholder={languageArray[0].enterQuizTitle}
        />

        <label
          htmlFor="addQuizCategory"
          className="font-medium text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
        >
          {languageArray[0].quizCategory}
        </label>
        <SelectAddCategory handleChange={formik.handleChange} />

        <label
          htmlFor="addQuizDescription"
          className="font-medium text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
        >
          {languageArray[0].Description}
        </label>
        <textarea
          id="addQuizDescription"
          value={formik.values.addQuizDescription}
          onChange={formik.handleChange}
          placeholder={languageArray[0].enterQuizDescription}
          rows="3"
          className="bg-white border-2 w-full border-[#EFEEFC] px-4 py-[0.9rem] rounded-[1.25rem] resize-none  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
        ></textarea>

        <button
          type="submit"
          className="w-full h-[3.2rem] min-w-[240px] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none mt-2 hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
        >
          {languageArray[0].nextStep}
        </button>
      </form>
    </div>
  );
}
