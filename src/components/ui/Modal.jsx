import searchIcon from "./images/searchIcon2.svg";
// import ModalButtons from "./Dashboard/ModalButtons";

const Modal = ({ HandleCloseModal }) => {
  return (
    <div
      className="overlay flex justify-center items-center z-10"
      onClick={() => HandleCloseModal()}
    >
      <div
        className="w-[30rem] h-[40rem] rounded-[2rem] bg-white p-8 flex flex-col gap-6 items-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative flex items-center justify-center w-full">
          <input
            type="search"
            placeholder="Quiz, categories, or friends"
            className="w-full h-[3.5rem] p-4 pl-14 rounded-[1.25rem] bg-BackRCLigthGrey_EFEEFC HoverAndFocus font-normal text-base font-Rubik text-textColorLigthGrey3_B9B4E4"
          />
          <img
            src={searchIcon}
            alt="Search icon"
            className="absolute left-0 z-20 translate-x-4"
          />
        </div>

        <div className="flex">{/* <ModalButtons /> */}</div>
      </div>
    </div>
  );
};
export default Modal;
