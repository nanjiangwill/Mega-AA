import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);
export default function SellAnalysChart({ datasets, dataLvls }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    // lineTension: 0.4,
    scales: {
      x: {
        grid: {
          color: "#E3E4FE",
          lineWidth: 2,
          drawBorder: true,
        },
        gridLines: {
          zeroLineColor: "transparent",
        },
      },

      y: {
        beginAtZero: true,
        grid: {
          color: "#E3E4FE",
          lineWidth: 2,
          drawBorder: true,
        },
        gridLines: {
          zeroLineColor: "transparent",
        },
        ticks: {
          callback(value) {
            return `${value} ETH`;
          },
        },
      },
    },
    elements: {
      point: {
        radius: [6],
        // hoverRadius: 6,
      },
    },
  };
  const labels = dataLvls;
  let width;
  let height;
  let gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(0, "rgba(83, 86, 251,1)");
      gradient.addColorStop(0.5, "rgba(195, 66, 249,1)");
      gradient.addColorStop(1, "rgba(245, 57, 248,1)");
    }

    return gradient;
  }
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: datasets,
        // data: [0, 51, 9, "", 31, 6, "", "", "", 71, 51, 60, 5, 51, 21],
        borderColor(context) {
          const { chart } = context;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        fill: true,
        backgroundColor: () => {
          const charts = document.getElementById("chart").getContext("2d");
          const gradients = charts.createLinearGradient(0, 0, 0, 550);
          gradients.addColorStop(0, "rgba(245, 57, 248,0.6)");
          gradients.addColorStop(1, "rgba(83, 86, 251, 0.01)");

          return gradients;
        },
        borderWidth: 4,
        pointBackgroundColor(context) {
          const { chart } = context;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        // pointBorderWidth: 3,
      },
    ],
  };
  return <Line options={options} data={data} />;
}
