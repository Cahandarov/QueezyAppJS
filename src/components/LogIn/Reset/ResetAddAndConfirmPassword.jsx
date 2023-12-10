import Logo from "../Images/Logo_Queezy_Dark.svg";
import LogoText from "../Images/Queezy_Text_Dark.svg";
import Lock from "../Images/LockIcon.svg";
import showIcon from "../Images/ShowPasswordIcon.svg";
import hideIcon from "../Images/HidePasswordIcon.svg";
import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setResetPasswordStages } from "../userSlice";
import { setForgotPasswordStatus } from "../userSlice";
import { useNavigate } from "react-router-dom";

export default function ResetAddAndConfirmPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      passwordReset: "",
      confirmPasswordReset: "",
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
    },
  });
  function ResetAddPassword() {
    if (
      formik.values.passwordReset &&
      formik.values.confirmPasswordReset &&
      formik.values.passwordReset === formik.values.confirmPasswordReset
    ) {
      dispatch(setResetPasswordStages("ResetEmail"));
      dispatch(setForgotPasswordStatus(false));
      navigate("/login");
    }
  }
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-full flex flex-col mx-auto items-start justify-center lg:items-start lg:justify-start ">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" />
        <img src={LogoText} alt="LogoText" />
      </div>
      <p className="font-bold text-[1.5rem] sm:text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-[4.5rem]">
        New Password
      </p>
      <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">
        Please enter your new password twice so we can verify you typed it in
        correctly.
      </p>

      <form
        onSubmit={formik.handleSubmit}
        className="mt-[2.25rem] w-[66%] min-w-[240px] mx-auto lg:mx-0 flex flex-col items-start justify-start"
      >
        <label
          htmlFor="passwordReset"
          className="mt-4 mb-2 font-medium text-base font-Rubik text-[#49465F]"
        >
          Password
        </label>

        <div className="w-full h-[3.5rem] flex items-center justify-center relative">
          <input
            id="passwordReset"
            value={formik.values.passwordReset}
            onChange={formik.handleChange}
            name="passwordReset"
            className="mt-6 mb-6 registerInputs"
            type={show ? "text" : "password"}
            placeholder="Your password"
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
          htmlFor="confirmPasswordReset"
          className="mt-4 mb-2 font-medium text-base font-Rubik text-[#49465F]"
        >
          Confirm Password
        </label>

        <div className="w-full h-[3.5rem] flex items-center justify-center relative">
          <input
            id="confirmPasswordReset"
            value={formik.values.confirmPasswordReset}
            onChange={formik.handleChange}
            name="confirmPasswordReset"
            className="mt-6 mb-6 registerInputs"
            type={show ? "text" : "password"}
            placeholder="Your password"
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
          onClick={() => {
            ResetAddPassword();
          }}
          type="submit"
          value="Reset Password"
          placeholder="Reset Password"
          className="w-full h-[3.5rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite  bg-primaryColor border-none mt-6 hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"
        />
      </form>
    </div>
  );
}
