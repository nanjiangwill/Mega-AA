import React, { useEffect } from "react";

export default function ModalCom({ action, children, situation }) {
  useEffect(() => {
    if (situation) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "unset";
    };
  });

  return (
    <div className="modal-com">
      <div
        onClick={action}
        className="fixed top-0 left-0 w-full lg:h-[100vh] h-full bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm z-50"
      ></div>
      <div className="children-element fixed lg:h-100vh h-full z-[99999999999999] w-full lg:w-auto ">
        {children && children}
      </div>
    </div>
  );
}
