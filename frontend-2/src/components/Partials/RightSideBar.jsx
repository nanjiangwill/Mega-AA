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
        {/* top-creator */}
        <div className="top-creator bg-white rounded-2xl p-8 2xl:w-[268px] w-full 2xl:mb-10 2xl:border-none   border ">
          {/* heading */}
          <div className="heading flex justify-between items-center mb-3.5">
            <h3 className="text-xl font-bold text-dark-gray">Top creator</h3>
            <div className="flex space-x-1 items-center">
              <span className="text-sm text-thin-light-gray">Weekly</span>
              <span>
                <svg
                  width="13"
                  height="6"
                  viewBox="0 0 13 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.7"
                    d="M12.4124 0.247421C12.3327 0.169022 12.2379 0.106794 12.1335 0.0643287C12.0291 0.0218632 11.917 0 11.8039 0C11.6908 0 11.5787 0.0218632 11.4743 0.0643287C11.3699 0.106794 11.2751 0.169022 11.1954 0.247421L7.27012 4.07837C7.19045 4.15677 7.09566 4.219 6.99122 4.26146C6.88678 4.30393 6.77476 4.32579 6.66162 4.32579C6.54848 4.32579 6.43646 4.30393 6.33202 4.26146C6.22758 4.219 6.13279 4.15677 6.05312 4.07837L2.12785 0.247421C2.04818 0.169022 1.95338 0.106794 1.84895 0.0643287C1.74451 0.0218632 1.63249 0 1.51935 0C1.40621 0 1.29419 0.0218632 1.18975 0.0643287C1.08531 0.106794 0.990517 0.169022 0.910844 0.247421C0.751218 0.404141 0.661621 0.616141 0.661621 0.837119C0.661621 1.0581 0.751218 1.2701 0.910844 1.42682L4.84468 5.26613C5.32677 5.73605 5.98027 6 6.66162 6C7.34297 6 7.99647 5.73605 8.47856 5.26613L12.4124 1.42682C12.572 1.2701 12.6616 1.0581 12.6616 0.837119C12.6616 0.616141 12.572 0.404141 12.4124 0.247421Z"
                    fill="#374557"
                    fillOpacity="0.6"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="creator-list">
            <div className="item flex justify-between items-center mb-4">
              {/* image */}
              <div className="w-10 h-10 rounded-full">
                <img src={topCreator1} alt="top" />
              </div>
              {/* name */}
              <div>
                <p className="text-dark-gray text-base font-bold">
                  Albert Flores
                </p>
                <p className="text-xs text-thin-light-gray">@broklinslam_75</p>
              </div>
              {/* action */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="add-button w-6 h-6 flex justify-center items-center bg-purple rounded-full"
                >
                  <Icons name="add-people" />
                </button>
                <button
                  type="button"
                  className="delete-button w-6 h-6 flex justify-center items-center p-1 bg-light-purple text-purple rounded-full"
                >
                  <Icons name="close" />
                </button>
              </div>
            </div>
            <div className="item flex justify-between items-center mb-4">
              {/* image */}
              <div className="w-10 h-10 rounded-full">
                <img src={topCreator2} alt="top" />
              </div>
              {/* name */}
              <div>
                <p className="text-dark-gray text-base font-bold">
                  Albert Flores
                </p>
                <p className="text-xs text-thin-light-gray">@broklinslam_75</p>
              </div>
              {/* action */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="add-button w-6 h-6 flex justify-center items-center bg-purple rounded-full"
                >
                  <Icons name="add-people" />
                </button>
                <button
                  type="button"
                  className="delete-button w-6 h-6 flex justify-center items-center p-1 bg-light-purple text-purple rounded-full"
                >
                  <Icons name="close" />
                </button>
              </div>
            </div>
            <div className="item flex justify-between items-center mb-4">
              {/* image */}
              <div className="w-10 h-10 rounded-full">
                <img src={topCreator3} alt="top" />
              </div>
              {/* name */}
              <div>
                <p className="text-dark-gray text-base font-bold">
                  Albert Flores
                </p>
                <p className="text-xs text-thin-light-gray">@broklinslam_75</p>
              </div>
              {/* action */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="add-button w-6 h-6 flex justify-center items-center bg-purple rounded-full"
                >
                  <Icons name="add-people" />
                </button>
                <button
                  type="button"
                  className="delete-button w-6 h-6 flex justify-center items-center p-1 bg-light-purple text-purple rounded-full"
                >
                  <Icons name="close" />
                </button>
              </div>
            </div>
            <div className="item flex justify-between items-center mb-4">
              {/* image */}
              <div className="w-10 h-10 rounded-full">
                <img src={topCreator4} alt="top" />
              </div>
              {/* name */}
              <div>
                <p className="text-dark-gray text-base font-bold">
                  Albert Flores
                </p>
                <p className="text-xs text-thin-light-gray">@broklinslam_75</p>
              </div>
              {/* action */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="add-button w-6 h-6 flex justify-center items-center bg-purple rounded-full"
                >
                  <Icons name="add-people" />
                </button>
                <button
                  type="button"
                  className="delete-button w-6 h-6 flex justify-center items-center p-1 bg-light-purple text-purple rounded-full"
                >
                  <Icons name="close" />
                </button>
              </div>
            </div>
            <div className="item flex justify-between items-center mb-4">
              {/* image */}
              <div className="w-10 h-10 rounded-full">
                <img src={topCreator5} alt="top" />
              </div>
              {/* name */}
              <div>
                <p className="text-dark-gray text-base font-bold">
                  Albert Flores
                </p>
                <p className="text-xs text-thin-light-gray">@broklinslam_75</p>
              </div>
              {/* action */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="add-button w-6 h-6 flex justify-center items-center bg-purple rounded-full"
                >
                  <Icons name="add-people" />
                </button>
                <button
                  type="button"
                  className="delete-button w-6 h-6 flex justify-center items-center p-1 bg-light-purple text-purple rounded-full"
                >
                  <Icons name="close" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* top-platform */}
        <div className="top-platform bg-white rounded-2xl p-8 2xl:w-[268px] w-full 2xl:mb-10 2xl:border-none  border ">
          {/* heading */}
          <div className="heading flex justify-between items-center mb-3.5">
            <h3 className="text-xl font-bold text-dark-gray">Top Platform</h3>
            <div>
              <span className="text-sm text-thin-light-gray">View all</span>
            </div>
          </div>

          <div className="platform-list">
            <div className="item flex space-x-3 items-center mb-4">
              {/* image */}
              <div className="w-8 h-8 rounded-full">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 20.7556C40.0074 31.7371 31.0431 40.6838 20.0369 40.6912C8.95687 40.6838 0 31.7812 0 20.741C0 9.69341 8.92002 0.80542 20.0295 0.80542C31.08 0.80542 39.9926 9.7081 40 20.7556ZM15.4736 10.3178C15.5326 10.4206 15.5621 10.5088 15.6211 10.5749C16.2772 11.4784 16.808 12.448 17.2282 13.4763C18.6878 17.0242 18.5256 20.3957 16.174 23.5396C16.0855 23.6571 15.9307 23.7673 16.0413 23.9509C16.1445 24.1125 16.314 24.0758 16.4689 24.0758C17.0807 24.0758 17.6926 24.0831 18.3045 24.0758C18.5477 24.0684 18.6804 24.1199 18.6731 24.4063C18.6583 25.016 18.6657 25.6257 18.6731 26.2353C18.6731 26.4557 18.5993 26.5292 18.3708 26.5218C17.7663 26.5145 17.1471 26.4778 16.5426 26.5145C14.8765 26.6173 14.39 26.0591 13.7928 24.59C13.7707 24.5312 13.7486 24.4724 13.7265 24.4137C13.6602 24.1713 13.5127 24.0758 13.2473 24.0684C11.397 24.0244 9.54663 23.973 7.69628 23.8995C7.36454 23.8848 7.26871 23.9803 7.28345 24.3108C7.37191 26.0517 7.96167 27.5722 9.09694 28.9164C9.94471 29.9228 10.962 30.5618 12.2374 30.8263C13.6528 31.1127 15.0903 31.267 16.5352 31.3037C19.2186 31.3698 21.8946 31.1201 24.5853 31.098C25.8459 31.0833 26.878 30.5618 27.711 29.6069C28.3229 28.9091 28.8316 28.1452 29.355 27.3812C30.0479 26.3676 30.7409 25.2804 31.9278 24.8618C32.7313 24.5753 32.7976 24.1272 32.7313 23.4808C32.7313 23.4514 32.7313 23.4147 32.7313 23.3853C32.7682 22.9593 32.5765 22.8785 32.1858 22.9887C30.6082 23.4074 29.0306 23.804 27.453 24.2227C26.8633 24.377 26.2514 24.5532 25.8386 25.038C24.9466 26.1031 23.7892 26.5218 22.4327 26.5365C21.1353 26.5512 21.1353 26.5732 21.1353 25.2731C21.1353 24.1933 21.1353 24.1786 22.2042 24.2007C22.7792 24.2154 23.2805 24.1346 23.7154 23.7159C24.5042 22.9666 25.2046 22.1513 25.6911 21.1743C26.185 20.1754 26.3472 19.1397 26.045 18.0378C25.7059 16.7891 25.0866 15.702 24.2905 14.703C23.4427 13.6453 22.4254 12.7711 21.3859 11.9044C21.1943 11.7501 21.1279 11.5812 21.1353 11.3461C21.15 10.7218 21.1426 10.0974 21.1353 9.47305C21.1279 8.71646 20.5824 8.14352 19.8968 8.15087C19.1891 8.16556 18.6878 8.70912 18.6731 9.48039C18.6657 9.8697 18.6583 10.2664 18.6731 10.6557C18.6878 10.9421 18.5993 11.0082 18.3266 10.9274C17.6926 10.7438 17.0586 10.5675 16.4173 10.4206C16.1297 10.3545 15.8349 10.2296 15.4736 10.3178ZM8.63251 21.7179C8.86841 21.7326 9.00848 21.7473 9.14117 21.7473C10.7409 21.7473 12.3406 21.7326 13.9403 21.7546C14.5522 21.762 14.9871 21.5269 15.3262 21.0348C15.7833 20.3737 16.0781 19.6612 16.0487 18.8458C15.9749 16.936 15.5547 15.107 14.8102 13.3514C14.5964 12.8519 14.4563 12.8593 14.1688 13.2927C13.0188 15.0409 11.8614 16.7891 10.7114 18.5447C10.0405 19.5804 9.36233 20.6087 8.63251 21.7179Z"
                    fill="#2481E1"
                  />
                  <path
                    d="M15.4729 10.3178C15.8267 10.2223 16.129 10.3472 16.4165 10.4207C17.0578 10.5676 17.6918 10.7439 18.3258 10.9275C18.5986 11.0083 18.687 10.9422 18.6723 10.6557C18.6502 10.2664 18.6649 9.87709 18.6723 9.48044C18.6797 8.70917 19.181 8.15826 19.896 8.15091C20.5816 8.13622 21.1271 8.70916 21.1345 9.47309C21.1419 10.0975 21.1419 10.7218 21.1345 11.3462C21.1271 11.5886 21.2009 11.7502 21.3852 11.9044C22.4246 12.7638 23.4419 13.638 24.2897 14.703C25.0859 15.702 25.7051 16.7892 26.0442 18.0379C26.3465 19.1397 26.1843 20.1754 25.6904 21.1744C25.2038 22.1587 24.5035 22.9667 23.7147 23.7159C23.2797 24.1346 22.7711 24.208 22.2034 24.2007C21.1345 24.1787 21.1345 24.1934 21.1345 25.2731C21.1345 26.5733 21.1345 26.5512 22.432 26.5366C23.7884 26.5219 24.9458 26.1032 25.8378 25.0381C26.2506 24.5459 26.8551 24.377 27.4522 24.2227C29.0298 23.8041 30.6074 23.4074 32.185 22.9887C32.5757 22.8859 32.7674 22.9593 32.7305 23.3854C32.7305 23.4147 32.7305 23.4515 32.7305 23.4809C32.7969 24.1346 32.7305 24.5753 31.927 24.8618C30.7401 25.2878 30.0472 26.3676 29.3542 27.3813C28.8308 28.1452 28.3221 28.9091 27.7103 29.607C26.8772 30.5545 25.8452 31.0834 24.5846 31.0981C21.9012 31.1275 19.2252 31.3699 16.5344 31.3037C15.0895 31.267 13.6594 31.1128 12.2366 30.8263C10.9539 30.5692 9.94395 29.9228 9.09618 28.9165C7.96091 27.5723 7.37115 26.0518 7.28269 24.3109C7.26795 23.973 7.36378 23.8849 7.69552 23.8995C9.54587 23.9657 11.3962 24.0171 13.2466 24.0685C13.512 24.0758 13.6594 24.164 13.7257 24.4137C13.7405 24.4725 13.7626 24.5312 13.7921 24.59C14.3892 26.0591 14.8758 26.6174 16.5418 26.5145C17.1537 26.4778 17.7655 26.5145 18.3774 26.5366C18.6059 26.5439 18.6797 26.4704 18.6797 26.2501C18.6723 25.6404 18.6649 25.0307 18.6797 24.4211C18.687 24.1346 18.5617 24.0832 18.3111 24.0905C17.6992 24.0979 17.0873 24.0905 16.4755 24.0905C16.3207 24.0905 16.1511 24.1199 16.0479 23.9657C15.9299 23.782 16.0921 23.6792 16.1806 23.5543C18.5249 20.4031 18.6944 17.0389 17.2348 13.491C16.8072 12.4553 16.2838 11.4931 15.6277 10.5896C15.5687 10.5088 15.5319 10.4207 15.4729 10.3178Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </div>
              {/* name */}
              <div>
                <p className="text-thin-light-gray text-base font-medium">
                  OpenSea
                </p>
              </div>
              {/* action */}
            </div>
            <div className="item flex space-x-3 items-center mb-4">
              {/* image */}
              <div className="w-8 h-8 rounded-full">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="20"
                    cy="20.5745"
                    rx="20"
                    ry="19.9392"
                    fill="#FDD903"
                  />
                  <path
                    d="M30.0432 20.1565C29.8181 20.2625 29.8101 20.5908 30.0328 20.7018C31.565 21.4629 32.3814 22.7261 32.4556 24.4068C32.5245 25.8708 32.4715 27.3349 32.4821 28.7989C32.4821 29.0738 32.3973 29.1636 32.1216 29.1636C30.0169 29.153 27.907 29.153 25.8023 29.1636C25.4524 29.1636 25.4471 28.9945 25.4471 28.7408C25.4524 27.5569 25.4524 26.3782 25.4471 25.1943C25.4418 23.91 24.9169 23.318 23.6287 23.3022C20.8825 23.2705 18.1417 23.2916 15.3955 23.2757C15.0615 23.2757 15.035 23.4237 15.035 23.688C15.0456 25.3476 15.0297 27.0072 15.0456 28.6668C15.0509 29.0526 14.9608 29.1742 14.5526 29.1689C12.5327 29.1478 10.5182 29.1478 8.49834 29.1689C8.09543 29.1742 8 29.0632 8 28.6668C8.0106 23.2123 8.0106 17.7578 8.0053 12.3034C8.0053 11.9757 8.03181 11.8013 8.44532 11.8013C14.1444 11.8171 19.8488 11.8066 25.5478 11.833C27.0216 11.8383 28.4901 11.9968 29.842 12.6469C31.5279 13.4609 32.3125 14.8562 32.2117 16.7748C32.1332 18.3693 31.4419 19.4977 30.0432 20.1565ZM19.6208 18.6035C20.909 18.6035 22.2026 18.6088 23.4909 18.5982C23.7877 18.5982 24.0952 18.5824 24.3868 18.5242C24.7791 18.4449 24.9965 18.186 25.0018 17.7737C25.0071 17.3509 24.8109 17.0549 24.3815 16.9809C24.0899 16.9281 23.7877 16.9016 23.4855 16.9016C21.084 16.8963 18.6771 16.8963 16.2756 16.8963C15.0191 16.8963 15.035 16.8963 15.0297 18.1701C15.0297 18.5295 15.1464 18.6088 15.4804 18.6035C16.864 18.5929 18.2424 18.6035 19.6208 18.6035Z"
                    fill="#020200"
                  />
                </svg>
              </div>
              {/* name */}
              <div>
                <p className="text-thin-light-gray text-base font-medium">
                  Rarible
                </p>
              </div>
              {/* action */}
            </div>
            <div className="item flex space-x-3 items-center mb-4">
              {/* image */}
              <div className="w-8 h-8 rounded-full">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="20"
                    cy="20.4043"
                    rx="20"
                    ry="19.9392"
                    fill="url(#paint0_linear_249_2794)"
                  />
                  <path
                    d="M16.7403 14.4243C17.8836 14.4243 19.0272 14.4261 20.1705 14.4233C20.5666 14.4226 20.9612 14.4431 21.3489 14.5184C22.272 14.698 23.0864 15.0843 23.742 15.7545C23.8172 15.8312 23.8625 15.8401 23.9512 15.7762C24.8988 15.091 25.9527 14.6419 27.1244 14.484C27.8811 14.3821 28.6353 14.4115 29.3836 14.5947C30.3403 14.829 31.1613 15.277 31.8103 16.0013C32.413 16.674 32.7934 17.4511 32.9361 18.3386C33.054 19.0731 32.9989 19.7955 32.8499 20.5197C32.6718 21.3867 32.5167 22.2578 32.3477 23.1265C32.1933 23.92 32.0337 24.7123 31.8768 25.5054C31.7749 26.0202 31.6807 26.5367 31.5694 27.0493C31.5198 27.2772 31.3745 27.371 31.1365 27.3713C29.9446 27.3727 28.7528 27.3742 27.561 27.3745C27.2971 27.3745 27.1996 27.273 27.2463 27.0252C27.3872 26.2776 27.5365 25.5313 27.6807 24.7844C27.8136 24.095 27.9428 23.4052 28.076 22.7158C28.2148 21.9976 28.356 21.2798 28.4958 20.5616C28.5601 20.2311 28.6272 19.9038 28.5196 19.5662C28.3527 19.0422 27.8877 18.7075 27.3171 18.667C26.2023 18.5882 25.2894 19.4682 25.1459 20.415C25.0269 21.2017 24.844 21.9788 24.6918 22.7609C24.5703 23.386 24.4546 24.0126 24.3319 24.6378C24.1727 25.4483 24.0125 26.2587 23.8446 27.0674C23.8026 27.2694 23.65 27.3749 23.4365 27.3752C22.2322 27.377 21.028 27.3774 19.8237 27.3763C19.5956 27.3759 19.4854 27.2393 19.5292 27.0142C19.6609 26.3365 19.7956 25.6591 19.9278 24.9814C20.0869 24.1649 20.2446 23.3481 20.4031 22.5312C20.5549 21.7495 20.7017 20.9671 20.8604 20.1868C21.013 19.4359 20.4038 18.7124 19.6179 18.6688C18.5688 18.6102 17.6843 19.3695 17.4934 20.2162C17.3587 20.8144 17.2583 21.42 17.1415 22.0225C16.9389 23.0648 16.7359 24.1067 16.5322 25.1486C16.4114 25.7681 16.2895 26.3873 16.1683 27.0067C16.1187 27.2602 15.9832 27.3798 15.7197 27.3802C13.4145 27.3816 11.1097 27.3816 8.8045 27.3795C8.47305 27.3791 8.20621 27.1083 8.20548 26.7866C8.20475 26.471 8.48911 26.192 8.82823 26.1902C9.56414 26.186 10.3 26.1916 11.0359 26.1863C11.4995 26.1828 11.7854 25.749 11.5864 25.3581C11.5003 25.1888 11.3524 25.0904 11.1641 25.0503C11.0078 25.0169 10.8491 25.0304 10.6914 25.0301C9.77293 25.029 8.85451 25.0304 7.93645 25.0287C7.58712 25.0279 7.36408 24.893 7.27063 24.636C7.12754 24.242 7.42395 23.8444 7.87878 23.8323C8.18869 23.8241 8.49897 23.8305 8.80925 23.8305C9.95253 23.8302 11.0962 23.8312 12.2395 23.8287C12.5326 23.828 12.7702 23.6388 12.8148 23.3814C12.867 23.0807 12.7301 22.839 12.4494 22.7243C12.3493 22.6835 12.2468 22.6885 12.1442 22.6885C11.2805 22.687 10.4169 22.687 9.55318 22.6863C9.25933 22.686 9.03557 22.5749 8.91766 22.3001C8.76471 21.944 8.9998 21.5713 9.39257 21.5209C10.0653 21.4346 10.7403 21.5028 11.4138 21.4793C11.5171 21.4758 11.6207 21.4804 11.7237 21.4719C12.0642 21.4435 12.2891 21.206 12.2814 20.8886C12.2741 20.5943 12.0037 20.3351 11.6861 20.3277C11.4127 20.3213 11.1385 20.3316 10.8651 20.3231C10.5895 20.3142 10.3292 20.098 10.2884 19.8601C10.2362 19.5556 10.365 19.3056 10.633 19.1849C10.7487 19.1327 10.871 19.1402 10.9914 19.1398C11.7211 19.1367 12.4512 19.1388 13.1809 19.1342C13.5488 19.1317 13.7376 19.0099 13.8482 18.7444C13.9891 18.4064 13.6992 18.0148 13.3919 17.9829C13.1791 17.9609 12.967 17.9687 12.7549 17.9683C11.8124 17.9673 10.8699 17.9729 9.92734 17.9744C9.65539 17.9747 9.39002 17.6992 9.37468 17.4074C9.35899 17.1096 9.62181 16.8153 9.93318 16.7865C10.0117 16.7794 10.0912 16.7826 10.1701 16.7826C11.5689 16.7823 12.9677 16.783 14.3665 16.7819C14.6666 16.7816 14.8754 16.6342 14.9535 16.3754C15.0312 16.1184 14.9316 15.8546 14.702 15.7112C14.5728 15.6303 14.4264 15.625 14.28 15.6246C13.8055 15.6235 13.3313 15.6285 12.8567 15.6221C12.4822 15.6171 12.2252 15.4088 12.1876 15.0964C12.1435 14.7271 12.4253 14.4282 12.8359 14.4254C13.5963 14.4204 14.3563 14.4236 15.1167 14.4236C15.658 14.4236 16.1993 14.4236 16.7407 14.4236C16.7403 14.424 16.7403 14.424 16.7403 14.4243Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_249_2794"
                      x1="3"
                      y1="16.4165"
                      x2="26.9783"
                      y2="26.4379"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E100C5" />
                      <stop offset="1" stopColor="#FF812B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* name */}
              <div>
                <p className="text-thin-light-gray text-base font-medium">
                  Myth Market
                </p>
              </div>
            </div>
            <div className="item flex space-x-3 items-center mb-4">
              {/* image */}
              <div className="w-8 h-8 rounded-full">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="20"
                    cy="20.2341"
                    rx="20"
                    ry="19.9392"
                    fill="#5165FF"
                  />
                  <path
                    d="M26.1647 27.2085C22.5316 27.2448 19.3317 24.2111 19.3359 20.2195C19.3402 16.4128 22.3393 13.2525 26.1704 13.2554C30.0813 13.2583 33.012 16.5264 33.0006 20.2501C32.9892 24.1456 29.8505 27.2492 26.1647 27.2085Z"
                    fill="white"
                  />
                  <path
                    d="M20.5815 27.1983C20.5217 27.2245 20.4405 27.207 20.3607 27.207C16.0039 27.2085 11.647 27.2085 7.29019 27.2085C7.25742 27.2085 7.22465 27.2099 7.1933 27.2085C7.01094 27.2026 7.00951 27.2026 7.00381 27.0076C7.00239 26.9581 7.00381 26.9086 7.00381 26.8576C7.00381 22.4395 7.00381 18.0214 7.00381 13.6033C7.00381 13.5072 6.99099 13.4082 7.01236 13.334C11.5373 17.9559 16.0566 22.5749 20.5815 27.1983Z"
                    fill="white"
                  />
                </svg>
              </div>
              {/* name */}
              <div>
                <p className="text-thin-light-gray text-base font-medium">
                  KnownOrigin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
