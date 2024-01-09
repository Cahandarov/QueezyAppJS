export default function Poll() {
  return (
    <div className="flex flex-col mt-4">
      <p className="font-Rubik font-medium text-2xl text-[#0C092A] mt-1">
        Which player scored the fastest hat-trick in the Premier League?
      </p>
      <div className="w-full flex flex-col items-start justify-start gap-3 mt-4">
        <button className="w-full h-[3rem] border-2 border-[#EFEEFC] rounded-2xl hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"></button>
        <button className="w-full h-[3rem] border-2 border-[#EFEEFC] rounded-2xl hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"></button>
        <button className="w-full h-[3rem] border-2 border-[#EFEEFC] rounded-2xl hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"></button>
        <button className="w-full h-[3rem] border-2 border-[#EFEEFC] rounded-2xl hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"></button>
      </div>
    </div>
  );
}
