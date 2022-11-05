import React from "react";
import collectionData from "../../data/collectionplan_data.json";
import Layout from "../Partials/Layout";
import MainSection from "./MainSection";

export default function MyCollection() {
  return (
    <>
      <Layout>
        <div className="mycollection-wrapper">
          <div className="main-wrapper">
            {/* heading */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-26 font-bold text-dark-gray">
                  <span>My Collection</span>
                </h1>
              </div>
            </div>
            <MainSection
              className="mb-10"
              collectionData={collectionData.data}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
