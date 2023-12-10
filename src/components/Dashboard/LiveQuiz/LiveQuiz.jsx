import { useRef, useState } from "react";
import { LiveQuizData } from "./LiveQuizData";
import LiveQuizItem from "./LiveQuizItem";

export default function LiveQuiz() {
  const slicedLiveQuizData = LiveQuizData.slice(0, 6);
  const [LiveQuizzes, setLiveQuizzes] = useState(slicedLiveQuizData);
  const scrollRef = useRef(null);
  function handleSeeAll() {
    setLiveQuizzes(LiveQuizData);
    if (scrollRef.current) {
      scrollRef.current.style.overflow = "auto";
      scrollRef.current.style.gap = "10px";
    } else {
      console.error("scrollRef is null");
    }
  }
  return (
    <div className="w-full sm:w-[80%] md:w-[98%] lg:w-[48rem] h-[30rem] order-5 xl:order-4 p-6 flex flex-col gap-4 rounden-[2rem] bg-white dashboard_boxes">
      <div className="flex justify-between items-center">
        <p className="text-sm sm:text-2xl font-medium font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          Live Quiz
        </p>
        <button
          className="text-sm sm:text-base font-medium font-Rubik text-primaryColor"
          onClick={() => handleSeeAll()}
        >
          See all
        </button>
      </div>
      <div
        className="flex flex-wrap overflow-auto sm:overflow-clip justify-center md:justify-start items-start gap-3 sm:gap-5 mx-auto"
        ref={scrollRef}
      >
        {LiveQuizzes.map((Quiz, index) => (
          <LiveQuizItem
            key={index}
            QuizName={Quiz.QuizName}
            cover={Quiz.cover}
            category={Quiz.category}
            numberOfQuizzes={Quiz.numberOfQuizzes}
          />
        ))}
      </div>
    </div>
  );
}
