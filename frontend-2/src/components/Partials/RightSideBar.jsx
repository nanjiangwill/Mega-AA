import React, { useState } from "react";
import topCreator1 from "../../assets/images/top-creator-1.png";
import topCreator2 from "../../assets/images/top-creator-2.png";
import topCreator3 from "../../assets/images/top-creator-3.png";
import topCreator4 from "../../assets/images/top-creator-4.png";
import topCreator5 from "../../assets/images/top-creator-5.png";
import DoughnutChart from "../Charts/DoughnutChart";
import MiniLineChart from "../Charts/MiniLineChart";
import Icons from "../Helpers/Icons";
import BtcIco from "../Helpers/Icons/BtcIco";
import EthIco from "../Helpers/Icons/EthIco";
import LtcIco from "../Helpers/Icons/LtcIco";
import Usdt from "../Helpers/Icons/Usdt";
import SelectBox from "../Helpers/SelectBox";

export default function RightSideBar() {
  const filterDatas = ["Last 15 days", "Last Month", "Last 6 month"];
  const [filterDataSet, setFilterDataSet] = useState([10, 30, 20, 40]);
  const dataSetHandler = (value) => {
    if (value === "Last 15 days") {
      setFilterDataSet([10, 30, 20, 40]);
    } else if (value === "Last Month") {
      setFilterDataSet([15, 35, 10, 20]);
    } else {
      setFilterDataSet([8, 15, 40, 30]);
    }
  };

  const [selectedRate, setSelectedRate] = useState("ETH");
  const [rateStaticsDropdown, setRateStaticsDropdown] = useState(false);
  const [filterRateStatics, setFilterRateStatics] = useState([50, 30, 90, 20]);
  const rateDataSetHandler = (value) => {
    setSelectedRate(value);
    if (value === "USD") {
      setFilterRateStatics([50, 30, 90, 20]);
    } else if (value === "BTC") {
      setFilterRateStatics([15, 35, 10, 20]);
    } else {
      setFilterRateStatics([8, 15, 20, 30]);
    }
    setRateStaticsDropdown(!filterRateStatics);
  };
  return (
    <>
      <div className="right-sidebar-wrapper overflow-y-scroll overflow-style-none 2xl:fixed 2xl:grid-cols-none 2xl:block grid lg:grid-cols-2 grid-cols-1 xl:gap-7 gap-4 h-full 2xl:pb-96">
        <div className="chart-one bg-white rounded-2xl p-8 2xl:w-[268px] w-full 2xl:mb-10 2xl:border-none  border flex flex-col sm:flex-row 2xl:flex-col 2xl:block lg:justify-between sm:items-center space-x-5 2xl:space-x-0 ">
          <div>
            <div className="chart-heading mb-4 xl:flex justify-between items-center">
              <h3 className="text-xl font-bold text-dark-gray">Statistics</h3>
              <SelectBox datas={filterDatas} action={dataSetHandler} />
            </div>
            <div id="chartjs-tooltip" className="chart relative 2xl:mb-6">
              <DoughnutChart dataSets={filterDataSet} />
              <div className="sm:flex hidden absolute 2xl:top-[19%] 2xl:left-[20%] xl:top-[28%] xl:left-[28%] lg:left-[20%] lg:top-[20%] left-[30%] top-[30%] justify-center">
                <span>
                  <svg
                    width="123"
                    height="123"
                    viewBox="0 0 123 123"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M70.7788 45.749C70.7788 46.2809 70.7788 46.5811 70.7788 46.8865C70.7788 59.9678 70.7735 73.0544 70.8052 86.1357C70.8052 87.0204 70.5881 87.2679 69.7035 87.2311C67.8601 87.1573 66.0167 87.1889 64.1733 87.2205C63.5324 87.2311 63.2464 87.1257 63.2517 86.3779C63.2781 74.7396 63.2728 63.1012 63.2728 51.4681C63.2728 51.0784 63.2623 50.7467 63.6807 50.4781C65.9849 48.9667 68.268 47.4237 70.7788 45.749Z"
                      fill="#ECECEC"
                    />
                    <path
                      d="M81.6339 55.6284C81.6339 56.0918 81.6339 56.3604 81.6339 56.6343C81.6339 66.4663 81.6233 76.2983 81.6604 86.1304C81.6657 87.0098 81.4432 87.2574 80.5586 87.2258C78.6835 87.152 76.803 87.1731 74.9226 87.2205C74.2392 87.2363 74.1068 87.0046 74.1068 86.3832C74.128 78.0309 74.1227 69.6787 74.128 61.3265C74.128 61.021 74.0379 60.6893 74.3717 60.4628C76.75 58.8882 79.1178 57.3083 81.6339 55.6284Z"
                      fill="#ECECEC"
                    />
                    <path
                      d="M56.158 64.1334C54.3623 64.1228 53.0433 62.8115 53.0698 60.942C53.0751 60.3891 52.9109 60.1258 52.4553 59.894C51.1046 59.2042 49.7591 58.4932 48.4296 57.756C47.9528 57.4926 47.6138 57.4505 47.1106 57.8086C45.8658 58.6933 44.2767 58.5512 43.1908 57.5769C42.1684 56.6606 41.8771 55.007 42.5233 53.7905C43.1855 52.5371 44.6581 51.8736 46.03 52.2106C47.5026 52.5687 48.456 53.7115 48.4243 55.2808C48.4137 55.8864 48.6308 56.1708 49.1129 56.4131C50.0293 56.8765 50.9351 57.3505 51.8356 57.8507C52.8844 58.4353 53.9067 59.2568 55.0827 58.093C55.1038 58.0719 55.1515 58.0561 55.1833 58.0561C57.0955 58.1983 57.4239 56.708 58.0384 55.4178C59.8765 51.5787 61.7781 47.7659 63.6586 43.9427C63.844 43.5635 64.0294 43.1843 64.2201 42.8051C64.665 41.9099 65.11 41.1463 64.2677 40.0825C63.4573 39.0661 63.9022 37.4336 64.861 36.5173C65.8568 35.5746 67.2765 35.3798 68.5001 36.017C69.729 36.6595 70.4229 38.0024 70.0415 39.4032C69.8349 40.1615 70.0574 40.5407 70.5818 40.9988C72.2557 42.4681 73.9031 43.969 75.524 45.4962C75.9424 45.8912 76.2656 45.9596 76.8164 45.749C78.199 45.2171 79.6821 45.7174 80.4661 46.8917C81.2236 48.0187 81.1388 49.6249 80.2754 50.636C79.3431 51.7261 77.8176 52.0474 76.5145 51.426C75.2167 50.8045 74.4646 49.4406 74.8671 48.0029C75.079 47.234 74.8512 46.8654 74.3321 46.4125C72.69 44.9643 71.0639 43.4898 69.4641 41.9889C69.0033 41.5518 68.5901 41.3253 68.0022 41.694C67.9439 41.7308 67.8644 41.7782 67.8062 41.7677C66.2435 41.4939 65.9204 42.7051 65.4278 43.7215C63.5103 47.6817 61.5768 51.6313 59.6699 55.5968C59.2991 56.3657 58.727 57.0187 58.4992 57.8876C58.3562 58.4353 58.3827 58.7513 58.7111 59.1989C59.4633 60.2206 59.5216 61.3686 58.9336 62.4903C58.3509 63.5857 57.3975 64.1176 56.158 64.1334Z"
                      fill="url(#paint0_linear_197_92226)"
                    />
                    <path
                      d="M49.0697 62.2479C49.0697 68.0039 49.0697 73.5018 49.0697 78.9998C49.0697 81.4696 49.0485 83.9342 49.0856 86.4041C49.0962 87.0676 48.8949 87.2362 48.2434 87.2204C46.2941 87.1782 44.3395 87.1835 42.3901 87.2204C41.7863 87.2309 41.532 87.1203 41.5373 86.4252C41.5691 80.2531 41.5532 74.0811 41.5585 67.9091C41.5585 67.6037 41.4896 67.293 41.8339 67.0613C44.1911 65.513 46.5324 63.9436 49.0697 62.2479Z"
                      fill="#ECECEC"
                    />
                    <path
                      d="M59.9298 68.0092C59.9298 74.355 59.9245 80.4796 59.9351 86.6042C59.9351 87.0518 59.7973 87.2203 59.3312 87.2151C57.2071 87.194 55.083 87.1993 52.9589 87.2151C52.5457 87.2203 52.408 87.0729 52.408 86.6674C52.4186 82.2648 52.4186 77.8675 52.4133 73.465C52.4133 73.149 52.5298 72.9489 52.7946 72.7751C55.1095 71.2321 57.419 69.6838 59.9298 68.0092Z"
                      fill="#ECECEC"
                    />
                    <path
                      d="M30.9572 92.2319C14.058 75.3327 14.058 47.8462 30.9572 30.947C47.8564 14.0478 75.3428 14.0478 92.242 30.947C109.141 47.8462 109.141 75.3327 92.242 92.2319C75.3428 109.131 47.8564 109.131 30.9572 92.2319ZM90.691 32.498C74.655 16.462 48.5577 16.4485 32.5082 32.498C16.4722 48.534 16.4722 74.6448 32.5082 90.6809C48.5442 106.717 74.655 106.717 90.691 90.6809C106.727 74.6448 106.727 48.534 90.691 32.498Z"
                      fill="#EBEDED"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_197_92226"
                        x1="42.1803"
                        y1="35.6461"
                        x2="71.0724"
                        y2="74.1629"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F539F8" />
                        <stop offset="0.416763" stopColor="#C342F9" />
                        <stop offset="1" stopColor="#5356FB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="chart-analysis mt-5">
            <div className="heading text-center">
              <h1 className="text-base font-medium text-dark-gray mb-4">
                Your All Artwork Statistics
              </h1>
            </div>
            <div className="analysis-list">
              <ul>
                <li className="flex items-center mb-3.5">
                  <span className="w-4 h-4 bg-light-purple rounded-full block mr-2"></span>
                  <div>
                    <span className="text-sm text-thin-light-gray mr-2">
                      Profit :
                    </span>
                    <span className="text-sm text-dark-gray font-bold">
                      {/* don't change variable only change state */}
                      {filterDataSet[0]}%
                    </span>
                  </div>
                </li>
                <li className="flex items-center mb-3.5">
                  <span className="w-4 h-4 bg-purple rounded-full block mr-2"></span>
                  <div>
                    <span className="text-sm text-thin-light-gray mr-2">
                      Total Sold :
                    </span>
                    <span className="text-sm text-dark-gray font-bold">
                      {/* don't change variable only change state */}
                      {filterDataSet[1]}%
                    </span>
                  </div>
                </li>
                <li className="flex items-center mb-3.5">
                  <span className="w-4 h-4 bg-pink rounded-full block mr-2"></span>
                  <div>
                    <span className="text-sm text-thin-light-gray mr-2">
                      Total Sold :
                    </span>
                    <span className="text-sm text-dark-gray font-bold">
                      {/* don't change variable only change state */}
                      {filterDataSet[2]}%
                    </span>
                  </div>
                </li>
                <li className="flex items-center mb-3.5">
                  <span className="w-4 h-4 bg-[#FFCD00] rounded-full block mr-2"></span>
                  <div>
                    <span className="text-sm text-thin-light-gray mr-2">
                      Total Sold :
                    </span>
                    <span className="text-sm text-dark-gray font-bold">
                      {/* don't change variable only change state */}
                      {filterDataSet[3]}%
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="chart-two bg-white rounded-2xl p-8 2xl:w-[268px] w-full 2xl:mb-10 flex flex-col justify-between  border 2xl:border-none ">
          <div>
            {/* dropdown heading */}
            <div className="flex space-x-2 items-center mb-5 relative cursor-pointer">
              {/* icon area */}
              <div className="icon-area">
                {selectedRate === "LTC" ? (
                  <LtcIco />
                ) : selectedRate === "USD" ? (
                  <Usdt />
                ) : selectedRate === "BTC" ? (
                  <BtcIco />
                ) : (
                  <EthIco />
                )}
              </div>
              {/* heading */}
              <div
                className="heading flex space-x-1 items-center"
                onClick={() => setRateStaticsDropdown(!rateStaticsDropdown)}
              >
                <span className="text-xl font-bold text-dark-gray">
                  {selectedRate} rate
                </span>
                <span>
                  <svg
                    width="14"
                    height="7"
                    viewBox="0 0 14 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7092 0.288658C13.6163 0.197192 13.5057 0.124593 13.3839 0.0750502C13.262 0.025507 13.1313 0 12.9993 0C12.8673 0 12.7366 0.025507 12.6148 0.0750502C12.4929 0.124593 12.3824 0.197192 12.2894 0.288658L7.70992 4.7581C7.61697 4.84956 7.50638 4.92216 7.38453 4.9717C7.26269 5.02125 7.132 5.04676 7 5.04676C6.868 5.04676 6.73731 5.02125 6.61547 4.9717C6.49362 4.92216 6.38303 4.84956 6.29008 4.7581L1.7106 0.288658C1.61765 0.197192 1.50706 0.124593 1.38521 0.0750502C1.26337 0.025507 1.13268 0 1.00068 0C0.868682 0 0.737991 0.025507 0.616146 0.0750502C0.4943 0.124593 0.383712 0.197192 0.29076 0.288658C0.10453 0.471497 0 0.718831 0 0.976639C0 1.23445 0.10453 1.48178 0.29076 1.66462L4.88024 6.14382C5.44268 6.69206 6.20509 7 7 7C7.79491 7 8.55732 6.69206 9.11976 6.14382L13.7092 1.66462C13.8955 1.48178 14 1.23445 14 0.976639C14 0.718831 13.8955 0.471497 13.7092 0.288658Z"
                      fill="#374557"
                    />
                  </svg>
                </span>
              </div>
              <div
                className={`rate-statics-dropdown w-[164px] h-[170px] bg-white py-3 px-5 absolute  rounded ${
                  rateStaticsDropdown ? "active" : ""
                }`}
                style={{ boxShadow: "0px 4px 87px 0px #0000002B" }}
              >
                <ul className="flex flex-col justify-between h-full">
                  <li
                    className="flex space-x-2.5 items-center cursor-pointer"
                    onClick={() => rateDataSetHandler("ETH")}
                  >
                    <span>
                      <EthIco />
                    </span>
                    <span className="text-thin-light-gray text-base tracking-wide">
                      ETH Rate
                    </span>
                  </li>
                  <li
                    className="flex space-x-2.5 items-center cursor-pointer"
                    onClick={() => rateDataSetHandler("USD")}
                  >
                    <span>
                      <Usdt />
                    </span>
                    <span className="text-thin-light-gray text-base tracking-wide">
                      USDT Rate
                    </span>
                  </li>
                  <li
                    className="flex space-x-2.5 items-center cursor-pointer"
                    onClick={() => rateDataSetHandler("BTC")}
                  >
                    <span>
                      <BtcIco />
                    </span>
                    <span className="text-thin-light-gray text-base tracking-wide">
                      BTC Rate
                    </span>
                  </li>
                  <li
                    className="flex space-x-2.5 items-center cursor-pointer"
                    onClick={() => rateDataSetHandler("LTC")}
                  >
                    <span>
                      <LtcIco />
                    </span>
                    <span className="text-thin-light-gray text-base tracking-wide">
                      LTC Rate
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* details Money */}
            <div className="money-details mb-5">
              <p className="text-xl font-bold text-dark-gray">$7473.67 USD</p>
              <p className="text-sm text-light-green">+324.75 (11.5%)</p>
            </div>
          </div>
          <div className="miniLineChart">
            <MiniLineChart height="122px" datasets={filterRateStatics} />
          </div>
        </div>
      </div>
    </>
  );
}
