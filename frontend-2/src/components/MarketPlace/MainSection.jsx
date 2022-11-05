import React, { useEffect, useState } from "react";
import ProductCardStyleTwo from "../Cards/ProductCardStyleTwo";
import DataIteration from "../Helpers/DataIteration";
import SearchCom from "../Helpers/SearchCom";

export default function MainSection({ className, marketPlaceProduct }) {
  const [tab, setTab] = useState("explore");
  const [products, setProducts] = useState(marketPlaceProduct);
  console.log(products);
  const tabHandler = (value) => {
    setTab(value);
  };
  useEffect(() => {
    if (tab === "artist") {
      setProducts(marketPlaceProduct.slice(0, 3));
    } else if (tab === "market") {
      setProducts(marketPlaceProduct.slice(0, 6));
    } else if (tab === "shop") {
      setProducts(marketPlaceProduct.slice(6, 9));
    } else if (tab === "assets") {
      setProducts(marketPlaceProduct.slice(3, 6));
    } else {
      setProducts(marketPlaceProduct);
    }
  }, [tab, marketPlaceProduct]);

  return (
    <div className={`market-place-section w-full ${className || ""}`}>
      <div className="market-place-wrapper w-full">
        <div className="filter-navigate-area lg:flex justify-between mb-8 items-center">
          <div className="tab-item lg:mb-0 mb-5">
            <div className="md:flex md:space-x-8 space-x-2">
              <span
                onClick={() => tabHandler("explore")}
                className={`md:text-[18px] text-md  text-dark-gray hover:text-pink border-b  hover:border-pink font-medium ${
                  tab === "explore"
                    ? "text-pink border-pink"
                    : " border-transparent"
                }`}
              >
                Explore
              </span>
              <span
                onClick={() => tabHandler("artist")}
                className={`md:text-[18px] text-md  text-dark-gray hover:text-pink border-b  hover:border-pink font-medium ${
                  tab === "artist"
                    ? "text-pink border-pink"
                    : " border-transparent"
                }`}
              >
                Featured Artist
              </span>
              <span
                onClick={() => tabHandler("market")}
                className={`md:text-[18px] text-md  text-dark-gray hover:text-pink border-b  hover:border-pink font-medium ${
                  tab === "market"
                    ? "text-pink border-pink"
                    : " border-transparent"
                }`}
              >
                Open Market
              </span>
              <span
                onClick={() => tabHandler("shop")}
                className={`md:text-[18px] text-md  text-dark-gray hover:text-pink border-b  hover:border-pink font-medium ${
                  tab === "shop"
                    ? "text-pink border-pink"
                    : " border-transparent"
                }`}
              >
                Partner Shops
              </span>
              <span
                onClick={() => tabHandler("assets")}
                className={`md:text-[18px] text-md  text-dark-gray hover:text-pink border-b  hover:border-pink font-medium ${
                  tab === "assets"
                    ? "text-pink border-pink"
                    : " border-transparent"
                }`}
              >
                Game Assets
              </span>
            </div>
          </div>

          <div className="search-item flex lg:flex-none justify-end">
            <SearchCom
              className="lg:bg-transparent"
              inputClasses="lg:bg-transparent"
            />
          </div>
        </div>
        <div className="filter-navigate-content w-full min-h-screen">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px]">
            <DataIteration
              datas={products}
              startLength="0"
              endLength={products.length}
            >
              {({ datas }) => (
                <ProductCardStyleTwo key={datas.id} datas={datas} />
              )}
            </DataIteration>
          </div>
        </div>
      </div>
    </div>
  );
}
