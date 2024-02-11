import { useRef, useState } from "react";
import groupLeft from "./images/Group-left.svg";
import groupRigth from "./images/GroupRigth.png";
import buttonSVG from "./images/Button-group.svg";
import FriendsItem from "./FriendsItem";
import { FriendsData } from "./FriendsData";
import { CountriesData } from "../../ui/CountriesData";
import { useSelector } from "react-redux";

export default function Friends() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const scrollRef = useRef(null);
  const topThreeFriends = FriendsData.sort((a, b) => b.points - a.points).slice(
    0,
    3
  );
  const allFriends = FriendsData.sort((a, b) => b.points - a.points);
  const [friendList, setFriendList] = useState(topThreeFriends);
  const [showAllFriends, setShowAllFriends] = useState(false);

  function handleSeeAll() {
    if (!showAllFriends) {
      setFriendList(allFriends);
      setShowAllFriends(true);
      scrollRef.current.style.overflow = "auto";
      scrollRef.current.style.gap = "14px";
    } else {
      setFriendList(topThreeFriends);
      setShowAllFriends(false);
      scrollRef.current.style.overflow = "hidden";
    }
  }

  return (
    <div className="w-full sm:w-[80%] md:w-[47%] lg:w-[23rem] h-[30rem] order-4 2xl:order-5 p-6 flex flex-col gap-4 rounden-[2rem] bg-white dashboard_boxes">
      <div className="flex justify-between items-center">
        <p className="text-sm sm:text-xl md:text-2xl font-medium text-left font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          {languageArray[0].friends}
        </p>
        <button
          disabled={allFriends.length < 4}
          className="text-sm sm:text-base font-medium font-Rubik text-primaryColor z-40"
          onClick={handleSeeAll}
        >
          {!showAllFriends ? languageArray[0].seeAll : languageArray[0].seeLess}
        </button>
      </div>
      <div
        id="findFriends"
        className="relative w-[99%] h-[12rem] p-6 flex flex-col items-center justify-center gap-6 bg-secondColor"
      >
        <img
          src={groupLeft}
          alt="groupSVG"
          className="absolute left-0 bottom-0 -translate-x-8 translate-y-20"
        />
        <img
          src={groupRigth}
          alt="groupSVG"
          className="absolute right-20 top-0 translate-x-24 -translate-y-20"
        />
        <p className="text-base font-medium font-Rubik text-textColorWhite opacity-80  mx-auto">
          FEATURED
        </p>
        <p className="text-base lg:text-xl font-medium font-Rubik text-textColorWhite  mx-auto text-center">
          Challenge with friends or other players
        </p>
        <button className="w-[9.5rem] h-[2.5rem] bg-BackRCLigthGrey_EFEEFC items-center justify-center rounded-[1.25rem]">
          <img src={buttonSVG} alt="btnsvg" />
        </button>
      </div>
      <div
        className="flex flex-col max-h-max pb-2 items-start justify-start gap-2 sm:gap-4"
        ref={scrollRef}
      >
        {friendList.map((friend, index) => (
          <FriendsItem
            key={index}
            Name={friend.Name}
            Surname={friend.Surname}
            avatar={friend.avatar}
            points={friend.points}
            countryCode={
              CountriesData.filter(
                (country) => country.name === friend?.country
              )[0]?.code
            }
          />
        ))}
      </div>
    </div>
  );
}
