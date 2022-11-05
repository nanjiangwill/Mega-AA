import React from "react";

export default function ThankYou({ className }) {
  return (
    <div
      className={`content-wrapper xl:bg-white sm:px-[70px] px-5 2xl:px-[100px] 2xl:h-[818px] xl:h-[650px] rounded-xl flex flex-col justify-center ${
        className || ""
      }`}
    >
      <div>
        <div className="title-area flex flex-col justify-center items-center relative text-center xl:mb-16 mb-10">
          <h1 className="sm:text-5xl text-3xl font-bold sm:leading-[74px] text-dark-gray">
            Password Updated
          </h1>
        </div>
        <div className="tick flex justify-center xl:mb-7 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="208"
            height="208"
            viewBox="0 0 208 208"
            fill="none"
          >
            <circle opacity="0.1" cx="104" cy="104" r="104" fill="#27AE60" />
            <path
              d="M119.582 71.9641C119.694 71.9081 119.737 71.822 119.711 71.6971C122.005 68.9066 123.459 65.427 126.643 63.3685C127.284 63.2566 127.851 62.9939 128.331 62.5503C131.152 61.7278 134.017 61.1464 136.959 60.9957C138.106 61.0474 139.253 61.0517 140.391 61.168C141.923 61.3273 143.381 61.689 144.004 63.3642C144.013 64.7853 143.45 65.9653 142.455 66.9558C140.984 68.4156 139.911 70.1597 138.876 71.9297C138.24 72.9374 137.604 73.9451 136.968 74.9571C135.544 76.671 134.411 78.5745 133.355 80.5296C129.673 86.1064 126.245 91.8296 123.173 97.7596C119.941 103.164 117.02 108.728 114.458 114.477C111.481 120.192 108.915 126.087 106.721 132.142C105.393 134.92 104.346 137.801 103.385 140.72C102.909 141.728 102.429 142.736 101.953 143.743C99.5858 145.815 96.639 145.819 93.7485 146C90.5074 145.918 87.2275 145.944 85.1158 142.83C84.8129 142.047 84.4321 141.31 83.8003 140.729C80.1958 134.562 75.9985 128.83 71.1694 123.555C70.1828 122.16 69.0794 120.859 67.7812 119.735C66.3489 118.133 64.921 116.536 63.4887 114.934C62.5627 112.104 62.9002 110.997 65.3883 109.305C67.9933 107.535 70.8838 106.682 74.0686 106.609C76.7731 106.549 78.9496 107.389 80.7194 109.43C82.1171 111.045 83.6143 112.582 85.0682 114.15C85.2716 114.417 85.4793 114.684 85.6827 114.955C87.6732 117.81 89.6636 120.665 91.6541 123.521C92.0176 124.343 92.2686 125.239 93.0691 125.923C94.4149 122.203 95.726 118.56 97.0414 114.912C98.2487 112.053 99.4517 109.197 100.659 106.338C101.459 105.24 101.94 103.991 102.347 102.712C103.169 101.058 103.991 99.4046 104.817 97.7552C106.297 94.8829 107.777 92.0062 109.257 89.1338C109.837 88.1046 110.417 87.0753 110.997 86.0418C112.044 84.2202 113.091 82.4029 114.142 80.5813C115.947 77.7175 117.764 74.8408 119.582 71.9641Z"
              fill="#74CD3C"
            />
          </svg>
        </div>
        <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
          <h1 className="sm:text-6xl text-4xl font-bold leading-[74px] text-dark-gray mb-5">
            Thanks you !
          </h1>
          <p className="text-lg font-bold text-lighter-gray">
            Your password has been updated
          </p>
        </div>
        <a
          href="#"
          className="w-full rounded-[50px] h-[58px] mb-6 text-xl text-white font-bold flex justify-center bg-purple items-center"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
}
