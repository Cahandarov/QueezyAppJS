import Logo from "../Images/Logo_Queezy_Dark.svg";
import LogoText from "../Images/Queezy_Text_Dark.svg";
import GoogleIcon from "../Images/GoogleIcon.svg";
import FacebookIcon from "../Images/FacebookIcon.svg";
import Email from "../Images/emailIcon.svg";
import { setRegisteredStatus } from "../userSlice";
import { setSignUpStages } from "../userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignUpMain() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function navigateToLogin() {
    dispatch(setRegisteredStatus(true));
    navigate("/login");
  }
  return (
    <div className="w-full h-full flex flex-col mx-auto items-center justify-center lg:items-start lg:justify-start ">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" />
        <img src={LogoText} alt="LogoText" />
      </div>
      <p className="font-bold text-[1.5rem] sm:text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-10 lg:mt-[3rem]">
        Sign up
      </p>
      <p className="font-normal text-base text-center lg:text-left font-Rubik text-textColorLigthGrey2_858494 mt-3">
        Already have an account?<span> </span>
        <button
          onClick={() => navigateToLogin()}
          className="font-medium text-base font-Rubik text-primaryColor animate-pulse"
        >
          {" "}
          Login
        </button>
      </p>

      <button className="w-[66%] h-[3.3rem] min-w-[240px] mx-auto lg:mx-0  rounded-[1.25rem] flex items-center justify-center gap-4 bg-white border-2 border-[#E6E6E6] mt-10  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300">
        <img src={GoogleIcon} alt="Google" />
        <p className="font-medium text-base font-Rubik text-textColorNeutralBlack_0C092A ">
          Sign Up with Google
        </p>
      </button>

      <button className="w-[66%] h-[3.3rem] min-w-[240px] mx-auto lg:mx-0  rounded-[1.25rem] flex items-center justify-center gap-4 bg-[#0056B2] border-none mt-4   hover:bg-sky-600 hover:border-bg-sky-600 focus:outline-none focus:ring focus:ring-bg-sky-600 focus:ring-offset-2 transition-colors duration-300">
        <img src={FacebookIcon} alt="Google" />
        <p className="font-medium text-base font-Rubik text-textColorWhite ">
          Sign Up with Facebook
        </p>
      </button>

      <div className="flex justify-center w-[66%] mx-auto lg:mx-0 min-w-[240px] items-center mt-9">
        <div className="w-[11.35319rem] h-[1px] bg-[#ccc]"></div>
        <p className="px-[1.43rem] font-normal text-base font-Rubik text-textColorLigthGrey2_858494">
          OR
        </p>
        <div className="w-[11.35319rem] h-[1px] bg-[#ccc]"></div>
      </div>

      <button
        onClick={() => dispatch(setSignUpStages("addEmail"))}
        className="w-[66%] h-[3.3rem] min-w-[240px] mx-auto lg:mx-0 rounded-[1.25rem] flex items-center justify-center gap-4 bg-primaryColor mt-10  hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
      >
        <img src={Email} alt="EmailIcon" />
        <p className="font-medium text-base font-Rubik text-white ">
          Sign Up with Email
        </p>
        <img src={Email} alt="EmailIcon" />
      </button>

      <p className="font-normal text-base text-center lg:text-left font-Rubik text-textColorLigthGrey2_858494 mt-3">
        Already have an account?<span> </span>
        <button
          onClick={() => navigateToLogin()}
          className="font-medium text-base font-Rubik text-primaryColor animate-pulse"
        >
          {" "}
          Login
        </button>
      </p>

      <div className="w-full lg:w-[66%] flex justify-center items-center">
        <p className="font-normal w-[260px] mx-auto lg:w-[322px] text-sm md:text-base font-Rubik text-textColorLigthGrey2_858494  mt-6  text-center">
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
