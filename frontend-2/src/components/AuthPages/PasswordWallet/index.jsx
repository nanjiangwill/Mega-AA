import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import titleShape from "../../../assets/images/shape/text-shape-three.svg";
import AuthLayout from "../AuthLayout";
import InputCom from "../../Helpers/Inputs/InputCom";

export default function PasswordWallet() {
  const [password, setPassword] = useState("");
  const [wallet, setWallet] = useState();

  const [progress, setProgress] = useState(); // undefined, 0, 10, 20 ... 100
  async function createWallet() {
    setProgress(0);
    const _wallet = ethers.Wallet.createRandom();
    setWallet(_wallet);
    const keystore = await _wallet.encrypt(password, (progress) => {
      // only 10 rerenders (to prevent performance issues)
      setProgress(Math.floor(progress * 10) * 10);
    });
    localStorage.setItem("keystore", keystore);
  }
  async function loadWallet() {
    setProgress(0);
    const keystore = localStorage.getItem("keystore");
    if (!keystore) {
      throw new Error("No keystore found");
    }
    const _wallet = await ethers.Wallet.fromEncryptedJson(
      keystore,
      password,
      (progress) => {
        // only 10 rerenders (to prevent performance issues)
        setProgress(Math.floor(progress * 10) * 10);
      }
    );
    setWallet(_wallet);
  }

  const [localKeystoreExists, setLocalKeystoreExists] = useState(); // boolean
  useEffect(() => {
    setLocalKeystoreExists(!!localStorage.getItem("keystore"));
  }, []);

  return (
    <>
      <AuthLayout
        slogan="Welcome to  Nftmax
Admin Panel"
      >
        {localKeystoreExists === undefined ? (
          <></>
        ) : !localKeystoreExists ? (
          <div className="content-wrapper xl:bg-white w-full sm:w-auto px-5 xl:px-[70px] 2xl:px-[100px] h-[818px] rounded-xl flex flex-col justify-center">
            <div>
              <div className="title-area flex flex-col justify-center items-center relative text-center mb-8">
                <h1 className="sm:text-5xl text-4xl font-bold leading-[74px] text-dark-gray">
                  Create Wallet
                </h1>
                <div className="shape sm:w-[377px] w-[270px] -mt-5 ml-5">
                  <img src={titleShape} alt="shape" />
                </div>
              </div>

              <div className="input-area">
                {progress === undefined || progress < 100 ? (
                  <>
                    <InputCom
                      disabled={progress < 100}
                      placeholder="Enter strong password"
                      label="Password"
                      name="password"
                      type="password"
                      iconName="message"
                      inputHandler={(event) => setPassword(event.target.value)}
                      classes={["mb-4"]}
                    />
                    <div className="signin-area mb-3.5">
                      <button
                        onClick={createWallet}
                        disabled={progress > 0}
                        className="w-full rounded-[50px] h-[58px] mb-6 text-xl text-white font-bold flex justify-center bg-purple items-center"
                      >
                        {progress === undefined
                          ? "Create"
                          : progress < 100
                          ? `Creating ${progress}%`
                          : "Created!"}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    Congratulations your wallet is created!{" "}
                    {wallet ? wallet.address : ""}
                    <br />
                    Now you can load your wallet. Refresh this page.
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="content-wrapper xl:bg-white w-full sm:w-auto px-5 xl:px-[70px] 2xl:px-[100px] h-[818px] rounded-xl flex flex-col justify-center">
            <div>
              <div className="title-area flex flex-col justify-center items-center relative text-center mb-8">
                <h1 className="sm:text-5xl text-4xl font-bold leading-[74px] text-dark-gray">
                  Load Wallet
                </h1>
                <div className="shape sm:w-[377px] w-[270px] -mt-5 ml-5">
                  <img src={titleShape} alt="shape" />
                </div>
              </div>

              <div className="input-area">
                {progress === undefined || progress < 100 ? (
                  <>
                    <InputCom
                      disabled={progress > 0}
                      placeholder="Enter wallet password"
                      label="Password"
                      name="password"
                      type="password"
                      iconName="message"
                      inputHandler={(event) => setPassword(event.target.value)}
                      classes={["mb-4"]}
                    />
                    <div className="signin-area mb-3.5">
                      <button
                        onClick={loadWallet}
                        disabled={progress > 0}
                        className="w-full rounded-[50px] h-[58px] mb-6 text-xl text-white font-bold flex justify-center bg-purple items-center"
                      >
                        {progress === undefined
                          ? "Load"
                          : progress < 100
                          ? `Loading ${progress}%`
                          : "Loaded!"}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    Congratulations your wallet is loaded! Now you can use the
                    app. {wallet ? wallet.address : ""}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </AuthLayout>
    </>
  );
}
