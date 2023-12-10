import PaginationCompanent from "./PaginationCompanent";
// import SelectComponent from "./SelectComponent";
import searchIcon from "./images/searchIcon2.svg";
import arrow from "./images/ArrowToBottom.svg";
export default function QuizLibraryMain() {
  return (
    <div className="flex flex-col gap-8 w-full min-h-min mx-auto px-10 pt-10 pb-4 bg-BackRCLigthGrey_EFEEFC">
      {/* <div className="flex flex-col items-end justify-end my-auto"> */}
      <div className="quizlibrary flex flex-col mx-auto items-start justify-start h-[63.5rem] w-[98%] rounded-[2rem] p-8 mb-2 border-2 border-[#EFEEFC] bg-white ">
        <p className="font-medium text-2xl text-textColorNeutralBlack_0C092A font-Rubik text-left">
          Quiz List
        </p>
        <div className="my-6 flex items-center justify-between w-full">
          <div className="relative flex items-center justify-center w-[20.43rem] h-[3.5rem]">
            <input
              id="QuizLibraryInput"
              type="search"
              placeholder="Find quiz name or categories"
              className="HoverAndFocus w-full h-[3.5rem] p-4 pl-14 rounded-[1.25rem] text-textColorBlack font-normal text-base font-Rubik"
            />
            <img
              src={searchIcon}
              alt="Search icon"
              className="absolute left-0 z-20 translate-x-4"
            />
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="relative w-[12.5rem] h-[3.5rem] rounded-[1.25rem]">
              {/* <select className="HoverAndFocus appearance-none w-[12.5rem] h-[3.5rem] rounded-[1.25rem] bg-[#EFEEFC] py-4 px-8 font-medium text-base font-Rubik text-[#6A5AE0]">
                <option selected disabled>
                  Category
                </option>
                <option>Music</option>
                <option>Sport</option>
                <option>Math</option>
              </select> */}
              <img
                src={arrow}
                alt="arrowIcon"
                className="absolute top-0 right-0 -translate-x-6 translate-y-4"
              />
            </div>

            {/* <SelectComponent /> */}

            <button className="w-[12.12rem] buttons  HoverAndFocusDark flex justify-center items-center gap-4 py-4 px-8">
              Create Quiz <span className="font-semibol text-2xl">+</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end my-auto"></div>
        <div className="mx-auto">
          {/* <PaginationCompanent /> */}
          <PaginationCompanent />
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
