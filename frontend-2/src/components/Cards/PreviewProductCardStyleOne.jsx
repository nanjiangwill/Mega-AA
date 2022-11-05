import React from "react";
import { Link } from "react-router-dom";
import localImgLoad from "../../lib/localImgLoad";
import CountDown from "../Helpers/CountDown";
import Icons from "../Helpers/Icons";

export default function PreviewProductCardStyleOne({ datas }) {
  return (
    <div className="card-style-one flex flex-col justify-between w-full h-[387px] bg-white p-3 pb rounded-2xl section-shadow">
      <div className="content">
        {/* thumbnail */}
        <div className="w-full h-40">
          {/* thumbnail image */}
          <div
            className="thumbnail w-full h-full rounded-xl overflow-hidden flex justify-between px-4 pt-4"
            style={{
              background: `url(${datas.thumbnil}) 0% 0% / cover no-repeat`,
            }}
          >
            <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center text-pink cursor-pointer">
              <Icons name="love" />
            </span>
            <span className="w-7 h-7 flex justify-center items-center bg-white rounded-full cursor-pointer">
              <Icons name="dots" />
            </span>
          </div>
        </div>
        {/* user */}
        <div className="user w-ful -mt-6 mb-2">
          <div className="user-img w-10 h-10 flex  justify-center items-center overflow-hidden rounded-full mb-2 ml-4">
            <img
              src={localImgLoad(`images/${datas.profile_img}`)}
              alt="user"
              className=" w-full h-full"
            />
          </div>
          <p className="text-sm text-thin-light-gray">
            Owned by <span className="text-purple">{datas.username}</span>
          </p>
        </div>
        {/* details */}
        <div className="details">
          {/* product title */}
          <p className="text-xl font-bold text-dark-gray mb-2 capitalize line-clamp-1">
            {datas.title}
          </p>
          {/* countdown */}
          <div className="w-full h-[54px] flex justify-evenly items-center p-2 rounded-lg border border-[#E3E4FE]">
            <div className="flex flex-col justify-between">
              <p className="text-sm text-thin-light-gray tracking-wide">
                Current Bid
              </p>
              <p className="text-base font-bold tracking-wide text-dark-gray">
                {datas.price}
              </p>
            </div>
            <div className="w-[1px] h-full bg-[#E3E4FE]"></div>
            <div className="flex flex-col justify-between">
              <p className="text-sm text-thin-light-gray tracking-wide">
                Remaing Time
              </p>
              <p className="text-base font-bold tracking-wide text-dark-gray">
                <CountDown lastDate={datas.remaing} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-buttons flex items-center space-x-2">
        <button
          type="button"
          className="btn-shine w-[98px] h-[33px] text-white rounded-full text-sm bg-pink flex justify-center items-center"
        >
          Place a Bid
        </button>
        <Link to="/market-place" className="text-dark-gray text-sm">
          <span className=" border-b border-dark-gray ">View Art Work</span>
        </Link>
      </div>
    </div>
  );
}
