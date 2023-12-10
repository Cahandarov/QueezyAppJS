import "primeicons/primeicons.css";
import HeaderRigth from "../ui/HeaderRigth";

export default function Header() {
  return (
    <div className="w-full h-[6.5rem] bg-white flex justify-between items-center py-6 px-10 header">
      <p className="font-Rubik text-[2rem] font-bold text-textColorBlack">
        Error
      </p>
      <HeaderRigth />
    </div>
  );
}
