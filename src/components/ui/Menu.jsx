import MenuButtons from "./MenuButtons";
import { MenuData } from "./MenuData";

export default function Menu() {
  return (
    <nav className="w-full flex flex-col gap-4 mx-auto mt-11 items-center relative ">
      {MenuData.map((element, index) => (
        <MenuButtons
          key={index}
          btnName={element.button}
          icon={element.btnIcon}
          path={element.path}
        />
      ))}
      <div className="w-full h-[1px] bg-secondColor absolute bottom-20"></div>
    </nav>
  );
}
