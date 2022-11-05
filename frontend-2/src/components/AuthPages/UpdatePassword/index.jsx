import React, { useState } from "react";
import titleShape from "../../../assets/images/shape/title-shape-two.svg";
import InputCom from "../../Helpers/Inputs/InputCom";
import AuthLayout from "../AuthLayout";
import ThankYou from "../ThankYou";

export default function UpdatePassword() {
  const [updated, setValue] = useState(false);
  const [message, setMessage] = useState(false);
  const updatePassword = () => {
    setValue(!updated);
    setTimeout(() => {
      setMessage(!message);
    }, 100);
  };

  return (
    <>
      <AuthLayout
        slogan="Welcome to  Nftmax
Admin Panel"
      >
        {updated === false ? (
          <div className="content-wrapper update-password-section xl:bg-white w-full 2xl:h-[818px] xl:h-[600px] sm:w-auto sm:px-[70px] px-5 2xl:px-[100px] rounded-xl flex flex-col justify-center">
            <div>
              <div className="title-area relative flex flex-col justify-center items-center mb-7">
                <h1 className="sm:text-5xl text-4xl font-bold leading-[74px] text-dark-gray">
                  Update Password
                </h1>
                {/* w-[341px] absolute top-14 left-12 */}
                <div className="shape sm:w-[341px] w-[270px] -mt-5 sm:-mt-1 ml-5">
                  <img src={titleShape} alt="shape" />
                </div>
              </div>
              <div className="input-area">
                <div className="input-item mb-5">
                  <InputCom
                    placeholder="*********"
                    label="Old Password"
                    name="password"
                    type="password"
                    iconName="password"
                  />
                </div>
                <div className="input-item mb-5">
                  <InputCom
                    placeholder="*********"
                    label="New Password"
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
                <div className="signin-area mb-3.5">
                  <button
                    onClick={updatePassword}
                    type="button"
                    className="w-full rounded-[50px] mb-5 h-[58px] text-xl text-white font-bold flex justify-center bg-purple items-center"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ThankYou className={`thankyou-section ${message ? "active" : ""}`} />
        )}
      </AuthLayout>
    </>
  );
}
