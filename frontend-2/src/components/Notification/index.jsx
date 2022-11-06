import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Partials/Layout";

export default function Notification() {
  const [selectTab, setValue] = useState("today");
  const filterHandler = (value) => {
    setValue(value);
  };
  return (
    <Layout>
      <div className="notification-page w-full mb-10">
        <div className="notification-wrapper w-full">
          {/* heading */}
          <div className="sm:flex justify-between items-center mb-6">
            <div className="mb-5 sm:mb-0">
              <h1 className="text-26 font-bold text-dark-gray">
                <span
                  className={`${selectTab === "today" ? "block" : "hidden"}`}
                >
                  Todays Notifications
                </span>
                <span
                  className={`${selectTab === "days" ? "block" : "hidden"}`}
                >
                  7 Days Notifications
                </span>
                <span className={`${selectTab === "all" ? "block" : "hidden"}`}>
                  All Notifications
                </span>
              </h1>
            </div>
            <div className="slider-btns flex space-x-4">
              <div onClick={() => filterHandler("today")} className="relative">
                <span
                  className={`text-thin-light-gray text-18 cursor-pointer ${
                    selectTab === "today" ? "text-purple" : ""
                  }`}
                >
                  Today
                </span>
                <span className="absolute -right-3 -top-3 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center bg-pink">
                  07
                </span>
              </div>
              <span
                onClick={() => filterHandler("days")}
                className={`text-thin-light-gray text-18 cursor-pointer ${
                  selectTab === "days" ? "text-purple" : ""
                }`}
              >
                7 days
              </span>
              <span
                onClick={() => filterHandler("all")}
                className={`text-thin-light-gray text-18 cursor-pointer ${
                  selectTab === "all" ? "text-purple" : ""
                }`}
              >
                All
              </span>
            </div>
          </div>
          <div
            className={`w-full p-8  rounded-xl bg-white ${
              selectTab === "today" ? "block" : "hidden"
            }`}
          >
            <ul>
              <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                <div className="notifications">
                  <div className="icon">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="26" cy="26" r="26" fill="#27AE60" />
                      <path
                        d="M21.5404 30.2033C22.185 29.6102 22.818 29.0287 23.451 28.4456C27.4582 24.759 31.4637 21.0724 35.4709 17.3859C35.7849 17.0968 36.0973 16.8044 36.4146 16.517C36.697 16.2611 37.021 16.0834 37.4014 16.0186C38.2055 15.884 38.782 16.4987 38.5877 17.2878C38.5112 17.5985 38.3634 17.8776 38.1574 18.1202C33.9574 23.0362 29.7575 27.9505 25.5576 32.8648C24.5641 34.0261 23.5739 35.1891 22.5787 36.3487C22.3129 36.6594 21.9906 36.8903 21.5786 36.9734C21.2347 37.0431 20.9091 36.975 20.6316 36.779C20.399 36.6145 20.1631 36.4284 19.9937 36.2041C17.7708 33.2237 15.5562 30.2365 13.3465 27.2461C13.0757 26.8789 12.9462 26.4486 13.0209 25.9901C13.1422 25.2342 14.046 24.7274 14.8085 24.9982C15.0445 25.083 15.2721 25.2225 15.4698 25.3787C17.4634 26.957 19.4504 28.5453 21.4391 30.1302C21.4673 30.1535 21.4972 30.1734 21.5404 30.2033Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="name">
                    <p className="text-base text-dark-gray font-medium mb-2">
                      Your Account has been created
                      <span className="ml-1 font-bold">successfully done</span>
                    </p>
                    <p className="text-sm text-thin-light-gray font-medium">
                      2 min ago
                    </p>
                  </div>
                </div>
              </li>
              <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                <div className="notifications flex space-x-4">
                  <div className="icon">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="26" cy="26" r="26" fill="#5356FB" />
                      <path
                        d="M25.9481 24.3684C25.4776 24.213 25.0352 24.1246 24.6425 23.9303C21.1636 22.2082 17.6912 20.4687 14.2167 18.7379C13.962 18.6106 13.7656 18.4466 13.7613 18.1423C13.757 17.8251 13.9534 17.6481 14.221 17.5143C17.6718 15.7943 21.1226 14.07 24.5712 12.3456C25.564 11.8493 26.5416 11.9054 27.5214 12.3996C29.7377 13.5153 31.9627 14.6203 34.1834 15.7295C35.3164 16.295 36.4473 16.8625 37.5781 17.4301C37.6429 17.4625 37.7076 17.4927 37.7745 17.5251C38.0335 17.6459 38.2126 17.8337 38.2126 18.1337C38.2126 18.438 38.0205 18.6084 37.7659 18.7336C36.1581 19.5343 34.5525 20.3392 32.9447 21.1399C31.0887 22.0657 29.2414 23.0045 27.3746 23.9066C26.93 24.1224 26.4272 24.2173 25.9481 24.3684Z"
                        fill="white"
                      />
                      <path
                        d="M25.0538 33.4541C25.0538 35.3834 25.056 37.3128 25.0517 39.2421C25.0495 39.9284 24.6632 40.1701 24.0309 39.8787C20.8671 38.422 17.7012 36.9696 14.5439 35.5021C13.5274 35.0295 13.0095 34.2029 13.0052 33.085C12.9965 29.4076 13.0008 25.7302 13.003 22.0528C13.003 21.3428 13.4023 21.0795 14.0367 21.373C17.3084 22.8815 20.5779 24.3987 23.8518 25.9007C24.6827 26.2827 25.0668 26.9042 25.0603 27.8128C25.0474 29.6947 25.056 31.5744 25.056 33.4562C25.056 33.4541 25.056 33.4541 25.0538 33.4541Z"
                        fill="white"
                      />
                      <path
                        d="M26.9187 33.4002C26.9187 31.5076 26.923 29.6149 26.9165 27.7223C26.9144 26.8676 27.305 26.2785 28.0711 25.9246C31.3644 24.4053 34.6598 22.8903 37.953 21.3731C38.553 21.0969 38.9652 21.3451 38.9652 21.999C38.9695 25.7131 38.976 29.425 38.9609 33.1391C38.9566 34.2764 38.3739 35.0706 37.3488 35.5454C34.7893 36.728 32.2276 37.9085 29.6681 39.089C29.1199 39.3415 28.5739 39.594 28.0279 39.8465C27.2855 40.1875 26.9165 39.9565 26.9165 39.1494C26.9165 37.233 26.9165 35.3145 26.9165 33.3981C26.9187 33.4002 26.9187 33.4002 26.9187 33.4002Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="name">
                    <p className="text-base text-dark-gray font-medium mb-2">
                      You created your first transaction
                      <span className="ml-1 font-bold">successfully done</span>
                    </p>
                    <p className="text-sm text-thin-light-gray font-medium">
                      1 min ago
                    </p>
                  </div>
                </div>
              </li>
              <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                <div className="notifications flex space-x-4">
                  <div className="icon">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="26" cy="26" r="26" fill="#56CCF2" />
                      <path
                        d="M23.1046 14.0017C24.5421 14.0092 25.6981 14.1643 26.7653 14.7031C28.6197 15.6394 29.6086 17.1912 29.8931 19.2172C30.0752 20.5117 29.9292 21.7911 29.6191 23.0509C29.2443 24.5682 28.7386 26.0388 27.9348 27.3889C27.4215 28.2514 26.7833 29.007 25.9223 29.5474C24.3253 30.5513 22.3942 30.449 20.8228 29.287C19.8745 28.5855 19.2017 27.6598 18.6703 26.6228C17.9102 25.1356 17.4842 23.5431 17.1907 21.9085C17.0236 20.9798 16.9664 20.0526 17.117 19.1179C17.5053 16.6975 18.9021 15.1366 21.19 14.3344C21.8929 14.0875 22.6185 13.9852 23.1046 14.0017Z"
                        fill="white"
                      />
                      <path
                        d="M31.4126 39.0001C31.3434 39.0001 31.2847 39.0001 31.2245 39.0001C24.8936 39.0001 18.5628 39.0001 12.2319 39.0001C12.0061 39.0001 11.9986 39.0001 12.0001 38.7788C12.0062 37.8727 11.9926 36.9636 12.0317 36.0589C12.0739 35.1197 12.5601 34.4032 13.2901 33.8418C14.0126 33.2879 14.8465 32.9688 15.7059 32.7039C17.4248 32.174 19.192 31.9016 20.9786 31.7481C22.538 31.6141 24.1004 31.6081 25.6628 31.6924C26.0842 31.7149 26.5027 31.7691 26.9241 31.7962C27.0731 31.8068 27.1078 31.8655 27.1078 32.0085C27.1032 33.4098 27.4073 34.7374 28.1223 35.9521C28.8703 37.224 29.9134 38.1858 31.2245 38.8616C31.2802 38.8902 31.3359 38.9173 31.3915 38.9474C31.3991 38.9534 31.3991 38.967 31.4126 39.0001Z"
                        fill="white"
                      />
                      <path
                        d="M29.4634 30.8568C29.5432 30.8568 29.6109 30.8568 29.6786 30.8568C30.6886 30.8568 31.6971 30.8568 32.7071 30.8568C32.9328 30.8568 32.9344 30.8568 32.9344 30.622C32.9344 29.612 32.9344 28.6035 32.9344 27.5935C32.9344 27.5273 32.9344 27.4596 32.9344 27.3828C33.9278 27.3828 34.8986 27.3828 35.8936 27.3828C35.8936 28.5388 35.8936 29.6858 35.8936 30.8553C37.0646 30.8553 38.2116 30.8553 39.3691 30.8553C39.3691 31.8322 39.3691 32.788 39.3691 33.7648C38.2161 33.7648 37.0676 33.7648 35.8951 33.7648C35.8951 34.9404 35.8951 36.0934 35.8951 37.2584C35.8168 37.2629 35.7611 37.2689 35.7054 37.2689C34.8444 37.2689 33.9835 37.2659 33.1225 37.2734C32.972 37.2749 32.9298 37.2328 32.9298 37.0823C32.9359 36.0557 32.9328 35.0292 32.9328 34.0027C32.9328 33.9349 32.9328 33.8672 32.9328 33.7754C31.7693 33.7754 30.6224 33.7754 29.4634 33.7754C29.4634 32.794 29.4634 31.8397 29.4634 30.8568Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="name">
                    <p className="text-base text-dark-gray font-medium mb-2">
                    You set up your trusted wallet 2FA
                      <span className="ml-1 font-bold">successfully done</span>
                    </p>
                    <p className="text-sm text-thin-light-gray font-medium">
                    1 minute ago
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="add-money-btn flex justify-center items-center">
              <Link
                to="/notification"
                className="text-purple text-sm font-medium"
              >
                See all Notification
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
