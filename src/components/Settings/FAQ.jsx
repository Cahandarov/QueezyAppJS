import searchIcon from "./images/searchIcon2.svg";
import arrowToRigth from "./images/arrowToRigthBlack.svg";
import { useEffect, useState } from "react";
import { FAQs } from "./SettingsData";
import { useSelector } from "react-redux";

export default function FAQ() {
  const languageArray = useSelector((state) => state.language.languageArray);
  const language = useSelector((state) => state.language.language);
  const [classname, setClassName] = useState("hidden");
  const [indexState, setIndexState] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsForDisplay, setItemsForDisplay] = useState(FAQs);
  const enteries = Object.entries(languageArray[0]);
  console.log(enteries);
  // {
  //   languageArray[0][
  //     enteries.find((data) => data[1] === country.name)[0]
  //   ]
  // }

  function handleClickIntro(index) {
    if (indexState === index) {
      setIndexState(null);
      setClassName("hidden");
    } else {
      setIndexState(index);
      setClassName("visible");
    }
  }

  useEffect(() => {
    function serchedItems() {
      let filteredItems = [];
      if (language === "eng") {
        filteredItems = FAQs.map((item) => {
          const matchingQuestions = item.item.filter((filteredItem) => {
            return filteredItem.questionEng
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          });

          return {
            title: item.title,
            item: matchingQuestions,
          };
        });
      } else if (language === "aze") {
        filteredItems = FAQs.map((item) => {
          const matchingQuestions = item.item.filter((filteredItem) => {
            return filteredItem.questionAze
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          });

          return {
            title: item.title,
            item: matchingQuestions,
          };
        });
      }

      setItemsForDisplay(filteredItems);
    }

    serchedItems();
  }, [searchQuery, language]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-[43rem] justify-start items-start w-[65%] pl-6 border-l">
      <p className="font-Rubik font-medium text-2xl text-textColorNeutralBlack_0C092A text-left">
        {languageArray[0].helpAndSupport}
      </p>
      <div className="relative flex items-center justify-center w-full mt-6">
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={languageArray[0].askQuestion}
          className="w-full h-[3.5rem] p-4 pl-14 rounded-[1.25rem] bg-BackRCLigthGrey_EFEEFC HoverAndFocus font-normal text-base font-Rubik text-textColorLigthGrey3_B9B4E4"
        />
        <img
          src={searchIcon}
          alt="Search icon"
          className="absolute left-0 z-20 translate-x-4"
        />
      </div>
      {itemsForDisplay.map((item, index1) => (
        <div
          key={index1}
          className="flex flex-col justify-start items-start w-full"
        >
          <p className="font-Rubik font-medium text-base text-[#858494] opacity-50 mt-6">
            {languageArray[0][item.title]}
          </p>
          <div className="w-full max-h-max flex flex-col justify-start items-center"></div>
          {item?.item?.map((subItem, index2) => (
            <button
              value={`${index1}${index2}`}
              key={index2}
              className="w-full mt-4 flex flex-col gap-4 items-start rounded-[1.5rem] border-2 border-[#EFEEFC] font-Rubik font-medium text-base text-textColorNeutralBlack_0C092A hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-all duration-300"
              onClick={() => handleClickIntro(`${index1}${index2}`)}
            >
              <div className="w-full h-[4.5rem] p-6 relative ">
                <img
                  src={arrowToRigth}
                  alt="ArrowToRigth"
                  className="absolute right-6 bottom-6"
                />
                <p className="text-left max-w-max">
                  {languageArray[0][subItem.question]}
                </p>
              </div>
              <p
                className={`pl-6 pb-6 pr-8 text-left font-normal opacity-80 ${
                  indexState === `${index1}${index2}` ? classname : "hidden"
                }`}
              >
                {subItem.answer}
              </p>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
