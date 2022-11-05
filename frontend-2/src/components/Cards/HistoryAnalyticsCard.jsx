import React from "react";
import QuickCounterChart from "../Charts/QuickCounterChart";

export default function HistoryAnalyticsCard({
  title,
  numberOfCount,
  numberOfAnalyse,
  children,
  primaryColor,
  iconBg,
}) {
  return (
    <div className="item w-full">
      <div className="bg-white rounded-xl w-full h-auto p-5">
        <div className="flex flex-col justify-between">
          <div className="flex space-x-[6px] items-center pb-2">
            <div
              className="w-[70px] h-[70px] flex justify-center items-center rounded-full"
              style={{ background: `${iconBg}` }}
            >
              {children && children}
            </div>
            <div>
              <p className="text-26 font-bold tracking-wide text-dark-gray">
                {numberOfCount}
              </p>
              <p className="text-base tracking-wide text-thin-light-gray">
                {title}
              </p>
              <p
                className={`text-sm tracking-wide ${
                  Math.sign(numberOfAnalyse) === -1
                    ? "text-light-red"
                    : "text-light-green"
                }  mt-2`}
              >
                {Math.sign(numberOfAnalyse) === -1
                  ? `${numberOfAnalyse}`
                  : `+${numberOfAnalyse}`}
                (11.5%)
              </p>
            </div>
          </div>
          <div className="w-full h-[100px]">
            <QuickCounterChart primaryColor={primaryColor} />
          </div>
        </div>
      </div>
    </div>
  );
}
