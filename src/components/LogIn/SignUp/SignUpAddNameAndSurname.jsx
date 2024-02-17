import Logo from "../Images/Logo_Queezy_Dark.svg";
import LogoText from "../Images/Queezy_Text_Dark.svg";
import UserIcon from "../Images/UserIcon.svg";
import { MyContext } from "./SignUpContext";
import { useContext } from "react";

export default function SignUpAddNameAndSurname() {
  const formik = useContext(MyContext);

  return (
    <div className="w-full h-full flex flex-col mx-auto items-start justify-center lg:items-start lg:justify-start ">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" />
        <img src={LogoText} alt="LogoText" />
      </div>
      <p className="font-bold text-[1.5rem] sm:text-[1.8rem] font-Rubik text-textColorNeutralBlack_0C092A mt-6 lg:mt-[2.5rem]">
        What’s your name and surname?
      </p>
      <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">
        Fill in all the data and proceed to the next step
      </p>

      <div className="flex flex-col items-end gap-2 my-6 w-[66%] min-w-[240px] mx-auto lg:mx-0">
        <p className="font-medium text-base font-Rubik text-primaryColor">
          <span className="animate-ping ">4</span> of 4
        </p>
        <div className="w-full flex items-center">
          <div className="w-[97%] h-2 bg-primaryColor rounded-lg animate-bounce"></div>
          <div className="w-[3%] h-2 bg-primaryColor opacity-10 rounded-r-lg"></div>
        </div>
      </div>

      <label
        htmlFor="nameSignUp"
        className="font-medium text-base font-Rubik text-[#49465F] mb-[0.38rem]"
      >
        Name
      </label>

      <div className="w-[66%] h-[3.5rem] min-w-[240px] mx-auto lg:mx-0 flex items-center justify-center relative mb-4">
        <img
          src={UserIcon}
          alt="lockIcon"
          className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]"
        />
        <input
          id="nameSignUp"
          name="nameSignUp"
          value={formik.values.nameSignUp}
          onChange={formik.handleChange}
          className="mt-10 mb-10 registerInputs "
          type="text"
          placeholder="Your name"
        />
      </div>

      <label
        htmlFor="surNameSignUp"
        className="font-medium text-base font-Rubik text-[#49465F] mb-[0.38rem]"
      >
        Surname
      </label>

      <div className="w-[66%] h-[3.5rem] min-w-[240px] mx-auto lg:mx-0 flex items-center justify-center relative">
        <img
          src={UserIcon}
          alt="lockIcon"
          className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]"
        />
        <input
          id="surNameSignUp"
          name="surNameSignUp"
          value={formik.values.surNameSignUp}
          onChange={formik.handleChange}
          className="mt-10 mb-10 registerInputs "
          type="text"
          placeholder="Your Surname"
        />
      </div>

      <input
        type="submit"
        value="Complete Account"
        className="w-[66%] h-[3.3rem] min-w-[240px] mx-auto lg:mx-0 font-medium text-base font-Rubik text-white rounded-[1.25rem] flex items-center justify-center bg-primaryColor mt-6 hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
      />
    </div>
  );
}
