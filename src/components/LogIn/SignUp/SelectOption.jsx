import { useState } from "react";
import { CountriesData } from "../../ui/CountriesData";
import CountryFlag from "react-country-flag";
import countryIcon from "../Images/country-icon.svg";

const SelectOption = ({ handleChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleSelectChange = (country) => {
    setSelectedOption(country);
    handleChange({
      target: { name: "countrySignUp", value: country },
    });
  };

  return (
    <div className="relative mt-4 w-full h-full">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setShowOptions((prev) => !prev)}
        name="countrySignUp"
        className="w-full rounded-[1.25rem] px-6 py-3 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
      >
        <div className="font-normal flex items-center gap-4 text-base font-Rubik text-textColorLigthGrey2_858494">
          <img src={countryIcon} alt="Country Icon" />
          {!selectedOption ? "Select your Country" : `${selectedOption}`}
        </div>
        {showOptions && (
          <div className="absolute top-full left-0 w-full max-h-[200px] bg-white border-2 border-[#EFEEFC] overflow-y-auto">
            {CountriesData.map((country) => (
              <div
                onClick={() => handleSelectChange(country.name)}
                className="flex gap-6 items-center w-full h-8 pl-6 py-2 font-normal text-base font-Rubik hover:bg-violet-400 focus:bg-violet-600 cursor-pointer"
                key={country.code}
              >
                <CountryFlag
                  countryCode={country.code}
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                />
                {country.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectOption;
