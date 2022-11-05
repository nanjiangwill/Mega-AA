import React, { useRef } from "react";
import ProductCardStyleOne from "../../Cards/ProductCardStyleOne";
import Icons from "../../Helpers/Icons";
import SliderCom from "../../Helpers/SliderCom";

export default function CreatedBidsSlider({
  className,
  products,
  productHide = false,
}) {
  const settings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 619,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const trendingSlider = useRef(null);
  const prevHandler = () => {
    trendingSlider.current.slickPrev();
  };
  const nextHandler = () => {
    trendingSlider.current.slickNext();
  };
  return (
    <div className={`trending-section px-2 sm:px-0 w-full ${className || ""}`}>
      {/* heading */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-26 font-bold text-dark-gray">Create for Bits</h1>
        </div>
        <div className="slider-btns flex space-x-4">
          <button onClick={nextHandler} type="button">
            <div className="trending-slider-left-btn relative text-white w-10 h-10 flex justify-center items-center rounded-full overflow-hidden">
              <svg
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.09766 1.1499L1.13307 9.11449L9.09766 17.0791"
                  stroke="url(#paint0_linear_220_23410)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_220_23410"
                    x1="9.09766"
                    y1="1.1499"
                    x2="-4.2474"
                    y2="7.96749"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F539F8" />
                    <stop offset="0.416763" stopColor="#C342F9" />
                    <stop offset="1" stopColor="#5356FB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>
          <button onClick={prevHandler} type="button">
            <div className="trending-slider-right-btn  primary-gradient  text-white w-10 h-10 relative flex justify-center items-center rounded-full ">
              <Icons name="arrows" />
            </div>
          </button>
        </div>
      </div>
      {/* trending products */}
      <div className="trending-products relative w-full">
        <SliderCom selector={trendingSlider} settings={settings}>
          {products &&
            products.length > 0 &&
            products.map((item) => (
              <ProductCardStyleOne
                key={item.id}
                datas={item}
                hidden={productHide}
              />
            ))}
        </SliderCom>
      </div>
    </div>
  );
}
