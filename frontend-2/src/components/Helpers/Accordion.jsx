import React from "react";
import Icons from "./Icons";

export default function Accordion({ datas }) {
  const [isOpen, setOpen] = React.useState(false);
  const accordionHandler = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className="accordion-item overflow-hidden relative z-[1]">
        <div
          className="accordion-title-bar flex items-center space-x-3 py-5 border-b border-light-purple"
          onClick={accordionHandler}
        >
          <div className="accordion-title-icon relative">
            <span className="horizontal text-purple">
              <Icons name="accordion-minus" />
            </span>
            <span
              className={`vertical text-purple absolute left-0 top-0 ${
                isOpen ? "active" : ""
              }`}
            >
              <Icons name="accordion-minus" />
            </span>
          </div>
          <div className="accordion-title w-full">
            <p className="text-18 tracking-wide text-dark-gray">
              {datas.title}
            </p>
          </div>
        </div>
        <div className={`accordion-body ${isOpen ? "active" : ""}`}>
          <div className="accordion-body-content flex space-x-4 sm:pl-10 pl-5 pt-5">
            <div className="w-[3px] h-auto bg-purple rounded-[28px]"></div>
            <div className="flex-1">
              <p className="text-base text-thin-light-gray tracking-wide">
                {datas.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
