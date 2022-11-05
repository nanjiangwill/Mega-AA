import React from "react";
import titleShape from "../../../assets/images/shape/text-shape-three.svg";
import AuthLayout from "../AuthLayout";
import Otp from "./Otp";

export default function VerifyYou() {
  return (
    <>
      <AuthLayout
        slogan="Welcome to  Nftmax
Admin Panel"
      >
        <div className="content-wrapper xl:bg-white w-full sm:w-auto px-5 xl:px-[70px] 2xl:px-[100px] h-[818px] rounded-xl flex flex-col justify-center">
          <div>
            <div className="title-area flex flex-col justify-center items-center relative text-center mb-8">
              <h1 className="sm:text-5xl text-4xl font-bold leading-[74px] text-dark-gray">
                Verification Code
              </h1>
              <div className="shape sm:w-[377px] w-[270px] -mt-5 ml-5">
                <img src={titleShape} alt="shape" />
              </div>
            </div>
            <div className="input-area">
              <Otp />
              <div className="signin-area mb-3.5">
                <a
                  href="/update-password"
                  className="w-full rounded-[50px] h-[58px] mb-6 text-xl text-white font-bold flex justify-center bg-purple items-center"
                >
                  Continue
                </a>
              </div>
              <div className="resend-code flex justify-center">
                <p className="text-lg text-thin-light-gray font-normal">
                  Dont’t have an aceount ?
                  <a href="#" className="ml-2 text-dark-gray font-bold">
                    Please resend
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
