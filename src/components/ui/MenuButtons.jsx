import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function MenuButtons({ btnName, icon, path }) {
  const languageArray = useSelector((state) => state.language.languageArray);
  return (
    <NavLink
      to={path}
      className="w-full font-Rubik 
    font-medium text-sm xl:text-base text-textColorLigthGrey_D2CDF6 h-[3.5rem] rounded-xl last-of-type:mt-7 focus:font-semibold"
    >
      <button className="navButtons w-full flex gap-[0.88rem] items-center justify-start font-Rubik p-4 ">
        <img src={icon} alt="icon" className="btn_svg" />
        {languageArray[0][btnName]}
      </button>
    </NavLink>
  );
}
