/* eslint-disable no-unused-expressions */

import React, { useState } from "react";
import Icons from "../../Helpers/Icons";
import PasswordSvg from "../PasswordSvg";

export default function ChangePasswordTab() {
  const [oldPass, setOldPass] = useState("hide-password");
  const [newPass, setNewPass] = useState("hide-password");
  const [confirmPass, setConfirmPass] = useState("hide-password");
  const showPassword = (value) => {
    const password = document.getElementById(`${value}`);
    if (value && value === "old_password") {
      if (password.type === "password") {
        password.type = "text";
        setOldPass("show-password");
      } else {
        password.type = "password";
        setOldPass("hide-password");
      }
    }
    if (value && value === "new_password") {
      if (password.type === "password") {
        password.type = "text";
        setNewPass("show-password");
      } else {
        password.type = "password";
        setNewPass("hide-password");
      }
    }
    if (value && value === "confirm_password") {
      if (password.type === "password") {
        password.type = "text";
        setConfirmPass("show-password");
      } else {
        password.type = "password";
        setConfirmPass("hide-password");
      }
    }
  };
  return (
    <div className="changePasswordTab w-full">
      <div className="w-full flex xl:flex-row flex-col-reverse space-x-5 xl:items-center">
        <div className="flex-1 mb-10">
          <div className="input-field mb-6">
            <label
              className="input-label text-dark-gray text-xl font-bold block mb-2.5"
              htmlFor="old_password"
            >
              Old Password
            </label>
            <div className="input-wrapper border border-light-purple w-full rounded-[50px] h-[58px] overflow-hidden relative ">
              <div className="absolute left-6 bottom-[17px] z-10">
                <Icons name="password" />
              </div>
              <input
                placeholder="● ● ● ● ● ●"
                className="input-field placeholder:text-base text-bese px-12 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                type="password"
                id="old_password"
              />
              <div
                className="absolute right-6 bottom-[17px] z-10 cursor-pointer"
                onClick={() => showPassword("old_password")}
              >
                <Icons name={oldPass} />
              </div>
            </div>
          </div>
          <div className="input-field mb-6">
            <label
              className="input-label text-dark-gray text-xl font-bold block mb-2.5"
              htmlFor="new_password"
            >
              New Password
            </label>
            <div className="input-wrapper border border-light-purple w-full rounded-[50px] h-[58px] overflow-hidden relative ">
              <div className="absolute left-6 bottom-[17px] z-10">
                <Icons name="password" />
              </div>
              <input
                placeholder="● ● ● ● ● ●"
                className="input-field placeholder:text-base text-bese px-12 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                type="password"
                id="new_password"
              />
              <div
                className="absolute right-6 bottom-[17px] z-10 cursor-pointer"
                onClick={() => showPassword("new_password")}
              >
                <Icons name={newPass} />
              </div>
            </div>
          </div>
          <div className="input-field mb-8">
            <label
              className="input-label text-dark-gray text-xl font-bold block mb-2.5"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <div className="input-wrapper border border-light-purple w-full rounded-[50px] h-[58px] overflow-hidden relative ">
              <div className="absolute left-6 bottom-[17px] z-10">
                <Icons name="password" />
              </div>
              <input
                placeholder="● ● ● ● ● ●"
                className="input-field placeholder:text-base text-bese px-12 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                type="password"
                id="confirm_password"
              />
              <div
                className="absolute right-6 bottom-[17px] z-10 cursor-pointer"
                onClick={() => showPassword("confirm_password")}
              >
                <Icons name={confirmPass} />
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 items-center">
            <button
              type="button"
              className="text-light-red text-18 tracking-wide border-b border-light-red "
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn-gradient tracking-wide rounded-full w-[173px] h-[46px] flex justify-center items-center"
            >
              <span className="font-thin text-18 tracking-wide antialiased text-white">
                Change Password
              </span>
            </button>
          </div>
        </div>
        <div className="w-[440px] sm:flex hidden justify-end">
          <PasswordSvg />
        </div>
      </div>
    </div>
  );
}
