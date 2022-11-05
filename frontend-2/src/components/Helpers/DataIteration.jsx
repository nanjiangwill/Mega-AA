import React from "react";

function DataIteration(props) {
  const { datas, startLength, endLength, children } = props;
  return (
    <>
      {datas &&
        datas.length >= endLength &&
        datas
          .slice(startLength, endLength)
          .map((value) => children({ datas: value }))}
    </>
  );
}

export default DataIteration;
