import React from "react";
import datas from "../../../data/product_data.json";
import Layout from "../../Partials/Layout";
import MainSection from "./MainSection";

export default function CollectionItem() {
  return (
    <Layout>
      <div className="mycollection-wrapper">
        <div className="main-wrapper">
          {/* heading */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-26 font-bold text-dark-gray">
                <span>Seo Planes</span>
              </h1>
            </div>
          </div>
          <MainSection className="mb-10" collectionData={datas.datas} />
        </div>
      </div>
    </Layout>
  );
}
