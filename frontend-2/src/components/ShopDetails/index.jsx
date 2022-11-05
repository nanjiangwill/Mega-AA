import React from "react";
import shopTrendingData from "../../data/marketplace_data.json";
import SellHistoryMarketVisitorAnalytic from "../Home/SellHistoryMarketVisitorAnalytic";
import Layout from "../Partials/Layout";
import ShopProductWidget from "./ShopProductWidget";
import ShopTrendingAction from "./ShopTrendingAction";

export default function ShopDetails() {
  const shopTrending = shopTrendingData.data;
  return (
    <>
      <Layout>
        <div className="shop-details-wrapper w-full">
          <div className="main-wrapper w-full">
            <ShopProductWidget className="mb-8" />
            <SellHistoryMarketVisitorAnalytic className="mb-8" />
            <ShopTrendingAction trendingShop={shopTrending} />
          </div>
        </div>
      </Layout>
    </>
  );
}
