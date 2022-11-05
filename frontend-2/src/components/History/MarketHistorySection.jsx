import React, { useState } from "react";
import MarketHistoryChart from "../Charts/MarketHistoryChart";
import SelectBox from "../Helpers/SelectBox";

export default function MarketHistorySection() {
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
  const [datasetOne, setDatasetOne] = useState([
    10, -30, 50, -70, 90, -10, 30, -50, 70, -90, -10, 30, -50, 70, -90,
  ]);
  const [datasetTwo, setDatasetTwo] = useState([
    -20, 40, -60, 80, -90, 20, -40, 60, -80, 90, 20, -40, 60, -80, 90,
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
      setDatasetOne([
        10, -30, 50, -70, 90, -10, 30, -50, 70, -90, -10, 30, -50, 70, -90, 66,
        10, -30, 50, -70, 90, -10, 30, -50, 70, -90, -10, 30, -50, 70, -90, 60,
      ]);
      setDatasetTwo([
        -20, 40, -60, 80, -90, 20, -40, 60, -80, 90, 20, -40, 60, -80, 90, 66,
        -20, 40, -60, 80, -90, 20, -40, 60, -80, 90, 20, -40, 60, -80, 90,
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
      setDatasetOne([10, -30, 50, -70, 90, -10, 30]);
      setDatasetTwo([-20, 40, -60, 80, -90, 20, -40]);
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
      setDatasetOne([
        10, -30, 50, -70, 90, -10, 30, -50, 70, -90, -10, 30, -50, 70, -90,
      ]);
      setDatasetTwo([
        -20, 40, -60, 80, -90, 20, -40, 60, -80, 90, 20, -40, 60, -80, 90,
      ]);
    }
  };
  return (
    <div className="market-history-widget w-full mb-11">
      <div className="w-full bg-white rounded-2xl lg:p-7 p-4">
        <div className="heading w-full">
          <div className="content lg:flex justify-between items-center mb-5">
            <div>
              <h1 className="text-xl font-bold text-dark-gray tracking-wide">
                Market History
              </h1>
            </div>
            <div className="flex space-x-2">
              <div className="flex space-x-2 items-center">
                <span className="w-4 h-4 bg-purple block rounded-full"></span>
                <p className="text-sm text-thin-light-gray font-medium">
                  Visitors
                </p>
              </div>
              <div className="flex space-x-2 items-center">
                <span className="w-4 h-4 bg-pink block rounded-full"></span>
                <p className="text-sm text-thin-light-gray font-medium">
                  Sales
                </p>
              </div>
            </div>
            <SelectBox datas={filterDatas} action={currencyStaticsHandler} />
          </div>
        </div>
        <MarketHistoryChart
          dataLvl={currencyDataLvl}
          datasetOne={datasetOne}
          datasetTwo={datasetTwo}
        />
      </div>
    </div>
  );
}
