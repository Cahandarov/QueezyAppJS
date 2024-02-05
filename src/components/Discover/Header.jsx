import "primeicons/primeicons.css";
import HeaderRigth from "../ui/HeaderRigth";
import HeaderLeft from "../Mobile/HeaderLeft";
import { useSelector } from "react-redux";

export default function Header() {
  const languageArray = useSelector((state) => state.language.languageArray);
  return (
    <div className="md:w-full md:h-[6.5rem] bg-white flex flex-col items-start sm:flex-row justify-between sm:items-center py-4 md:py-6 px-4 md:px-10 header">
      <div className="flex items-center justify-start gap-4">
        <HeaderLeft />
        <p className="font-Rubik text-xl md:text-[2rem] font-bold text-textColorBlack hover:animate-ping">
          {languageArray[0].discover}
        </p>
      </div>
      <div className="w-full flex justify-end">
        <HeaderRigth />
      </div>
    </div>
  );
}
