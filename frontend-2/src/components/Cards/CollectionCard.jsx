import React from "react";
import { Link } from "react-router-dom";
import localImgLoad from "../../lib/localImgLoad";

export default function CollectionCard({ collectionData }) {
  return (
    <Link
      to="/my-collection/collection-item"
      className="item w-full block group"
    >
      <div className="bg-white rounded-2xl p-5 section-shadow">
        <div className="flex flex-col justify-between">
          <div className="w-full mb-4">
            <div className="w-full h-[160px] overflow-hidden rounded-xl mb-[10px]">
              <img
                src={localImgLoad(`images/${collectionData.images[0]}`)}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="w-full h-[90px] flex space-x-[10px]">
              <div className="w-1/2 h-full rounded-lg overflow-hidden">
                <img
                  src={localImgLoad(`images/${collectionData.images[1]}`)}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex-1 h-full rounded-lg overflow-hidden">
                <img
                  src={localImgLoad(`images/${collectionData.images[2]}`)}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <img
                src={localImgLoad(`images/${collectionData.owner}`)}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <p className="text-xl font-bold tracking-wide text-dark-gray group-hover:text-purple transition duration-300 ease-in-out">
                {collectionData.title}
              </p>
            </div>
            <p className="text-lg text-dark-gray tracking-wide">
              {collectionData.NumberOfItem}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
