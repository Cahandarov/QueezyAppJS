import { useState } from "react";
import UserIcon from "./images/UserIcon.svg";
import SettingsCountryChange from "./SettingsCountryChange";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

export default function UpdateProfile() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const [selectedOption, setSelectedOption] = useState("");
  const formik = useFormik({
    initialValues: {
      nameChange: "",
      surnameChange: "",
      countryChange: "",
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      setSelectedOption("");
    },
  });
  return (
    <div className="w-[65%] min-h-[43rem] pl-[5rem] pt-2 border-l flex flex-col mx-auto items-start justify-center lg:items-start lg:justify-start ">
      <p className="font-bold text-[1.5rem] sm:text-[1.8rem] font-Rubik text-textColorNeutralBlack_0C092A ">
        {languageArray[0].updateYourProfile}
      </p>
      <form onSubmit={formik.handleSubmit} className="w-[70%] mt-10">
        <label
          htmlFor="nameChange"
          className="font-medium text-base font-Rubik text-[#49465F] mt-10"
        >
          {languageArray[0].Name}
        </label>

        <div className="w-full h-[3.5rem] min-w-[240px] mx-auto lg:mx-0 flex items-center justify-center relative mb-4 mt-1">
          <img
            src={UserIcon}
            alt="lockIcon"
            className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]"
          />
          <input
            id="nameChange"
            name="nameChange"
            value={formik.values.nameChange}
            onChange={formik.handleChange}
            className="mt-10 mb-10 registerInputs "
            type="text"
            placeholder={languageArray[0].changeYourName}
          />
        </div>

        <label
          htmlFor="surnameChange"
          className="font-medium text-base font-Rubik text-[#49465F] mb-[0.38rem]"
        >
          {languageArray[0].Surname}
        </label>

        <div className="w-full h-[3.5rem] mb-4 mt-1 min-w-[240px] mx-auto lg:mx-0 flex items-center justify-center relative">
          <img
            src={UserIcon}
            alt="lockIcon"
            className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]"
          />
          <input
            id="surnameChange"
            name="surnameChange"
            value={formik.values.surnameChange}
            onChange={formik.handleChange}
            className="mt-10 mb-10 registerInputs "
            type="text"
            placeholder={languageArray[0].changeYourSurname}
          />
        </div>
        <label className="mt-8 font-medium text-base font-Rubik text-[#49465F]">
          {languageArray[0].Country}
        </label>
        <div className="w-full">
          <SettingsCountryChange
            handleChange={formik.handleChange}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
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
