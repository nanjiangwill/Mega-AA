import React from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import * as animationData from "../../assets/images/Lotties/77618-website-404-error-animation.json";

export default function FourZeroFour() {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#232247]">
      <div>
        <Lottie options={defaultOptions} width={600} height={600} />
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="btn-gradient text-white text-lg w-[150px] h-[50px] rounded-full"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
