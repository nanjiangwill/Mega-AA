import React from "react";
import Icons from "./Icons";

export default function SearchCom({ className, inputClasses }) {
  return (
    <div
      className={`w-full h-[48px]  pl-8 flex rounded-full overflow-hidden bg-white ${
        className || ""
      }`}
    >
      <div className="w-6 h-full flex justify-center items-center mr-2.5 text-dark-gray">
        <Icons name="deep-search" />
      </div>
      <div className="flex-1 h-full">
        <input
          className={`w-full h-full focus:outline-0 focus:ring-0 ${
            inputClasses || ""
          }`}
          type="text"
          placeholder="Search items, collections..."
        />
      </div>
    </div>
  );
}
