import React from "react";
import { Link } from "react-router-dom";
import bank1 from "../../assets/images/bank-1.png";
import bank2 from "../../assets/images/bank-2.png";
import bank3 from "../../assets/images/bank-3.png";
import bank4 from "../../assets/images/bank-4.png";
import profileImg from "../../assets/images/profile-pic.png";
import useToggle from "../../hooks/useToggle";
import Icons from "../Helpers/Icons";
import ModalCom from "../Helpers/ModalCom";
import SearchCom from "../Helpers/SearchCom";

export default function Header({ logoutModalHandler, sidebarHandler, createModelHandler }) {
  const [balanceDropdown, setbalanceValue] = useToggle(false);
  const [notificationDropdown, setNotificationValue] = useToggle(false);
  const [userProfileDropdown, setProfileDropdown] = useToggle(false);
  const [moneyPopup, setPopup] = useToggle(false);
  const handlerBalance = () => {
    setbalanceValue.toggle();
    if (notificationDropdown) {
      setNotificationValue.toggle();
    }
    if (userProfileDropdown) {
      setProfileDropdown.toggle();
    }
  };
  const handlerNotification = () => {
    setNotificationValue.toggle();
    if (balanceDropdown) {
      setbalanceValue.toggle();
    }
    if (userProfileDropdown) {
      setProfileDropdown.toggle();
    }
  };
  const handlerProfile = () => {
    setProfileDropdown.toggle();
    if (balanceDropdown) {
      setbalanceValue.toggle();
    }
    if (notificationDropdown) {
      setNotificationValue.toggle();
    }
  };
  const clickAwayhandler = () => {
    if (balanceDropdown) {
      setbalanceValue.toggle();
    }
    if (notificationDropdown) {
      setNotificationValue.toggle();
    }
    if (userProfileDropdown) {
      setProfileDropdown.toggle();
    }
  };
  const addMoneyHandler = () => {
    setPopup.toggle();
    setbalanceValue.set(false);
  };
  return (
    <>
      <div className="header-wrapper backdrop-blur-sm bg-[#efedfe5e]/60 w-full h-full flex items-center xl:px-0 md:px-10 px-5">
        <div className="flex justify-between items-center w-full">
          <button
            className="xl:hidden block mr-10"
            type="button"
            onClick={sidebarHandler}
          >
            <svg
              width="25"
              height="19"
              viewBox="0 0 25 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3544 8.45953L16.9855 0.271831C16.8283 0.0982522 16.6089 0 16.3763 0H11.4637C11.1411 0 10.848 0.189955 10.7153 0.484712C10.5843 0.781107 10.6384 1.12663 10.8545 1.36571L17.7306 9.00647L10.8545 16.6456C10.6384 16.8863 10.5827 17.2318 10.7153 17.5266C10.848 17.823 11.1411 18.0129 11.4637 18.0129H16.3763C16.6089 18.0129 16.8283 17.913 16.9855 17.7427L24.3544 9.55505C24.6344 9.24391 24.6344 8.76903 24.3544 8.45953Z"
                fill="url(#paint0_linear_700_68145)"
              />
              <path
                d="M13.7104 8.45953L6.34147 0.271831C6.18427 0.0982522 5.96484 0 5.73231 0H0.819691C0.497095 0 0.203976 0.189955 0.071335 0.484712C-0.0596682 0.781107 -0.00562942 1.12663 0.210526 1.36571L7.08656 9.00647L0.210526 16.6456C-0.00562942 16.8863 -0.0613058 17.2318 0.071335 17.5266C0.203976 17.823 0.497095 18.0129 0.819691 18.0129H5.73231C5.96484 18.0129 6.18427 17.913 6.34147 17.7427L13.7104 9.55505C13.9904 9.24391 13.9904 8.76903 13.7104 8.45953Z"
                fill="url(#paint1_linear_700_68145)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_700_68145"
                  x1="10.644"
                  y1="0"
                  x2="28.9548"
                  y2="13.8495"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F539F8" />
                  <stop offset="0.416763" stopColor="#C342F9" />
                  <stop offset="1" stopColor="#5356FB" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_700_68145"
                  x1="0"
                  y1="0"
                  x2="18.3108"
                  y2="13.8495"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F539F8" />
                  <stop offset="0.416763" stopColor="#C342F9" />
                  <stop offset="1" stopColor="#5356FB" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          {/* search bar */}
          <div className="search-bar lg:block hidden w-[376px]">
            <SearchCom />
          </div>

          {/* user info */}
          <div className="user-info flex items-center justify-end w-full lg:space-x-7 space-x-2 z-10 ">
            {/* balance */}
            <div className="lg:flex hidden user-balance cursor-pointer lg:w-[252px] w-[150px] h-[48px]  items-center rounded-full relative  bg-purple pr-1.5 pl-4">
              <div
                onClick={() => createModelHandler()}
                className="flex items-center lg:justify-between justify-center w-full h-full"
              >
                <span className="lg:block hidden">
                  <Icons name="wallet" />
                </span>
                <p className="lg:text-xl text-lg font-bold text-white">
                  $ 4785.81
                </p>
                <span className="lg:block hidden">
                  <Icons name="deep-plus" />
                </span>
              </div>
              <div
                className={`balance-dropdown w-96 z-30 bg-white absolute -left-24 rounded-lg cursor-pointer ${
                  balanceDropdown ? "active" : ""
                }`}
              >
                <div className="heading border-b border-light-purple px-7 py-6">
                  <h3 className="text-xl font-bold text-dark-gray">
                    Your Balance
                  </h3>
                </div>
                <div className="content px-7 pb-7">
                  <ul>
                    <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                      <div className="sm:flex justify-between items-center">
                        <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                          <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                            <img src={bank1} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-base text-dark-gray font-medium">
                              MetaMask
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="eth text-xl font-bold text-purple">
                            75,320 ETH
                          </p>
                          <p className="usd text-base text-thin-light-gray text-right">
                            (773.69 USD)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                      <div className="sm:flex justify-between items-center">
                        <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                          <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                            <img src={bank2} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-base text-dark-gray font-medium">
                              Coinbase Wallet
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="eth text-xl font-bold text-purple">
                            56,124 ETH
                          </p>
                          <p className="usd text-base text-thin-light-gray text-right">
                            (773.69 USD)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                      <div className="sm:flex justify-between items-center">
                        <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                          <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                            <img src={bank3} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-base text-dark-gray font-medium">
                              Bitski
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="eth text-xl font-bold text-purple">
                            99,123 ETH
                          </p>
                          <p className="usd text-base text-thin-light-gray text-right">
                            (773.69 USD)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-5">
                      <div className="sm:flex justify-between items-center">
                        <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                          <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                            <img src={bank4} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-base text-dark-gray font-medium">
                              WalletConnect
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="eth text-xl font-bold text-purple">
                            43,728 ETH
                          </p>
                          <p className="usd text-base text-thin-light-gray text-right">
                            (773.69 USD)
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="add-money-btn flex justify-center items-center">
                    <button
                      onClick={() => addMoneyHandler()}
                      type="button"
                      className="w-[122px] h-11 flex justify-center items-center btn-gradient text-base rounded-full text-white"
                    >
                      Add Money
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden flex user-balance cursor-pointer lg:w-[252px] w-[150px] h-[48px]  items-center rounded-full relative  bg-purple">
              <div className="flex items-center lg:justify-between justify-center w-full h-full">
                <p className="lg:text-xl text-lg font-bold text-white">
                  $ 4785.81
                </p>
              </div>
            </div>
            <div className="lg:hidden block"></div>
            {/* notification */}
            <div className="user-notification lg:block hidden relative">
              <div
                onClick={() => handlerNotification()}
                className="lg:w-[48px] lg:h-[48px] w-[38px] h-[38px] bg-white flex justify-center items-center rounded-full overflow-hidden relative"
              >
                <Icons name="notification" />
                <span className="absolute right-2 top-2 z-10 text-xs lg:w-5 lg:h-5 w-4 h-4 flex justify-center items-center rounded-full primary-gradient text-white">
                  3
                </span>
              </div>
              <div
                className={`notification-dropdown z-30 w-96 bg-white absolute -right-12 rounded-lg cursor-pointer ${
                  notificationDropdown ? "active" : ""
                }`}
              >
                <div className="heading border-b border-light-purple px-7 py-6">
                  <h3 className="text-xl font-bold text-dark-gray">
                    Recent Notifications
                  </h3>
                </div>
                <div className="content px-7 pb-7">
                  <ul>
                    <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                      <div className="notifications flex space-x-4 items-center">
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
                            <span className="ml-1 font-bold">
                              successfully done
                            </span>
                          </p>
                          <p className="text-sm text-thin-light-gray font-medium">
                            2 minutes ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                      <div className="notifications flex space-x-4 items-center">
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
                            <span className="ml-1 font-bold">
                              successfully done
                            </span>
                          </p>
                          <p className="text-sm text-thin-light-gray font-medium">
                            1 minute ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                      <div className="notifications flex space-x-4 items-center">
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
                            Your Account has been created
                            <span className="ml-1 font-bold">
                              successfully done
                            </span>
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
            <div className="lg:hidden block">
              <Link
                to="/notification"
                className="lg:w-[48px] lg:h-[48px] w-[38px] h-[38px] bg-white flex justify-center items-center rounded-full overflow-hidden relative"
              >
                <Icons name="notification" />
                <span className="absolute right-2 top-2 z-10 text-xs lg:w-5 lg:h-5 w-4 h-4 flex justify-center items-center rounded-full primary-gradient text-white">
                  10
                </span>
              </Link>
            </div>
            {/* profile */}
            <div className="user-profile relative lg:block hidden">
              <div
                onClick={() => handlerProfile()}
                className="flex items-center space-x-3.5"
              >
                {/* profile-image */}
                <div className="lg:w-[62px] lg:h-[62px] w-[50px] h-[50px] rounded-full overflow-hidden">
                  <img
                    src={profileImg}
                    alt="profile"
                    className="w-full h-full"
                  />
                </div>
                <div className="lg:block hidden">
                  <h1 className="text-xl font-bold text-dark-gray">
                    Gani User
                  </h1>
                  <p className="text-sm text-thin-light-gray">
                    
                  </p>
                </div>
              </div>
              <div
                className={`profile-dropdown w-[293px] z-30 bg-white absolute lg:right-16 -right-[16px]  rounded-lg cursor-pointer ${
                  userProfileDropdown ? "active" : ""
                }`}
              >
                <div className="heading border-b border-light-purple px-7 py-6">
                  <h3 className="text-xl font-bold text-dark-gray">
                    My Profile
                  </h3>
                </div>
                <div className="content px-7">
                  <ul>
                    <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                      <Link
                        to="/profile"
                        className="notifications flex space-x-4 items-center"
                      >
                        <div className="icon">
                          <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              opacity="0.1"
                              cx="21"
                              cy="21"
                              r="21"
                              fill="#56CCF2"
                            />
                            <path
                              d="M24.1446 22.7104H17.8554C16.8333 22.7117 15.8534 23.1161 15.1306 23.8351C14.4078 24.5541 14.0012 25.5288 14 26.5456V30.4473H28V26.5456C27.9988 25.5288 27.5922 24.5541 26.8694 23.8351C26.1466 23.1161 25.1667 22.7117 24.1446 22.7104Z"
                              fill="#56CCF2"
                            />
                            <path
                              d="M20.9999 20.8682C23.6451 20.8682 25.7894 18.8064 25.7894 16.263C25.7894 13.7196 23.6451 11.6577 20.9999 11.6577C18.3548 11.6577 16.2104 13.7196 16.2104 16.263C16.2104 18.8064 18.3548 20.8682 20.9999 20.8682Z"
                              fill="#56CCF2"
                            />
                          </svg>
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray font-medium mb-2">
                            My Profile
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                      <Link
                        to="/message"
                        className="notifications flex space-x-4 items-center"
                      >
                        <div className="icon">
                          <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              opacity="0.1"
                              cx="21"
                              cy="21"
                              r="21"
                              fill="#F539F8"
                            />
                            <path
                              d="M28.0478 17.231L22.7595 22.4236C21.5318 23.6262 19.5445 23.6262 18.3169 22.4236L13.0289 17.231C13.02 17.3284 13 17.4166 13 17.5135V24.9158C13.0021 26.6183 14.4073 27.9982 16.1411 28.0002H24.9359C26.6697 27.9982 28.0749 26.6183 28.0769 24.9158V17.5135C28.0766 17.4166 28.0566 17.3284 28.0478 17.231Z"
                              fill="#F539F8"
                            />
                            <path
                              d="M21.9595 21.0064L28.0769 15.4629C27.4742 14.5575 26.3936 14.0028 25.2264 14H15.8503C14.6833 14.0028 13.6024 14.5575 13 15.4629L19.1174 21.0064C19.9029 21.7158 21.1737 21.7158 21.9595 21.0064Z"
                              fill="#F539F8"
                            />
                          </svg>
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray font-medium mb-2">
                            Message
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                      <Link
                        to="/history"
                        className="notifications flex space-x-4 items-center"
                      >
                        <div className="icon">
                          <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              opacity="0.1"
                              cx="21"
                              cy="21"
                              r="21"
                              fill="#27AE60"
                            />
                            <path
                              d="M21.0007 12C25.9671 12 30.0004 16.0299 30 20.9849C29.9997 26.0372 25.8616 30.1168 20.7771 29.9975C15.8879 29.8829 11.8842 25.8319 12.0026 20.7767C12.1168 15.908 16.1041 11.9934 21.0007 12ZM18.6889 21.0038C18.2006 21.0038 17.746 21.0013 17.2917 21.0057C17.195 21.0066 17.1547 20.9893 17.156 20.8791C17.1591 20.6158 17.1821 20.3557 17.2413 20.0994C17.7375 17.9524 19.7618 16.603 21.9423 16.9648C24.1039 17.3235 25.6324 19.4217 25.3053 21.5813C25.0015 23.5844 23.3569 25.0484 21.3294 25.1142C21.2242 25.1177 21.2126 25.1542 21.2129 25.2421C21.216 25.8351 21.2176 26.4277 21.2116 27.0207C21.2104 27.1375 21.2525 27.1555 21.3561 27.1564C21.7613 27.1589 22.1633 27.1252 22.5578 27.0355C26.28 26.1881 28.0223 22.5915 27.2066 19.4453C26.2045 15.5824 21.8227 13.674 18.3231 15.5877C16.3529 16.665 15.2812 18.3598 15.0828 20.6013C15.0715 20.7301 15.1323 20.9074 15.0466 20.9751C14.9648 21.04 14.7963 20.9975 14.666 20.9981C14.3018 20.9994 13.9372 20.9984 13.5408 20.9984C14.4145 22.2637 15.2692 23.5016 16.1303 24.7486C16.9841 23.4997 17.8259 22.2672 18.6889 21.0038ZM21.8123 19.9492C21.8123 19.5036 21.8085 19.0577 21.8148 18.6121C21.8164 18.493 21.7774 18.4578 21.6612 18.4619C21.4254 18.4697 21.1889 18.4719 20.9535 18.4612C20.8156 18.4549 20.7674 18.4867 20.7696 18.6376C20.7787 19.3033 20.7686 19.9696 20.7759 20.6353C20.779 20.9326 20.7167 21.1921 20.5303 21.4374C20.2457 21.8125 19.9951 22.213 19.725 22.5991C19.6702 22.6772 19.6727 22.7156 19.7555 22.7695C19.975 22.9121 20.1912 23.0601 20.4019 23.2154C20.4913 23.2812 20.5332 23.2686 20.5939 23.1785C20.9604 22.6359 21.3312 22.0968 21.7046 21.559C21.7833 21.4459 21.8155 21.3285 21.8139 21.1918C21.8092 20.7777 21.8123 20.3633 21.8123 19.9492Z"
                              fill="#27AE60"
                            />
                            <path
                              d="M18.6899 21.0035C17.827 22.2666 16.9851 23.4991 16.1319 24.7484C15.2709 23.5013 14.4161 22.2634 13.5425 20.9981C13.9388 20.9981 14.3031 20.9991 14.6677 20.9978C14.798 20.9972 14.9664 21.0397 15.0483 20.9748C15.1339 20.9071 15.0732 20.7298 15.0845 20.601C15.2825 18.3595 16.3545 16.665 18.3247 15.5874C21.8244 13.6738 26.2061 15.5821 27.2076 19.445C28.0233 22.5912 26.2811 26.1878 22.5589 27.0352C22.1644 27.1249 21.7627 27.159 21.3572 27.1561C21.2536 27.1555 21.2117 27.1372 21.2126 27.0204C21.2186 26.4277 21.2171 25.8348 21.2139 25.2418C21.2136 25.1536 21.2252 25.1171 21.3304 25.114C23.3579 25.0481 25.0029 23.5841 25.3064 21.581C25.6338 19.4214 24.1053 17.3232 21.9434 16.9645C19.7629 16.6027 17.7385 17.9521 17.2423 20.0991C17.1832 20.3554 17.1602 20.6155 17.157 20.8788C17.1558 20.989 17.1961 21.0063 17.2927 21.0054C17.747 21.0013 18.2016 21.0035 18.6899 21.0035Z"
                              fill="#FDFDFE"
                            />
                            <path
                              d="M21.8145 19.9491C21.8145 20.3635 21.8114 20.7776 21.8164 21.1917C21.818 21.3287 21.7859 21.4459 21.7071 21.5589C21.3338 22.0965 20.9626 22.6359 20.5964 23.1785C20.5357 23.2685 20.4935 23.2811 20.4044 23.2153C20.1938 23.0601 19.9775 22.9121 19.758 22.7694C19.6752 22.7156 19.6727 22.6771 19.7275 22.599C19.9976 22.213 20.2482 21.8124 20.5328 21.4374C20.7189 21.192 20.7815 20.9326 20.7784 20.6353C20.7712 19.9693 20.7812 19.3032 20.7721 18.6375C20.7699 18.4867 20.8181 18.4549 20.956 18.4612C21.1915 18.4719 21.4279 18.4697 21.6637 18.4618C21.7799 18.458 21.8192 18.493 21.8173 18.612C21.8107 19.0576 21.8145 19.5032 21.8145 19.9491Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray font-medium mb-2">
                            History
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li className="content-item py-4 border-b border-light-purple hover:border-purple">
                      <Link
                        to="/settings"
                        className="notifications flex space-x-4 items-center"
                      >
                        <div className="icon">
                          <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              opacity="0.1"
                              cx="21"
                              cy="21"
                              r="21"
                              fill="#5356FB"
                            />
                            <path
                              d="M12.1936 25.7404C12.8887 26.9468 14.4302 27.3612 15.6365 26.6662C15.6373 26.6657 15.6381 26.6652 15.639 26.6647L16.0129 26.4488C16.7187 27.0527 17.5301 27.521 18.4061 27.8302V28.2614C18.4061 29.6536 19.5348 30.7823 20.927 30.7823C22.3193 30.7823 23.448 29.6536 23.448 28.2614V27.8303C24.3241 27.5206 25.1355 27.0517 25.8412 26.4471L26.2168 26.6639C27.4234 27.36 28.966 26.9462 29.6621 25.7396C30.3582 24.5329 29.9444 22.9904 28.7377 22.2942L28.3646 22.0791C28.5326 21.1653 28.5326 20.2284 28.3646 19.3145L28.7377 19.0994C29.9444 18.4032 30.3582 16.8607 29.6621 15.6541C28.966 14.4474 27.4235 14.0336 26.2168 14.7297L25.8429 14.9457C25.1363 14.3425 24.3244 13.875 23.448 13.5668V13.1357C23.448 11.7434 22.3193 10.6147 20.927 10.6147C19.5348 10.6147 18.4061 11.7434 18.4061 13.1357V13.5668C17.53 13.8765 16.7186 14.3454 16.0129 14.9499L15.6373 14.7323C14.4306 14.0361 12.8881 14.45 12.192 15.6566C11.4958 16.8633 11.9096 18.4058 13.1163 19.1019L13.4894 19.317C13.3215 20.2309 13.3215 21.1678 13.4894 22.0817L13.1163 22.2968C11.913 22.9948 11.5005 24.5343 12.1936 25.7404ZM20.927 17.3373C22.7834 17.3373 24.2883 18.8422 24.2883 20.6985C24.2883 22.5549 22.7834 24.0598 20.927 24.0598C19.0707 24.0598 17.5658 22.5549 17.5658 20.6985C17.5658 18.8422 19.0707 17.3373 20.927 17.3373Z"
                              fill="#5356FB"
                            />
                          </svg>
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray font-medium mb-2">
                            Setting
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li className="content-item py-5">
                      <div className="notifications flex space-x-4 items-center">
                        <div className="icon">
                          <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              opacity="0.1"
                              cx="21"
                              cy="21"
                              r="21"
                              fill="#EB5757"
                            />
                            <path
                              d="M12.0027 25.0635C12.0027 24.9135 12.0027 24.7637 12.0027 24.6137C12.0027 24.4633 12.0027 24.3131 12.0027 24.1627C12.0027 24.0127 12.0027 23.8629 12.0027 23.713C12.0027 23.5625 12.0027 23.4123 12.0027 23.2619C12.0027 23.1119 12.0027 22.9621 12.0027 22.8122C12.0027 22.6617 12.0027 22.5115 12.0027 22.3611C12.0027 22.2111 12.0027 22.0614 12.0027 21.9114C12.0027 21.7609 12.0027 21.6107 12.0027 21.4603C12.0027 21.3103 12.0027 21.1606 12.0027 21.0106C12.0027 20.8602 12.0027 20.7099 12.0027 20.5595C12.0027 20.4095 12.0027 20.2598 12.0027 20.1098C12.0027 19.9594 12.0027 19.8092 12.0027 19.6587C12.0027 19.5087 12.0027 19.359 12.0027 19.209C12.0027 19.0586 12.0027 18.9084 12.0027 18.7579C12.0027 18.608 12.0027 18.4582 12.0027 18.3082C12.0027 18.1578 12.0027 18.0076 12.0027 17.8572C12.0027 17.7072 12.0027 17.5574 12.0027 17.4074C12.0027 17.257 12.0027 17.1068 12.0027 16.9564C12.0027 16.8064 12.0027 16.6566 12.0027 16.5066C12.0027 16.3562 12.0027 16.206 12.0027 16.0556C12.0027 15.9056 12.0027 15.7558 12.0027 15.6059C12.0027 15.4554 12.0027 15.3052 12.0027 15.1548C12.0027 15.0048 12.0027 14.855 12.0027 14.7051C12.0027 14.5546 12.0027 14.4044 12.0027 14.254C12.0027 14.104 12.0027 13.9543 12.0027 13.8043C12.0027 13.6538 12.0027 13.5036 12.0027 13.3532C12.0027 13.2032 12.0027 13.0535 12.0027 12.9035C12.0468 12.3506 12.3522 12.0453 12.9078 12C13.0578 12 13.2075 12 13.3575 12C13.5079 12 13.6581 12 13.8086 12C13.9585 12 14.1083 12 14.2583 12C14.4087 12 14.5589 12 14.7094 12C14.8593 12 15.0091 12 15.1591 12C15.3095 12 15.4597 12 15.6101 12C15.7601 12 15.9099 12 16.0599 12C16.2103 12 16.3605 12 16.5109 12C16.6609 12 16.8107 12 16.9606 12C17.1111 12 17.2613 12 17.4117 12C17.5617 12 17.7115 12 17.8614 12C18.0119 12 18.1621 12 18.3125 12C18.4625 12 18.6122 12 18.7622 12C18.9127 12 19.0629 12 19.2133 12C19.3633 12 19.513 12 19.663 12C19.8134 12 19.9637 12 20.1141 12C20.2641 12 20.4138 12 20.5638 12C20.7142 12 20.8644 12 21.0149 12C21.1649 12 21.3146 12 21.4646 12C21.615 12 21.7652 12 21.9157 12C22.0656 12 22.2154 12 22.3654 12C22.5158 12 22.666 12 22.8164 12C22.9664 12 23.1162 12 23.2662 12C23.4166 12 23.5668 12 23.7172 12C24.1138 12.016 24.3937 12.2054 24.5579 12.5664C24.5721 12.611 24.5865 12.6558 24.6007 12.7004C24.6043 12.7231 24.6079 12.7459 24.6115 12.7684C24.6122 13.7791 24.6128 14.7895 24.6126 15.8002C24.6126 15.8441 24.6243 15.8903 24.5975 15.9317C24.4541 15.931 24.3106 15.9207 24.1676 15.9373C24.017 15.9238 23.8661 15.9241 23.7154 15.9373C23.5661 15.9241 23.4166 15.9247 23.2673 15.9371C23.1626 15.9344 23.0576 15.9252 22.9536 15.9308C22.8709 15.9353 22.8556 15.9049 22.8561 15.829C22.8592 15.3075 22.8581 14.7859 22.8577 14.2644C22.8577 14.2085 22.8646 14.1513 22.8365 14.0988C22.8011 13.9254 22.6993 13.8173 22.5241 13.7818C22.4541 13.7433 22.3778 13.7599 22.3046 13.7597C20.0904 13.7586 17.8776 13.7588 15.6651 13.7588C15.5955 13.7588 15.5257 13.7588 15.4561 13.7588C15.4536 13.7676 15.4509 13.7761 15.4484 13.7849C15.6507 13.8858 15.8529 13.9869 16.0551 14.0878C16.3544 14.2466 16.6526 14.4071 16.9606 14.5488C17.2539 14.7177 17.557 14.8677 17.8621 15.0138C17.954 15.0694 18.0477 15.1215 18.1488 15.1591C18.3343 15.2703 18.5282 15.3658 18.7242 15.4572C18.832 15.5149 18.9392 15.5739 19.048 15.6297C19.2687 15.7432 19.5011 15.8392 19.6574 16.0468V16.0538L19.6635 16.0572C19.7452 16.197 19.7993 16.3468 19.824 16.5069C19.8249 16.6571 19.8261 16.8073 19.827 16.9575C19.8155 17.1079 19.8155 17.2584 19.827 17.4088C19.8166 17.5585 19.8166 17.7085 19.827 17.8583C19.8155 18.0087 19.8155 18.1591 19.827 18.3096C19.8166 18.4593 19.8166 18.6091 19.827 18.7588C19.8155 18.9093 19.8155 19.0597 19.827 19.2101C19.8166 19.3599 19.8166 19.5096 19.827 19.6594C19.8155 19.8098 19.8155 19.9603 19.827 20.1109C19.8166 20.2607 19.8166 20.4104 19.827 20.5602C19.8155 20.7106 19.8155 20.8611 19.827 21.0115C19.8166 21.1612 19.8166 21.311 19.827 21.4608C19.8155 21.6112 19.8155 21.7616 19.827 21.912C19.8166 22.0618 19.8166 22.2116 19.827 22.3615C19.8155 22.512 19.8155 22.6624 19.827 22.8128C19.8166 22.9626 19.8166 23.1123 19.827 23.2623C19.8155 23.4128 19.8155 23.5632 19.827 23.7136C19.8249 23.7247 19.8209 23.7357 19.8213 23.7465C19.8335 24.0762 19.7398 24.0228 20.113 24.0165C20.2634 24.0275 20.4138 24.0275 20.5643 24.0165C20.7138 24.0262 20.8635 24.0262 21.0131 24.0165C21.1637 24.0275 21.3146 24.0275 21.4653 24.0165C21.6148 24.0262 21.7643 24.0262 21.9141 24.0165C22.0645 24.0275 22.2149 24.0278 22.3654 24.0165C22.5982 24.0305 22.7595 23.9251 22.8259 23.7159C22.861 23.6461 22.855 23.5706 22.855 23.4963C22.8552 22.4019 22.8565 21.3074 22.8523 20.2129C22.8518 20.1114 22.8809 20.0907 22.977 20.0916C23.4792 20.0963 23.9814 20.0934 24.4838 20.0938C24.5279 20.0938 24.5743 20.0832 24.6146 20.1125C24.611 20.262 24.6038 20.4118 24.6185 20.5613C24.6074 20.7113 24.6074 20.8613 24.6185 21.0113C24.6061 21.1615 24.6061 21.3117 24.6185 21.4619C24.6074 21.6119 24.6074 21.7618 24.6185 21.9118C24.6061 22.062 24.6061 22.2122 24.6185 22.3624C24.6074 22.5124 24.6074 22.6624 24.6185 22.8124C24.6061 22.9626 24.6061 23.1128 24.6185 23.263C24.6074 23.413 24.6074 23.563 24.6185 23.713C24.6061 23.8632 24.6061 24.0134 24.6185 24.1636C24.6074 24.3136 24.6074 24.4635 24.6185 24.6135C24.6108 24.7712 24.6029 24.929 24.5953 25.0867C24.5471 25.2438 24.4701 25.3857 24.3656 25.5125C24.2985 25.5643 24.2316 25.6161 24.1645 25.6679C23.9715 25.7663 23.7639 25.7762 23.5524 25.7758C22.3417 25.7737 21.1313 25.7744 19.9206 25.7767C19.8848 25.7767 19.8301 25.7422 19.8101 25.8084C19.8002 25.8604 19.7993 25.9122 19.8107 25.964C19.7979 26.1147 19.7984 26.2653 19.8107 26.416C19.7993 26.5655 19.799 26.7151 19.8107 26.8646C19.7981 27.015 19.7981 27.1654 19.8107 27.3159C19.799 27.4654 19.7993 27.6152 19.8107 27.7647C19.7981 27.9154 19.7981 28.066 19.8107 28.2164C19.799 28.3662 19.799 28.516 19.8107 28.6657C19.7979 28.8164 19.7986 28.967 19.8103 29.1177C19.7941 29.4784 19.5144 29.6464 19.2131 29.5703C19.1944 29.5523 19.1728 29.5413 19.1462 29.5422C19.0255 29.4663 18.8982 29.403 18.7679 29.3456C18.6233 29.2566 18.4717 29.181 18.3175 29.1112C18.1702 29.0229 18.0175 28.9456 17.8612 28.8747C17.7295 28.7986 17.5957 28.7263 17.4554 28.6666C17.4405 28.645 17.4178 28.6382 17.3937 28.634C17.255 28.5509 17.1109 28.4777 16.9633 28.411C16.6674 28.2459 16.3677 28.0888 16.0608 27.9451C16.036 27.9217 16.0074 27.9052 15.9734 27.8994C15.9556 27.8759 15.9306 27.8658 15.9024 27.862C15.8378 27.819 15.7703 27.7818 15.6966 27.7568C15.5239 27.6512 15.3428 27.5613 15.1591 27.4769C14.8656 27.3123 14.5661 27.1594 14.2635 27.0125C13.9648 26.8522 13.6662 26.6914 13.3593 26.5475C13.0654 26.3786 12.7625 26.2271 12.4578 26.0791C12.4047 26.041 12.3515 26.0028 12.2986 25.9647C12.0399 25.7168 11.9863 25.4017 12.0027 25.0635Z"
                              fill="#EB5757"
                            />
                            <path
                              d="M29.9938 17.8163C29.9965 17.8305 29.9995 17.8449 30.0022 17.8591C30.0017 17.9418 30.001 18.0242 30.0006 18.1068C29.981 18.1726 29.9616 18.2386 29.942 18.3043C29.8662 18.487 29.7182 18.6144 29.5932 18.7592C29.5797 18.7595 29.572 18.766 29.5711 18.7799C29.42 18.9151 29.2766 19.0581 29.1417 19.2092C29.1277 19.2098 29.1214 19.2175 29.121 19.231C28.9685 19.3646 28.8262 19.508 28.6918 19.6596C28.6782 19.6598 28.671 19.6665 28.6704 19.6803C28.5195 19.8156 28.3756 19.958 28.2411 20.11C28.2276 20.1109 28.2209 20.1183 28.2204 20.1316C28.068 20.2653 27.9256 20.409 27.791 20.5604C27.7777 20.5608 27.7705 20.5678 27.7698 20.5811C27.6187 20.716 27.4746 20.8583 27.3408 21.0107C27.3338 21.0177 27.3266 21.0249 27.3196 21.0319C27.1669 21.1655 27.0253 21.31 26.8897 21.4607C26.8762 21.4605 26.869 21.4668 26.8688 21.4805C26.7355 21.5938 26.5866 21.6794 26.4195 21.7323C26.2682 21.7557 26.1175 21.7552 25.968 21.7192C25.6264 21.6003 25.4147 21.3661 25.339 21.011C25.3307 20.8587 25.3462 20.7088 25.3816 20.5606C25.4111 20.4628 25.475 20.3833 25.5205 20.2939C25.5746 20.2338 25.6286 20.1737 25.6827 20.1136C25.7797 20.0179 25.8766 19.9219 25.9736 19.8262C26.0362 19.7809 26.0916 19.7283 26.1367 19.6652C26.2306 19.5726 26.3245 19.4799 26.4184 19.3873C26.4871 19.3366 26.547 19.2772 26.5985 19.2092C26.6852 19.1146 26.7719 19.02 26.8591 18.9247C26.7154 18.9247 26.5677 18.9247 26.42 18.9247C26.2695 18.9137 26.1189 18.9139 25.9684 18.9247C25.8187 18.9144 25.6689 18.9144 25.5194 18.9247C25.369 18.9137 25.2183 18.9139 25.0679 18.9247C24.9181 18.9144 24.7684 18.9144 24.6188 18.9247C24.4684 18.9137 24.3178 18.9139 24.1673 18.9247C24.0176 18.9144 23.8678 18.9144 23.7183 18.9247C23.5678 18.9137 23.4172 18.9139 23.2668 18.9247C23.117 18.9144 22.9675 18.9144 22.8177 18.9247C22.6671 18.9139 22.5166 18.9139 22.366 18.9247C22.2164 18.9135 22.0669 18.9162 21.9174 18.9234C21.7629 18.9121 21.6136 18.8793 21.4722 18.8151C21.4409 18.7962 21.4096 18.7772 21.378 18.7583C21.0751 18.505 20.9556 18.1796 20.9988 17.7907C21.0071 17.7512 21.0157 17.7118 21.024 17.6727C21.0648 17.5844 21.1055 17.4961 21.1463 17.4078C21.2337 17.2882 21.3402 17.1892 21.4654 17.1099C21.6109 17.0495 21.7577 17.0004 21.9194 17.0007C23.5338 17.0025 25.1485 17.002 26.7629 17.0013C26.7983 17.0013 26.8364 17.0133 26.8823 16.9824C26.7283 16.8266 26.583 16.6689 26.4204 16.5282C26.4132 16.521 26.4062 16.514 26.399 16.5068C26.2641 16.3562 26.122 16.2127 25.9691 16.0803C25.9615 16.0726 25.9538 16.0652 25.9462 16.0575C25.8043 15.9134 25.6626 15.7693 25.5208 15.6254C25.5153 15.618 25.5102 15.6107 25.5048 15.6033C25.4208 15.465 25.3705 15.3139 25.3374 15.1565C25.3379 15.1158 25.3368 15.0748 25.339 15.0342C25.3453 14.9234 25.326 14.8079 25.3987 14.7093C25.5237 14.4566 25.7259 14.2967 25.9925 14.2134C26.1272 14.1918 26.2621 14.1929 26.397 14.2107C26.6015 14.2722 26.7792 14.3762 26.9262 14.5332C27.0001 14.612 27.0814 14.6834 27.1595 14.7584C27.1895 14.8007 27.225 14.8379 27.2683 14.8669C27.3748 14.9881 27.4869 15.1034 27.6104 15.2074C27.6385 15.2522 27.6754 15.288 27.7196 15.3169C27.8238 15.44 27.9391 15.5524 28.0603 15.6587C28.0966 15.695 28.1326 15.7312 28.1688 15.7675C28.2756 15.8882 28.3882 16.0033 28.5111 16.1078C28.5391 16.1528 28.5771 16.1877 28.6204 16.2172C28.7246 16.3404 28.8399 16.4525 28.9609 16.5591C28.9917 16.6007 29.0259 16.6392 29.0703 16.6676C29.2617 16.8624 29.4491 17.0612 29.6457 17.2509C29.8117 17.4112 29.938 17.5909 29.9938 17.8163Z"
                              fill="#EB5757"
                            />
                          </svg>
                        </div>
                        <div className="name" onClick={logoutModalHandler}>
                          <p className="text-base text-dark-gray font-medium mb-2">
                            Log Out
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="for-mobile-profile lg:hidden block">
              <Link
                to="/profile"
                className="lg:w-[62px] lg:h-[62px] w-[50px] h-[50px] rounded-full overflow-hidden block"
              >
                <img src={profileImg} alt="profile" className="w-full h-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {balanceDropdown || notificationDropdown || userProfileDropdown ? (
        <div
          onClick={clickAwayhandler}
          className="w-full h-screen fixed left-0"
          style={{ zIndex: "-1" }}
        ></div>
      ) : (
        ""
      )}
      {moneyPopup && (
        <ModalCom action={addMoneyHandler} situation={moneyPopup}>
          <div className="lg:w-[580px] sm:w-[450px] w-full rounded-2xl h-auto bg-white">
            <div className="heading border-b border-light-purple lg:px-7 sm:px-5 px-3 py-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-dark-gray">
                Connect to a wallet
              </h3>
              <span onClick={addMoneyHandler}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 16.16C36 17.4399 36 18.7199 36 20.0001C35.7911 20.0709 35.8636 20.2554 35.8385 20.4001C34.5321 27.9453 30.246 32.9248 22.9603 35.2822C21.9006 35.6251 20.7753 35.7657 19.6802 35.9997C18.4003 35.9997 17.1204 35.9997 15.8401 35.9997C15.5896 35.7086 15.2189 35.7732 14.9034 35.7093C7.77231 34.2621 3.08728 30.0725 0.769671 23.187C0.435002 22.1926 0.445997 21.1199 0 20.1599C0 18.7198 0 17.2798 0 15.8398C0.291376 15.6195 0.214408 15.2656 0.270759 14.9808C1.71321 7.69774 6.02611 2.99691 13.0428 0.700951C14.0118 0.383805 15.0509 0.386897 15.9999 0C17.2265 0 18.4532 0 19.6799 0C19.7156 0.124041 19.8125 0.136067 19.9225 0.146719C27.3 0.868973 33.5322 6.21922 35.3801 13.427C35.6121 14.3313 35.7945 15.2484 36 16.16ZM33.011 18.0787C33.0433 9.77105 26.3423 3.00309 18.077 2.9945C9.78479 2.98626 3.00344 9.658 2.98523 17.8426C2.96667 26.1633 9.58859 32.9601 17.7602 33.0079C26.197 33.0577 32.9787 26.4186 33.011 18.0787Z"
                    fill="#374557"
                    fillOpacity="0.6"
                  />
                  <path
                    d="M15.9309 18.023C13.9329 16.037 12.007 14.1207 10.0787 12.2072C9.60071 11.733 9.26398 11.2162 9.51996 10.506C9.945 9.32677 11.1954 9.0811 12.1437 10.0174C13.9067 11.7585 15.6766 13.494 17.385 15.2879C17.9108 15.8401 18.1633 15.7487 18.6375 15.258C20.3586 13.4761 22.1199 11.7327 23.8822 9.99096C24.8175 9.06632 26.1095 9.33639 26.4967 10.517C26.7286 11.2241 26.3919 11.7413 25.9133 12.2178C24.1757 13.9472 22.4477 15.6855 20.7104 17.4148C20.5228 17.6018 20.2964 17.7495 20.0466 17.9485C22.0831 19.974 24.0372 21.8992 25.9689 23.8468C26.9262 24.8119 26.6489 26.1101 25.4336 26.4987C24.712 26.7292 24.2131 26.3441 23.7455 25.8757C21.9945 24.1227 20.2232 22.3892 18.5045 20.6049C18.0698 20.1534 17.8716 20.2269 17.4802 20.6282C15.732 22.4215 13.9493 24.1807 12.1777 25.951C11.7022 26.4262 11.193 26.7471 10.4738 26.4537C9.31345 25.9798 9.06881 24.8398 9.98589 23.8952C11.285 22.5576 12.6138 21.2484 13.9387 19.9355C14.5792 19.3005 15.2399 18.6852 15.9309 18.023Z"
                    fill="#374557"
                    fillOpacity="0.6"
                  />
                </svg>
              </span>
            </div>
            <div className="content lg:px-7 px-3 sm:px-5 py-8">
              <ul>
                <li
                  className="content-item px-5 py-2.5 lg:mb-8 mb-3 border rounded-lg b border-light-purple hover:border-purple"
                  style={{ boxShadow: "0px 16px 93px 0px #55526329" }}
                >
                  <div className="sm:flex justify-between items-center">
                    <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                      <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                        <img src={bank1} alt="" />
                      </div>
                      <div className="name">
                        <p className="text-xl font-bold text-dark-gray">
                          MetaMask
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-[122px] h-11 flex justify-center items-center border-gradient  text-base rounded-full text-back"
                      >
                        <span className="text-gradient"> Cannect</span>
                      </button>
                    </div>
                  </div>
                </li>
                <li
                  className="content-item px-5 py-2.5 lg:mb-8 mb-3 border rounded-lg b border-light-purple hover:border-purple"
                  style={{ boxShadow: "0px 16px 93px 0px #55526329" }}
                >
                  <div className="sm:flex justify-between items-center">
                    <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                      <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                        <img src={bank2} alt="" />
                      </div>
                      <div className="name">
                        <p className="text-xl font-bold text-dark-gray">
                          Coinbase Wallet
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-[122px] h-11 flex justify-center items-center border-gradient  text-base rounded-full text-back"
                      >
                        <span className="text-gradient"> Cannect</span>
                      </button>
                    </div>
                  </div>
                </li>
                <li
                  className="content-item px-5 py-2.5 mb-8 border b rounded-lg border-light-purple hover:border-purple"
                  style={{ boxShadow: "0px 16px 93px 0px #55526329" }}
                >
                  <div className="sm:flex justify-between items-center">
                    <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                      <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                        <img src={bank3} alt="" />
                      </div>
                      <div className="name">
                        <p className="text-xl font-bold text-dark-gray">
                          Bitski
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-[122px] h-11 flex justify-center items-center border-gradient  text-base rounded-full text-back"
                      >
                        <span className="text-gradient"> Cannect</span>
                      </button>
                    </div>
                  </div>
                </li>
                <li
                  className="content-item px-5 py-2.5 mb-8 border b rounded-lg border-light-purple hover:border-purple"
                  style={{ boxShadow: "0px 16px 93px 0px #55526329" }}
                >
                  <div className="sm:flex justify-between items-center">
                    <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                      <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                        <img src={bank4} alt="" />
                      </div>
                      <div className="name">
                        <p className="text-xl font-bold text-dark-gray">
                          WalletConnect
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-[122px] h-11 flex justify-center items-center btn-gradient text-base rounded-full text-white"
                      >
                        Cannected
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="add-money-btn flex justify-center items-center">
                <Link
                  to="#"
                  className="text-18 rounded-full text-thin-light-gray"
                >
                  View Wallet
                </Link>
              </div>
            </div>
          </div>
        </ModalCom>
      )}
    </>
  );
}
