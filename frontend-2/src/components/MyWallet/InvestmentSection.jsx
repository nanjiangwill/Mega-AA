import React, { useState } from "react";
import InvestmentLineChart from "../Charts/InvestmentLineChart";
import SelectBox from "../Helpers/SelectBox";

export default function InvestmentSection() {
  const filterDatas = ["Last 15 days", "Last 7 days", "Last Month"];
  const [filterDataSet, setFilterDataSet] = useState([
    50, 30, 100, 20, 197, 50, 30, 100, 20, 200, 50, 30, 100, 20, 197, 50,
  ]);
  const dataSetHandler = (value) => {
    if (value === "Last Month") {
      setFilterDataSet([
        50, 30, 100, 20, 197, 50, 30, 100, 20, 200, 50, 30, 100, 20, 197, 50,
        50, 30, 100, 20, 197, 50, 30, 100, 20, 200, 50, 30, 100, 20, 197, 50,
      ]);
    } else if (value === "Last 7 days") {
      setFilterDataSet([154, 50, 30, 100, 20, 197, 50]);
    } else {
      setFilterDataSet([
        50, 30, 100, 20, 197, 50, 30, 100, 20, 200, 50, 30, 100, 20, 197, 50,
      ]);
    }
  };
  return (
    <div className="investment-widget w-full h-full p-7 rounded-2xl bg-white flex flex-col justify-between">
      {/* heading */}
      <div className="heading mb-5 flex justify-between items-center">
        <h3 className="text-xl font-bold text-dark-gray">Investment</h3>
        <SelectBox datas={filterDatas} action={dataSetHandler} />
      </div>
      <div className="h-[286px]">
        <InvestmentLineChart datasets={filterDataSet} />
      </div>
    </div>
  );
}
