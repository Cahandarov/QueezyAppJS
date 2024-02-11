import searchIcon from "./images/search_icon_black.svg";
import selectIcon from "./images/select_icon.svg";
import LogoutModal from "./LogoutModal";
import Modal from "./Modal";
import { useState } from "react";
import "primeicons/primeicons.css";
import AvatarLetter from "./AvatarLetter";
import { useDispatch, useSelector } from "react-redux";
import { setLogoutModal } from "./uiSlice";
import { setLanguage, setLanguageArray } from "./languageSlice";
import { aze, eng } from "./languageData";

export default function HeaderRigth() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const logoutModal = useSelector((state) => state.ui.logoutModal);
  const language = useSelector((state) => state.language.language);
  const languageArray = useSelector((state) => state.language.languageArray);
  function HandleShowModal() {
    setShowModal(true);
  }
  function HandleCloseModal() {
    setShowModal(false);
  }
  function handleClickLogoutModal(event) {
    event.stopPropagation();
    if (logoutModal) {
      dispatch(setLogoutModal(false));
    } else {
      dispatch(setLogoutModal(true));
    }
  }

  const currentDate = new Date();
  const hour = +currentDate.getHours();

  function handleChangeLanguage() {
    if (language === "eng") {
      dispatch(setLanguage("aze"));
      dispatch(setLanguageArray([]));
      dispatch(setLanguageArray([aze]));
    } else {
      dispatch(setLanguage("eng"));
      dispatch(setLanguageArray([]));
      dispatch(setLanguageArray([eng]));
    }
  }
  return (
    <div className="flex order-1 sm:order-2 pr-2 md:pr-0 gap-2 md:gap-6 items-center justify-center relative">
      <button
        className="w-8 h-8 md:w-14 md:h-14 rounded-md md:rounded-2xl border-2 border-[#EFEEFC] flex items-center justify-center"
        onClick={() => HandleShowModal()}
      >
        <img src={searchIcon} alt="searcIcon" />
      </button>
      <div className="w-7 h-7 md:w-14 md:h-14 flex justify-center items-center rounded-full bg-secondColor">
        <AvatarLetter />
      </div>
      <div
        id="header_rigth_rigth"
        className="flex flex-col justify-center item-start"
      >
        <div
          id="user_greeting"
          className="flex gap-1 items-center justify-start"
        >
          {hour > 5 && hour < 19 ? (
            <i
              className="pi pi-sun"
              style={{ fontSize: "1rem", color: "#9087e5" }}
            ></i>
          ) : (
            <i
              className="pi pi-moon"
              style={{ fontSize: "1rem", color: "#9087e5" }}
            ></i>
          )}

          <p className="font-medium text-[0.6rem] md:text-xs font-Rubik text-primaryColor">
            {hour > 5 && hour < 12
              ? languageArray[0].goodMorning
              : hour >= 12 && hour < 17
              ? languageArray[0].goodAfternoon
              : hour >= 17 && hour <= 23
              ? languageArray[0].goodEvening
              : languageArray[0].goodNigth}
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <p
            id="user_name"
            className="font-medium text-base md:text-2xl font-Rubik text-black"
          >
            Madelyn Dias
          </p>
          <button
            onClick={(e) => {
              {
                handleClickLogoutModal(e);
                e.preventDefault();
              }
            }}
          >
            <img id="select_icon" src={selectIcon} alt="select icon" />
          </button>
        </div>
      </div>
      {showModal && <Modal HandleCloseModal={HandleCloseModal} />}
      {logoutModal && <LogoutModal />}
      <button
        onClick={() => handleChangeLanguage()}
        className="w-9 h-5 md:w-16 md:h-8 rounded-lg md:rounded-xl border-2 border-secondColor absolute -right-2 -top-7 sm:-right-3 sm:-top-2 md:-right-6 md:-top-4 flex justify-center items-center font-Rubik font-normal md:font-medium text-xs md:text-base text-primaryColor"
      >
        {language === "eng" ? "ENG" : "AZE"}
      </button>
    </div>
  );
}
