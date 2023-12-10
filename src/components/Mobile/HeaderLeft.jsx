import "primeicons/primeicons.css";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "./mobileSlice";
import { useSelector } from "react-redux";

export default function HeaderLeft() {
  const dispatch = useDispatch();
  const showSideBar = useSelector((state) => state.mobile.showSidebar);

  function handleSideBar() {
    dispatch(setShowSidebar(!showSideBar));
    console.log(!showSideBar);
  }

  return (
    <div className="block lg:hidden ">
      <button onClick={() => handleSideBar()}>
        <span className="pi pi-bars w-8 h-8 md:w-14 md:h-14 rounded-md md:rounded-2xl border-2 border-solid border-[#EFEEFC] flex items-center justify-center hover:border-2 hover:border-primaryColor transition-colors duration-300"></span>
      </button>
    </div>
  );
}
