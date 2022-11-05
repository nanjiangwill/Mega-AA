import React from "react";
import collection1 from "../../assets/images/choose-collection-1.png";
import collection2 from "../../assets/images/choose-collection-2.png";
import collection3 from "../../assets/images/choose-collection-3.png";
import InputCom from "../Helpers/Inputs/InputCom/index";
import SwitchCom from "../Helpers/SwitchCom";
import GradientIcons from "./GradientIcons";

export default function ProductUploadField({
  datas = {},
  cpt,
  inh,
  linkh,
  dscrphn,
  priceHndlr,
  roltsHndlr,
  keyHndlr,
  valueHndlr,
  unlckPrchesHndlr,
}) {
  return (
    <div className="w-full lg:pl-[41px]">
      <div className="fields w-full">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="field w-full mb-6">
            <h1 className="field-title">Put on marketplace</h1>
            <p className="text-thin-light-gray text-base tracking-wide font-medium mb-3">
              Enter price to allow users instantly purchase your NFT
            </p>

            <div className="items sm:flex sm:space-x-5">
              <div
                className="item sm:w-[120px] w-full h-[130px] relative mb-5 sm:mb-0"
                onClick={() => cpt("fixed")}
              >
                <div
                  className={`w-full h-full bg-white rounded-md z-20 relative  flex justify-center items-center ${
                    datas.priceType === "fixed"
                      ? ""
                      : "border border-light-purple"
                  }`}
                >
                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`w-[68px] h-[68px]  rounded-full flex justify-center items-center ${
                        datas.priceType === "fixed"
                          ? "primary-gradient"
                          : "bg-[#F2E8FA]"
                      }`}
                    >
                      <GradientIcons
                        name={`${
                          datas.priceType === "fixed"
                            ? "doller"
                            : "gradient-doller"
                        }`}
                      />
                    </div>
                    <p className="text-center text-base tracking-wide mt-1 text-dark-gray">
                      Fixed price
                    </p>
                  </div>
                </div>
                {datas.priceType === "fixed" && (
                  <div
                    className="sm:w-[122px]  w-full h-[132px] primary-gradient rounded-md absolute z-10"
                    style={{ top: "-1px", left: "-1px" }}
                  ></div>
                )}
              </div>
              <div
                className="item sm:w-[120px] w-full h-[130px] relative mb-5 sm:mb-0"
                onClick={() => cpt("bids")}
              >
                <div
                  className={`w-full h-full bg-white rounded-md z-20 relative  flex justify-center items-center ${
                    datas.priceType === "bids"
                      ? ""
                      : "border border-light-purple"
                  }`}
                >
                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`w-[68px] h-[68px]  rounded-full flex justify-center items-center ${
                        datas.priceType === "bids"
                          ? "primary-gradient"
                          : "bg-[#F2E8FA]"
                      }`}
                    >
                      <GradientIcons
                        name={`${
                          datas.priceType === "bids"
                            ? "hammer"
                            : "gradient-hammer"
                        }`}
                      />
                    </div>
                    <p className="text-center text-base tracking-wide mt-1 text-dark-gray">
                      Open for bids
                    </p>
                  </div>
                </div>
                {datas.priceType === "bids" && (
                  <div
                    className="sm:w-[122px]  w-full h-[132px] primary-gradient rounded-md absolute z-10"
                    style={{ top: "-1px", left: "-1px" }}
                  ></div>
                )}
              </div>
              <div
                className="item sm:w-[120px] w-full h-[130px] relative mb-5 sm:mb-0"
                onClick={() => cpt("auction")}
              >
                <div
                  className={`w-full h-full bg-white rounded-md z-20 relative  flex justify-center items-center ${
                    datas.priceType === "auction"
                      ? ""
                      : "border border-light-purple"
                  }`}
                >
                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`w-[68px] h-[68px]  rounded-full flex justify-center items-center ${
                        datas.priceType === "auction"
                          ? "primary-gradient"
                          : "bg-[#F2E8FA]"
                      }`}
                    >
                      <GradientIcons
                        name={`${
                          datas.priceType === "auction"
                            ? "timeout"
                            : "gradient-timeout"
                        }`}
                      />
                    </div>
                    <p className="text-center text-base tracking-wide mt-1 text-dark-gray">
                      Timed auction
                    </p>
                  </div>
                </div>
                {datas.priceType === "auction" && (
                  <div
                    className="sm:w-[122px]  w-full h-[132px] primary-gradient rounded-md absolute z-10"
                    style={{ top: "-1px", left: "-1px" }}
                  ></div>
                )}
              </div>
            </div>
          </div>
          <div className="field w-full mb-6">
            <h1 className="field-title">Item Name </h1>
            <div className="input-field mt-2">
              <InputCom
                type="text"
                name="name"
                placeholder="RaidParty Fighters"
                inputHandler={inh}
                value={datas.itemName}
              />
            </div>
          </div>
          <div className="field w-full mb-6">
            <h1 className="field-title">Exter link </h1>
            <div className="input-field mt-2">
              <InputCom
                type="text"
                name="link"
                inputHandler={linkh}
                value={datas.link}
                placeholder="https:yoursite.lo/imte/item_name123"
              />
            </div>
          </div>
          <div className="field w-full mb-6">
            <h1 className="field-title">Description </h1>
            <div className="input-field mt-2">
              <div className="input-wrapper w-full ">
                <textarea
                  value={datas.description}
                  onChange={(e) => dscrphn(e)}
                  placeholder="provide a detailed description of your item."
                  rows="7"
                  className="w-full h-full px-7 py-4  border border-light-purple rounded-[20px] text-dark-gray bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="field w-full mb-6">
            <h1 className="field-title">Instant sale price </h1>
            <div className="input-field my-2">
              <div className="input-wrapper border border-light-purple w-full rounded-[50px] h-[58px] flex items-center overflow-hidden">
                <input
                  value={datas.price}
                  onChange={(e) => priceHndlr(e)}
                  placeholder="enter the price for which the item will be instantly sold"
                  className="input-field placeholder:text-base text-bese px-6 text-dark-gray w-10/12 h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                  type="number"
                />
                <div className="w-[1px] h-[33px] bg-light-purple"></div>
                <div className="flex-1 flex h-full justify-center items-center bg-[#FAFAFA]">
                  <div className="flex space-x-1 items-center">
                    <span className="text-dark-gray text-base">ETH</span>
                    <span>
                      <svg
                        width="13"
                        height="6"
                        viewBox="0 0 13 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.7"
                          d="M12.7488 0.247421C12.6691 0.169022 12.5744 0.106794 12.4699 0.0643287C12.3655 0.0218632 12.2535 0 12.1403 0C12.0272 0 11.9152 0.0218632 11.8107 0.0643287C11.7063 0.106794 11.6115 0.169022 11.5318 0.247421L7.60655 4.07837C7.52688 4.15677 7.43209 4.219 7.32765 4.26146C7.22321 4.30393 7.11119 4.32579 6.99805 4.32579C6.88491 4.32579 6.77289 4.30393 6.66845 4.26146C6.56401 4.219 6.46922 4.15677 6.38954 4.07837L2.46427 0.247421C2.3846 0.169022 2.28981 0.106794 2.18537 0.0643287C2.08093 0.0218632 1.96891 0 1.85577 0C1.74263 0 1.63061 0.0218632 1.52617 0.0643287C1.42173 0.106794 1.32694 0.169022 1.24727 0.247421C1.08764 0.404141 0.998047 0.616141 0.998047 0.837119C0.998047 1.0581 1.08764 1.2701 1.24727 1.42682L5.18111 5.26613C5.6632 5.73605 6.31669 6 6.99805 6C7.6794 6 8.33289 5.73605 8.81498 5.26613L12.7488 1.42682C12.9084 1.2701 12.998 1.0581 12.998 0.837119C12.998 0.616141 12.9084 0.404141 12.7488 0.247421Z"
                          fill="#374557"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-base tracking-wide text-dark-gray">
              <p>
                <span className="text-thin-light-gray">Service fee :</span> 1.5%
              </p>
              <p>
                <span className="text-thin-light-gray">You will Receive :</span>
                .29 ETH $120.56
              </p>
            </div>
          </div>
          <div className="field w-full mb-6">
            <h1 className="field-title">Royalties</h1>
            <div className="input-field my-2">
              <div className="mb-2">
                <InputCom
                  type="text"
                  name="link"
                  inputHandler={roltsHndlr}
                  value={datas.royalties}
                  placeholder="0%"
                />
              </div>
              <p className="text-thin-light-gray text-sm tracking-wide">
                Suggested: 10%, 20%, 30%
              </p>
            </div>
          </div>

          <div className="field w-full mb-6">
            <h1 className="field-title">
              Properties
              <span className="text-thin-light-gray font-normal ml-2">
                (Optional)
              </span>
            </h1>
            <div className="input-field my-2">
              <div className="mb-2">
                <div className="sm:flex sm:space-x-8">
                  <div className="sm:w-1/2 w-full mb-2 sm:mb-0">
                    <InputCom
                      type="text"
                      name="link"
                      inputHandler={keyHndlr}
                      value={datas.propertiesKey}
                      placeholder="Enter key"
                    />
                  </div>
                  <div className="flex-1">
                    <InputCom
                      type="text"
                      name="link"
                      inputHandler={valueHndlr}
                      value={datas.propertiesValue}
                      placeholder="Enter Value"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="field w-full mb-6">
            <h1 className="field-title">Choose collection</h1>
            <div className="input-field mt-2">
              <div className="sm:flex sm:space-x-5">
                {/* create collection */}
                <div className="sm:w-[100px] h-[100px] w-full mb-2 sm:mb-0 rounded-[4px] bg-[#FAFAFA] border border-light-purple flex justify-center items-center cursor-pointer">
                  <div>
                    <span className="mb-1 flex justify-center">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 12.5125C25.019 19.39 19.3853 24.9989 12.5054 25.0001C5.6017 25.0012 -0.0153836 19.3615 3.1653e-05 12.471C0.0154469 5.59949 5.63965 -0.0224583 12.5469 6.7456e-05C19.396 0.0225932 25.0297 5.61846 25 12.5125ZM14.3007 17.2097C14.3007 16.3324 14.3007 15.4551 14.3007 14.5778C14.3007 14.3525 14.3007 14.3525 14.5224 14.3525C16.2299 14.3525 17.9387 14.3525 19.6462 14.3513C19.7339 14.3513 19.8241 14.349 19.9106 14.3335C20.832 14.1711 21.4581 13.327 21.3798 12.356C21.3099 11.4775 20.4988 10.733 19.6011 10.7306C17.9031 10.7271 16.2062 10.7294 14.5082 10.7294C14.2995 10.7294 14.2995 10.7294 14.2995 10.5243C14.2995 8.7851 14.2995 7.04588 14.2983 5.30784C14.2983 5.22959 14.2983 5.15016 14.2805 5.07547C14.0588 4.16021 13.218 3.59588 12.3465 3.68599C11.3836 3.78676 10.697 4.55026 10.697 5.48212C10.697 7.14309 10.697 8.80288 10.697 10.4639C10.697 10.7555 10.7243 10.7294 10.4243 10.7294C8.79504 10.7294 7.16457 10.7401 5.5353 10.7259C4.40524 10.7152 3.60483 11.6293 3.63922 12.6216C3.67242 13.5451 4.45623 14.3513 5.37996 14.3513C7.08275 14.3513 8.78555 14.3513 10.4883 14.3513C10.697 14.3513 10.697 14.3525 10.697 14.5576C10.697 16.2387 10.697 17.9211 10.697 19.6022C10.697 19.6757 10.6935 19.7492 10.703 19.8215C10.8761 21.1256 12.2884 21.8358 13.4255 21.1719C13.9817 20.847 14.3066 20.3586 14.3018 19.684C14.2947 18.86 14.3007 18.0349 14.3007 17.2097Z"
                          fill="#374557"
                          fillOpacity="0.6"
                        />
                      </svg>
                    </span>
                    <span className="text-thin-light-gray text-center">
                      Crteate
                    </span>
                  </div>
                </div>
                {/* saved collection list */}
                <div className="sm:w-[100px] h-[100px] w-full mb-2 sm:mb-0 rounded-[4px] bg-[#FAFAFA] border-gradient flex justify-center items-center cursor-pointer">
                  <div>
                    <div className="mb-1 flex justify-center ">
                      <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img
                          src={collection1}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <span className="text-thin-light-gray text-center">
                      Name 1
                    </span>
                  </div>
                </div>
                <div className="sm:w-[100px] h-[100px] w-full mb-2 sm:mb-0 rounded-[4px] bg-[#FAFAFA] border border-light-purple flex justify-center items-center cursor-pointer">
                  <div>
                    <div className="mb-1 flex justify-center ">
                      <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img
                          src={collection2}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <span className="text-thin-light-gray text-center">
                      Name 2
                    </span>
                  </div>
                </div>
                <div className="sm:w-[100px] h-[100px] w-full mb-2 sm:mb-0 rounded-[4px] bg-[#FAFAFA] border border-light-purple flex justify-center items-center cursor-pointer">
                  <div>
                    <div className="mb-1 flex justify-center ">
                      <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img
                          src={collection3}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <span className="text-thin-light-gray text-center">
                      Name 3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* unlock purchase */}
          <div className="sm:flex justify-between items-center mb-5">
            <div className="sm:flex sm:space-x-3 items-center mb-5 sm:mb-0">
              <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-light-gray">
                <svg
                  width="22"
                  height="28"
                  viewBox="0 0 22 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9703 27.9959C8.44944 27.9959 5.92858 28.0078 3.40773 27.9919C1.27205 27.9799 0.0338085 26.7656 0.0196917 24.6347C-0.00450854 21.2735 -0.00854192 17.9123 0.0196917 14.5511C0.0378419 12.4521 1.3265 11.2158 3.44806 11.2118C8.42121 11.2019 13.3964 11.2039 18.3695 11.2118C20.604 11.2158 21.8564 12.4641 21.8644 14.6909C21.8745 17.9862 21.8786 21.2815 21.8644 24.5767C21.8544 26.7616 20.6242 27.9819 18.43 27.9939C15.9434 28.0058 13.4569 27.9959 10.9703 27.9959ZM8.53213 17.9722C8.61078 18.1699 8.65918 18.789 8.99193 19.0466C9.89541 19.7476 9.75424 20.6544 9.75626 21.567C9.75626 21.9984 9.62719 22.5057 9.81071 22.8412C10.0467 23.2706 10.5367 23.8358 10.9219 23.8398C11.3131 23.8438 11.8496 23.3026 12.0613 22.8752C12.261 22.4698 12.1319 21.9006 12.1319 21.4053C12.1319 20.5525 12.0936 19.7716 12.868 19.0706C13.6041 18.4036 13.4871 17.1354 12.8841 16.3086C12.2811 15.4817 11.2002 15.1262 10.2019 15.4258C9.25208 15.7114 8.54826 16.6621 8.53213 17.9722Z"
                    fill="black"
                  />
                  <path
                    d="M18.5315 10.2691C17.3356 10.2691 16.2466 10.2691 15.0345 10.2691C15.0345 9.40439 15.0446 8.58556 15.0325 7.76473C14.9982 5.32022 13.2397 3.47086 10.9467 3.45888C8.64969 3.4469 6.88509 5.28028 6.84476 7.73677C6.83064 8.55959 6.84274 9.38441 6.84274 10.2672C5.64483 10.2672 4.55582 10.2672 3.47286 10.2672C2.71257 5.3322 4.5054 1.66744 8.75456 0.347323C13.5603 -1.14654 18.3984 2.36244 18.5274 7.34932C18.5516 8.30396 18.5315 9.26059 18.5315 10.2691Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-dark-gray tracking-wide">
                  Unlock once purchased
                </h1>
                <p className="text-base text-thin-light-gray tracking-wide">
                  Unlockable content, only revealed by the owner of the item.
                </p>
              </div>
            </div>
            <div>
              <SwitchCom value={datas.purchase} handler={unlckPrchesHndlr} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
