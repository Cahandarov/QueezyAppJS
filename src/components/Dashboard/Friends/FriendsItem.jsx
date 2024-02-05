import CountryFlag from "react-country-flag";
import AvatarColoredLetter from "../../ui/AvatarColoredLetter";

export default function FriendsItem({
  avatar,
  Name,
  Surname,
  countryCode,
  points,
}) {
  return (
    <div className="friends flex items-center justify-start gap-2 sm:gap-6">
      <div className="avatarBox flex w-12 h-12 rounded-full border-none items-center justify-start relative">
        {avatar ? (
          <img
            className="friendsAvatar w-8 h-8 sm:w-[40px] sm:h-[40px] flex items-center justify-center"
            src={avatar}
            alt="avatar"
          />
        ) : (
          <AvatarColoredLetter name={Name} surname={Surname} />
        )}

        <div className="friends_flag absolute right-0 bottom-0 -translate-y-2 sm:-translate-y-2 -translate-x-1 sm:translate-x-1 rounded-sm w-4 h-3 sm:w-[1.33rem] sm:h-[1rem]">
          {
            <CountryFlag
              countryCode={countryCode}
              svg
              // style={{ width: "1.33rem", height: "1rem" }}
            />
          }
        </div>
      </div>
      <div className="flex flex-col my-auto items-start justify-center">
        <p className="friendsName font-medium text-sm sm:text-base font-Rubik text-textColorNeutralBlack_0C092A">
          {Name} {Surname}
        </p>
        <p className="FriendsPoints font-normal text-xs sm:text-sm font-Rubik text-textColorLigthGrey2_858494">
          {points} points
        </p>
      </div>
    </div>
  );
}
