import React, { useEffect, useRef, useState } from "react";

export default function DropFileWidget() {
  const fileSelect = useRef(null);
  const fileRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [img, setImg] = useState(null);
  const changeFile = (e, file) => {
    if (e) {
      const imgRead = new FileReader();
      imgRead.onload = (event) => {
        setImg(event.target.result);
      };
      // most importend
      imgRead.readAsDataURL(e.target.files[0]);
    }
    if (file) {
      if (file[0].name) {
        setSelectedFile(file[0].name);
        const imgRead = new FileReader();
        imgRead.onload = (event) => {
          setImg(event.target.result);
        };
        // most importend
        imgRead.readAsDataURL(file[0]);
      }
    }
  };

  //   drop event
  function handleDrop(e) {
    const dt = e.dataTransfer;
    const { files } = dt;
    changeFile(false, files);
  }
  //   for stopPropagation and preventDefault
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function highlight() {
    fileSelect.current.classList.add("highlight");
  }

  function unhighlight() {
    fileSelect.current.classList.remove("highlight");
  }
  const browseImg = () => {
    fileRef.current.click();
  };
  useEffect(() => {
    //   drop event
    fileSelect.current.addEventListener("drop", handleDrop, false);

    //   for stopPropagation and preventDefault
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      fileSelect.current.addEventListener(eventName, preventDefaults, false);
    });
    // for highlight
    ["dragenter", "dragover"].forEach((eventName) => {
      fileSelect.current.addEventListener(eventName, highlight, false);
    });
    ["dragleave", "drop"].forEach((eventName) => {
      fileSelect.current.addEventListener(eventName, unhighlight, false);
    });
  });

  return (
    <>
      <div
        ref={fileSelect}
        className="drop-product-upload w-full rounded-md h-[360px] overflow-hidden relative"
      >
        {img ? (
          <div className="w-full h-full">
            <img src={img} alt="" className="w-full h-full object-cover" />
            <input
              type="file"
              id="fileElem"
              name="file"
              className="hidden"
              accept="image/*"
              ref={fileRef}
              value={selectedFile.name}
              onChange={(e) => changeFile(e)}
            />
            <button
              type="button"
              className="absolute w-10 h-10 rounded primary-gradient flex justify-center items-center right-2 top-2 text-white"
              onClick={() => browseImg()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div
            className="w-full h-full flex justify-center items-center"
            onClick={() => browseImg()}
          >
            <form action="#">
              <div>
                <div className="flex justify-center mb-8">
                  <svg
                    width="71"
                    height="52"
                    viewBox="0 0 71 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.9204 11.6862C49.8242 8.24423 55.4809 9.23082 58.1485 11.6525C59.8979 13.2402 61.0985 15.1033 61.4235 17.4743C61.7414 19.7992 61.3241 21.9748 60.0409 23.9684C60.6758 24.1762 61.2708 24.3476 61.8498 24.5643C67.7214 26.7604 71.4049 32.7243 70.9644 38.9662C70.5009 45.5314 65.0866 50.9075 59.3082 51.7706C58.4913 51.8923 57.6601 51.9784 56.836 51.9793C43.3851 51.9917 29.9334 51.9775 16.4825 51.9917C7.58007 52.0033 1.7582 45.1113 0.437713 39.3934C-1.30459 31.8487 2.26349 24.0963 9.19983 20.673C9.50264 20.5238 9.55415 20.3533 9.53283 20.0567C8.76292 9.5363 16.5313 2.47741 23.1089 0.709362C33.1169 -1.98134 42.2849 3.28995 45.7517 11.331C45.8032 11.4491 45.8618 11.5645 45.9204 11.6862ZM28.3971 28.3641C28.3971 28.5853 28.3971 28.7584 28.3971 28.9316C28.3971 32.9863 28.3962 37.041 28.398 41.0957C28.398 42.0885 28.8358 42.521 29.8357 42.521C32.0255 42.5219 34.2154 42.5219 36.4062 42.521C37.4558 42.521 37.8705 42.0992 37.8714 41.0353C37.8714 36.9957 37.8714 32.9561 37.8714 28.9156C37.8714 28.7433 37.8714 28.5719 37.8714 28.3641C38.1041 28.3641 38.279 28.3641 38.453 28.3641C40.9537 28.3641 43.4544 28.3597 45.9551 28.3668C46.5447 28.3686 47.0136 28.1697 47.2347 27.6058C47.4443 27.0703 47.2826 26.6112 46.8706 26.2009C42.6143 21.9606 38.366 17.7132 34.1133 13.4693C33.4775 12.8344 32.7972 12.8291 32.1694 13.4551C27.9273 17.6883 23.6861 21.9233 19.4476 26.1592C18.9494 26.6565 18.8171 27.1733 19.0471 27.6821C19.3064 28.2567 19.8019 28.3686 20.3711 28.3668C22.8567 28.3606 25.3432 28.3641 27.8296 28.3641C28.0019 28.3641 28.1751 28.3641 28.3971 28.3641Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
                <p className="text-xl font-bold text-center w-[203px] tracking-wide text-dark-gray ">
                  Drop files to upload or
                  <span className="text-purple ml-1">Browse</span>
                </p>
                <input
                  type="file"
                  id="fileElem"
                  name="file"
                  className="hidden"
                  accept="image/*"
                  ref={fileRef}
                  value={selectedFile.name}
                  onChange={(e) => changeFile(e)}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
