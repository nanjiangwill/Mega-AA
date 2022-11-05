import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import activeAidsBanner from "../../assets/images/active-aids-banner.jpg";
import HeroUser from "../../assets/images/hero-user.png";
import CountDown from "../Helpers/CountDown";

export default function OverviewSection({ className }) {
  const [addFavorite, setValue] = useState(false);
  const favoriteHandler = () => {
    if (!addFavorite) {
      setValue(true);
      toast.success("Added to Favorite List");
    } else {
      setValue(false);
      toast.warn("Remove to Favorite List");
    }
  };
  return (
    <>
      <div className={`overview-section w-full ${className || ""}`}>
        <div className="overview-section-wrapper lg:flex lg:h-[494px] lg:pace-x-2">
          <div className="lg:w-[540px] w-full h-full bg-white rounded-2xl overflow-hidden mb-10">
            <img
              src={activeAidsBanner}
              alt="banner"
              className="w-full lg:h-full h-[400px]"
            />
          </div>

          <div className="overview-countdown lg:w-2/5 w-full h-full flex flex-col justify-between lg:pl-11 lg:py-16">
            <div className="lg:mb-0 mb-3">
              <h1 className="text-2xl font-bold text-dark-gray tracking-wide">
                Lock and Lob x Fiesta Spurs
              </h1>
              <span className="text-[18px] font-thin tracking-wide text-dark-gray">
                ID : 2320382
              </span>
            </div>
            {/* user */}
            <div className="flex items-center space-x-3 lg:mb-0 mb-3">
              <div className="w-14 h-14 flex justify-center items-center rounded-full overflow-hidden">
                <img src={HeroUser} alt="" />
              </div>
              <div>
                <p className="text-xl tracking-wide font-bold antise text-dark-gray">
                  Brokln Simons
                </p>
                <p className="text-sm tracking-wide text-dark-gray">
                  @broklinslam_75
                </p>
              </div>
            </div>
            {/* countdown */}
            <div className="w-full h-32 flex justify-evenly items-center p-6 rounded-2xl border border-[#d3d2fe] lg:mb-0 mb-3">
              <div className="flex flex-col justify-between">
                <p className="text-base text-dark-gray tracking-wide">
                  Current Bid
                </p>
                <p className="text-2xl font-bold tracking-wide text-dark-gray">
                  75,320 ETH
                </p>
                <p className="text-base text-dark-gray tracking-wide">
                  773.69 USD
                </p>
              </div>
              <div className="w-[1px] h-full bg-[#d3d2fe]"></div>
              <div className="flex flex-col justify-between">
                <p className="text-base text-dark-gray tracking-wide">
                  Remaing Time
                </p>
                <p className="text-2xl font-bold tracking-wide text-dark-gray">
                  <CountDown lastDate="2023-03-04 4:00:00" />
                </p>
                <div className="text-base text-dark-gray tracking-wide flex gap-[23px]">
                  <span>Hrs</span>
                  <span>Min</span>
                  <span>Sec</span>
                </div>
              </div>
            </div>
            {/* action */}
            <div className="flex space-x-3 items-center">
              <button
                onClick={favoriteHandler}
                type="button"
                className={`w-[52px] h-[52px] rounded-full bg-white flex justify-center items-center ${
                  addFavorite ? "text-pink" : "text-dark-gray"
                }`}
              >
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.23431 0C8.44147 0.0182463 9.6223 0.345711 10.6576 0.949325C11.6928 1.55294 12.5458 2.41133 13.1305 3.4378C13.7151 2.41133 14.5681 1.55294 15.6034 0.949325C16.6386 0.345711 17.8195 0.0182463 19.0266 0C20.951 0.0812475 22.764 0.899302 24.0697 2.27544C25.3753 3.65158 26.0674 5.47395 25.9948 7.3444C25.9948 14.4023 14.2497 22.5541 13.7501 22.8999L13.1305 23.326L12.5108 22.8999C12.0113 22.5562 0.266127 14.4023 0.266127 7.3444C0.193496 5.47395 0.885607 3.65158 2.19126 2.27544C3.4969 0.899302 5.30996 0.0812475 7.23431 0Z" />
                </svg>
              </button>
              <button
                type="button"
                className="btn-shine w-[116px] h-[46px] text-white rounded-full text-base bg-pink flex justify-center items-center"
              >
                Place a Bid
              </button>
              <Link to="/market-place" className="text-blue-500 text-base">
                <span className=" border-b border-blue-500">View Art Work</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
