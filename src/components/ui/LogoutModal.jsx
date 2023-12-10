import logoutIcon from "./images/logout.svg";
import settingsIcon from "./images/SettingsIcon.svg";
import accountIcon from "./images/Account.svg";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../LogIn/userSlice";
import { useNavigate } from "react-router-dom";

export default function LogoutModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function LogOut() {
    dispatch(setLoginStatus(false));
    navigate("/login");
  }

  return (
    <div className="w-[320px] h-[310px] rounded-[4px] px-4 items-center absolute top-0 right-0 z-20 bg-white dashboard_boxes2 translate-y-[82px] translate-x-10 flex flex-col">
      <div className="flex items-center justify-start gap-5  px-4 py-4 w-[98%] border shadow-md rounded-lg mx-auto mt-2">
        <div className="w-10 h-10 rounded-full bg-secondColor"></div>
        <p className="font-normal text-xl font-Rubik">Madelyn Dias</p>
      </div>
      <div className="flex gap-7 px-4 py-3 items-center justify-start mt-4 font-normal text-xl font-Rubik w-[95%] rounded-lg hover:bg-gray-100 ">
        <div className="logoutCircles">
          <img src={accountIcon} alt="accountIcon" />
        </div>

        <p>My Account</p>
      </div>
      <div className="flex gap-7 px-4 py-3 items-center justify-start mt-2 font-normal text-xl font-Rubik w-[95%] rounded-lg hover:bg-gray-100 ">
        <div className="logoutCircles">
          <img src={settingsIcon} alt="settingsIcon" />
        </div>
        <p>Settings</p>
      </div>

      <div
        onClick={() => {
          LogOut();
        }}
        className="flex gap-7 px-4 py-3 items-center justify-start mt-2 font-normal text-xl font-Rubik w-[95%] rounded-lg hover:bg-gray-100 "
      >
        <div className="logoutCircles">
          <img src={logoutIcon} alt="logoutIcon" />
        </div>
        <p>Log Out</p>
      </div>
    </div>
  );
}
