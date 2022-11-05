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

export default function QuickCounterChart({ primaryColor }) {
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
        radius: [0, 0, 6, 0, 0, 0, 0, 0],
        hoverRadius: 6,
      },
    },
  };
  const LineChartData = {
    labels: [
      "12AM",
      "4PM",
      "1.00AM",
      "2.00AM",
      "12AM",
      "4PM",
      "1.00AM",
      "2.00AM",
    ],
    datasets: [
      {
        label: "First dataset",
        data: [1, 5, 1, 5, 1, 19, 3, 8],
        fill: true,
        borderColor: primaryColor,
        pointBorderColor: "rgba(226, 226, 226, 1)",
        pointBackgroundColor: primaryColor,
        backgroundColor: "#ffffff00",
        borderWidth: 3,
      },
      // {
      //   label: 'Data One',
      //   backgroundColor: '#f87979',
      //   data: [this.getRandomInt(), this.getRandomInt()]
      // }
    ],
  };
  const plugins = [{}];
  return (
    <Line
      id="chart"
      options={lineChartOptions}
      data={LineChartData}
      plugins={plugins}
    />
  );
}
