import CountryFlag from "react-country-flag";

export default function FriendsItem({ avatar, FullName, countryCode, points }) {
  return (
    <div className="friends flex items-center justify-start gap-2 sm:gap-6">
      <div className="avatarBox flex w-12 h-12 rounded-full border-none items-center justify-start relative">
        <img
          className="friendsAvatar w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center"
          src={avatar}
          alt="avatar"
        />

        <div className="friends_flag absolute right-0 bottom-1 -translate-y-2 sm:translate-y-0 -translate-x-1 sm:translate-x-2 rounded-sm w-4 h-3 sm:w-[1.33rem] sm:h-[1rem]">
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
          {FullName}
        </p>
        <p className="FriendsPoints font-normal text-xs sm:text-sm font-Rubik text-textColorLigthGrey2_858494">
          {points} points
        </p>
      </div>
    </div>
  );
}
