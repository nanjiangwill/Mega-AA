import React, { useState } from "react";
import transaction1 from "../../assets/images/recent-transation-1.png";
import transaction2 from "../../assets/images/recent-transation-2.png";
import transaction3 from "../../assets/images/recent-transation-3.png";

export default function RecentTransactionWidget() {
  const transationFilterData = [
    {
      id: 1,
      name: "all",
      uniqueId: Math.random(),
    },
    {
      id: 2,
      name: "send",
      uniqueId: Math.random(),
    },
    {
      id: 3,
      name: "recent",
      uniqueId: Math.random(),
    },
  ];
  const [filterActive, setValue] = useState(transationFilterData[0].id);
  const filterHander = (value) => {
    setValue(value);
  };
  return (
    <div className="recent-transaction-widget w-full h-full p-7 rounded-2xl bg-white">
      {/* heading */}
      <div className="heading sm:flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold tracking-wide text-dark-gray">
            Recent Transaction
          </h1>
        </div>
        <div>
          <ul className="flex space-x-5 items-center">
            {transationFilterData.map((value) => (
              <li
                onClick={() => filterHander(value.id)}
                key={value.uniqueId}
                className={`text-base text-thin-light-gray hover:text-purple border-b border-transparent hover:border-purple uppercase ${
                  filterActive === value.id ? "border-purple text-purple" : ""
                }`}
              >
                {value.name}
              </li>
            ))}
            {/* <li className="text-base text-thin-light-gray hover:text-purple border-b border-transparent hover:border-purple uppercase">
              All
            </li>
            <li className="text-base text-thin-light-gray hover:text-purple border-b border-transparent hover:border-purple uppercase">
              SEND
            </li>
            <li className="text-base text-thin-light-gray hover:text-purple border-b border-transparent hover:border-purple uppercase">
              recent
            </li> */}
          </ul>
        </div>
      </div>
      {/* content */}

      {filterActive === 2 ? (
        <div className="content">
          <ul>
            <li className="content-item py-3 border-b border-light-purple hover:border-purple">
              <div className="flex justify-between items-center">
                <div className="account-name flex space-x-4 items-center">
                  <div className="icon w-14 h-14 flex justify-center items-center">
                    <img src={transaction1} alt="" className="" />
                  </div>
                  <div>
                    <div className="name">
                      <p className="text-base text-dark-gray font-medium mb-1">
                        Add ETH from MetaMask
                      </p>
                    </div>
                    <div className="time">
                      <p className="text-sm text-thin-light-gray font-medium">
                        22 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="eth text-xl font-bold text-dark-gray">
                    $512.44
                  </p>
                  <p className="usd text-base text-light-green text-right">
                    +324.75
                  </p>
                </div>
              </div>
            </li>
            <li className="content-item py-3 border-b border-light-purple hover:border-purple">
              <div className="flex justify-between items-center">
                <div className="account-name flex space-x-4 items-center">
                  <div className="icon w-14 h-14 flex justify-center items-center">
                    <img src={transaction2} alt="" className="" />
                  </div>
                  <div>
                    <div className="name">
                      <p className="text-base text-dark-gray font-medium mb-1">
                        Add BTC from Coinbase Wallet
                      </p>
                    </div>
                    <div className="time">
                      <p className="text-sm text-thin-light-gray font-medium">
                        22 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="eth text-xl font-bold text-dark-gray">
                    $512.44
                  </p>
                  <p className="usd text-base text-light-red text-right">
                    -824.78
                  </p>
                </div>
              </div>
            </li>
            <li className="content-item py-3 border-b border-light-purple hover:border-purple">
              <div className="flex justify-between items-center">
                <div className="account-name flex space-x-4 items-center">
                  <div className="icon w-14 h-14 flex justify-center items-center">
                    <img src={transaction3} alt="" className="" />
                  </div>
                  <div>
                    <div className="name">
                      <p className="text-base text-dark-gray font-medium mb-1">
                        Buy Nft art from LTC
                      </p>
                    </div>
                    <div className="time">
                      <p className="text-sm text-thin-light-gray font-medium">
                        22 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="eth text-xl font-bold text-dark-gray">
                    $512.44
                  </p>
                  <p className="usd text-base text-light-red text-right">
                    -924.54
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ) : filterActive === 3 ? (
        <div className="content">
          <ul>
            <li className="content-item py-3 border-b border-light-purple hover:border-purple">
              <div className="flex justify-between items-center">
                <div className="account-name flex space-x-4 items-center">
                  <div className="icon w-14 h-14 flex justify-center items-center">
                    <img src={transaction1} alt="" className="" />
                  </div>
                  <div>
                    <div className="name">
                      <p className="text-base text-dark-gray font-medium mb-1">
                        Add ETH from MetaMask
                      </p>
                    </div>
                    <div className="time">
                      <p className="text-sm text-thin-light-gray font-medium">
                        22 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="eth text-xl font-bold text-dark-gray">
                    $512.44
                  </p>
                  <p className="usd text-base text-light-green text-right">
                    +324.75
                  </p>
                </div>
              </div>
            </li>
            <li className="content-item py-3 border-b border-light-purple hover:border-purple">
              <div className="flex justify-between items-center">
                <div className="account-name flex space-x-4 items-center">
                  <div className="icon w-14 h-14 flex justify-center items-center">
                    <img src={transaction2} alt="" className="" />
                  </div>
                  <div>
                    <div className="name">
                      <p className="text-base text-dark-gray font-medium mb-1">
                        Add BTC from Coinbase Wallet
                      </p>
                    </div>
                    <div className="time">
                      <p className="text-sm text-thin-light-gray font-medium">
                        22 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="eth text-xl font-bold text-dark-gray">
                    $512.44
                  </p>
                  <p className="usd text-base text-light-red text-right">
                    -824.78
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="content">
          <ul>
            <li className="content-item py-3 border-b border-light-purple hover:border-purple">
              <div className="flex justify-between items-center">
                <div className="account-name flex space-x-4 items-center">
                  <div className="icon w-14 h-14 flex justify-center items-center">
                    <img src={transaction1} alt="" className="" />
                  </div>
                  <div>
                    <div className="name">
                      <p className="text-base text-dark-gray font-medium mb-1">
                        Add ETH from MetaMask
                      </p>
                    </div>
                    <div className="time">
                      <p className="text-sm text-thin-light-gray font-medium">
                        22 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="eth text-xl font-bold text-dark-gray">
                    $512.44
                  </p>
                  <p className="usd text-base text-light-green text-right">
                    +324.75
                  </p>
                </div>
              </div>
            </li>
            <li className="content-item py-3 border-b border-light-purple hover:border-purple">
              <div className="flex justify-between items-center">
                <div className="account-name flex space-x-4 items-center">
                  <div className="icon w-14 h-14 flex justify-center items-center">
                    <img src={transaction2} alt="" className="" />
                  </div>
                  <div>
                    <div className="name">
                      <p className="text-base text-dark-gray font-medium mb-1">
                        Add BTC from Coinbase Wallet
                      </p>
                    </div>
                    <div className="time">
                      <p className="text-sm text-thin-light-gray font-medium">
                        22 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="eth text-xl font-bold text-dark-gray">
                    $512.44
                  </p>
                  <p className="usd text-base text-light-red text-right">
                    -824.78
                  </p>
                </div>
              </div>
            </li>
            <li className="content-item py-3 border-b border-light-purple hover:border-purple">
              <div className="flex justify-between items-center">
                <div className="account-name flex space-x-4 items-center">
                  <div className="icon w-14 h-14 flex justify-center items-center">
                    <img src={transaction3} alt="" className="" />
                  </div>
                  <div>
                    <div className="name">
                      <p className="text-base text-dark-gray font-medium mb-1">
                        Buy Nft art from LTC
                      </p>
                    </div>
                    <div className="time">
                      <p className="text-sm text-thin-light-gray font-medium">
                        22 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="eth text-xl font-bold text-dark-gray">
                    $512.44
                  </p>
                  <p className="usd text-base text-light-red text-right">
                    -924.54
                  </p>
                </div>
              </div>
            </li>
            <li className="content-item py-3 border-b border-light-purple hover:border-purple">
              <div className="flex justify-between items-center">
                <div className="account-name flex space-x-4 items-center">
                  <div className="icon w-14 h-14 flex justify-center items-center">
                    <img src={transaction1} alt="" className="" />
                  </div>
                  <div>
                    <div className="name">
                      <p className="text-base text-dark-gray font-medium mb-1">
                        Add ETH from MetaMask
                      </p>
                    </div>
                    <div className="time">
                      <p className="text-sm text-thin-light-gray font-medium">
                        22 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="eth text-xl font-bold text-dark-gray">
                    $512.44
                  </p>
                  <p className="usd text-base text-light-green text-right">
                    +324.75
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
