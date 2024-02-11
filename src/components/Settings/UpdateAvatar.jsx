import convertFileToBase64ForAllTypeFiles from "../App/fileToBase64";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import portrait from "./images/portrait.svg";

export default function UpdateAvatar() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const formik = useFormik({
    initialValues: {
      addAvatar: "",
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
      formik.setFieldValue("addAvatar", "");
    },
  });

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const base64String = await convertFileToBase64ForAllTypeFiles(file);
    formik.setFieldValue("addAvatar", base64String);
  };

  return (
    <div className="w-[65%] min-h-[43rem] pl-[5rem] pt-2 border-l flex flex-col mx-auto items-start justify-center lg:items-start lg:justify-start ">
      <p className="font-bold text-[1.5rem] sm:text-[1.8rem] font-Rubik text-textColorNeutralBlack_0C092A">
        {languageArray[0].updateAvatar}
      </p>
      <form onSubmit={formik.handleSubmit} className="w-[70%] mt-10">
        <div
          className="flex justify-center items-center w-full h-[10rem] border-[3px] border-dashed border-[#6A5AE0] 
           rounded-2xl  hover:bg-slate-200 hover:border-none focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
        >
          <input
            id="addAvatar"
            onChange={handleFileChange}
            name="addAvatar"
            type="file"
            className="w-full h-full hidden"
          />

          <label
            htmlFor="addAvatar"
            className="py-6 px-28 flex flex-col justify-center items-center gap-2"
          >
            {!formik.values.addAvatar && (
              <img src={portrait} alt="addFileSVG" className="w-20 h20" />
            )}
            {formik.values.addAvatar && (
              <img
                src={formik.values.addAvatar}
                alt="Photo"
                className="rounded-full w-24 h-24"
              />
            )}

            <p className="w-[200px] text-center font-Rubik font-medium text-baseS text-primaryColor">
              {!formik.values.addAvatar
                ? languageArray[0].addAvatar
                : languageArray[0].avatarAdded}
            </p>
          </label>
        </div>

        <input
          onClick={(e) => {
            e.preventDefault();
            //   getNameAndSurName();
          }}
          type="submit"
          value={languageArray[0].saveChanges}
          className="w-full h-[3.3rem] mt-20 min-w-[240px] lg:mx-0 font-medium text-base font-Rubik text-white rounded-[1.25rem] flex items-center justify-center bg-primaryColor hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
        />
      </form>
    </div>
  );
}
