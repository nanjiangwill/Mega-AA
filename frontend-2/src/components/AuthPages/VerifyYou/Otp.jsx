import React, { useEffect } from "react";

export default function Otp() {
  useEffect(() => {
    const otp = document.querySelector("#otp-inputs");
    // eslint-disable-next-line no-restricted-syntax
    for (const pin of otp.children) {
      // eslint-disable-next-line no-loop-func
      pin.onkeyup = () => {
        if (pin.nextSibling) {
          pin.nextSibling.children.otp.focus();
        }
      };
    }
  });
  return (
    <>
      <div
        className="otp-input-com flex sm:space-x-5 space-x-3 justify-center mb-8"
        id="otp-inputs"
      >
        <div className="input-wrapper border border-light-purple sm:w-14 sm:h-14 w-12 h-12 rounded-[50px]  overflow-hidden relative ">
          <input
            className="input-field placeholder:text-base leading-14 text-center items-center text-2xl font-bold text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-2 focus:outline-none"
            type="text"
            maxLength={1}
            id="otp"
          />
        </div>
        <div className="input-wrapper border border-light-purple sm:w-14 sm:h-14 w-12 h-12 rounded-[50px] overflow-hidden relative ">
          <input
            className="input-field placeholder:text-base text-2xl font-bold leading-14 text-center  text-dark-gray w-full h-full  bg-[#FAFAFA] focus:ring-2 focus:outline-none"
            type="text"
            maxLength={1}
            id="otp"
          />
        </div>
        <div className="input-wrapper border border-light-purple sm:w-14 sm:h-14 w-12 h-12 rounded-[50px] overflow-hidden relative ">
          <input
            className="input-field placeholder:text-base text-2xl font-bold  leading-14 text-center  text-dark-gray w-full h-full  bg-[#FAFAFA] focus:ring-2 focus:outline-none"
            type="text"
            maxLength={1}
            id="otp"
          />
        </div>
        <div className="input-wrapper border border-light-purple sm:w-14 sm:h-14 w-12 h-12 rounded-[50px]  overflow-hidden relative ">
          <input
            className="input-field placeholder:text-base text-2xl font-bold leading-14 text-center  text-dark-gray w-full h-full  bg-[#FAFAFA] focus:ring-2 focus:outline-none"
            type="text"
            maxLength={1}
            id="otp"
          />
        </div>
        <div className="input-wrapper border border-light-purple sm:w-14 sm:h-14 w-12 h-12 rounded-[50px]  overflow-hidden relative ">
          <input
            className="input-field placeholder:text-base text-2xl font-bold leading-14 text-center  text-dark-gray w-full h-full  bg-[#FAFAFA] focus:ring-2 focus:outline-none"
            type="text"
            maxLength={1}
            id="otp"
          />
        </div>
        <div className="input-wrapper border border-light-purple sm:w-14 sm:h-14 w-12 h-12 rounded-[50px] overflow-hidden relative ">
          <input
            className="input-field placeholder:text-base text-2xl font-bold  leading-14 text-center text-dark-gray w-full h-full  bg-[#FAFAFA] focus:ring-2 focus:outline-none"
            type="text"
            maxLength={1}
            id="otp"
          />
        </div>
      </div>
    </>
  );
}
