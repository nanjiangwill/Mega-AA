import React from "react";
import products from "../../data/marketplace_data.json";
import CreateNft from "../Home/CreateNft";
import Layout from "../Partials/Layout";
import MainSection from "./MainSection";

export default function MarketPlace() {
  const marketProduct = products.data;
  return (
    <>
      <Layout>
        <CreateNft />
        <MainSection marketPlaceProduct={marketProduct} className="mb-10" />
      </Layout>
    </>
  );
}
