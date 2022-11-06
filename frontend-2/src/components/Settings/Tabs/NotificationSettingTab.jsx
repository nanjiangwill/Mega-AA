import React, { useState } from "react";
import SwitchCom from "../../Helpers/SwitchCom";

export default function NotificationSettingTab() {
  const [updateNotification, setUpdateNotification] = useState(false);
  const [uploadProduct, setUploadProduct] = useState(true);
  const [saleProduct, setSaleProduct] = useState(true);
  const [getProduct, setGetProduct] = useState(false);
  const [authLevel, setAuthLevel] = useState(true);
  return (
    <div className="notification-setting-tab w-full">
      <div className="notification-settings-wrapper w-full">
        <ul className="notification-settings-items w-full">
          <li className="notification-settings-item sm:flex justify-between items-center mb-4 pb-4 border-b border-light-purple">
            <div className="sm:flex sm:space-x-4 items-center">
              <div className="w-16 h-16">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="30"
                    fill="url(#paint0_linear_41_74037)"
                  />
                  <path
                    d="M29.9703 43.9959C27.4494 43.9959 24.9286 44.0078 22.4077 43.9919C20.2721 43.9799 19.0338 42.7656 19.0197 40.6347C18.9955 37.2735 18.9915 33.9123 19.0197 30.5511C19.0378 28.4521 20.3265 27.2158 22.4481 27.2118C27.4212 27.2019 32.3964 27.2039 37.3695 27.2118C39.604 27.2158 40.8564 28.4641 40.8644 30.6909C40.8745 33.9862 40.8786 37.2815 40.8644 40.5767C40.8544 42.7616 39.6242 43.9819 37.43 43.9939C34.9434 44.0058 32.4569 43.9959 29.9703 43.9959ZM27.5321 33.9722C27.6108 34.1699 27.6592 34.789 27.9919 35.0466C28.8954 35.7476 28.7542 36.6544 28.7563 37.567C28.7563 37.9984 28.6272 38.5057 28.8107 38.8412C29.0467 39.2706 29.5367 39.8358 29.9219 39.8398C30.3131 39.8438 30.8496 39.3026 31.0613 38.8752C31.261 38.4698 31.1319 37.9006 31.1319 37.4053C31.1319 36.5525 31.0936 35.7716 31.868 35.0706C32.6041 34.4036 32.4871 33.1354 31.8841 32.3086C31.2811 31.4817 30.2002 31.1262 29.2019 31.4258C28.2521 31.7114 27.5483 32.6621 27.5321 33.9722Z"
                    fill="white"
                  />
                  <path
                    d="M37.5315 26.2691C36.3356 26.2691 35.2466 26.2691 34.0345 26.2691C34.0345 25.4044 34.0446 24.5856 34.0325 23.7647C33.9982 21.3202 32.2397 19.4709 29.9467 19.4589C27.6497 19.4469 25.8851 21.2803 25.8448 23.7368C25.8306 24.5596 25.8427 25.3844 25.8427 26.2672C24.6448 26.2672 23.5558 26.2672 22.4729 26.2672C21.7126 21.3322 23.5054 17.6674 27.7546 16.3473C32.5603 14.8535 37.3984 18.3624 37.5274 23.3493C37.5516 24.304 37.5315 25.2606 37.5315 26.2691Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_41_74037"
                      x1="0"
                      y1="0"
                      x2="63.3708"
                      y2="62.0225"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <p className="text-xl tracking-wide text-dark-gray font-bold">
                  One Time Pass Code
                </p>
                <p className="text-base tracking-wide text-thin-light-gray">
                  Enable Third Party One Time Passcode for 2FA
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-0">
              <SwitchCom
                value={updateNotification}
                handler={() => setUpdateNotification(!updateNotification)}
              />
              <p className="text-18 tracking-wide text-[#33AAF2] border-b border-[#33AAF2]">
              Setting
            </p>
            </div>
          </li>
          <li className="notification-settings-item sm:flex justify-between items-center mb-4 pb-4 border-b border-light-purple">
            <div className="sm:flex sm:space-x-4 items-center">
              <div className="w-16 h-16">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="30" cy="30" r="30" fill="#56CCF2" />
                  <path
                    d="M26.6593 16.1563C28.3179 16.165 29.6518 16.3439 30.8831 16.9656C33.0228 18.0459 34.1639 19.8365 34.4921 22.1742C34.7023 23.6678 34.5338 25.144 34.176 26.5977C33.7436 28.3484 33.16 30.0452 32.2326 31.603C31.6404 32.5982 30.904 33.4701 29.9106 34.0936C28.0678 35.252 25.8396 35.1339 24.0264 33.7931C22.9322 32.9838 22.1559 31.9157 21.5428 30.719C20.6658 29.0031 20.1743 27.1656 19.8356 25.2795C19.6428 24.2079 19.5768 23.1381 19.7505 22.0595C20.1986 19.2668 21.8103 17.4658 24.4502 16.5401C25.2612 16.2553 26.0984 16.1372 26.6593 16.1563Z"
                    fill="white"
                  />
                  <path
                    d="M36.2459 45.0001C36.166 45.0001 36.0982 45.0001 36.0288 45.0001C28.7239 45.0001 21.4191 45.0001 14.1143 45.0001C13.8538 45.0001 13.8451 45.0001 13.8468 44.7448C13.8538 43.6993 13.8382 42.6503 13.8833 41.6065C13.9319 40.5227 14.4929 39.696 15.3352 39.0482C16.1689 38.4091 17.131 38.0409 18.1227 37.7352C20.1061 37.1239 22.1451 36.8095 24.2066 36.6324C26.0059 36.4778 27.8087 36.4709 29.6114 36.5681C30.0977 36.5942 30.5805 36.6567 31.0668 36.688C31.2388 36.7001 31.2787 36.7678 31.2787 36.9328C31.2735 38.5498 31.6243 40.0816 32.4493 41.4832C33.3125 42.9507 34.516 44.0605 36.0288 44.8403C36.093 44.8733 36.1573 44.9046 36.2215 44.9393C36.2302 44.9463 36.2302 44.9619 36.2459 45.0001Z"
                    fill="white"
                  />
                  <path
                    d="M33.9961 35.6042C34.0881 35.6042 34.1663 35.6042 34.2444 35.6042C35.4098 35.6042 36.5734 35.6042 37.7388 35.6042C37.9993 35.6042 38.0011 35.6042 38.0011 35.3332C38.0011 34.1678 38.0011 33.0042 38.0011 31.8389C38.0011 31.7624 38.0011 31.6843 38.0011 31.5957C39.1473 31.5957 40.2675 31.5957 41.4155 31.5957C41.4155 32.9295 41.4155 34.2529 41.4155 35.6024C42.7667 35.6024 44.0902 35.6024 45.4257 35.6024C45.4257 36.7296 45.4257 37.8324 45.4257 38.9596C44.0954 38.9596 42.7702 38.9596 41.4173 38.9596C41.4173 40.316 41.4173 41.6463 41.4173 42.9906C41.327 42.9958 41.2627 43.0028 41.1984 43.0028C40.205 43.0028 39.2116 42.9993 38.2182 43.008C38.0445 43.0097 37.9959 42.9611 37.9959 42.7874C38.0028 41.6029 37.9993 40.4185 37.9993 39.234C37.9993 39.1558 37.9993 39.0777 37.9993 38.9717C36.6568 38.9717 35.3334 38.9717 33.9961 38.9717C33.9961 37.8394 33.9961 36.7383 33.9961 35.6042Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl tracking-wide text-dark-gray font-bold">
                  Trusted Wallet
                </p>
                <p className="text-base tracking-wide text-thin-light-gray">
                  Enable Trusted Hot/Cold Wallet for 2FA
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-0">
              <SwitchCom
                value={getProduct}
                handler={() => setGetProduct(!getProduct)}
              />
              <p className="text-18 tracking-wide text-[#33AAF2] border-b border-[#33AAF2]">
              Setting
            </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
