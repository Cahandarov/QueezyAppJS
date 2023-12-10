import { useState } from "react";
import SwitchSelector from "react-switch-selector";

export default function LeaderboardButtonMobile({ setViewType }) {
  const [isWeekly, setIsWeekly] = useState(true);
  const options = [
    {
      label: (
        <span
          className={`${
            isWeekly ? "text-white" : "text-primaryColor"
          } font-Rubik text-base font-medium`}
        >
          Weekly
        </span>
      ),
      value: "Weekly",
      selectedBackgroundColor: "#9087E5",
    },
    {
      label: (
        <span
          className={`${
            isWeekly ? "text-primaryColor" : "text-white"
          } font-Rubik text-base font-medium `}
        >
          All Time
        </span>
      ),
      value: "All Time",
      selectedBackgroundColor: "#9087E5",
    },
  ];

  const onChange = (newValue) => {
    setViewType(newValue);
    console.log(newValue);
    setIsWeekly(newValue === "Weekly");
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "Weekly"
  );

  return (
    <div
      className="block sm:hidden your-required-wrapper font-medium font-base mx-auto"
      style={{ width: 150, height: 30 }}
    >
      <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={"#EFEEFC"}
        fontColor={"white"}
        fontFamily={"Rubik"}
      />
    </div>
  );
}
