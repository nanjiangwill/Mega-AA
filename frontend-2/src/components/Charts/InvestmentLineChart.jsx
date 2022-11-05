/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-underscore-dangle */
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  {
    id: "lineChart",
  }
);

export default function InvestmentLineChart({ datasets }) {
  const lineChartOptions = {
    type: "line",
    responsive: true,
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        gridLines: {
          zeroLineColor: "transparent",
        },
      },

      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        gridLines: {
          zeroLineColor: "transparent",
        },
      },
    },
    maintainAspectRatio: false,
    lineTension: 0.5,
    elements: {
      point: {
        radius: [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
        hoverRadius: 6,
      },
    },
  };
  const LineChartData = {
    labels: datasets,
    datasets: [
      {
        label: "First dataset",
        data: datasets,
        fill: true,
        backgroundColor: () => {
          const chart = document.getElementById("chart").getContext("2d");
          const gradient = chart.createLinearGradient(0, 0, 0, 285);
          // background: linear-gradient(180deg, rgba(245, 57, 248, 0.2) -0.98%, rgba(245, 57, 248, 0) 100%);

          gradient.addColorStop(0, "rgba(245, 57, 248,0.5)");
          gradient.addColorStop(1, "rgba(245, 57, 248, 0)");

          return gradient;
        },
        borderColor: "#f539f8",
        pointBorderColor: "#ffffff",
        pointBackgroundColor: "#f539f8",
        pointBorderWidth: 3,
        pointHoverBorderWidth: 3,
      },
    ],
  };
  const plugins = [
    {
      beforeDatasetsDraw(chart) {
        chart.ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
        chart.ctx.shadowBlur = 10;
      },
      afterDatasetsDraw(chart) {
        chart.ctx.shadowColor = "rgba(0, 0, 0, 0)";
        chart.ctx.shadowBlur = 0;
      },
    },
  ];

  return (
    <>
      <Line
        id="chart"
        options={lineChartOptions}
        data={LineChartData}
        plugins={plugins}
      />
      <div className="text-light-purple flex justify-between px-[8px] -mt-5">
        {LineChartData.datasets[0].data.map((value) => (
          <span key={value + Math.random()} className="">
            |
          </span>
        ))}
      </div>
    </>
  );
}
