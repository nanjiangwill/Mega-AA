import React from "react";
import products from "../../data/product_data.json";
import CreateNft from "../Home/CreateNft";
import Layout from "../Partials/Layout";
import MainSection from "./MainSection";

export default function Saved() {
  const productData = [...products.datas, ...products.datas];
  return (
    <>
      <Layout>
        <div className="saved-page-wrapper w-full">
          <div className="main-wrapper w-full ">
            <div className="mb-6">
              <h1 className="text-26 font-bold text-dark-gray">All Saved</h1>
            </div>
          </div>
        </div>
        <MainSection products={productData} />
        <CreateNft />
      </Layout>
    </>
  );
}
