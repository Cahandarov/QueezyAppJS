import { useSelector } from "react-redux";
import { badges } from "./profileData";

export default function Badge() {
  const languageArray = useSelector((state) => state.language.languageArray);
  return (
    <div className="w-full flex flex-wrap justify-start items-start gap-4 mt-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="w-[31%] h-[13rem] p-6 gap-4 flex flex-col justify-between items-center rounded-[1.25rem] border-2 border-[#EFEEFC]"
        >
          <img src={badge.badge} alt="Badge" />
          <p className="w-[60%] font-Rubik font-normal text-base text-[#49465F] text-center">
            {languageArray[0][badge.badgeName]}
          </p>
        </div>
      ))}
    </div>
  );
}
