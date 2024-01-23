import React, { useState } from "react";
import SwitchSelector from "react-switch-selector";

export default function LeaderboardPageButton({ setViewType }) {
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
    // console.log(newValue);
    setIsWeekly(newValue === "Weekly");
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "Weekly"
  );

  return (
    <div
      className="hidden sm:block your-required-wrapper font-medium font-base"
      style={{ width: 280, height: 40 }}
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
