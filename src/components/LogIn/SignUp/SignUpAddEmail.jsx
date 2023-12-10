import Logo from "../Images/Logo_Queezy_Dark.svg";
import LogoText from "../Images/Queezy_Text_Dark.svg";
import EmailColored from "../Images/emailIconColored.svg";
import { useDispatch } from "react-redux";
import { setSignUpStages } from "../userSlice";
import { MyContext } from "./SignUpContext";
import { useContext } from "react";
// import uniqid from 'uniqid';

export default function SignUpAddEmail() {
  const formik = useContext(MyContext);

  const dispatch = useDispatch();

  function getEmail() {
    if (formik.values.emailSignUp) {
      console.log(formik.values.emailSignUp);
      dispatch(setSignUpStages("addPassword"));
    }
  }
  return (
    <div className="w-full h-full flex flex-col mx-auto items-start justify-center lg:items-start lg:justify-start ">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" />
        <img src={LogoText} alt="LogoText" />
      </div>
      <p className="font-bold text-[1.5rem] sm:text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-10 lg:mt-[4.5rem]">
        What’s your email?
      </p>
      <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">
        Fill in all the data and proceed to the next step
      </p>

      <div className="flex flex-col items-end gap-2 my-10 w-[66%] min-w-[240px] mx-auto lg:mx-0">
        <p className="font-medium text-base font-Rubik text-primaryColor">
          1 of 4
        </p>
        <div className="w-full flex items-center">
          <div className="w-[25%] h-2 bg-primaryColor rounded-lg"></div>
          <div className="w-[75%] h-2 bg-primaryColor opacity-10 rounded-r-lg"></div>
        </div>
      </div>

      <label
        htmlFor="emailSignUp"
        className="font-medium text-left text-base font-Rubik text-[#49465F] mb-[0.38rem]"
      >
        Email Address
      </label>

      <div className="w-[66%] h-[3.5rem] min-w-[240px] mx-auto lg:mx-0 flex items-center justify-center relative">
        <img
          src={EmailColored}
          alt="lockIcon"
          className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]"
        />
        <input
          id="emailSignUp"
          name="emailSignUp"
          value={formik.values.emailSignUp}
          onChange={formik.handleChange}
          className="mt-10 mb-10 registerInputs "
          type="email"
          placeholder="Your email address"
        />
      </div>

      <button
        onClick={(e) => {
          getEmail();
          e.preventDefault();
        }}
        className="w-[66%] h-[3.5rem] min-w-[240px] mx-auto lg:mx-0 rounded-[1.25rem] font-medium text-base font-Rubik text-white  flex items-center justify-center bg-primaryColor mt-10  hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
      >
        Next Step
      </button>
    </div>
  );
}
