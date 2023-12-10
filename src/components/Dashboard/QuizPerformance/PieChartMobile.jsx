import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
  { label: "Music", value: 40, color: "#6A5AE0" },
  { label: "Math", value: 30, color: "#FF8FA2" },
  { label: "Sport", value: 30, color: "#C4D0FB" },
];

const sizing = {
  margin: { right: 5 },
  width: 180,
  height: 180,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function PieCharMobile() {
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
      <div className="flex flex-col gap-4 mx-auto mt-8 w-full">
        <div className="flex w-full mx-auto justify-between items-center">
          <div className="flex gap-3 items-center justify-start">
            <div className="w-3 h-3 rounded-full bg-[#6A5AE0]"></div>
            <p
              id="data1_in_pieChart"
              className="font-medium text-base font-Rubik text-[#49465F]"
            >
              {data[0].label}
            </p>
          </div>

          <p className="font-medium text-sm font-Rubik text-[#6A5AE0]">
            {data[0].value}%
          </p>
        </div>
        <div className="flex w-full mx-auto justify-between items-center">
          <div className="flex gap-3 items-center justify-start">
            <div className="w-3 h-3 rounded-full bg-[#FF8FA2]"></div>
            <p
              id="data2_in_pieChart"
              className="font-medium text-base font-Rubik text-[#49465F]"
            >
              {data[0].label}
            </p>
          </div>

          <p className="font-medium text-sm font-Rubik text-[#FF8FA2]">
            {data[1].value}%
          </p>
        </div>
        <div className="flex mx-auto w-full justify-between items-center">
          <div className="flex gap-3 items-center justify-start">
            <div className="w-3 h-3 rounded-full bg-[#C4D0FB]"></div>
            <p
              id="data3_in_pieChart"
              className="font-medium text-base font-Rubik text-[#49465F]"
            >
              {data[0].label}
            </p>
          </div>

          <p className="font-medium text-sm font-Rubik text-[#C4D0FB]">
            {data[2].value}%
          </p>
        </div>
      </div>
    </div>
  );
}
