import { useState } from "react";

const SelectPoint = ({ handleChange, formik }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState("10");

  const handleSelectChange = (points) => {
    setSelectedPoint(points);
    handleChange({
      target: { name: "addPointsToQuestion", value: points },
    });
    setShowOptions(false);
  };

  const points = ["5", "10", "15", "20", "25"];

  return (
    <div className="relative w-[8rem] h-12">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setShowOptions((prev) => !prev)}
        name="addPointsToQuestion"
        aria-expanded={showOptions}
        aria-haspopup="true"
        className="w-full rounded-[1.25rem] px-6 py-[0.9rem] bg-[#fff] border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
      >
        <div className="w-full h-full font-normal flex items-center text-base font-Rubik text-[#49465F]">
          {selectedPoint && (
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-1">
                {/* {`${selectedPoint}`} <span>Points</span> */}
                {`${formik}`} <span>Points</span>
              </div>
            </div>
          )}
        </div>
        {showOptions && (
          <div className="absolute z-40 top-full mt-4 left-0 w-full max-h-[200px] bg-white border-2 border-[#EFEEFC] overflow-y-auto">
            {points?.map((points) => (
              <div
                onClick={() => handleSelectChange(points)}
                className="flex gap-3 items-center w-full h-8 pl-6 py-2 font-normal text-base font-Rubik hover:bg-violet-400 focus:bg-violet-600 cursor-pointer"
                key={points}
              >
                <div>
                  {points}
                  <span> Points</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectPoint;
