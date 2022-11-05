import React from "react";
import datas from "../../data/product_data.json";
import Layout from "../Partials/Layout";
import CreateNft from "./CreateNft";
import Hero from "./Hero";
import SellHistoryMarketVisitorAnalytic from "./SellHistoryMarketVisitorAnalytic";
import TopSellerTopBuyerSliderSection from "./TopSellerTopBuyerSliderSection";
import TrendingSection from "./TrendingSection";
import UpdateTable from "./UpdateTable";

export default function Home() {
  const trending = datas.datas;

  return (
    <Layout>
      <div className="home-page-wrapper">
        <Hero className="mb-10" />
        <CreateNft />
        <TrendingSection trending={trending} className="mb-10" />
        <SellHistoryMarketVisitorAnalytic className="mb-10" />
        <TopSellerTopBuyerSliderSection className="mb-10" />
        <UpdateTable className="mb-10" />
      </div>
    </Layout>
  );
}
