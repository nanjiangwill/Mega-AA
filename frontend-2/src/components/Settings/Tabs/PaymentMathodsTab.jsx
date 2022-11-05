import React from "react";
import method1 from "../../../assets/images/payment-method-1.png";
import method2 from "../../../assets/images/payment-method-2.png";
import method3 from "../../../assets/images/payment-method-3.png";
import method4 from "../../../assets/images/payment-method-4.png";

export default function PaymentMathodsTab() {
  return (
    <>
      <div className="payment-method-tab w-full">
        <div className="payment-item-wrapper w-full">
          <ul className="payment-items">
            <li className="sm:flex justify-between items-center w-full py-[30px] border-b border-light-purple">
              <div className="flex space-x-5 mb-3 sm:mb-0">
                <div className="sm:w-[120px] sm:h-[120px] flex items-center justify-center rounded-full sm:bg-light-purple">
                  <img src={method1} alt="payment" />
                </div>
                <div>
                  <p className="sm:text-xl text-lg tracking-wide text-dark-gray">
                    Datch Bangla Bank Ltd
                  </p>
                  <p className="text-thin-light-gray sm:text-18 text-sm tracking-wide">
                    Bank **********5535
                  </p>
                  <p className="sm:text-18 text-sm tracking-wide text-light-green">
                    Verified
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="w-[95px] sm:h-[46px] h-[40px] rounded-full btn-gradient text-white sm:text-18 text-md tracking-wide"
                >
                  Manage
                </button>
              </div>
            </li>
            <li className="sm:flex justify-between items-center w-full py-[30px] border-b border-light-purple">
              <div className="flex space-x-5 mb-3 sm:mb-0">
                <div className="sm:w-[120px] sm:h-[120px] flex items-center justify-center rounded-full sm:bg-light-purple">
                  <img src={method2} alt="payment" />
                </div>
                <div>
                  <p className="sm:text-xl text-lg tracking-wide text-dark-gray">
                    Master Card
                  </p>
                  <p className="text-thin-light-gray sm:text-18 text-sm tracking-wide">
                    Bank **********5535
                  </p>
                  <p className="sm:text-18 text-sm tracking-wide text-light-green">
                    Verified
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="w-[95px] sm:h-[46px] h-[40px] rounded-full btn-gradient text-white sm:text-18 text-md tracking-wide"
                >
                  Manage
                </button>
              </div>
            </li>
            <li className="sm:flex justify-between items-center w-full py-[30px] border-b border-light-purple">
              <div className="flex space-x-5 mb-3 sm:mb-0">
                <div className="sm:w-[120px] sm:h-[120px] flex items-center justify-center rounded-full sm:bg-light-purple">
                  <img src={method3} alt="payment" />
                </div>
                <div>
                  <p className="sm:text-xl text-lg tracking-wide text-dark-gray">
                    Paypal Account
                  </p>
                  <p className="text-thin-light-gray sm:text-18 text-sm tracking-wide">
                    Bank **********5535
                  </p>
                  <p className="sm:text-18 text-sm tracking-wide text-light-green">
                    Verified
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="w-[95px] sm:h-[46px] h-[40px] rounded-full btn-gradient text-white sm:text-18 text-md tracking-wide"
                >
                  Manage
                </button>
              </div>
            </li>
            <li className="sm:flex justify-between items-center w-full py-[30px] border-b border-light-purple">
              <div className="flex space-x-5 mb-3 sm:mb-0">
                <div className="sm:w-[120px] sm:h-[120px] flex items-center justify-center rounded-full sm:bg-light-purple">
                  <img src={method4} alt="payment" />
                </div>
                <div>
                  <p className="sm:text-xl text-lg tracking-wide text-dark-gray">
                    Visa Card
                  </p>
                  <p className="text-thin-light-gray sm:text-18 text-sm tracking-wide">
                    Bank **********5535
                  </p>
                  <p className="text-18 tracking-wide text-light-red">
                    Unverified
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="w-[95px] sm:h-[46px] h-[40px] rounded-full btn-gradient text-white sm:text-18 text-md tracking-wide"
                >
                  Manage
                </button>
              </div>
            </li>
          </ul>
          <div className="py-7 flex space-x-4">
            <button
              type="button"
              className="btn-shine  text-white text-18 bg-pink tracking-wide px-4 py-3 rounded-full"
            >
              Add Bank
            </button>
            <button
              type="button"
              className="text-white text-18 bg-light-green tracking-wide px-4 py-3 rounded-full"
            >
              Add Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
