import React, { useState } from "react";
import background from "../../assets/images/shape/balance-bg.svg";

export default function CurrentBalanceWidget() {
  const [eth] = useState(80);
  const [ltc] = useState(20);
  return (
    <div
      className="current-balance-widget w-full h-full rounded-2xl overflow-hidden flex flex-col justify-between  px-8 py-9"
      style={{
        background: `url(${background}) 0% 0% / cover no-repeat`,
      }}
    >
      <div className="wallet flex justify-between">
        <div className="w-[100px] h-[100px] rounded-full bg-[#485199] flex justify-center items-center">
          <div>
            <p className="text-26 font-bold text-white tracking-wide text-center">
              4
            </p>
            <p className="text-lg text-white tracking-wide text-center">
              Chains
            </p>
          </div>
        </div>
        <div>
          <p className="text-26 font-bold tracking-wide text-white text-right">
            21
          </p>
          <p className="tracking-wide text-white text-lg opacity-[70%]">
            Total Transactions
          </p>
        </div>
      </div>
      <div className="balance">
        <p className="text-lg text-white opacity-[70%] tracking-wide mb-6">
          Current Balance
        </p>
        <p className="text-[44px] font-bold text-white tracking-wide leading-10 mb-2">
          $4785.81
        </p>
      </div>
      <div className="counters flex space-x-16">
        <div className="circle-count">
          <div>
            <div className="percent">
              <svg>
                <circle cx="37" cy="37" r="30"></circle>
                <circle
                  cx="37"
                  cy="37"
                  r="30"
                  style={{ "--percent": `${eth}` }}
                ></circle>
              </svg>
              <div className="number">
                <h3>
                  {eth}
                  <span>%</span>
                </h3>
              </div>
            </div>
            <p className="text-18 text-white text-center">2.32 ETH</p>
          </div>
        </div>
        <div className="circle-count">
          <div>
            <div className="percent">
              <svg>
                <circle cx="37" cy="37" r="30"></circle>
                <circle
                  cx="37"
                  cy="37"
                  r="30"
                  style={{ "--percent": `${ltc}` }}
                ></circle>
              </svg>
              <div className="number">
                <h3>
                  {ltc}
                  <span>%</span>
                </h3>
              </div>
            </div>
            <p className="text-18 text-white text-center">957.01 DAI</p>
          </div>
        </div>
      </div>
    </div>
  );
}
