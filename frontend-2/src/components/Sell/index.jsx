import React from "react";
import country1 from "../../assets/images/country-1.png";
import country2 from "../../assets/images/country-2.png";
import country3 from "../../assets/images/country-3.png";
import SellMonthStatics from "../Charts/SellMonthStatics";
import SellHistoryWidget from "../Home/SellHistoryWidget";
import CurrentBalanceWidget from "../MyWallet/CurrentBalanceWidget";
import Layout from "../Partials/Layout";
import SellAnaliseStatics from "./SellAnaliseStatics";
import SellProductHistoryTable from "./SellProductHistoryTable";

export default function Sell() {
  return (
    <>
      <Layout>
        <div className="sell-page-wrapper w-full mb-10">
          <div className="main-wrapper w-full">
            <div className="current_balance-bit-sell-widget w-full lg:h-[436px] mb-11">
              <div className="w-full h-full lg:flex lg:space-x-7">
                {/* style={{ width: "calc(50% - 15px)" }} */}
                <div className="lg:w-2/3 h-full mb-10 lg:mb-0">
                  <CurrentBalanceWidget />
                </div>
                <div className="lg:w-1/3 h-full mb-10 lg:mb-0">
                  <div className="sell-month-analytic-card w-full h-full rounded-xl overflow-hidden relative">
                    {/* heading */}
                    <div className="w-full h-16 bg-gold flex pl-7 items-center">
                      <h1 className="text-xl font-medium tracking-wide text-white">
                        Bits this Month
                      </h1>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between bg-white">
                      <div className="w-full px-5 pt-5">
                        <p className="text-26 font-bold text-dark-gray tracking-wide">
                          769.44 ETH
                        </p>
                        <p className="text-thin-light-gray text-18 flex items-center">
                          <span>($949374.94)</span>
                          <span className="ml-2 text-sm text-light-red">
                            -224.75 (11.5%)
                          </span>
                        </p>
                      </div>
                      <div className="month-statics w-full lg:h-[205px] h-full lg:absolute bottom-0 left-0 transform scale-[1.08]">
                        <SellMonthStatics setRGBColor="rgba(242, 153, 74)" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 h-full mb-10 lg:mb-0">
                  <div className="sell-month-analytic-card w-full h-full rounded-xl overflow-hidden relative">
                    {/* heading */}
                    <div className="w-full h-16 bg-pink flex pl-7 items-center">
                      <h1 className="text-xl font-medium tracking-wide text-white">
                        Sell Earing this Month
                      </h1>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between bg-white">
                      <div className="w-full px-5 pt-5">
                        <p className="text-26 font-bold text-dark-gray tracking-wide">
                          769.44 ETH
                        </p>
                        <p className="text-thin-light-gray text-18 flex items-center">
                          <span>($949374.94)</span>
                          <span className="ml-2 text-sm text-light-green">
                            224.75 (11.5%)
                          </span>
                        </p>
                      </div>
                      <div className="month-statics w-full lg:h-[205px] h-full lg:absolute bottom-0 left-0 transform scale-[1.08]">
                        <SellMonthStatics setRGBColor="rgba(245, 57, 248, 1)" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SellAnaliseStatics />
            <div className="sell-history-top-sale-country-widget w-full mb-11">
              <div className="lg:flex lg:space-x-9">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <SellHistoryWidget />
                </div>
                <div className="flex-1">
                  <div className="top-saller-country-widget w-full h-full bg-white p-8 rounded-2xl section-shadow flex flex-col justify-between">
                    <div>
                      {/* heading */}
                      <div className="content flex justify-between items-center mb-5">
                        <div>
                          <h1 className="text-xl font-bold text-dark-gray tracking-wide">
                            Top Sell Country
                          </h1>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <span className="text-sm text-thin-light-gray">
                            Last 7 days
                          </span>
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
                      <div className="list-content h-full">
                        <ul className="flex flex-col space-y-[22px] h-full">
                          <li className="country-list-item flex justify-between">
                            <div className="flex space-x-4 items-center">
                              <div className="w-10 h-10 overflow-hidden rounded-full">
                                <img
                                  src={country1}
                                  alt=""
                                  className="w-full h-full"
                                />
                              </div>
                              <p className="text-18 text-dark-gray">
                                Netherlands
                              </p>
                            </div>
                            <div>
                              <h1 className="text-xl font-bold text-dark-gray">
                                3.435ETH
                              </h1>
                            </div>
                          </li>
                          <li className="country-list-item flex justify-between">
                            <div className="flex space-x-4 items-center">
                              <div className="w-10 h-10 overflow-hidden rounded-full">
                                <img
                                  src={country2}
                                  alt=""
                                  className="w-full h-full"
                                />
                              </div>
                              <p className="text-18 text-dark-gray">
                                Netherlands
                              </p>
                            </div>
                            <div>
                              <h1 className="text-xl font-bold text-dark-gray">
                                3.435ETH
                              </h1>
                            </div>
                          </li>
                          <li className="country-list-item flex justify-between">
                            <div className="flex space-x-4 items-center">
                              <div className="w-10 h-10 overflow-hidden rounded-full">
                                <img
                                  src={country3}
                                  alt=""
                                  className="w-full h-full"
                                />
                              </div>
                              <p className="text-18 text-dark-gray">
                                Netherlands
                              </p>
                            </div>
                            <div>
                              <h1 className="text-xl font-bold text-dark-gray">
                                3.435ETH
                              </h1>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-18 tracking-wide text-purple">
                        See All
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SellProductHistoryTable />
          </div>
        </div>
      </Layout>
    </>
  );
}
