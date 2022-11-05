import React from "react";
import SellHistoryAnalytic from "../Charts/SellHistoryAnalytic";

export default function SellHistoryWidget() {
  return (
    <div className="sell-history w-full h-full md:p-8 p-4 bg-white overflow-hidden rounded-2xl section-shadow">
      <div className="flex flex-col justify-between h-full">
        <div className="content lg:flex justify-between items-center mb-5">
          <div>
            <h1 className="text-xl font-bold text-dark-gray tracking-wide mb-1 sm:mb-0">
              Sell History
            </h1>
          </div>
          <div className="flex space-x-2  mb-4 sm:mb-0">
            <div className="flex space-x-2 items-center">
              <span className="w-4 h-4 bg-purple block rounded-full"></span>
              <p className="text-sm text-thin-light-gray font-medium">
                Avg: Sell Price
              </p>
            </div>
            <div className="flex space-x-2 items-center">
              <span className="w-4 h-4 bg-pink block rounded-full"></span>
              <p className="text-sm text-thin-light-gray font-medium">
                Total Sell
              </p>
            </div>
          </div>
          <span className="text-sm text-pink">Current Week</span>
        </div>
        <div>
          <SellHistoryAnalytic />
        </div>
      </div>
    </div>
  );
}
