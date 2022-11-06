import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import heroBg from "../../assets/images/hero-bg.svg";
import heroUser from "../../assets/images/hero-user.png";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";
import CountDown from "../Helpers/CountDown";
import SliderCom from "../Helpers/SliderCom";

export default function Hero({ className }) {
  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    swipe: true,
  };
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
    <div
      className={`w-full lg:h-[444px] h-full lg:flex lg:p-8 p-4 justify-between items-center lg:space-x-28 rounded-2xl overflow-hidden ${
        className || ""
      }`}
      style={{
        background: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex-1 h-[330px] lg:h-full flex flex-col justify-between mb-5 lg:mb-0">
        {/* heading */}
        <div>
          <h1 className="lg:text-2xl text-xl font-medium text-white tracking-wide">
            Meta AA
          </h1>
          <span className="text-[18px] font-thin tracking-wide text-white">
            YOUR WALLET HERE
          </span>
        </div>
        {/* user */}
        {/* <div className="flex items-center space-x-3">
          <div className="w-14 h-14 flex justify-center items-center rounded-full overflow-hidden">
            <img src={heroUser} alt="" />
          </div>
          <div>
            <p className="text-xl tracking-wide font-bold antise text-white">
              Brokln Simons
            </p>
            <p className="text-sm tracking-wide text-white">@broklinslam_75</p>
          </div>
        </div> */}
        {/* grid */}
        <div className="flex-1 h-[700px] w-[500px] lg:h-full flex flex-row justify-between mb-5 lg:mb-0">
          <div className="card-style-one flex flex-col justify-between w-[160px] h-[160px] bg-white p-3 pb rounded-2xl">1</div>
          <div className="card-style-one flex flex-col justify-between w-[160px] h-[160px] bg-white p-3 pb rounded-2xl">1</div>
          <div className="card-style-one flex flex-col justify-between w-[160px] h-[160px] bg-white p-3 pb rounded-2xl">1</div>
          {/* <div className="card-style-one flex flex-col justify-between w-[160px] h-[160px] bg-white p-3 pb rounded-2xl">1</div>
          <div className="card-style-one flex flex-col justify-between w-[160px] h-[160px] bg-white p-3 pb rounded-2xl">1</div> */}
        </div>

        {/* countdown */}
        {/* <div className="w-full h-32 flex justify-evenly items-center sm:p-6 p-1 rounded-2xl border border-white-opacity">
          <div className="flex flex-col justify-between">
            <p className="text-base text-white tracking-wide">Current Bid</p>
            <p className="lg:text-2xl text-lg font-bold tracking-wide text-white">
              75,320 ETH
            </p>
            <p className="text-base text-white tracking-wide">773.69 USD</p>
          </div>
          <div className="w-[1px] h-full bg-white-opacity"></div>
          <div className="flex flex-col justify-between">
            <p className="text-base text-white tracking-wide">Remaing Time</p>
            <p className="lg:text-2xl text-lg font-bold tracking-wide text-white">
              <CountDown lastDate="2023-03-04 4:00:00" />
            </p>
            <div className="text-base text-white tracking-wide flex gap-[23px]">
              <span>Hrs</span>
              <span>Min</span>
              <span>Sec</span>
            </div>
          </div>
        </div> */}
        {/* action */}
        {/* <div className="flex lg:space-x-3 space-x-1 items-center">
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
          <Link
            to="/active-bids"
            className=" btn-shine  w-[116px] h-[46px] text-white rounded-full text-base bg-pink flex justify-center items-center"
          >
            Place a Bid
          </Link>
          <Link
            to="/market-place"
            className="text-white text-base sm:block hidden"
          >
            <span className=" border-b border-white"> View Art Work</span>
          </Link>
        </div> */}
      </div>
      {/* <div className="hero-slider relative 2xl:w-[600px] xl:w-[500px] lg:w-[420px] w-full mb-2 lg:mb-0 ">
        <div className="w-full">
          <SliderCom settings={settings}>
            <div className="item w-full h-full bg-white rounded-2xl overflow-hidden">
              <img src={slider1} alt="slider" className="w-full h-full" />
            </div>
            <div className="item w-full h-full bg-white rounded-2xl overflow-hidden">
              <img src={slider2} alt="slider" className="w-full h-full" />
            </div>
            <div className="item w-full h-full bg-white rounded-2xl overflow-hidden">
              <img src={slider3} alt="slider" className="w-full h-full" />
            </div>
          </SliderCom>
        </div>
      </div> */}
    </div>
  );
}
