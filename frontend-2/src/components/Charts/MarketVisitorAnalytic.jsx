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

export default function MarketVisitorAnalytic({ datasets, dataLvls }) {
  const lineChartOptions = {
    type: "line",
    responsive: true,
    scales: {
      x: {
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
  };
  const LineChartData = {
    labels: dataLvls,
    datasets: [
      {
        label: "First dataset",
        data: datasets,
        // data: [50, 30, 100, 20, 50, 30, 100, 20],
        fill: true,
        backgroundColor: "#FAECFE",
        borderColor: "#D040F9",
        pointBorderColor: "#AE8FF7",
        pointBackgroundColor: "#ffffff",
        pointRadius: 5,
        pointHoverRadius: 5,
        borderWidth: 5,
        pointBorderWidth: 3,
        pointHoverBorderWidth: 5,
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
