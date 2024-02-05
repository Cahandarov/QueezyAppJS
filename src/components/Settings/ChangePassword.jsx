import { useState } from "react";
import Logo from "./images/Logo_Queezy_Dark.svg";
import LogoText from "./images/Queezy_Text_Dark.svg";
import Lock from "./images/LockIcon.svg";
import showIcon from "./images/ShowPasswordIcon.svg";
import hideIcon from "./images/HidePasswordIcon.svg";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

export default function ChangePassword() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      passwordChangeOld: "",
      passwordChangeNew: "",
      passwordChangeConfirm: "",
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
      formik.setFieldValue("passwordChangeOld", "");
      formik.setFieldValue("passwordChangeNew", "");
      formik.setFieldValue("passwordChangeConfirm", "");
    },
  });
  return (
    <div className="w-[65%] min-h-[43rem] pl-[5rem] border-l flex flex-col mx-auto items-start justify-center lg:items-start lg:justify-start ">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" />
        <img src={LogoText} alt="LogoText" />
      </div>

      <p className="font-bold text-[1.5rem] sm:text-[1.8rem] font-Rubik text-textColorNeutralBlack_0C092A mt-6 lg:mt-[2.5rem]">
        {languageArray[0].changeYourPassword}
      </p>
      <form onSubmit={formik.handleSubmit} className="w-[70%] mt-10">
        <label
          htmlFor="passwordChangeOld"
          className="mt-4 mb-2 font-medium text-base font-Rubik text-[#49465F]"
        >
          {languageArray[0].oldPassword}
        </label>

        <div className="w-full h-[3.5rem] mt-1 mb-4 flex items-center justify-center relative">
          <input
            id="passwordChangeOld"
            value={formik.values.passwordChangeOld}
            onChange={formik.handleChange}
            name="passwordChangeOld"
            className="mt-6 mb-6 registerInputs"
            type={show ? "text" : "password"}
            placeholder={languageArray[0].enterOldPassword}
          />
          <img
            src={Lock}
            alt="lockIcon"
            className="top-0 left-0 absolute translate-x-4 translate-y-[1.1rem]"
          />
          <div
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            {show ? (
              <img
                src={showIcon}
                alt="showIcon"
                className="absolute top-0 right-0 -translate-x-5 translate-y-4"
              />
            ) : (
              <img
                src={hideIcon}
                alt="showIcon"
                className="absolute top-0 right-0 -translate-x-5 translate-y-4"
              />
            )}
          </div>
        </div>
        <label
          htmlFor="passwordChangeNew"
          className="mt-4 mb-2 font-medium text-base font-Rubik text-[#49465F]"
        >
          {languageArray[0].newPassword}
        </label>

        <div className="w-full h-[3.5rem] mt-1 mb-4 flex items-center justify-center relative">
          <input
            id="passwordChangeNew"
            value={formik.values.passwordChangeNew}
            onChange={formik.handleChange}
            name="passwordChangeNew"
            className="mt-6 mb-6 registerInputs"
            type={show ? "text" : "password"}
            placeholder={languageArray[0].enterNewPassword}
          />
          <img
            src={Lock}
            alt="lockIcon"
            className="top-0 left-0 absolute translate-x-4 translate-y-[1.1rem]"
          />
          <div
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            {show ? (
              <img
                src={showIcon}
                alt="showIcon"
                className="absolute top-0 right-0 -translate-x-5 translate-y-4"
              />
            ) : (
              <img
                src={hideIcon}
                alt="showIcon"
                className="absolute top-0 right-0 -translate-x-5 translate-y-4"
              />
            )}
          </div>
        </div>

        <label
          htmlFor="passwordChangeConfirm"
          className="mt-4 mb-2 font-medium text-base font-Rubik text-[#49465F]"
        >
          placeholder={languageArray[0].confirmPassword}
        </label>

        <div className="w-full h-[3.5rem] mt-1 flex items-center justify-center relative">
          <input
            id="passwordChangeConfirm"
            value={formik.values.passwordChangeConfirm}
            onChange={formik.handleChange}
            name="passwordChangeConfirm"
            className="mt-6 mb-6 registerInputs"
            type={show ? "text" : "password"}
            placeholder={languageArray[0].confirmYourNewPassword}
          />
          <img
            src={Lock}
            alt="lockIcon"
            className="top-0 left-0 absolute translate-x-4 translate-y-[1.1rem]"
          />
          <div
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            {show ? (
              <img
                src={showIcon}
                alt="showIcon"
                className="absolute top-0 right-0 -translate-x-5 translate-y-4"
              />
            ) : (
              <img
                src={hideIcon}
                alt="showIcon"
                className="absolute top-0 right-0 -translate-x-5 translate-y-4"
              />
            )}
          </div>
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

{
}
