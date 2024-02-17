import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useSelector } from "react-redux";

export default function PieCharMobile({ totalLength, sortedData }) {
  const languageArray = useSelector((state) => state.language.languageArray);
  const sizing = {
    margin: { right: 5 },
    width: 180,
    height: 180,
    legend: { hidden: true },
  };
  const value1 =
    (sortedData &&
      sortedData[0] &&
      sortedData[0].quizzes.length / totalLength) * 100;
  const value2 =
    (sortedData &&
      sortedData[1] &&
      sortedData[1].quizzes.length / totalLength) * 100;
  const value3 =
    (sortedData &&
      sortedData[2] &&
      sortedData[2].quizzes.length / totalLength) * 100;
  const data = [
    {
      label: `${sortedData && sortedData[0] && sortedData[0].category}`,
      value: value1,
      color: "#6A5AE0",
    },
    {
      label: `${sortedData && sortedData[1] && sortedData[1].category}`,
      value: value2,
      color: "#FF8FA2",
    },
    {
      label: `${sortedData && sortedData[2] && sortedData[2].category}`,
      value: value3,
      color: "#C4D0FB",
    },
    {
      label: languageArray[0].other,
      value: 100 - (value1 + value2 + value3),
      color: "#C4B0FB",
    },
  ];

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };
  return (
    <div className="w-full flex flex-col items-center sm:hidden">
      <PieChart
        series={[
          {
            outerRadius: 90,
            data,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontSize: 18,
          },
        }}
        {...sizing}
      />
      <div className="flex flex-col gap-3 mx-auto mt-2 w-full">
        <div className="flex w-full mx-auto justify-between items-center">
          <div className="flex gap-3 items-center justify-start">
            <div className="w-3 h-3 rounded-full bg-[#6A5AE0]"></div>
            <p
              id="data1_in_pieChart"
              className="font-medium text-base font-Rubik text-[#49465F]"
            >
              {sortedData && sortedData[0] && sortedData[0].category}
            </p>
          </div>

          <p className="font-medium text-sm font-Rubik text-[#6A5AE0]">
            {data[0].value.toFixed(0)}%
          </p>
        </div>
        <div className="flex w-full mx-auto justify-between items-center">
          <div className="flex gap-3 items-center justify-start">
            <div className="w-3 h-3 rounded-full bg-[#FF8FA2]"></div>
            <p
              id="data2_in_pieChart"
              className="font-medium text-base font-Rubik text-[#49465F]"
            >
              {sortedData && sortedData[1] && sortedData[1].category}
            </p>
          </div>

          <p className="font-medium text-sm font-Rubik text-[#FF8FA2]">
            {data[1].value.toFixed(0)}%
          </p>
        </div>
        <div className="flex mx-auto w-full justify-between items-center">
          <div className="flex gap-3 items-center justify-start">
            <div className="w-3 h-3 rounded-full bg-[#C4D0FB]"></div>
            <p
              id="data3_in_pieChart"
              className="font-medium text-base font-Rubik text-[#49465F]"
            >
              {sortedData && sortedData[2] && sortedData[2].category}
            </p>
          </div>

          <p className="font-medium text-sm font-Rubik text-[#C4D0FB]">
            {data[2].value.toFixed(0)}%
          </p>
        </div>

        <div className="flex mx-auto w-full justify-between items-center">
          <div className="flex gap-3 items-center justify-start">
            <div className="w-3 h-3 rounded-full bg-[#C4B0FB]"></div>
            <p
              id="data4_in_pieChart"
              className="font-medium text-base font-Rubik text-[#49465F]"
            >
              {languageArray[0].other}
            </p>
          </div>

          <p className="font-medium text-sm font-Rubik text-[#C4D0FB]">
            {data[3].value.toFixed(0)}%
          </p>
        </div>
      </div>
    </div>
  );
}
