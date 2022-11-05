import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToggle from "../../hooks/useToggle";
import { drawerToggle } from "../../store/drawer";
import ModalCom from "../Helpers/ModalCom";
import Header from "./Header";
import MobileSidebar from "./MobileSideBar";
import RightSideBar from "./RightSideBar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const { drawer } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  const [MobileSideBar, setMobileSidebar] = useToggle(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const logoutModalHandler = () => {
    setLogoutModal(!logoutModal);
  };
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.clear();
    toast.success("Come Back Soon", {
      icon: `🙂`,
    });

    navigate("/login", { replace: true });
  };
  return (
    <>
      <div className="nft-main-wrapper-layout">
        <div className="nft-wrapper-layout-container 2xl:pr-20 md:pr-10 pr-2 pl-2 md:pl-0 w-full min-h-screen flex">
          {/* sidebar */}
          <div
            className={`nft-sidebar xl:block hidden section-shadow ${
              drawer
                ? "2xl:w-[335px] w-[280px] 2xl:pl-20 pl-10 pr-6 "
                : "w-[70px]"
            } bg-white h-full overflow-y-scroll overflow-style-none fixed left-0 top-0 pt-8`}
          >
            <Sidebar
              logoutModalHandler={logoutModalHandler}
              sidebar={drawer}
              action={() => dispatch(drawerToggle())}
            />
          </div>
          {MobileSideBar && (
            <div
              onClick={() => setMobileSidebar.toggle()}
              className="bg-black bg-opacity-20 fixed left-0 top-0 w-full h-full z-[50] block xl:hidden"
            ></div>
          )}
          <div
            className={`nft-sidebar block xl:hidden section-shadow w-[280px] pl-3 bg-white h-full overflow-y-scroll overflow-style-none fixed z-[60]  top-0 pt-8 ${
              MobileSideBar ? "left-0" : "-left-[290px]"
            }`}
          >
            <MobileSidebar
              logoutModalHandler={logoutModalHandler}
              sidebar={MobileSideBar}
              action={() => setMobileSidebar.toggle()}
            />
          </div>
          {/* end sidebar */}
          <div
            className={`nft-header-container-wrapper flex-1 md:ml-10 ${
              drawer ? "2xl:ml-[375px] xl:ml-[310px]" : "xl:ml-[110px]"
            }  h-full`}
          >
            {/* header */}
            <div className="nft-header w-full lg:h-[100px] h-[70px] default-border-bottom z-40 xl:sticky fixed top-0 left-0 ">
              <Header
                sidebarHandler={() => setMobileSidebar.toggle()}
                logoutModalHandler={logoutModalHandler}
              />
            </div>
            {/* container */}
            <div className="nft-container 2xl:flex 2xl:space-x-8 h-full mb-12 lg:mt-[140px] mt-24 xl:mt-10">
              <div className="nft-main-container flex-1">
                {children && children}
              </div>
              <div className="nft-right-side-content 2xl:w-[270px] w-full h-full 2xl:flex justify-center relative">
                <RightSideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
      {logoutModal && (
        <ModalCom action={logoutModalHandler} situation={logoutModal}>
          <div className="logout-modal-wrapper lg:w-[460px] h-full lg:h-auto bg-white lg:rounded-2xl">
            <div className="logout-modal-header w-full flex items-center justify-between lg:px-10 lg:py-8 px-[30px] py-[23px] border-b border-light-purple">
              <h1 className="text-26 font-bold text-dark-gray tracking-wide">
                Confirm
              </h1>
              <button type="button" className="" onClick={logoutModalHandler}>
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
              </button>
            </div>
            <div className="logout-modal-body w-full flex flex-col items-center px-10 py-8">
              <div className="what-icon mb-6 cursor-pointer">
                <svg
                  width="136"
                  height="136"
                  viewBox="0 0 136 136"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="68" cy="68" r="68" fill="#5356FB" />
                  <path
                    d="M69.8844 35.7891C71.1588 36.0357 72.4569 36.1967 73.7044 36.5423C81.5447 38.7098 87.2705 45.5378 87.9574 53.6156C88.5113 60.1147 86.3075 65.6006 81.5043 70.0195C79.8359 71.5545 78.0497 72.9604 76.3408 74.4534C76.127 74.6397 75.9654 75.0037 75.9604 75.2872C75.9284 77.2752 75.9435 79.2649 75.9435 81.2965C70.8895 81.2965 65.8758 81.2965 60.7915 81.2965C60.7915 81.0616 60.7915 80.8385 60.7915 80.6137C60.7915 76.5454 60.7999 72.4772 60.7797 68.4106C60.778 67.9392 60.9312 67.649 61.2831 67.3537C64.5643 64.5957 67.8271 61.8175 71.1033 59.0545C72.2616 58.0781 72.9215 56.8702 72.9081 55.3419C72.8878 52.916 70.8608 50.9146 68.423 50.8911C65.9701 50.8693 63.9145 52.8053 63.832 55.2328C63.8084 55.8988 63.8286 56.5665 63.8286 57.2695C58.7745 57.2695 53.7744 57.2695 48.6917 57.2695C48.6917 56.3149 48.6462 55.3385 48.6984 54.3655C49.222 44.699 56.7442 36.8745 66.4331 35.8914C66.5762 35.8763 66.7142 35.8243 66.854 35.7891C67.8641 35.7891 68.8742 35.7891 69.8844 35.7891Z"
                    fill="white"
                  />
                  <path
                    d="M67.485 100.21C66.1617 99.9268 64.9041 99.5091 63.803 98.6787C61.3804 96.8484 60.2877 93.7699 61.0386 90.7888C61.7726 87.8747 64.2138 85.6703 67.2089 85.2157C71.273 84.6 75.2024 87.3681 75.8135 91.277C76.4937 95.6153 73.8202 99.3782 69.544 100.103C69.4429 100.12 69.3487 100.172 69.2527 100.209C68.6635 100.21 68.0742 100.21 67.485 100.21Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="mb-6">
                <p className="text-2xl tracking-wide text-center">
                  Are you sure you want to Logout NETMAX admin Penal?
                </p>
              </div>
              <div className="flex space-x-2.5">
                <button
                  onClick={logOut}
                  type="button"
                  className="text-white primary-gradient text-18 tracking-wide px-4 py-3 rounded-full"
                >
                  Yes Logout
                </button>
                <button
                  onClick={logoutModalHandler}
                  type="button"
                  className=" border-gradient text-18 tracking-wide px-4 py-3 rounded-full"
                >
                  <span className="text-gradient">Not Now</span>
                </button>
              </div>
            </div>
          </div>
        </ModalCom>
      )}
    </>
  );
}
