import React from "react";
import CollectionCard from "../Cards/CollectionCard";
import DataIteration from "../Helpers/DataIteration";

function MainSection({ collectionData, className }) {
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
        <DataIteration
          datas={collectionData}
          startLength={0}
          endLength={collectionData.length}
        >
          {({ datas }) => (
            <CollectionCard key={datas.uniqKey} collectionData={datas} />
          )}
        </DataIteration>
      </div>
    </div>
  );
}

export default MainSection;
