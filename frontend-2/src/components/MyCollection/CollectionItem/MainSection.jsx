import React from "react";
import ProductCardStyleOne from "../../Cards/ProductCardStyleOne";
import DataIteration from "../../Helpers/DataIteration";

export default function MainSection({ collectionData, className }) {
  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-8 xl:gap-5 gap-5 mb-10">
          <DataIteration
            datas={collectionData}
            startLength={0}
            endLength={collectionData.length}
          >
            {({ datas }) => (
              <ProductCardStyleOne key={datas.uniqKey} datas={datas} />
            )}
          </DataIteration>
        </div>
      </div>
    </>
  );
}
