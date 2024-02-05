import avatar from "./images/avatar.png";
import background from "./images/Background.png";
import flag from "./images/flag.png";
import copyIcon from "../Profile/images/copyIcon.svg";
import { profileData } from "./profileData";
import { useRef, useState } from "react";
import ProfileButtons from "./ProfileButtons";
import Badge from "./Badge";
import Stats from "./Stats";
import Details from "./Details";
import { useSelector } from "react-redux";

export default function ProfileMain() {
  const emailRef = useRef(null);
  const languageArray = useSelector((state) => state.language.languageArray);
  const [value, setValue] = useState("Badge");

  const handleCopyClick = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
      })
      .catch((error) => {
        console.error("Unable to copy text to clipboard", error);
      });
  };
  return (
    <div className="flex flex-col gap-8 w-full h-full  min-h-[1086px] px-10 pt-10 pb-4 bg-[#FBFBFC]">
      <div className="boxShadow relative flex flex-col mx-auto justify-between h-[63.5rem] w-full rounded-[2rem] p-8 mb-2 border-2 border-[#EFEEFC] bg-white ">
        <div className="w-full bg-primaryColor rounded-2xl relative">
          <img src={background} alt="Pattern" className="w-full h-[18rem]" />
        </div>
        <div className="w-[37%] h-[40rem] p-6 absolute left-16 top-40 border border-[#EFEEFC] rounded-2xl bg-white shadow-sm flex flex-col items-center justify-start">
          <div className="relative flex justify-center items-center">
            <div className="rounded-full bg-[#BF83FF] w-[7.5rem] h-[7.5rem]">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-b-full absolute bottom-0 left-2 w-26"
              />
            </div>
            <img
              src={flag}
              alt="Flag"
              className="w-[2.33rem] absolute bottom-0 left-24"
            />
          </div>
          <p className="font-Rubik font-medium text-2xl text-textColorNeutralBlack_0C092A mt-4">
            Madelyn Dias
          </p>

          <p className="font-Rubik font-normal text-base text-[#858494] mt-4 text-center">
            📚 Aspiring lifelong learner and future world-changer! 🌍 Passionate
            about psychology and how it shapes our minds.
          </p>
          <button
            onClick={() => handleCopyClick(emailRef.current.innerText)}
            value="https://madelyn.queezy.app/"
            className="w-full h-14 mt-6 rounded-[1.25rem] bg-[#EFEEFC] border-2 border-primaryColor p-4 flex justify-center items-center gap-4 hover:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-offset-2 transition-colors duration-300"
          >
            <img src={copyIcon} alt="Copy" />
            <p
              ref={emailRef}
              className="font-Rubik font-normal text-base text-primaryColor"
            >
              https://madelyn.queezy.app/
            </p>
          </button>
          <div className="w-full flex flex-col justify-start items-start">
            {profileData.map((item, index) => (
              <div
                key={index}
                className="w-full flex justify-between items-center mt-6"
              >
                <div className="flex items-center gap-3">
                  <img src={item.image} alt="Local Rank" />
                  <p className="font-Rubik font-normal text-base text-[#85849]">
                    {languageArray[0][item.text]}
                  </p>
                </div>
                <p className="font-Rubik font-medium text-lg text-[#49465F]">
                  {item.text2}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[57.5%] flex flex-col absolute right-0 top-[18rem] h-36  py-8 pl-8 pr-14">
          <ProfileButtons value={value} setValue={setValue} />
          {value === "Badge" && <Badge />}
          {value === "Stats" && <Stats />}
          {value === "Details" && <Details />}
        </div>
      </div>
    </div>
  );
}
