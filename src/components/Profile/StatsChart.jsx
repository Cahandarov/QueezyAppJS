import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function StatsChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["3/10", "8/10", "6/10"],
      datasets: [
        {
          label: "",
          data: [540, 325, 702],
          backgroundColor: ["#FFD6DD", "#C4D0FB", "#A9ADF3"],
          borderColor: ["#FFD6DD", "#C4D0FB", "#A9ADF3"],
          borderWidth: 1,
          borderRadius: "10",
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
