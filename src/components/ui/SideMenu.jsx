import logo from "./images/Logo-Quezzy.svg";
import logoText from "./images/Queezy.svg";
import oval from "./images/Oval.svg";
import oval2 from "./images/Oval2.svg";
import Menu from "./Menu";
import { useSelector } from "react-redux";

export default function SideMenu() {
  const showSideBar = useSelector((state) => state.mobile.showSidebar);

  return (
    <div
      className={`${showSideBar ? "mobileSideBar" : ""} 
        hidden lg:block sm:w-[50%] md:w-[30%] lg:w-[18.33%] min-w-[15rem] h-screen sticky top-0 overflow-y-auto py-12 px-2 xl:px-6 bg-primaryColor`}
    >
      <img src={oval} alt="oval" className="absolute top-0 left-0" />
      <img src={oval2} alt="oval" className="absolute top-0 left-0" />
      <img src={logo} alt="Logo Queezy" className="mx-auto" />
      <img
        src={logoText}
        alt="Queezy"
        className="mx-auto pt-3 hover:animate-ping"
      />
      <Menu />
    </div>
  );
}
