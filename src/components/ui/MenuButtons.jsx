import { NavLink } from "react-router-dom";

export default function MenuButtons({ btnName, icon, path }) {
  return (
    <NavLink
      to={path}
      className="w-full font-Rubik 
    font-normal text-sm xl:text-base text-textColorLigthGrey_D2CDF6 h-[3.5rem] rounded-xl last-of-type:mt-7 focus:font-medium"
    >
      {/* <nav> */}
      <button className="navButtons w-full flex gap-[0.88rem] items-center justify-start font-Rubik p-4 ">
        <img src={icon} alt="icon" className="btn_svg" />
        {btnName}
      </button>
      {/* </nav> */}
    </NavLink>
  );
}
