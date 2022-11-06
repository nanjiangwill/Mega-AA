import React from "react";
import titleShape from "../../../assets/images/shape/title-shape-two.svg";
import InputCom from "../../Helpers/Inputs/InputCom";
import AuthLayout from "../AuthLayout";

export default function ForgotPassword() {
  return (
    <>
      <AuthLayout
        slogan="Welcome to  Nftmax
Admin Panel"
      >
        <div className="content-wrapper xl:bg-white xl:px-[70px] w-full sm:w-auto   2xl:px-[100px] h-[818px] rounded-xl ">
          <div className="flex flex-col justify-center w-full h-full px-5">
            <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
              <h1 className="sm:text-5xl text-4xl font-bold sm:leading-[74px] text-dark-gray">
                Forget Password
              </h1>
              <div className="shape sm:w-[377px] w-[270px] -mt-1 ml-5">
                <img src={titleShape} alt="shape" />
              </div>
            </div>
            <div className="input-area">
              <div className="input-item mb-5">
                <InputCom
                  placeholder="test@gani.com"
                  label="Email Address"
                  name="email"
                  type="email"
                  iconName="message"
                />
              </div>
              <div className="signin-area mb-3.5">
                <a
                  href="/verify-you"
                  className="w-full rounded-[50px] mb-5 h-[58px] text-xl text-white font-bold flex justify-center bg-purple items-center"
                >
                  Send Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
