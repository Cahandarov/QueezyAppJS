import { useSelector } from "react-redux";
import { badges } from "./profileData";
import unOpenedBadge from "../Profile/images/badge6.png";

export default function Badge() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const token = JSON.parse(localStorage.getItem("token"));
  const valuesBadges = Object.values(badges);

  const gainedBadges = valuesBadges.filter((badge) =>
    token.badges.some((userBadge) => userBadge === badge.badgeName)
  );
  const unGainedBadges = valuesBadges.filter((badge) =>
    token.badges.every((userBadge) => userBadge !== badge.badgeName)
  );
  return (
    <div className="w-full flex flex-wrap justify-start items-start gap-4 mt-6">
      {gainedBadges.map((badge, index) => (
        <div
          key={index}
          className="w-[31%] h-[13rem] p-6 gap-4 flex flex-col justify-between items-center rounded-[1.25rem] border-2 border-[#EFEEFC]"
        >
          <img src={badge.badge} alt="Badge" />
          <p className="w-[80%] font-Rubik font-normal text-base text-[#49465F] text-center">
            {languageArray[0][badge.badgeName]}
          </p>
        </div>
      ))}
      {unGainedBadges.map((ungainedBadge, index) => (
        <div
          key={index}
          className="w-[31%] h-[13rem] p-6 gap-4 flex flex-col justify-between items-center rounded-[1.25rem] border-2 border-[#EFEEFC]"
        >
          <img src={unOpenedBadge} alt="Badge" />
          <p className="w-[60%] font-Rubik font-normal text-base text-[#49465F] text-center">
            {languageArray[0][ungainedBadge.badgeName]}
          </p>
        </div>
      ))}
    </div>
  );
}
