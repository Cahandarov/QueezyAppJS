import groupLeft from "../images/GroupLeft.png";
import groupRigth from "../images/GroupRigth.png";
import logo from "../images/Logo.svg";
import QuizPlayModule from "./QuizPlayModule";

export default function QuizPlayPage() {
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
        <button className="w-[6.68rem] h-[3rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-transparent border border-[#EFEEFC] hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300">
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
