import React from "react";
import bank1 from "../../assets/images/bank-1.png";
import bank2 from "../../assets/images/bank-2.png";
import bank3 from "../../assets/images/bank-3.png";
import bank4 from "../../assets/images/bank-4.png";
import Layout from "../Partials/Layout";
import CurrencyStaticsSection from "./CurrencyStaticsSection";
import CurrentBalanceWidget from "./CurrentBalanceWidget";
import InvestmentSection from "./InvestmentSection";
import RecentTransactionWidget from "./RecentTransactionWidget";

export default function MyWallet() {
  return (
    <>
      <Layout>
        <div className="my-wallet-wrapper w-full mb-10">
          <div className="main-wrapper w-full">
            <div className="balance-inquery w-full lg:h-[436px] lg:flex lg:space-x-11 mb-11">
              <div className="lg:w-1/2 h-full mb-10 lg:mb-0">
                <CurrentBalanceWidget />
              </div>
              <div className="flex-1">
                <div className="my-wallets w-full h-full bg-white rounded-lg p-6">
                  <div className="mb-4">
                    <h1 className="text-xl font-bold tracking-wide text-dark-gray">
                      My Wallet
                    </h1>
                  </div>
                  <div className="content-area">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex space-x-5 items-center">
                        <div className="account-name flex space-x-4 items-center">
                          <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                            <img src={bank1} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-xl font-bold text-dark-gray tracking-wide">
                              MetaMask
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center">
                        <div>
                          <p className="text-xl font-bold text-dark-gray text-right mb-3">
                            $734.79
                          </p>
                          <p className="text-sm text-thin-light-gray">
                            New Add
                            <span className="text-light-green ml-1">
                              +324.75
                            </span>
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
                            <img src={bank2} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-xl font-bold text-dark-gray tracking-wide">
                              Coinbase Wallet
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center">
                        <div>
                          <p className="text-xl font-bold text-dark-gray text-right mb-3">
                            $734.79
                          </p>
                          <p className="text-sm text-thin-light-gray">
                            New Add
                            <span className="text-light-green ml-1">
                              +324.75
                            </span>
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
                              Bitski
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center">
                        <div>
                          <p className="text-xl font-bold text-dark-gray text-right mb-3">
                            $734.79
                          </p>
                          <p className="text-sm text-thin-light-gray">
                            New Add
                            <span className="text-light-green ml-1">
                              +324.75
                            </span>
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
                            <img src={bank4} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-xl font-bold text-dark-gray tracking-wide">
                              WalletConnect
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center">
                        <div>
                          <p className="text-xl font-bold text-dark-gray text-right mb-3">
                            $734.79
                          </p>
                          <p className="text-sm text-thin-light-gray">
                            New Add
                            <span className="text-light-green ml-1">
                              +324.75
                            </span>
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
                  </div>
                </div>
              </div>
            </div>
            <CurrencyStaticsSection />
            <RecentTransactionWidget />
            <br></br>
            {/* flex space-x-11 */}
            <div className="recent-and-investment grid lg:grid-cols-2 grid-cols-1 2xl:gap-[40px] xl:gap-7 gap-4 lg:h-[416px] w-full  justify-between">
              <div className=" h-full">
                <RecentTransactionWidget />
              </div>
              <div className=" h-full">
                <InvestmentSection />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
