import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function SellHistoryAnalytic() {
  const options = {
    responsive: true,
    barThickness: 7,
    scales: {
      x: {
        grid: {
          display: false,
        },
        gridLines: {
          zeroLineColor: "transparent",
        },
      },

      y: {
        beginAtZero: true,
        grid: {
          // display: false,
          drawBorder: false,
          color: "#E5E5E5",
          borderDash: [5, 5],
          borderDashOffset: 2,
          borderWidth: 2,
        },
        gridLines: {
          zeroLineColor: "transparent",
        },
        ticks: {
          callback(value) {
            return `${value}% `;
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      //   title: {
      //     display: true,
      //     text: "Chart.js Bar Chart",
      //   },
    },
  };

  const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#5356FB",
        borderRadius: 10,
      },
      {
        label: "Dataset 2",
        data: [87, 98, 23, 51, 12, 78, 35],
        backgroundColor: "#F539F8",
        borderRadius: 10,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
