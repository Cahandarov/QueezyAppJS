export default function CreateQuizItem({ cover, category, quizNumber }) {
  return (
    <div className="w-[47%] h-[9,25rem] p-6 flex flex-col gap-2 items-center justify-center rounded-[1.25rem] bg-[#EFEEFC] border-none">
      <div className="w-12 h-12 rounded-2xl bg-white flex justify-center items-center">
        <img src={cover} alt="coverSVG" />
      </div>
      <p className="font-medium text-base font-Rubik text-[#6A5AE0]">
        {category}
      </p>
      <p className="font-normal text-sm font-Rubik text-[#6A5AE0] opacity-70">
        <span>{quizNumber} </span>
        <span>Quizzes</span>
      </p>
    </div>
  );
}
