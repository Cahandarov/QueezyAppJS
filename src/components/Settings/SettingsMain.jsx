// import puzzle from "./images/profileIcon.svg";
import question from "./images/questionMark.svg";
import logout from "./images/logout.svg";
import ToggleButton from "./ToggleButton";
import { buttonData } from "./SettingsData";
import FAQ from "./FAQ";
import { useDispatch, useSelector } from "react-redux";
import {
  setChangeEmailPage,
  setChangePasswordPage,
  setFAQpage,
  setLogoutPage,
  setUpdateAvatarPage,
  setUpdateProfilePage,
} from "./settingsSlice";
import { setLoginStatus } from "../LogIn/userSlice";
import { useNavigate } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import UpdateAvatar from "./UpdateAvatar";

export default function SettingsMain() {
  const token = JSON.parse(localStorage.getItem("token"));
  const languageArray = useSelector((state) => state.language.languageArray);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const FAQpage = useSelector((state) => state.settings.FAQpage);
  const updateProfilePage = useSelector(
    (state) => state.settings.updateProfilePage
  );
  const changeEmailPage = useSelector(
    (state) => state.settings.changeEmailPage
  );
  const changePasswordPage = useSelector(
    (state) => state.settings.changePasswordPage
  );
  const updateAvatarPage = useSelector(
    (state) => state.settings.updateAvatarPage
  );

  const OneDayInMseconds = 24 * 60 * 60 * 1000;
  const dateNowInMseconds = new Date().getTime();
  const emailChangedInMseconds = Date.parse(token.lastChangeDateOfPassword);

  const emailChangedInDays = Math.round(
    (dateNowInMseconds - emailChangedInMseconds) / OneDayInMseconds
  );

  function handleClickFAQ() {
    dispatch(setFAQpage(true));
    dispatch(setUpdateProfilePage(false));
    dispatch(setChangeEmailPage(false));
    dispatch(setChangePasswordPage(false));
    dispatch(setLogoutPage(false));
    dispatch(setUpdateAvatarPage(false));
  }
  function handleClickMainButtons(button) {
    if (button === "updateProfile") {
      dispatch(setUpdateProfilePage(true));
      dispatch(setFAQpage(false));
      dispatch(setChangeEmailPage(false));
      dispatch(setChangePasswordPage(false));
      dispatch(setLogoutPage(false));
      dispatch(setUpdateAvatarPage(false));
    } else if (button === "changeEmail") {
      dispatch(setChangeEmailPage(true));
      dispatch(setUpdateProfilePage(false));
      dispatch(setFAQpage(false));
      dispatch(setChangePasswordPage(false));
      dispatch(setLogoutPage(false));
      dispatch(setUpdateAvatarPage(false));
    } else if (button === "changePassword") {
      dispatch(setChangePasswordPage(true));
      dispatch(setChangeEmailPage(false));
      dispatch(setUpdateProfilePage(false));
      dispatch(setFAQpage(false));
      dispatch(setLogoutPage(false));
      dispatch(setUpdateAvatarPage(false));
    } else if (button === "updateAvatar") {
      dispatch(setUpdateAvatarPage(true));
      dispatch(setChangePasswordPage(false));
      dispatch(setChangeEmailPage(false));
      dispatch(setUpdateProfilePage(false));
      dispatch(setFAQpage(false));
      dispatch(setLogoutPage(false));
    }
  }
  function LogOut() {
    dispatch(setLoginStatus(false));
    dispatch(setFAQpage(false));
    dispatch(setUpdateProfilePage(true));
    dispatch(setChangeEmailPage(false));
    dispatch(setChangePasswordPage(false));
    dispatch(setLogoutPage(false));
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="flex flex-col gap-8 w-full h-full  min-h-[1086px] px-10 pt-10 pb-4 bg-[#FBFBFC]">
      <div className="boxShadow relative flex items-start justify-between h-[63.5rem] w-full rounded-[2rem] p-8 mb-2 border-2 border-[#EFEEFC] bg-white ">
        <div className="flex flex-col justify-start items-start w-[35%] gap-4 pr-6 ">
          <p className="font-Rubik font-medium text-base  text-[#858494] opacity-50">
            {languageArray[0].ACCOUNT}
          </p>

          {buttonData.map((button, index) => (
            <button
              onClick={() => handleClickMainButtons(button.text1)}
              key={index}
              className="w-full h-[5.87rem] rounded-[1.25rem] gap-5 p-6 bg-[#EFEEFC] flex items-center justify-between group  HoverAndFocusDark"
            >
              <div className="w-11 h-11 rounded-full bg-white flex justify-center items-center">
                <img
                  src={button.image}
                  alt="Profile Icon"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex flex-col justify-start items-start w-full gap-1">
                <p className="font-Rubik font-medium text-base text-left text-textColorNeutralBlack_0C092A group-hover:text-white">
                  {languageArray[0][button.text1]}
                </p>
                <p className="font-Rubik font-normal text-sm text-left text-[#858494] group-hover:text-white group-hover:text-opacity-70">
                  {index !== 1 && index !== 2 && languageArray[0][button.text2]}
                  {index == 1 && token?.email}

                  {index === 2 && (
                    <>
                      {languageArray[0][button.text2]} {emailChangedInDays}{" "}
                      {languageArray[0][button.text3]}
                    </>
                  )}
                </p>
              </div>
            </button>
          ))}
          <p className="font-Rubik font-medium text-base  text-[#858494] opacity-50">
            {languageArray[0].OTHER}
          </p>
          <div className="w-full flex justify-between items-center">
            <p className="font-Rubik font-medium text-base text-textColorNeutralBlack_0C092A">
              {languageArray[0].Notification}
            </p>
            <ToggleButton />
          </div>
          <button
            onClick={() => handleClickFAQ()}
            className="w-full h-[5.87rem] rounded-[1.25rem] gap-5 p-6 bg-[#EFEEFC] flex items-center justify-between group  HoverAndFocusDark"
          >
            <div className="w-11 h-11 rounded-full bg-white flex justify-center items-center">
              <img src={question} alt="Question Mark" className="w-6 h-6" />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-1">
              <p className="font-Rubik font-medium text-base text-left text-textColorNeutralBlack_0C092A group-hover:text-white">
                FAQ
              </p>
              <p className="font-Rubik font-normal text-sm text-left text-[#858494] group-hover:text-white group-hover:text-opacity-70">
                {languageArray[0].MFAQ}
              </p>
            </div>
          </button>
          <button
            onClick={() => LogOut()}
            className="w-full h-[5.87rem] rounded-[1.25rem] gap-4 p-6 bg-white flex items-center justify-center hover:border-4 hover:border-[#EB5757] focus:outline-none focus:ring focus:ring-[#eb5757ca] focus:ring-offset-2 transition-colors duration-300"
          >
            <img src={logout} alt="Logout" />
            <p className="font-Rubik font-medium text-base text-[#EB5757]">
              {languageArray[0].logOut}
            </p>
          </button>
        </div>
        {updateProfilePage && <UpdateProfile />}
        {changeEmailPage && <ChangeEmail />}
        {updateAvatarPage && <UpdateAvatar />}
        {FAQpage && <FAQ />}
        {changePasswordPage && <ChangePassword />}
      </div>
    </div>
  );
}
