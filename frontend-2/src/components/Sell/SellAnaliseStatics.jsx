import React, { useState } from "react";
import SellAnalysChart from "../Charts/SellAnalysChart";
import SelectBox from "../Helpers/SelectBox";

export default function SellAnaliseStatics() {
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
  const [filterDataSet, setFilterDataSet] = useState([
    0,
    51,
    9,
    "",
    31,
    6,
    "",
    "",
    "",
    71,
    51,
    60,
    5,
    51,
    21,
  ]);
  const dataSetHandler = (value) => {
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
      setFilterDataSet([
        10,
        30,
        20,
        40,
        13,
        51,
        9,
        "",
        31,
        6,
        "",
        "",
        "",
        71,
        51,
        60,
        5,
        51,
        21,
        0,
        51,
        9,
        "",
        31,
        6,
        "",
        "",
        "",
        71,
        51,
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
      setFilterDataSet([15, 35, 10, 20, 71, 51, 60]);
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
      setFilterDataSet([
        0,
        51,
        9,
        "",
        31,
        6,
        "",
        "",
        "",
        71,
        51,
        60,
        5,
        51,
        21,
      ]);
    }
  };
  return (
    <div className="sell-analise w-full md:p-8 p-4 bg-white overflow-hidden rounded-2xl section-shadow mb-11">
      <div className="flex flex-col justify-between h-full">
        <div className="content flex justify-between items-center mb-5">
          <div>
            <h1 className="text-xl font-bold text-dark-gray tracking-wide">
              Sell Analize
            </h1>
          </div>
          <SelectBox datas={filterDatas} action={dataSetHandler} />
        </div>
        <div>
          <SellAnalysChart
            dataLvls={currencyDataLvl}
            datasets={filterDataSet}
          />
        </div>
      </div>
    </div>
  );
}
