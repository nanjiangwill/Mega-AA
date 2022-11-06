import React, { useState } from "react";
// import loginThumb from "../../../assets/images/auth-thumb.svg";
import googleLogo from "../../../assets/images/Worldcoin-logo.png";
import logo from "../../../assets/images/logo-gani-3.png";
import titleShape from "../../../assets/images/shape/title-shape-two.svg";
import InputCom from "../../Helpers/Inputs/InputCom";

export default function SignUp() {
  const [checked, setValue] = useState(false);
  const rememberMe = () => {
    setValue(!checked);
  };
  return (
    <>
      <div className="layout-wrapper">
        <div className="main-wrapper w-full xl:h-screen h-full xl:py-0 py-12">
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
                Cross-chain AA Wallet with Modular Security
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="content-wrapper xl:bg-white xl:px-7 px-5 2xl:px-[100px] h-[840px] rounded-xl flex flex-col justify-center">
                <div>
                  <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                    <h1 className="sm:text-5xl text-4xl font-bold  text-dark-gray leading-2">
                      Create Account
                    </h1>
                    <div className="shape sm:w-[377px] w-[280px] -mt-2.5 ml-5">
                      <img src={titleShape} alt="shape" />
                    </div>
                  </div>
                  <div className="input-area">
                    <div className="input-fl-name mb-5 sm:flex w-full sm:space-x-6 ">
                      <div className="input-item sm:w-1/2 w-full mb-5 sm:mb-0">
                        <InputCom
                          placeholder="Adam"
                          label="First Name"
                          name="first_name"
                          type="text"
                          iconName="people"
                        />
                      </div>
                      <div className="input-item flex-1">
                        <InputCom
                          placeholder="Wathon"
                          label="Last Name"
                          name="Last_name"
                          type="text"
                          iconName="people"
                        />
                      </div>
                    </div>
                    <div className="input-item mb-5">
                      <InputCom
                        placeholder="test@gani.com"
                        label="Email Address"
                        name="email"
                        type="email"
                        iconName="message"
                      />
                    </div>
                    <div className="input-item mb-5">
                      <InputCom
                        placeholder="*********"
                        label="Password"
                        name="password"
                        type="password"
                        iconName="password"
                      />
                    </div>
                    <div className="input-item mb-5">
                      <InputCom
                        placeholder="*********"
                        label="Re-enter Password"
                        name="password"
                        type="password"
                        iconName="password"
                      />
                    </div>
                    <div className="forgot-password-area flex justify-between items-center mb-6">
                      <div className="remember-checkbox flex items-center space-x-2.5">
                        <button
                          onClick={rememberMe}
                          type="button"
                          className="w-5 h-5 text-dark-gray flex justify-center items-center border border-light-gray"
                        >
                          {checked && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                        <span
                          onClick={rememberMe}
                          className="text-base text-dark-gray"
                        >
                          I agree all
                          <a
                            href="#"
                            className="text-base text-purple mx-1 inline-block"
                          >
                            tarm and condition
                          </a>
                          in Neftmax.
                        </span>
                      </div>
                    </div>
                    <div className="signin-area mb-1">
                      <a
                        href="#"
                        className="w-full rounded-[50px] mb-5 h-[58px] text-xl text-white font-bold flex justify-center bg-purple items-center"
                      >
                        Sign Up
                      </a>
                      <a
                        href="#"
                        className="w-full border border-light-purple rounded-[50px] h-[58px] flex justify-center bg-[#FAFAFA] items-center"
                      >
                        <img
                          className="mr-3"
                          src={googleLogo}
                          alt="google logo"
                          width="40"
                        />
                        <span className="text-lg text-thin-light-gray font-normal">
                          Sign Up with Worldcoin
                        </span>
                      </a>
                    </div>
                    <div className="signup-area flex justify-center">
                      <p className="text-lg text-thin-light-gray font-normal">
                        Already have aceount?
                        <a href="/login" className="ml-2 text-dark-gray">
                          Log In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
