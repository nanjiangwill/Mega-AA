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

export default function SellMonthStatics({ setRGBColor }) {
  const rgbColor = setRGBColor;
  const colors = rgbColor.match(/\d+/g).map(Number);
  const [r, g, b] = colors;
  let setColor = "";
  if (colors.length >= 3) {
    setColor = `${r}, ${g}, ${b}`;
  }

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
        ticks: {
          display: false,
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
    lineTension: 0.3,
    elements: {
      point: {
        radius: [6],
        hoverRadius: 6,
      },
    },
  };
  const LineChartData = {
    labels: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    datasets: [
      {
        label: "First dataset",
        data: [
          51, 61, 51, 61, 91, 51, 61, 51, 61, 51, 61, 41, 51, 61, 51, 61, 91,
          51, 61, 51, 61, 51, 61, 41, 51, 61, 51, 61, 91, 51,
        ],
        fill: true,
        backgroundColor: () => {
          if (setColor) {
            const chart = document.getElementById("chart").getContext("2d");
            const gradient = chart.createLinearGradient(0, 0, 0, 1000);
            gradient.addColorStop(0, `rgba(${setColor || ""},0.3)`);
            gradient.addColorStop(0.2, `rgba(${setColor || ""}, 0.01)`);
            return gradient;
          }
          return false;
        },
        borderColor: `rgb(${setColor})`,
        borderWidth: 3,
        pointBackgroundColor: `transparent`,
        pointHoverBackgroundColor: `rgb(${setColor})`,
        pointBorderColor: "transparent",
        pointHoverBorderColor: "#ffffff",
        pointBorderWidth: 4,
        pointHoverBorderWidth: 3,
      },
      // {
      //   label: 'Data One',
      //   backgroundColor: '#f87979',
      //   data: [this.getRandomInt(), this.getRandomInt()]
      // }
    ],
  };

  const plugins = [
    {
      beforeDatasetsDraw(chart) {
        chart.ctx.shadowColor = "rgba(5, 5, 5, 0.15)";
        chart.ctx.shadowBlur = 3;
      },
    },
  ];
  return (
    <Line
      id="chart"
      options={lineChartOptions}
      data={LineChartData}
      plugins={plugins}
    />
  );
}
