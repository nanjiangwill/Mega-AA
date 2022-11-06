import React from "react";
import loginThumb from "../../assets/images/auth-thumb.svg";
import logo from "../../assets/images/logo-gani-3.png";

export default function LoginLayout({ slogan, children }) {
  const checkScreenHeight = window.screen.height;
  let screen = "";
  if (checkScreenHeight <= 950) {
    screen = "h-screen";
    // screen = "h-[950px]";
  } else {
    screen = "h-screen";
  }
  return (
    <div className="layout-wrapper">
      <div className={`main-wrapper w-full ${screen}`}>
        <div className="flex w-full h-full">
          <div className="xl:flex hidden w-1/2 h-full p-[70px]  flex-col justify-between primary-gradient">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="thumbnail flex justify-center">
              {/* <img src={loginThumb} alt="login-thumb" /> */}
            </div>
            <div className="article w-[600px]">
              <p className="text-[60px] font-bold leading-[72px] text-white">
                {slogan}
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {children && children}
          </div>
        </div>
      </div>
    </div>
  );
}
