import React from "react";
import datas from "../../data/product_data.json";
import UpdateTable from "../Home/UpdateTable";
import Layout from "../Partials/Layout";
import AllBidsSection from "./AllBidsSection";
import CounterSection from "./CounterSection";
import OverviewSection from "./OverviewSection";

export default function ActiveBids() {
  const allBids = datas.datas;
  return (
    <>
      <Layout>
        <CounterSection className="mb-10" />
        <OverviewSection className="mb-10" />
        <AllBidsSection allBids={allBids} className="mb-10" />
        <UpdateTable className="mb-10" />
      </Layout>
    </>
  );
}
