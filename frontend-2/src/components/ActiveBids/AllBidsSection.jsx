import React from "react";
import { Link } from "react-router-dom";
import ProductCardStyleOne from "../Cards/ProductCardStyleOne";
import DataIteration from "../Helpers/DataIteration";

export default function AllBidsSection({ className, allBids = [] }) {
  return (
    <>
      <div className={`all-bid-section w-full ${className || ""}`}>
        <div className="mb-5">
          <h1 className="text-26 font-bold text-dark-gray">All Bids</h1>
        </div>
        <div className="w-full">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-8 xl:gap-5 gap-5 mb-10">
            <DataIteration datas={allBids} startLength={0} endLength={8}>
              {({ datas }) => (
                <div key={datas.id} className="item">
                  <ProductCardStyleOne datas={datas} />
                </div>
              )}
            </DataIteration>
          </div>
          <div className="flex justify-center">
            <Link
              to="/market-place"
              className=" border-b border-dark-gray text-dark-gray text-base"
            >
              View Art Work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
