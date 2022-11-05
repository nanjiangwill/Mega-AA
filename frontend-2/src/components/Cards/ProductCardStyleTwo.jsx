import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import localImgLoad from "../../lib/localImgLoad";
import Icons from "../Helpers/Icons";

export default function ProductCardStyleTwo({
  className,
  datas,
  hidden = false,
}) {
  const [addFavorite, setValue] = useState(datas.whishlisted);
  const [options, setOption] = useState(false);
  const favoriteHandler = () => {
    if (!addFavorite) {
      setValue(true);
      toast.success("Added to Favorite List");
    } else {
      setValue(false);
      toast.warn("Remove to Favorite List");
    }
  };
  return (
    <div
      className={`card-style-two w-full h-[426px] p-[20px] bg-white rounded-2xl section-shadow ${
        className || ""
      }`}
    >
      <div className="flex flex-col justify-between w-full h-full">
        <div className="card-two-info flex justify-between items-center">
          <div className="owned-by flex space-x-2 items-center">
            <div className="owned w-[46px] h-[46px] rounded-full overflow-hidden">
              <img
                src={localImgLoad(`images/${datas.owner_img}`)}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="text-thin-light-gray text-sm leading-3">Owned by</p>
              <p className="text-base text-dark-gray">{datas.owner}</p>
            </div>
          </div>
          <div className="w-[1px] bg-light-purple h-7"></div>
          <div className="created-by flex space-x-2 items-center flex-row-reverse">
            <div className="owned w-[46px] h-[46px] rounded-full overflow-hidden ml-2">
              <img
                src={localImgLoad(`images/${datas.creator_img}`)}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="text-thin-light-gray text-sm leading-3 text-right">
                Create by
              </p>
              <p className="text-base text-dark-gray text-right">
                {datas.creator}
              </p>
            </div>
          </div>
        </div>
        <div className="thumbnail-area w-full">
          <div
            className="w-full h-[236px] p-6  rounded-xl overflow-hidden"
            style={{
              background: `url(${localImgLoad(
                `images/${datas.thumbnil}`
              )}) 0% 0% / cover no-repeat`,
            }}
          >
            <div className="product-two-options flex justify-between mb-5 relative">
              <div className="status">
                {datas.isActive && (
                  <span className="text-xs px-3 py-1.5 tracking-wide rounded-full bg-gold text-white">
                    Active
                  </span>
                )}
              </div>
              <div className=" review flex space-x-2">
                <button
                  onClick={favoriteHandler}
                  type="button"
                  className={`w-7 h-7 bg-white rounded-full flex justify-center items-center  ${
                    addFavorite ? "text-red-500" : "text-thin-light-gray"
                  }`}
                >
                  <Icons name="love" />
                </button>
                <button
                  onClick={() => setOption(!options)}
                  type="button"
                  className="w-7 h-7 bg-white rounded-full flex justify-center items-center text-thin-light-gray"
                >
                  <Icons name="dots" />
                </button>
                {options && (
                  <div
                    onClick={() => setOption(!options)}
                    className="w-full h-screen fixed top-0 left-0 z-10"
                  ></div>
                )}
                <div
                  style={{ boxShadow: "0px 4px 87px 0px #0000002B" }}
                  className={`drop-down-content w-[80px] bg-white rounded-[4px] p-2.5 absolute right-0 top-[100%] z-20 ${
                    options ? "active" : ""
                  }`}
                >
                  <ul className="flex flex-col space-y-3">
                    <li
                      onClick={() => setOption(!options)}
                      className="text-thin-light-gray tracking-wide text-xs cursor-pointer"
                    >
                      <div className="flex space-x-2.5 items-center">
                        <span>
                          <svg
                            width="13"
                            height="12"
                            viewBox="0 0 13 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.110352 11.9873C0.154533 10.848 0.104327 9.69692 0.260972 8.57138C0.639531 5.85371 2.91942 3.60923 5.76865 3.03157C6.15022 2.95404 6.53983 2.91055 6.95102 2.84768C6.95102 1.93155 6.95102 1.00502 6.95102 0.000488281C8.99544 1.56756 10.9836 3.09255 12.9999 4.63835C10.9876 6.18745 8.99895 7.71764 6.96106 9.28613C6.96106 8.30145 6.96106 7.37729 6.96106 6.3789C6.39875 6.48337 5.86505 6.53868 5.36147 6.68381C3.3045 7.2766 1.81738 8.49243 0.95282 10.3611C0.700281 10.9066 0.452259 11.454 0.20223 12.001"
                              fill="#374557"
                              fillOpacity="0.6"
                            />
                          </svg>
                        </span>
                        <span className="text-sm tracking-wide text-[#374557]">
                          Share
                        </span>
                      </div>
                    </li>
                    <li
                      onClick={() => setOption(!options)}
                      className="text-thin-light-gray tracking-wide text-xs cursor-pointer"
                    >
                      <div className="flex space-x-2.5 items-center">
                        <span>
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.47576 9.99806C4.18586 9.99806 2.89403 10.0078 1.60413 9.99418C0.665318 9.98448 -0.0659459 9.19853 0.00388304 8.26121C0.02328 7.9934 0.116385 7.70813 0.252164 7.47332C1.50908 5.27072 2.7757 3.07394 4.05008 0.881042C4.73286 -0.29109 6.26327 -0.294972 6.94411 0.875221C8.2243 3.072 9.4948 5.27654 10.7575 7.48496C11.4287 8.65904 10.6392 9.99418 9.28338 9.99806C8.01482 10.0019 6.74626 9.99806 5.47576 9.99806ZM6.09452 3.81526C6.0984 3.81526 6.10422 3.81526 6.1081 3.81526C6.1081 3.75122 6.1081 3.68717 6.1081 3.62119C6.10616 3.22143 5.84818 2.94004 5.48934 2.94198C5.13631 2.94392 4.84924 3.26218 4.86863 3.65224C4.91713 4.56821 4.97338 5.48225 5.03157 6.39822C5.05097 6.68737 5.23718 6.85814 5.49903 6.8562C5.75701 6.85426 5.94516 6.67184 5.96068 6.38851C6.00917 5.53076 6.04991 4.67301 6.09452 3.81526ZM4.88997 7.88279C4.88221 8.22628 5.14795 8.50767 5.48546 8.51349C5.80551 8.51931 6.08288 8.25927 6.09646 7.94295C6.11004 7.58393 5.84624 7.29284 5.50291 7.28896C5.17705 7.28508 4.89967 7.55482 4.88997 7.88279Z"
                              fill="#374557"
                              fillOpacity="0.6"
                            />
                          </svg>
                        </span>
                        <span className="text-sm tracking-wide text-[#374557]">
                          Report
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {hidden && (
              <div className="flex justify-center">
                <svg
                  width="108"
                  height="91"
                  viewBox="0 0 108 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M88.7686 70.8596C87.0739 69.1408 85.4043 67.4283 83.7222 65.7285C81.13 63.1157 78.5316 60.5092 75.9143 57.9216C75.5879 57.5943 75.5439 57.3676 75.7636 56.9458C83.5841 41.861 74.3577 23.6597 57.5994 21.1351C52.3334 20.3418 47.3184 21.2169 42.586 23.6723C42.2784 23.8297 42.0587 23.9871 41.7135 23.6408C38.3681 20.2474 34.9977 16.8854 31.6334 13.5108C31.5393 13.4164 31.464 13.3093 31.3008 13.1142C32.6879 12.5916 33.9934 12.0628 35.3303 11.6095C43.5274 8.82042 51.9442 7.95159 60.5368 8.88967C81.5568 11.1939 100.116 25.3659 107.899 45.0341C108 45.2922 108.031 45.6636 107.924 45.9155C103.889 55.8629 97.6122 64.0979 89.1138 70.6266C89.051 70.6833 88.9757 70.7274 88.7686 70.8596Z"
                    fill="white"
                  />
                  <path
                    d="M19.1878 20.1909C21.234 22.256 23.2299 24.2769 25.2384 26.2916C27.5168 28.577 29.7952 30.8687 32.0861 33.1415C32.3936 33.4437 32.4438 33.6577 32.2367 34.0606C25.1192 47.7667 31.9731 64.4506 46.6601 69.0466C53.0622 71.0487 59.3011 70.4506 65.3014 67.416C65.5022 67.3153 65.6968 67.2082 65.8663 67.1201C69.4376 70.715 72.9776 74.2847 76.5677 77.9048C76.4046 77.9804 76.1974 78.0874 75.9778 78.1756C66.9898 81.8334 57.6692 83.1619 48.0222 82.186C26.7197 80.0265 8.07841 65.9868 0.119793 46.092C0.00053969 45.7898 -0.0496724 45.368 0.0633048 45.0847C4.06772 35.2002 10.3003 27.0156 18.7297 20.512C18.8489 20.4113 18.987 20.3294 19.1878 20.1909Z"
                    fill="white"
                  />
                  <path
                    d="M8.82617 4.58337C10.2133 3.1731 11.7636 1.60544 13.3515 0C41.9787 28.8034 70.6247 57.6195 99.2519 86.4229C97.8272 87.8458 96.2643 89.4009 94.6638 91C66.0554 62.1966 37.422 33.3742 8.82617 4.58337Z"
                    fill="white"
                  />
                  <path
                    d="M58.5234 59.5084C54.6696 60.9753 48.0227 60.7361 43.24 55.6553C39.5997 51.7897 38.0243 44.7573 40.0516 41.0112C46.2151 47.1812 52.341 53.3133 58.5234 59.5084Z"
                    fill="white"
                  />
                  <path
                    d="M49.7617 31.4036C53.1887 29.5022 60.2309 31.0825 64.1035 34.7278C69.1938 39.5189 69.426 46.2114 68.0515 49.8063C61.957 43.6805 55.8437 37.5294 49.7617 31.4036Z"
                    fill="white"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="details-area">
          {/* title */}
          <Link to="/shop-details" className="mb-2.5">
            <h1 className="font-bold text-xl tracking-wide line-clamp-1 text-dark-gray capitalize">
              {datas.title}
            </h1>
          </Link>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-[42px] h-[42px]">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z"
                    fill="#627EEA"
                  />
                  <path
                    d="M21.6538 5.25V16.8919L31.4936 21.2887L21.6538 5.25Z"
                    fill="white"
                    fillOpacity="0.602"
                  />
                  <path
                    d="M21.6536 5.25L11.8125 21.2887L21.6536 16.8919V5.25Z"
                    fill="white"
                  />
                  <path
                    d="M21.6538 28.8331V36.7435L31.5002 23.1211L21.6538 28.8331Z"
                    fill="white"
                    fillOpacity="0.602"
                  />
                  <path
                    d="M21.6536 36.7435V28.8318L11.8125 23.1211L21.6536 36.7435Z"
                    fill="white"
                  />
                  <path
                    d="M21.6538 27.0021L31.4936 21.2888L21.6538 16.8945V27.0021Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M11.8125 21.2888L21.6536 27.0021V16.8945L11.8125 21.2888Z"
                    fill="white"
                    fillOpacity="0.602"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-xl tracking-wide line-clamp-1 text-dark-gray">
                  {datas.eth_price}
                </p>
                <p className="text-sm text-lighter-gray">
                  ( {datas.usd_price})
                </p>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="px-4 py-2.5 text-white text-sm bg-pink rounded-full tracking-wide"
              >
                On Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
