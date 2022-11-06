import React from "react";
import datas from "../../data/product_data.json";
import Layout from "../Partials/Layout";
import CreateNft from "./CreateNft";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import SellHistoryMarketVisitorAnalytic from "./SellHistoryMarketVisitorAnalytic";
import TopSellerTopBuyerSliderSection from "./TopSellerTopBuyerSliderSection";
import TrendingSection from "./TrendingSection";
import UpdateTable from "./UpdateTable";
import CurrentBalanceWidget from "./CurrentBalanceWidget";
import bank1 from "../../assets/images/ethereum.png";
import bank2 from "../../assets/images/polygon.png";
import bank3 from "../../assets/images/optimism.svg";
import bank4 from "../../assets/images/avalanche.png";

export default function Home() {
  const trending = datas.datas;

  return (
    <Layout>
      <div className="main-wrapper w-full">
      <div className="home-page-wrapper">
      <div className="my-wallet-wrapper w-full mb-10">
          <div className="main-wrapper w-full">
            <div className="balance-inquery w-full lg:h-[436px] lg:flex lg:space-x-11 mb-11">
              <div className="lg:w-1/2 h-full mb-10 lg:mb-0">
                <CurrentBalanceWidget />
              </div>
              <div className="flex-1">
                <div className="my-wallets w-full h-full bg-white rounded-lg p-6 ">
                  <div className="mb-4 border-b border-light-gray px-4 py-3">
                    <h1 className="text-xl font-bold tracking-wide text-dark-gray">
                      Balances
                    </h1>
                  </div>
                  <div className="content-area">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex space-x-5 items-center">
                        <div className="account-name flex space-x-4 items-center">
                          <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                            <img src={bank1} alt="" width="29" />
                          </div>
                          <div className="name">
                            <p className="text-xl font-bold text-dark-gray tracking-wide">
                              Ethereum
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center">
                        <div>
                          <p className="text-xl font-bold text-dark-gray text-right mb-3">
                            $2871.49
                          </p>
                        </div>
                        <div>
                          <span>
                            <svg
                              width="6"
                              height="26"
                              viewBox="0 0 6 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="3"
                                cy="3"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                              <circle
                                cx="3"
                                cy="12.75"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                              <circle
                                cx="3"
                                cy="22.5"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex space-x-5 items-center">
                        <div className="account-name flex space-x-4 items-center">
                          <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                            <img src={bank2} alt="" width="43" />
                          </div>
                          <div className="name">
                            <p className="text-xl font-bold text-dark-gray tracking-wide">
                              Polygon
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center">
                        <div>
                          <p className="text-xl font-bold text-dark-gray text-right mb-3">
                            $957.26
                          </p>
                        </div>
                        <div>
                          <span>
                            <svg
                              width="6"
                              height="26"
                              viewBox="0 0 6 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="3"
                                cy="3"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                              <circle
                                cx="3"
                                cy="12.75"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                              <circle
                                cx="3"
                                cy="22.5"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex space-x-5 items-center">
                        <div className="account-name flex space-x-4 items-center">
                          <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                            <img src={bank3} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-xl font-bold text-dark-gray tracking-wide">
                              Optimism
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center">
                        <div>
                          <p className="text-xl font-bold text-dark-gray text-right mb-3">
                            $494.35
                          </p>
                        </div>
                        <div>
                          <span>
                            <svg
                              width="6"
                              height="26"
                              viewBox="0 0 6 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="3"
                                cy="3"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                              <circle
                                cx="3"
                                cy="12.75"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                              <circle
                                cx="3"
                                cy="22.5"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex space-x-5 items-center">
                        <div className="account-name flex space-x-4 items-center">
                          <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                            <img src={bank4} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-xl font-bold text-dark-gray tracking-wide">
                              Avalanche
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center">
                        <div>
                          <p className="text-xl font-bold text-dark-gray text-right mb-3">
                            $478.79
                          </p>
                        </div>
                        <div>
                          <span>
                            <svg
                              width="6"
                              height="26"
                              viewBox="0 0 6 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="3"
                                cy="3"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                              <circle
                                cx="3"
                                cy="12.75"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                              <circle
                                cx="3"
                                cy="22.5"
                                r="3"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="add-money-btn flex justify-center items-center">
                      <Link
                        to="/notification"
                        className="text-purple text-sm font-medium"
                      >
                        See balances all chains
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <br></br>
        <UpdateTable className="mb-10" />
      </div>
      </div>
    </Layout>
  );
}
