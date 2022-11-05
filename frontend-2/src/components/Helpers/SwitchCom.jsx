import React from "react";

export default function SwitchCom({ className, value, handler }) {
  return (
    <>
      <div
        onClick={handler}
        className={`switch-btn ${
          value ? "active" : ""
        } w-[44.04px] h-[20.85px] rounded-full cursor-pointer ${
          className || ""
        }`}
      >
        <div className="inner-circle w-[17.76px] h-[17.76px] bg-white shadow-md rounded-full"></div>
      </div>
    </>
  );
}
