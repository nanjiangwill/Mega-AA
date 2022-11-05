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
            {/* External Links */}
            <div className="field w-full mb-6">
              <InputCom
                label="External Links"
                type="text"
                name="link"
                placeholder="https:yoursite.lo/imte/item_name123"
                value={datas}
                inputHandler={lstNmeHndlr}
              />
            </div>
            {/* bio */}
            <div className="field w-full mb-6">
              <h1 className="field-title">Bio </h1>
              <div className="input-field mt-2">
                <div className="input-wrapper w-full ">
                  <textarea
                    value={datas}
                    onChange={(e) => dscrphn(e)}
                    placeholder="provide a detailed description of your item."
                    rows="7"
                    className="w-full h-full px-7 py-4  border border-light-purple rounded-[20px] text-dark-gray bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            {/* email */}
            <div className="field w-full mb-6">
              <InputCom
                label="Email"
                type="email"
                name="email"
                placeholder="https:yoursite.lo/imte/item_name123"
                value={datas}
                inputHandler={lstNmeHndlr}
              />
              <p className="text-thin-light-gray text-sm tracking-wide mt-3">
                Your email for marketplace notifications
              </p>
            </div>
          </div>
          {/* border line */}
          <div className="w-full h-[1px] bg-[#E3E4FE] mb-6"></div>
          <div className="social-connetion w-full">
            <div className="mb-6">
              {/* headings */}
              <div className="mb-4">
                <h1 className="text-xl text-dark-gray tracking-wide font-bold mb-1.5">
                  Social Connections
                </h1>
                <p className="text-sm tracking-wide text-thin-light-gray">
                  Help collectors verify your account by connecting Twitter
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <div className="flex space-x-2.5 items-center">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#E0F2FD] flex justify-center items-center">
                    <span>
                      <svg
                        width="23"
                        height="19"
                        viewBox="0 0 23 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 17.0066C2.46188 17.0803 4.69827 16.4768 6.78777 14.9218C4.65896 14.6476 3.19321 13.6316 2.38327 11.5697C3.08253 11.5697 3.68869 11.5697 4.29588 11.5697C2.09881 10.6971 0.869935 9.1764 0.703396 6.7914C1.37576 6.9763 1.99951 7.14666 2.62222 7.31805C0.666157 5.02758 0.227569 2.9085 1.41507 0.9307C4.01246 3.90364 7.22015 5.64253 11.155 5.89391C11.155 5.44101 11.1405 5.04628 11.1571 4.65259C11.2409 2.67998 12.208 1.25376 13.9686 0.46118C15.6847 -0.31166 17.3821 -0.119489 18.8665 1.08548C19.3403 1.47086 19.7509 1.5311 20.2702 1.3192C20.9519 1.04081 21.6367 0.77177 22.3866 0.471567C22.0546 1.52383 21.3605 2.23746 20.6519 3.0103C21.3998 2.80774 22.1476 2.60622 22.8955 2.40367C22.9307 2.43483 22.9659 2.46599 23.001 2.49715C22.4218 3.10587 21.8818 3.76029 21.2498 4.30564C20.8691 4.63389 20.7191 4.95798 20.7067 5.44101C20.6074 9.13796 19.3444 12.3727 16.7698 15.0361C14.2769 17.6143 11.2109 18.8836 7.62874 18.9917C4.97239 19.0716 2.5105 18.4775 0.217225 17.1458C0.141714 17.1032 0.071374 17.0533 0 17.0066Z"
                          fill="#33AAF2"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-18 tracking-wide">Twitter</p>
                </div>
                <div>
                  <p className="text-18 tracking-wide text-[#33AAF2] border-b border-[#33AAF2]">
                    Cannect
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-10">
              {/* headings */}
              <div className="sm:flex justify-between items-center mb-4">
                <div className="mr-16 mb-5 sm:mb-0">
                  <h1 className="text-xl text-dark-gray tracking-wide font-bold mb-1.5">
                    Verification
                  </h1>
                  <p className="text-sm tracking-wide text-thin-light-gray leading-7">
                    Proceed with verification process to get more visibility and
                    gain trust on NFTMAX Marketplace.
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-[136px] h-[46px] flex justify-center items-center text-18 tracking-wide rounded-full text-white bg-light-green hover:bg-green-600 transition duration-300 ease-in-out"
                  >
                    Get Verified
                  </a>
                </div>
              </div>
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
          <div className="update-profile w-full">
            <h1 className="text-xl tracking-wide font-bold text-dark-gray flex items-center mb-2">
              Update Cover
              <span className="ml-1">
                <Icons name="block-question" />
              </span>
            </h1>
            <p className="text-base text-thin-light-gray mb-5">
              Cover of at least Size
              <span className="ml-1 text-dark-gray">1170x920</span>.
            </p>
            <div className="flex justify-center">
              <div className="w-full relative">
                <img
                  src={coverImg}
                  alt=""
                  className="w-full h-[120px] rounded-lg overflow-hidden object-cover"
                />
                <input
                  ref={coverImgInput}
                  onChange={(e) => coverImgChangHandler(e)}
                  type="file"
                  className="hidden"
                />
                <div
                  onClick={browseCoverImg}
                  className="w-[32px] h-[32px] absolute -bottom-4 right-4 bg-dark-gray hover:bg-pink rounded-full cursor-pointer"
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
              Upadate Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
