import React from "react";
import Icons from "../../Helpers/Icons";
import InputCom from "../../Helpers/Inputs/InputCom";

export default function PersonalInfoTab({
  datas,
  frstNmeHndlr,
  lstNmeHndlr,
  dscrphn,
  profileImg,
  coverImg,
  profileImgInput,
  browseProfileImg,
  profileImgChangHandler,
  coverImgInput,
  browseCoverImg,
  coverImgChangHandler,
}) {
  return (
    <div className="personal-info-tab w-full flex flex-col justify-between">
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex-1 sm:mr-10">
          <div className="fields w-full">
            {/* first name and last name */}
            <div className="xl:flex xl:space-x-7 mb-6">
              <div className="field w-full mb-6 xl:mb-0">
                <InputCom
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="First Name Here"
                  value={datas}
                  inputHandler={frstNmeHndlr}
                />
              </div>
              <div className="field w-full">
                <InputCom
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Last Name Here"
                  value={datas}
                  inputHandler={lstNmeHndlr}
                />
              </div>
            </div>
            {/* User Name */}
            <div className="field w-full mb-6">
              <InputCom
                label="User Name"
                type="text"
                name="userName"
                placeholder="@example"
                value={datas}
                inputHandler={lstNmeHndlr}
              />
            </div>          
          </div>
        </div>
        <div className="w-[232px] mb-10">
          <div className="update-profile w-full mb-9">
            <h1 className="text-xl tracking-wide font-bold text-dark-gray flex items-center mb-2">
              Update Profile
              <span className="ml-1">
                <Icons name="block-question" />
              </span>
            </h1>
            <p className="text-base text-thin-light-gray mb-5">
              Profile of at least Size
              <span className="ml-1 text-dark-gray">300x300</span>. Gifs work
              too.
              <span className="ml-1 text-dark-gray">Max 5mb</span>.
            </p>
            <div className="flex justify-center">
              <div className="w-full relative">
                <img
                  src={profileImg}
                  alt=""
                  className="sm:w-[198px] sm:h-[198px] w-[120px] h-[120px] rounded-full overflow-hidden object-cover"
                />
                <input
                  ref={profileImgInput}
                  onChange={(e) => profileImgChangHandler(e)}
                  type="file"
                  className="hidden"
                />
                <div
                  onClick={browseProfileImg}
                  className="w-[32px] h-[32px] absolute bottom-7 sm:right-10 right-[105px]  hover:bg-pink bg-dark-gray rounded-full cursor-pointer"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                      fill="white"
                    />
                    <path
                      d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-footer w-full">
        <div className="w-full h-[120px] border-t border-light-purple flex justify-end items-center">
          <div className="flex space-x-4 mr-9">
            <button
              type="button"
              className="text-18 text-light-red tracking-wide "
            >
              <span className="border-b border-light-red"> Cancel</span>
            </button>

            <button
              type="button"
              className="w-[152px] h-[46px] flex justify-center items-center btn-gradient text-base rounded-full text-white"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
