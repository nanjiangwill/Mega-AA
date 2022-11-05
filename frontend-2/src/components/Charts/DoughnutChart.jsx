/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-underscore-dangle */
import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, {
  id: "doughnut",
});

export default function DoughnutChart({ dataSets = [] }) {
  const data = {
    labels: ["Profit", "Total sold", "Total cancle", "Total pending"],
    datasets: [
      {
        label: "# of Votes",
        data: dataSets,
        backgroundColor: ["#E3E4FE", "#5356FB", "#F539F8", "#FFCD00"],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    cornerRadius: 8,
    legend: {
      display: false,
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    elements: { arc: { roundedCornersFor: { start: [0, 1, 2, 3] } } },
  };
  const plugins = [
    {
      afterUpdate(chart) {
        if (chart.options.elements.arc.roundedCornersFor !== undefined) {
          const arcValues = Object.values(
            chart.options.elements.arc.roundedCornersFor
          );

          arcValues.forEach((arcs) => {
            // eslint-disable-next-line no-param-reassign
            arcs = Array.isArray(arcs) ? arcs : [arcs];
            arcs.forEach((i) => {
              const arc = chart.getDatasetMeta(0).data[i];
              arc.round = {
                x: (chart.chartArea.left + chart.chartArea.right) / 2,
                y: chart.chartArea.top + chart.chartArea.bottom / 2,
                radius: (arc.outerRadius + arc.innerRadius) / 2,
                thickness: (arc.outerRadius - arc.innerRadius) / 2,
                backgroundColor: arc.options.backgroundColor,
              };
            });
          });
        }
      },
      afterDraw: (chart) => {
        if (chart.options.elements.arc.roundedCornersFor !== undefined) {
          const { ctx } = chart;
          let arc;
          const { roundedCornersFor } = chart.options.elements.arc;
          // eslint-disable-next-line no-restricted-syntax
          for (const position in roundedCornersFor) {
            const values = Array.isArray(roundedCornersFor[position])
              ? roundedCornersFor[position]
              : [roundedCornersFor[position]];
            // eslint-disable-next-line no-loop-func
            values.forEach((p) => {
              arc = chart.getDatasetMeta(0).data[p];
              const startAngle = Math.PI / 2 - arc.startAngle;
              // const startAngle = Math.PI - arc.startAngle - Math.PI;
              const endAngle = Math.PI / 2 - arc.endAngle;
              // const endAngle = Math.PI - arc.endAngle - Math.PI;
              ctx.save();
              ctx.translate(arc.round.x, arc.round.y);
              ctx.fillStyle = arc.options.backgroundColor;
              ctx.beginPath();
              if (position === "start") {
                ctx.arc(
                  arc.round.radius * Math.sin(startAngle),
                  arc.round.radius * Math.cos(startAngle),
                  arc.round.thickness,
                  0,
                  2 * Math.PI
                );
              } else {
                ctx.arc(
                  arc.round.radius * Math.sin(endAngle),
                  arc.round.radius * Math.cos(endAngle),
                  arc.round.thickness,
                  0,
                  2 * Math.PI
                );
              }
              ctx.closePath();
              ctx.fill();
              ctx.restore();
            });
          }
        }
      },
    },
  ];
  return <Doughnut data={data} options={options} plugins={plugins} />;
}
