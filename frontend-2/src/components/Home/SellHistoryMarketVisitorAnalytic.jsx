import React, { useState } from "react";
import MarketVisitorAnalytic from "../Charts/MarketVisitorAnalytic";
import SelectBox from "../Helpers/SelectBox";
import SellHistoryWidget from "./SellHistoryWidget";

export default function SellHistoryMarketVisitorAnalytic({ className }) {
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
  const filterDatas = ["Last 15 days", "Last 7 days", "Last Month"];
  const [filterDataSet, setFilterDataSet] = useState([
    50, 30, 100, 20, 50, 30, 100, 20, 50, 30, 100, 20, 50, 30, 100,
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
        50, 30, 100, 20, 50, 30, 100, 20, 50, 30, 100, 20, 50, 30, 100, 50, 30,
        50, 30, 100, 20, 50, 30, 100, 20, 50, 30, 100, 20, 50, 30, 100,
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
      setFilterDataSet([50, 30, 100, 20, 50, 30, 100]);
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
        50, 30, 100, 20, 50, 30, 100, 20, 50, 30, 100, 20, 50, 30, 100,
      ]);
    }
  };
  return (
    <div
      className={`sell-history-market-visitor-analytic w-full ${
        className || ""
      }`}
    >
      <div className="content-wrapper w-full  lg:flex xl:space-x-8 lg:space-x-4">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <SellHistoryWidget />
        </div>
        <div className="flex-1 ">
          <div className="market-visitor w-full  md:p-8 p-4 h-full bg-white overflow-hidden rounded-2xl  section-shadow">
            <div className="flex flex-col justify-between h-full">
              <div className="content flex justify-between items-center mb-5">
                <div>
                  <h1 className="text-xl font-bold text-dark-gray tracking-wide">
                    Market Visitor
                  </h1>
                </div>
                <SelectBox datas={filterDatas} action={dataSetHandler} />
              </div>
              <div className="h-[233px]">
                <MarketVisitorAnalytic
                  datasets={filterDataSet}
                  dataLvls={currencyDataLvl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
