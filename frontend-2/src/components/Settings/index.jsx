import React, { useRef, useState } from "react";
import cover from "../../assets/images/profile-info-cover.png";
import profile from "../../assets/images/profile-info-profile.png";
import faq from "../../data/faq.json";
import Icons from "../Helpers/Icons";
import Layout from "../Partials/Layout";
import ChangePasswordTab from "./Tabs/ChangePasswordTab";
import FaqTab from "./Tabs/FaqTab";
import LoginActivityTab from "./Tabs/LoginActivityTab";
import NotificationSettingTab from "./Tabs/NotificationSettingTab";
import PaymentMathodsTab from "./Tabs/PaymentMathodsTab";
import PersonalInfoTab from "./Tabs/PersonalInfoTab";
import TermsConditionTab from "./Tabs/TermsConditionTab";

export default function Settings() {
  const tabs = [
    {
      id: 1,
      name: "personal",
    },
    {
      id: 2,
      name: "payment",
    },
    {
      id: 3,
      name: "notification",
    },
    {
      id: 4,
      name: "login_activity",
    },
    {
      id: 5,
      name: "password",
    },
    {
      id: 6,
      name: "faq",
    },
    {
      id: 7,
      name: "terms",
    },
  ];
  const [tab, setTab] = useState(tabs[0].name);
  const tabHandler = (value) => {
    setTab(value);
  };
  const [profileImg, setProfileImg] = useState(profile);
  const [coverImg, setCoverImg] = useState(cover);

  // profile img
  const profileImgInput = useRef(null);
  const browseProfileImg = () => {
    profileImgInput.current.click();
  };
  const profileImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setProfileImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };
  // cover img
  const coverImgInput = useRef(null);
  const browseCoverImg = () => {
    coverImgInput.current.click();
  };
  const coverImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setCoverImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };

  // fab tab
  const faqData = faq.datas;
  return (
    <>
      <Layout>
        <div className="settings-wrapper w-full relative mb-10">
          <div className="main-wrapper w-full">
            {/* heading */}
            <div className="heading w-full mb-6">
              <h1 className="text-26 font-bold text-dark-gray antialiased">
                Settings
              </h1>
            </div>
            <div className="content-container w-full pt-10 rounded-2xl bg-white">
              <div className="content-heading w-full mb-8 lg:px-10 px-4">
                <h1 className="text-xl font-bold text-dark-gray antialiased">
                  Parsonal Informaiton
                </h1>
              </div>
              <div className="content-body w-full lg:flex lg:px-10 px-4">
                <div className="content-tab-items lg:w-[230px] w-full mr-2">
                  <ul className="overflow-hidden mb-10 lg:mb-0">
                    <li
                      onClick={() => tabHandler("personal")}
                      className={`flex lg:space-x-4 space-x-2 hover:text-purple transition-all duration-300 ease-in-out items-center cursor-pointer lg:mb-11 mb-2 mr-6 lg:mr-0 float-left lg:float-none overflow-hidden ${
                        tab === "personal"
                          ? "text-purple"
                          : " text-thin-light-gray"
                      }`}
                    >
                      <div>
                        <Icons name="people-hover" />
                      </div>
                      <div>
                        <p className="text-18 tracking-wide">Parsonal Info</p>
                      </div>
                    </li>
                    <li
                      onClick={() => tabHandler("payment")}
                      className={`flex lg:space-x-4 space-x-2 hover:text-purple transition-all duration-300 ease-in-out items-center cursor-pointer lg:mb-11 mb-2 mr-6 lg:mr-0 float-left lg:float-none overflow-hidden ${
                        tab === "payment"
                          ? "text-purple"
                          : " text-thin-light-gray"
                      }`}
                    >
                      <div>
                        <Icons name="bank-card" />
                      </div>
                      <div>
                        <p className="text-18 tracking-wide">Payment Method</p>
                      </div>
                    </li>
                    <li
                      onClick={() => tabHandler("notification")}
                      className={`flex lg:space-x-4 space-x-2 hover:text-purple transition-all duration-300 ease-in-out items-center cursor-pointer lg:mb-11 mb-2 mr-6 lg:mr-0 float-left lg:float-none overflow-hidden ${
                        tab === "notification"
                          ? "text-purple"
                          : " text-thin-light-gray"
                      }`}
                    >
                      <div>
                        <Icons name="notification-setting" />
                      </div>
                      <div>
                        <p className="text-18 tracking-wide">
                          Notifiction Setting
                        </p>
                      </div>
                    </li>
                    <li
                      onClick={() => tabHandler("login_activity")}
                      className={`flex lg:space-x-4 space-x-2 hover:text-purple transition-all duration-300 ease-in-out items-center cursor-pointer lg:mb-11 mb-2 mr-6 lg:mr-0 float-left lg:float-none overflow-hidden ${
                        tab === "login_activity"
                          ? "text-purple"
                          : " text-thin-light-gray"
                      }`}
                    >
                      <div>
                        <Icons name="login-activity" />
                      </div>
                      <div>
                        <p className="text-18 tracking-wide">Login Activity</p>
                      </div>
                    </li>
                    <li
                      onClick={() => tabHandler("password")}
                      className={`flex lg:space-x-4 space-x-2 hover:text-purple transition-all duration-300 ease-in-out items-center cursor-pointer lg:mb-11 mb-2 mr-6 lg:mr-0 float-left lg:float-none overflow-hidden ${
                        tab === "password"
                          ? "text-purple"
                          : " text-thin-light-gray"
                      }`}
                    >
                      <div>
                        <Icons name="password-hover" />
                      </div>
                      <div>
                        <p className="text-18 tracking-wide">Change Password</p>
                      </div>
                    </li>
                    <li
                      onClick={() => tabHandler("faq")}
                      className={`flex lg:space-x-4 space-x-2 hover:text-purple transition-all duration-300 ease-in-out items-center cursor-pointer lg:mb-11 mb-2 mr-6 lg:mr-0 float-left lg:float-none overflow-hidden ${
                        tab === "faq" ? "text-purple" : " text-thin-light-gray"
                      }`}
                    >
                      <div>
                        <Icons name="block-question" />
                      </div>
                      <div>
                        <p className="text-18 tracking-wide">FAQ</p>
                      </div>
                    </li>
                    <li
                      onClick={() => tabHandler("terms")}
                      className={`flex lg:space-x-4 space-x-2 hover:text-purple transition-all duration-300 ease-in-out items-center cursor-pointer lg:mb-11 mb-2 mr-6 lg:mr-0 float-left lg:float-none overflow-hidden ${
                        tab === "terms"
                          ? "text-purple"
                          : " text-thin-light-gray"
                      }`}
                    >
                      <div>
                        <Icons name="page-right" />
                      </div>
                      <div>
                        <p className="text-18 tracking-wide">
                          Terms and Conditions
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-[1px] bg-[#E3E4FE] mr-10"></div>
                <div className="content-body-items flex-1">
                  {tab === "personal" && (
                    <div className="tab-item">
                      <PersonalInfoTab
                        profileImg={profileImg}
                        coverImg={coverImg}
                        browseProfileImg={browseProfileImg}
                        profileImgInput={profileImgInput}
                        profileImgChangHandler={profileImgChangHandler}
                        coverImgChangHandler={coverImgChangHandler}
                        browseCoverImg={browseCoverImg}
                        coverImgInput={coverImgInput}
                      />
                    </div>
                  )}
                  {tab === "payment" && (
                    <div className="tab-item">
                      <PaymentMathodsTab />
                    </div>
                  )}
                  {tab === "notification" && (
                    <div className="tab-item">
                      <NotificationSettingTab />
                    </div>
                  )}
                  {tab === "login_activity" && <LoginActivityTab />}
                  {tab === "password" && <ChangePasswordTab />}
                  {tab === "faq" && <FaqTab datas={faqData} />}
                  {tab === "terms" && <TermsConditionTab />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
