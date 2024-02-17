import Logo from "./Images/Logo_Queezy_Dark.svg";
import LogoText from "./Images/Queezy_Text_Dark.svg";
import GoogleIcon from "./Images/GoogleIcon.svg";
import FacebookIcon from "./Images/FacebookIcon.svg";
import Lock from "./Images/LockIcon.svg";
import Email from "./Images/emailIconColored.svg";
import showIcon from "./Images/ShowPasswordIcon.svg";
import hideIcon from "./Images/HidePasswordIcon.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "./userSlice";
import { setRegisteredStatus } from "./userSlice";
import { useFormik } from "formik";
import { setForgotPasswordStatus } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { getDataThunk } from "./userSlice";
// import { useEffect } from "react";

export default function LoginMain() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function autherizeLogin() {
    dispatch(getDataThunk());
  }
  // useEffect(() => {
  //   autherizeLogin();
  // }, []);

  const userData = useSelector((state) => state.userData.users);

  // console.log(userData);
  const formik = useFormik({
    initialValues: {
      emailLogin: "",
      passwordLogin: "",
    },
    // validationSchema:validation
    onSubmit: (values) => {
      checkUserData(values);
    },
  });

  function checkUserData() {
    const matchedEmail = userData?.find(
      (user) => user.email === formik.values.emailLogin
    );
    const matchedPassword = userData?.find(
      (user) => user.password === formik.values.passwordLogin
    );

    if (matchedEmail && matchedPassword) {
      const enteredUser = userData?.filter(
        (user) => user.email === formik.values.emailLogin
      );
      localStorage.setItem("token", JSON.stringify(enteredUser[0]));

      dispatch(setLoginStatus(true));
      navigate("/");
      formik.values.emailLogin = "";
      formik.values.passwordLogin = "";
      return enteredUser;
    } else if (matchedEmail && !matchedPassword) {
      console.log(
        "You entered the wrong password. If you forget the password, please click to reset your password"
      );
    } else {
      console.log("Entered data not found, please sign up");
    }
  }

  function naigateToReset() {
    dispatch(setForgotPasswordStatus(true));
    navigate("/resetpassword");
  }

  function navigateToRegister() {
    dispatch(setRegisteredStatus(false));
    navigate("signup");
  }

  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col mx-auto items-center justify-center lg:items-start lg:justify-start w-full h-full lg:w-[50%] lg:h-full ">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" />
        <img src={LogoText} alt="LogoText" />
      </div>
      <p className="font-bold text-[1.5rem] sm:text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-4 lg:mt-[1.5rem]">
        Login in to Queezy
      </p>
      <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-2">
        Don’t have account?<span> </span>
        <button
          onClick={() => navigateToRegister()}
          className="font-medium text-base font-Rubik text-primaryColor animate-pulse"
        >
          {" "}
          Register
        </button>
      </p>

      <button className="w-[66%] h-[3.2rem] min-w-[240px] mx-auto lg:mx-0 rounded-[1.25rem] flex items-center justify-center gap-4 bg-white border-2 border-[#E6E6E6] mt-3  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300">
        <img src={GoogleIcon} alt="Google" />
        <p className="font-medium text-base font-Rubik text-textColorNeutralBlack_0C092A ">
          Login with Google
        </p>
      </button>

      <button className="w-[66%] h-[3.2rem] min-w-[240px] mx-auto lg:mx-0 rounded-[1.25rem] flex items-center justify-center gap-4 bg-[#0056B2] border-none mt-3 hover:bg-sky-600 hover:border-bg-sky-600 focus:outline-none focus:ring focus:ring-bg-sky-600 focus:ring-offset-2 transition-colors duration-300">
        <img src={FacebookIcon} alt="Google" />
        <p className="font-medium text-base font-Rubik text-textColorWhite ">
          Login with Facebook
        </p>
      </button>

      <div className="flex justify-center w-[66%] mx-auto lg:mx-0 min-w-[240px] items-center mt-2">
        <div className="w-[40%] h-[1px] bg-[#ccc]"></div>
        <p className="px-[1.43rem] font-normal text-base font-Rubik text-textColorLigthGrey2_858494">
          OR
        </p>
        <div className="w-[40%] h-[1px] bg-[#ccc]"></div>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="mt-2 w-[66%] min-w-[240px] mx-auto lg:mx-0 flex flex-col items-start justify-start"
      >
        <label
          htmlFor="emailLogin"
          className="font-medium text-base mb-2 font-Rubik text-[#49465F]"
        >
          Email Address
        </label>

        <div className="w-full h-[2.6rem] min-w-[240px] flex items-center justify-center relative">
          <img
            src={Email}
            alt="lockIcon"
            className="top-0 left-0 absolute translate-x-4 translate-y-4"
          />
          <input
            id="emailLogin"
            name="emailLogin"
            value={formik.values.emailLogin}
            onChange={formik.handleChange}
            className="my-auto registerInputs "
            type="email"
            placeholder="Your email address"
          />
        </div>

        <label
          htmlFor="passwordLogin"
          className="mt-3 mb-2 font-medium text-base font-Rubik text-[#49465F]"
        >
          Password
        </label>

        <div className="w-full h-[2.6rem] flex items-center justify-center relative">
          <input
            id="passwordLogin"
            name="passwordLogin"
            value={formik.values.passwordLogin}
            onChange={formik.handleChange}
            className="my-auto registerInputs"
            type={show ? "text" : "password"}
            placeholder="Your password"
          />
          <img
            src={Lock}
            alt="lockIcon"
            className="top-0 left-0 absolute translate-x-4 translate-y-4"
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
            e.preventDefault();
            autherizeLogin();
            checkUserData(formik.values);
          }}
          type="submit"
          value="Login"
          placeholder="Login"
          className="w-full h-[3.2rem] min-w-[240px] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none mt-6 hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"
        />
      </form>

      <button
        onClick={() => naigateToReset()}
        className="font-medium text-base font-Rubik text-primaryColor w-[66%]"
      >
        Forgot password?
      </button>
      <div className="w-full lg:w-[66%] flex justify-center items-center">
        <p className="font-normal w-[220px] mx-auto lg:w-[322px] text-sm md:text-base font-Rubik text-textColorLigthGrey2_858494  mt-2  text-center">
          By continuing, you agree to the{" "}
          <a
            href="#privacy"
            className="font-medium text-sm md:text-base font-Rubik text-[#49465F]"
          >
            Terms of Services
            <span className="text-textColorLigthGrey2_858494"> & </span> Privacy
            Policy.
          </a>
        </p>
      </div>
    </div>
  );
}
