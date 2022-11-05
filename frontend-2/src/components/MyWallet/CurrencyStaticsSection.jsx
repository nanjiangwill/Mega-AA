import React, { useState } from "react";
import CurrencyStatics from "../Charts/CurrencyStatics";
import SelectBox from "../Helpers/SelectBox";

export default function CurrencyStaticsSection() {
  const filterDatas = ["Last 15 days", "Last 7 days", "Last Month"];
  const [currencyDataLvl, setCurrencyDataLvl] = useState([
    "Jan 1",
    "Jan 2",
    "Jan 3",
    "Jan 4",
    "Jan 5",
    "Jan 6",
    "Jan 7",
    "Jan 8",
    "Jan 9",
    "Jan 10",
    "Jan 11",
    "Jan 12",
    "Jan 13",
    "Jan 14",
    "Jan 15",
  ]);
  const [datasetLtc, setDatasetLtc] = useState([
    0, 10, 12, 15, 20, 24, 45, 25, 75, 65, 70, 85, 88, 90, 100,
  ]);
  const [datasetsBtc, setDatasetBtc] = useState([
    0, 15, 15, 18, 23, 30, 40, 28, 78, 68, 73, 88, 88, 90, 100,
  ]);
  const [datasetsEth, setDatasetEth] = useState([
    0, 17, 18, 20, 28, 35, 48, 30, 80, 70, 78, 90, 91, 94, 98,
  ]);
  const currencyStaticsHandler = (value) => {
    if (value === "Last Month") {
      setCurrencyDataLvl([
        "Jan 1",
        "Jan 2",
        "Jan 3",
        "Jan 4",
        "Jan 5",
        "Jan 6",
        "Jan 7",
        "Jan 8",
        "Jan 9",
        "Jan 10",
        "Jan 11",
        "Jan 12",
        "Jan 13",
        "Jan 14",
        "Jan 15",
        "Jan 16",
        "Jan 17",
        "Jan 18",
        "Jan 19",
        "Jan 20",
        "Jan 21",
        "Jan 22",
        "Jan 23",
        "Jan 24",
        "Jan 25",
        "Jan 26",
        "Jan 27",
        "Jan 28",
        "Jan 29",
        "Jan 30",
      ]);
      setDatasetLtc([
        0, 5, 8, 11, 12, 16, 18, 21, 28, 31, 46, 38, 35, 41, 50, 43, 65, 76, 58,
        66, 60, 71, 72, 78, 81, 86, 89, 91, 95, 99,
      ]);
      setDatasetBtc([
        1, 5, 8, 11, 12, 16, 20, 21, 28, 31, 46, 38, 38, 41, 50, 45, 61, 76, 58,
        66, 60, 71, 72, 78, 81, 86, 91, 91, 95, 99,
      ]);
      setDatasetEth([
        0, 5, 8, 11, 12, 20, 18, 21, 28, 25, 46, 38, 35, 41, 50, 55, 65, 70, 58,
        66, 60, 71, 72, 78, 81, 86, 89, 91, 96, 99,
      ]);
    } else if (value === "Last 7 days") {
      setCurrencyDataLvl([
        "Jan 1",
        "Jan 2",
        "Jan 3",
        "Jan 4",
        "Jan 5",
        "Jan 6",
        "Jan 7",
      ]);
      setDatasetLtc([0, 10, 15, 30, 45, 75, 65]);
      setDatasetBtc([4, 15, 21, 35, 41, 91, 61]);
      setDatasetEth([5, 16, 21, 43, 51, 61, 74]);
    } else {
      setCurrencyDataLvl([
        "Jan 1",
        "Jan 2",
        "Jan 3",
        "Jan 4",
        "Jan 5",
        "Jan 6",
        "Jan 7",
        "Jan 8",
        "Jan 9",
        "Jan 10",
        "Jan 11",
        "Jan 12",
        "Jan 13",
        "Jan 14",
        "Jan 15",
      ]);
      setDatasetLtc([
        0, 10, 12, 15, 20, 24, 45, 25, 75, 65, 70, 85, 88, 90, 100,
      ]);
      setDatasetBtc([
        0, 15, 15, 18, 23, 30, 40, 28, 78, 68, 73, 88, 88, 90, 100,
      ]);
      setDatasetEth([
        0, 17, 18, 20, 28, 35, 48, 30, 80, 70, 78, 90, 91, 94, 98,
      ]);
    }
  };
  return (
    <div className="currency-statics w-full mb-11">
      <div className="w-full bg-white rounded-2xl p-7">
        <div className="flex flex-col justify-between h-full">
          <div className="content sm:flex justify-between items-center mb-5">
            <div>
              <h1 className="text-xl font-bold text-dark-gray tracking-wide">
                Currency Statistics
              </h1>
            </div>
            <div className="flex space-x-2">
              <div className="flex space-x-2 items-center">
                <span className="w-4 h-4 bg-purple block rounded-full"></span>
                <p className="text-sm text-thin-light-gray font-medium">LTC</p>
              </div>
              <div className="flex space-x-2 items-center">
                <span className="w-4 h-4 bg-pink block rounded-full"></span>
                <p className="text-sm text-thin-light-gray font-medium">ETH</p>
              </div>
              <div className="flex space-x-2 items-center">
                <span className="w-4 h-4 bg-gold block rounded-full"></span>
                <p className="text-sm text-thin-light-gray font-medium">BTC</p>
              </div>
            </div>
            <SelectBox datas={filterDatas} action={currencyStaticsHandler} />
          </div>
          <div className="currency-statics-chart">
            <CurrencyStatics
              datasetsLtc={datasetLtc}
              datasetsBtc={datasetsBtc}
              datasetsEth={datasetsEth}
              dataLabels={currencyDataLvl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
