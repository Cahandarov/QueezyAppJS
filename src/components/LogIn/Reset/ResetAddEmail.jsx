import Logo from "../Images/Logo_Queezy_Dark.svg";
import LogoText from "../Images/Queezy_Text_Dark.svg";
import Email from "../Images/emailIconColored.svg";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setResetPasswordStages } from "../userSlice";

export default function ResetAddEmail() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      emailReset: "",
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
    },
  });
  function ResetAddEmail() {
    if (formik.values.emailReset) {
      dispatch(setResetPasswordStages("ResetPassword"));
    }
  }
  return (
    <div className="w-full h-full flex flex-col mx-auto items-start justify-center lg:items-start lg:justify-start ">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" />
        <img src={LogoText} alt="LogoText" />
      </div>
      <p className="font-bold text-[1.5rem] sm:text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-[4.5rem]">
        Reset Password
      </p>
      <p className="font-normal w-[66%] min-w-[238px] text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">
        Enter your email and we will send you a link to reset your password.
      </p>

      <form
        onSubmit={formik.handleSubmit}
        className="mt-[2.25rem] w-[66%] min-w-[240px] mx-auto lg:mx-0 flex flex-col items-start justify-start"
      >
        <label
          htmlFor="emailReset"
          className="font-medium text-base mb-2 font-Rubik text-[#49465F]"
        >
          Email Address
        </label>

        <div className="w-full h-[3.5rem] min-w-[240px] mx-auto lg:mx-0 flex items-center justify-center relative">
          <img
            src={Email}
            alt="lockIcon"
            className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]"
          />
          <input
            id="emailReset"
            name="emailReset"
            value={formik.values.emailReset}
            onChange={formik.handleChange}
            className="mt-10 mb-10 registerInputs "
            type="email"
            placeholder="Your email address"
          />
        </div>

        <input
          onClick={() => {
            ResetAddEmail();
          }}
          type="submit"
          value="Reset Password"
          placeholder="Reset Password"
          className="w-full h-[3.5rem] min-w-[240px] mx-auto lg:mx-0 rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite  bg-primaryColor border-none mt-6 hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"
        />
      </form>
    </div>
  );
}
