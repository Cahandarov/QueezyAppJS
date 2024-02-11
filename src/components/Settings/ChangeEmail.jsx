import Email from "./images/emailIconColored.svg";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

export default function ChangeEmail() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const formik = useFormik({
    initialValues: {
      emailChangeOld: "",
      emailChangeNew: "",
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
      formik.setFieldValue("emailChangeOld", "");
      formik.setFieldValue("emailChangeNew", "");
    },
  });
  return (
    <div className="w-[65%] min-h-[43rem] pl-[5rem] pt-2 border-l flex flex-col mx-auto items-start justify-center lg:items-start lg:justify-start ">
      <p className="font-bold text-[1.5rem] sm:text-[1.8rem] font-Rubik text-textColorNeutralBlack_0C092A ">
        {languageArray[0].updateYourEmail}
      </p>
      <form onSubmit={formik.handleSubmit} className="w-[70%] mt-10">
        <label
          htmlFor="emailChangeOld"
          className="font-medium text-base mb-10 font-Rubik text-[#49465F]"
        >
          {languageArray[0].oldEmail}
        </label>

        <div className="w-full h-[3.5rem] mt-1 mb-6 min-w-[240px] mx-auto lg:mx-0 flex items-center justify-center relative">
          <img
            src={Email}
            alt="lockIcon"
            className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]"
          />
          <input
            id="emailChangeOld"
            name="emailChangeOld"
            value={formik.values.emailChangeOld}
            onChange={formik.handleChange}
            className="mt-10 mb-10 registerInputs "
            type="email"
            placeholder={languageArray[0].enterOldEmail}
          />
        </div>

        <label
          htmlFor="emailChangeNew"
          className="font-medium text-base mb-2 font-Rubik text-[#49465F]"
        >
          {languageArray[0].newEmail}
        </label>

        <div className="w-full h-[3.5rem] mt-1 min-w-[240px] mx-auto lg:mx-0 flex items-center justify-center relative">
          <img
            src={Email}
            alt="lockIcon"
            className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]"
          />
          <input
            id="emailChangeNew"
            name="emailChangeNew"
            value={formik.values.emailChangeNew}
            onChange={formik.handleChange}
            className="mt-10 mb-10 registerInputs "
            type="email"
            placeholder={languageArray[0].enterNewEmail}
          />
        </div>

        <input
          onClick={(e) => {
            // e.preventDefault();
            //   getNameAndSurName();
          }}
          type="submit"
          value={languageArray[0].saveChanges}
          className="w-full h-[3.3rem] mt-14 min-w-[240px] lg:mx-0 font-medium text-base font-Rubik text-white rounded-[1.25rem] flex items-center justify-center bg-primaryColor hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
        />
      </form>
    </div>
  );
}
