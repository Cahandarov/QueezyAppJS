import { useDispatch, useSelector } from "react-redux";
import groupLeft from "../images/GroupLeft.png";
import groupRigth from "../images/GroupRigth.png";
import logo from "../images/Logo.svg";
import QuizPlayModule from "./QuizPlayModule";
import {
  setChangeQuizIndex,
  setLiveQuizzes,
  setQuizPlayStatus,
} from "./quizPlaySlice";
import { setDiscoverMainPage, setQuizPlayPage } from "../discoverSlice";
import { useNavigate } from "react-router-dom";
import { setSideBarPage } from "../../ui/uiSlice";
import { setDashboardMainPage } from "../../Dashboard/dashboardSlice";
import { setQuizLibraryMainPage } from "../../QuizLibary/createQuizSlice";

export default function QuizPlayPage() {
  const selectedQuiz = useSelector((state) => state.discover.selectedQuiz);
  const liveQuizzes = useSelector((state) => state.quizPlay.liveQuizzes);
  const navigate = useNavigate();
  const updatedLiveQuizzes = liveQuizzes.filter(
    (q) => q.id !== selectedQuiz.id
  );
  const dispatch = useDispatch();

  function handleQuitQuiz() {
    dispatch(setQuizPlayStatus("ended"));
    dispatch(setLiveQuizzes(updatedLiveQuizzes));
    dispatch(setQuizPlayPage(false));
    dispatch(setChangeQuizIndex(0));
    navigate(-1);
    dispatch(setDiscoverMainPage(true));
    dispatch(setQuizLibraryMainPage(true));
    dispatch(setDashboardMainPage(true));
    dispatch(setSideBarPage(true));
  }

  return (
    <div className="quizPlayPage w-full h-screen px-[8.75rem] py-8 bg-primaryColor absolute top-0 left-0">
      <img
        src={groupLeft}
        alt="GroupLeft"
        className="absolute bottom-0 left-0"
      />
      <img
        src={groupRigth}
        alt="GroupRigth"
        className="absolute right-0 top-28"
      />
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" />
        <button
          onClick={() => handleQuitQuiz()}
          className="w-[6.68rem] h-[3rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-transparent border border-[#EFEEFC] hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"
        >
          End Quiz
        </button>
      </div>
      <QuizPlayModule />
    </div>
  );
}

// var inputs = document.querySelectorAll("input:not(#submit");
// var progbar = document.querySelector("#progressbar");

// for (let input of inputs) {
//     console.log(inputs);
//     input.addEventListener("input", function() {
//         let counter = 0;
//         for( let i=0; i<inputs.length; i++){
//             if (inputs[i].value.trim()!=="") {
//                 counter++;
//             }
//         }
//       var progress = (counter/inputs.length)*100;
//       progbar.style.width = `${progress}%`;
//       progbar.style.transition = "1s ease-in-out";
//     });
// }
