import React from "react";
import SearchCom from "../../Helpers/SearchCom";
import CreatedBidsSlider from "./CreatedBidsSlider";
import CreateSaleSlider from "./CreateSaleSlider";

export default function HiddenProductsTab({
  className,
  marketProducts,
  mainProducts,
}) {
  return (
    <>
      <div className={`onsale-tab-wrapper w-full ${className || ""}`}>
        <div className="main-container w-full">
          <div className="filter-section w-full items-center sm:flex justify-between mb-6">
            {/* filter-search */}
            <div className="sm:w-1/2 w-full sm:pr-20 pr-0 mb-5 sm:mb-0">
              <SearchCom />
            </div>
            {/* filer-dropdown */}
            <div className="flex-1 flex sm:justify-end">
              <div className="flex space-x-1 items-center">
                <span className="text-18 text-thin-light-gray">
                  Recently Received
                </span>
                <span>
                  <svg
                    width="20"
                    height="10"
                    viewBox="0 0 13 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.7"
                      d="M12.4124 0.247421C12.3327 0.169022 12.2379 0.106794 12.1335 0.0643287C12.0291 0.0218632 11.917 0 11.8039 0C11.6908 0 11.5787 0.0218632 11.4743 0.0643287C11.3699 0.106794 11.2751 0.169022 11.1954 0.247421L7.27012 4.07837C7.19045 4.15677 7.09566 4.219 6.99122 4.26146C6.88678 4.30393 6.77476 4.32579 6.66162 4.32579C6.54848 4.32579 6.43646 4.30393 6.33202 4.26146C6.22758 4.219 6.13279 4.15677 6.05312 4.07837L2.12785 0.247421C2.04818 0.169022 1.95338 0.106794 1.84895 0.0643287C1.74451 0.0218632 1.63249 0 1.51935 0C1.40621 0 1.29419 0.0218632 1.18975 0.0643287C1.08531 0.106794 0.990517 0.169022 0.910844 0.247421C0.751218 0.404141 0.661621 0.616141 0.661621 0.837119C0.661621 1.0581 0.751218 1.2701 0.910844 1.42682L4.84468 5.26613C5.32677 5.73605 5.98027 6 6.66162 6C7.34297 6 7.99647 5.73605 8.47856 5.26613L12.4124 1.42682C12.572 1.2701 12.6616 1.0581 12.6616 0.837119C12.6616 0.616141 12.572 0.404141 12.4124 0.247421Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="content-section w-full">
            <div className="marketplace-products-widgets mb-16">
              <CreateSaleSlider products={marketProducts} productHide />
            </div>
            <div className="main-products-widgets">
              <CreatedBidsSlider products={mainProducts} productHide />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
