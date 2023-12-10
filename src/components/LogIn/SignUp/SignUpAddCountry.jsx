import Logo from "../Images/Logo_Queezy_Dark.svg";
import LogoText from "../Images/Queezy_Text_Dark.svg";
import SelectOption from "./SelectOption";
import { useDispatch } from "react-redux";
import { setSignUpStages } from "../userSlice";
import { MyContext } from "./SignUpContext";
import { useContext } from "react";

export default function SignUpAddCountry() {
  const dispatch = useDispatch();
  const formik = useContext(MyContext);

  function getCountry() {
    if (formik.values.countrySignUp) {
      dispatch(setSignUpStages("addNameAndSurname"));
      console.log(formik.values.countrySignUp);
    }
  }

  return (
    <div className="w-full h-full flex flex-col mx-auto items-start justify-center lg:items-start lg:justify-start ">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" />
        <img src={LogoText} alt="LogoText" />
      </div>
      <p className="font-bold text-[1.5rem] sm:text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-10 lg:mt-[4.5rem]">
        What’s your country?
      </p>
      <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">
        Fill in all the data and proceed to the next step
      </p>

      <div className="flex flex-col items-end gap-2 my-10 w-[66%] min-w-[240px] mx-auto lg:mx-0">
        <p className="font-medium text-base font-Rubik text-primaryColor">
          3 of 4
        </p>
        <div className="w-full flex items-center">
          <div className="w-[75%] h-2 bg-primaryColor rounded-lg"></div>
          <div className="w-[25%] h-2 bg-primaryColor opacity-10 rounded-r-lg"></div>
        </div>
      </div>

      <label className="mt-4 font-medium text-base font-Rubik text-[#49465F]">
        Country
      </label>

      <div
        id="countrySignUp"
        className="w-[66%] h-[3.5rem] min-w-[240px] mx-auto lg:mx-0 flex items-center justify-center relative"
      >
        <SelectOption handleChange={formik.handleChange} />
      </div>

      <button
        onClick={() => getCountry()}
        value="Next Step"
        className="w-[66%] h-[3.5rem] min-w-[240px] mx-auto lg:mx-0 font-medium text-base font-Rubik text-white  rounded-[1.25rem] flex items-center justify-center bg-primaryColor mt-10  hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"
      >
        Next Step
      </button>
    </div>
  );
}
