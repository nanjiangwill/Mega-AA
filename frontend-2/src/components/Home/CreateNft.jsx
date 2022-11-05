import React from "react";
import { Link } from "react-router-dom";

export default function CreateNft({ className }) {
  return (
    <div
      className={`create-nft w-full lg:h-[140px] shadow lg:flex rounded-lg justify-between items-center  md:p-9 p-4 bg-white border-b-2 border-pink mb-10 ${
        className || ""
      }`}
    >
      <div className="lg:w-8/12 w-full mb-8 lg:mb-0">
        <h1 className="text-2xl text-dark-gray font-bold mb-2">
          Create your own NFT and extraordinary get lot of Sell.
        </h1>
        <p className="text-base text-thin-light-gray tracking-wide">
          Buy and sell NFTs from the world’s top artists
        </p>
      </div>
      <div className="flex-1 flex lg:justify-end">
        <div className="flex items-center space-x-5">
          <Link
            to="/upload-product"
            className="w-40 h-11 flex justify-center items-center btn-gradient text-base rounded-full text-white"
          >
            Upload Products
          </Link>
          <Link to="/market-place" className="text-dark-gray text-base">
            <span className=" border-b border-dark-gray font-medium">
              View Art Work
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
