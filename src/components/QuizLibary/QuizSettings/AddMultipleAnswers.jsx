import "primeicons/primeicons.css";
import ToggleButton from "./ToggleButton";
// import { useDispatch } from "react-redux";

export default function AddMultipleAnswers({ addAnswer, setAddAnswer }) {
  // const dispatch = useDispatch();
  function handleSaveAnswer() {
    setAddAnswer(false);
  }

  return (
    <div className="overlay flex justify-center items-center z-10">
      <div className="w-[25%] h-[35vh] rounded-[2rem] bg-white py-6 px-6 flex flex-col gap-2 items-center">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-2xl font-Rubik text-textColorNeutralBlack_0C092A">
            Add Answer
          </p>
          <i onClick={() => setAddAnswer(false)} className="pi pi-times"></i>
        </div>
        <div className="w-full h-[50%] rounded-2xl border-2 border-[#EFEEFC] p-1">
          <textarea className="w-full h-full border-none outline-none resize-none"></textarea>
        </div>
        <div className="w-full flex justify-between items-center mt-4 mx-0">
          <button
            onClick={() => {
              handleSaveAnswer();
            }}
            className="w-[5rem] h-10 rounded-2xl bg-primaryColor text-textColorWhite font-medium text-base font-Rubik  HoverAndFocusDark flex justify-center items-center"
          >
            Save
          </button>
          <div className="flex justify-between items-center gap-4">
            <p>Correct Answer</p>
            <ToggleButton />
          </div>
        </div>
      </div>
    </div>
  );
}
