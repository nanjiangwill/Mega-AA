import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PreviewProductCardStyleOne from "../Cards/PreviewProductCardStyleOne";
import ModalCom from "../Helpers/ModalCom";
import Layout from "../Partials/Layout";
// import DropFileWidget from "./DropFileWidget";
import ProductUploadField from "./ProductUploadField";

export default function UploadProduct() {
  // preview modal
  const [previewProductModal, setPreviewProductModal] = useState(false);
  // cancelUploadModal
  const [cancelUploadModal, setCancelUploadModal] = useState(false);
  const cancelUploadModalHandler = () => {
    setCancelUploadModal(!cancelUploadModal);
  };
  // price type
  const [priceType, setPriceType] = useState("fixed");
  const changePriceTypeHandler = (value) => {
    setPriceType(value);
  };
  // item name
  const [itemName, setItemName] = useState("");
  const changeItemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  // link
  const [link, setLink] = useState("");
  const linkHandler = (e) => {
    setLink(e.target.value);
  };
  // price
  const [price, setPrice] = useState("");
  const pricehandler = (e) => {
    setPrice(e.target.value);
  };
  // description
  const [description, setDescription] = useState("");
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  // royalties
  const [royalties, setRoyalties] = useState("");
  const royaltiesHandler = (e) => {
    setRoyalties(e.target.value);
  };
  // propertiesKey
  const [propertiesKey, setPropertiesKey] = useState("");
  const propertiesKeyHandler = (e) => {
    setPropertiesKey(e.target.value);
  };
  // propertiesValue
  const [propertiesValue, setPropertiesValue] = useState("");
  const propertiesValueHandler = (e) => {
    setPropertiesValue(e.target.value);
  };
  // unlock purchase enable
  const [purchase, setPurchase] = useState(false);
  const purchaseValueHandler = () => {
    setPurchase(!purchase);
  };

  const previewProductToggleHandler = () => {
    setPreviewProductModal(!previewProductModal);
  };
  const previewUploadProduct = () => {
    setPreviewProductModal(!previewProductModal);
  };
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

  // data sorted
  const data = {
    priceType,
    itemName,
    link,
    description,
    price,
    royalties,
    propertiesKey,
    propertiesValue,
    purchase,
    username: "Bilout",
    profile_img: "profile.png",
    thumbnil: "tranding-2.jpg",
    remaing: "2023-03-04 4:00:00",
  };
  const deleteData = () => {
    setItemName("");
    setLink("");
    setPrice("");
    setDescription("");
    setRoyalties("");
    setPropertiesKey("");
    setPropertiesValue("");
    setPurchase(false);
    cancelUploadModalHandler();
    setImg(null);
  };
  return (
    <>
      <Layout>
        <div className="upload-product-wrapper w-full mb-10">
          <div className="main-wrapper w-full">
            <div className="w-full">
              {/* heading */}
              <div className="mb-6">
                <h1 className="text-26 font-bold text-dark-gray">
                  Create new item
                </h1>
              </div>
              {/**
                TODO: upload product main widget
                */}

              <div className="w-full bg-white section-shadow rounded-2xl">
                {/* section-heading */}
                <div className="section-heading w-full mb-5 lg:px-9 px-4 lg:pt-9 pt-5 ">
                  <h1 className="text-dark-gray lg:text-26 text-18 font-bold tracking-wide mb-1">
                    Image,Video,Audio or 3D Model
                  </h1>
                  <p className="text-thin-light-gray text-base tracking-wide font-medium">
                    File types suppported: JPG, PNG, GIP, SVG, MP4, MP3, WEBM,
                    OGG, GLB, GLTF. Max Size : 100 MB
                  </p>
                </div>
                <div className="main-content w-full lg:flex justify-between lg:px-9 px-4">
                  <div className="lg:w-[39%] w-[100%] lg:pr-[39px] lg:mb-0 mb-10">
                    <div
                      ref={fileSelect}
                      className="drop-product-upload w-full rounded-md lg:h-[360px] h-[300px] overflow-hidden relative"
                    >
                      {img ? (
                        <div className="w-full h-full">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
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
                                Drag files to upload or
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
                  </div>
                  <div className="w-[1px] bg-light-purple"></div>
                  <div className="flex-1">
                    {/* product upload field */}
                    <ProductUploadField
                      datas={data}
                      cpt={changePriceTypeHandler}
                      inh={changeItemNameHandler}
                      linkh={linkHandler}
                      dscrphn={descriptionHandler}
                      priceHndlr={pricehandler}
                      roltsHndlr={royaltiesHandler}
                      keyHndlr={propertiesKeyHandler}
                      valueHndlr={propertiesValueHandler}
                      unlckPrchesHndlr={purchaseValueHandler}
                    />
                  </div>
                </div>
                {/* bottom action */}
                <div className="w-full h-[120px] bg-red border-t border-light-purple flex justify-end items-center">
                  <div className="flex sm:space-x-4 space-x-2 sm:mr-9 mr-2">
                    <button
                      type="button"
                      onClick={cancelUploadModalHandler}
                      className="sm:text-18 text-sm text-light-red tracking-wide "
                    >
                      <span className="border-b border-light-red"> Cancel</span>
                    </button>
                    <button
                      onClick={() => previewUploadProduct(data)}
                      type="button"
                      className="sm:w-[126px] h-[46px] w-[100px] flex justify-center items-center border-gradient  sm:text-18 text-sm rounded-full text-back"
                    >
                      <span className="text-gradient"> Preview</span>
                    </button>
                    <Link
                      to="/"
                      className="sm:w-[126px] h-[46px] w-[100px] flex justify-center items-center btn-gradient sm:text-18 text-sm rounded-full text-white"
                    >
                      Create Now
                    </Link>
                  </div>
                </div>

                {/* === action modals === */}
                {/* TODO: preview modal */}
                {previewProductModal && (
                  <ModalCom
                    action={previewProductToggleHandler}
                    situation={previewProductModal}
                  >
                    <div className="preview-upload-product lg:w-[580px] lg:h-[622px] w-full h-full bg-white lg:rounded-2xl">
                      <div className="w-full h-full flex flex-col justify-between">
                        {/* heading */}
                        <div className="lg:px-[40px] lg:py-[33px] px-[30px] py-[23px] flex justify-between border-b border-light-purple mb-4 lg:mb-0">
                          <h1 className="text-dark-gray tracking-wide text-26 font-bold">
                            Item Privew
                          </h1>
                          <button
                            onClick={previewProductToggleHandler}
                            type="button"
                          >
                            <svg
                              width="37"
                              height="36"
                              viewBox="0 0 37 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M36.9932 16.1598C36.9932 17.4397 36.9932 18.7196 36.9932 19.9999C36.7843 20.0707 36.8568 20.2552 36.8317 20.3998C35.5253 27.945 31.2392 32.9245 23.9534 35.282C22.8937 35.6249 21.7684 35.7654 20.6734 35.9994C19.3935 35.9994 18.1135 35.9994 16.8333 35.9994C16.5828 35.7084 16.212 35.773 15.8966 35.7091C8.76547 34.2618 4.08044 30.0723 1.76284 23.1868C1.42817 22.1924 1.43916 21.1197 0.993164 20.1596C0.993164 18.7196 0.993164 17.2796 0.993164 15.8395C1.28454 15.6193 1.20757 15.2654 1.26392 14.9805C2.70637 7.6975 7.01928 2.99666 14.036 0.700707C15.005 0.383561 16.044 0.386653 16.993 -0.000244141C18.2197 -0.000244141 19.4464 -0.000244141 20.673 -0.000244141C20.7088 0.123797 20.8057 0.135823 20.9156 0.146474C28.2931 0.868729 34.5254 6.21897 36.3733 13.4267C36.6052 14.3311 36.7877 15.2482 36.9932 16.1598ZM34.0042 18.0784C34.0365 9.7708 27.3355 3.00285 19.0701 2.99426C10.778 2.98601 3.9966 9.65776 3.97839 17.8424C3.95983 26.1631 10.5818 32.9599 18.7533 33.0077C27.1902 33.0575 33.9719 26.4184 34.0042 18.0784Z"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                              <path
                                d="M16.9241 18.0228C14.926 16.0368 13.0001 14.1205 11.0718 12.207C10.5939 11.7328 10.2571 11.216 10.5131 10.5058C10.9382 9.32653 12.1885 9.08085 13.1369 10.0172C14.8999 11.7582 16.6698 13.4937 18.3782 15.2877C18.9039 15.8399 19.1565 15.7485 19.6306 15.2578C21.3517 13.4759 23.1131 11.7324 24.8754 9.99071C25.8107 9.06608 27.1026 9.33615 27.4899 10.5168C27.7218 11.2239 27.3851 11.741 26.9064 12.2176C25.1688 13.947 23.4409 15.6852 21.7036 17.4146C21.516 17.6015 21.2896 17.7493 21.0398 17.9482C23.0763 19.9738 25.0304 21.899 26.9621 23.8465C27.9194 24.8117 27.6421 26.1098 26.4268 26.4984C25.7052 26.729 25.2063 26.3438 24.7386 25.8755C22.9876 24.1224 21.2164 22.3889 19.4977 20.6046C19.063 20.1531 18.8647 20.2267 18.4734 20.628C16.7251 22.4212 14.9425 24.1805 13.1709 25.9507C12.6953 26.4259 12.1861 26.7469 11.467 26.4534C10.3066 25.9796 10.062 24.8395 10.979 23.895C12.2782 22.5573 13.6069 21.2482 14.9319 19.9353C15.5723 19.3003 16.2331 18.6849 16.9241 18.0228Z"
                                fill="#374557"
                                fillOpacity="0.6"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="flex justify-center mb-4 lg:mb-0">
                          <div className="w-[270px] h-[387px]">
                            <PreviewProductCardStyleOne
                              datas={{
                                thumbnil: img,
                                profile_img: data.profile_img,
                                username: data.username,
                                title: data.itemName,
                                price: data.price,
                                remaing: data.remaing,
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="flex space-x-4 pb-[33px] pr-[40px]">
                            <button
                              onClick={previewProductToggleHandler}
                              type="button"
                              className="text-18 text-light-red tracking-wide "
                            >
                              <span> Cancel</span>
                            </button>
                            <Link
                              to="/"
                              className="sm:w-[126px] h-[46px] w-[100px] flex justify-center items-center btn-gradient text-base rounded-full text-white"
                            >
                              Create Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ModalCom>
                )}

                {/* TODO: cancel modal */}
                {cancelUploadModal && (
                  <ModalCom>
                    <div className="lg:w-[460px] lg:h-[473px] w-full h-full bg-white lg:rounded-2xl">
                      <div className="w-full h-[92px] lg:px-10 lg:py-4 px-[30px] py-[23px] border-b border-light-purple flex justify-between items-center">
                        <h1 className="text-26 tracking-wide font-bold text-dark-gray">
                          Confirm
                        </h1>
                        <button
                          onClick={cancelUploadModalHandler}
                          type="button"
                        >
                          <svg
                            width="37"
                            height="36"
                            viewBox="0 0 37 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M36.9932 16.1598C36.9932 17.4397 36.9932 18.7196 36.9932 19.9999C36.7843 20.0707 36.8568 20.2552 36.8317 20.3998C35.5253 27.945 31.2392 32.9245 23.9534 35.282C22.8937 35.6249 21.7684 35.7654 20.6734 35.9994C19.3935 35.9994 18.1135 35.9994 16.8333 35.9994C16.5828 35.7084 16.212 35.773 15.8966 35.7091C8.76547 34.2618 4.08044 30.0723 1.76284 23.1868C1.42817 22.1924 1.43916 21.1197 0.993164 20.1596C0.993164 18.7196 0.993164 17.2796 0.993164 15.8395C1.28454 15.6193 1.20757 15.2654 1.26392 14.9805C2.70637 7.6975 7.01928 2.99666 14.036 0.700707C15.005 0.383561 16.044 0.386653 16.993 -0.000244141C18.2197 -0.000244141 19.4464 -0.000244141 20.673 -0.000244141C20.7088 0.123797 20.8057 0.135823 20.9156 0.146474C28.2931 0.868729 34.5254 6.21897 36.3733 13.4267C36.6052 14.3311 36.7877 15.2482 36.9932 16.1598ZM34.0042 18.0784C34.0365 9.7708 27.3355 3.00285 19.0701 2.99426C10.778 2.98601 3.9966 9.65776 3.97839 17.8424C3.95983 26.1631 10.5818 32.9599 18.7533 33.0077C27.1902 33.0575 33.9719 26.4184 34.0042 18.0784Z"
                              fill="#374557"
                              fillOpacity="0.6"
                            />
                            <path
                              d="M16.9241 18.0228C14.926 16.0368 13.0001 14.1205 11.0718 12.207C10.5939 11.7328 10.2571 11.216 10.5131 10.5058C10.9382 9.32653 12.1885 9.08085 13.1369 10.0172C14.8999 11.7582 16.6698 13.4937 18.3782 15.2877C18.9039 15.8399 19.1565 15.7485 19.6306 15.2578C21.3517 13.4759 23.1131 11.7324 24.8754 9.99071C25.8107 9.06608 27.1026 9.33615 27.4899 10.5168C27.7218 11.2239 27.3851 11.741 26.9064 12.2176C25.1688 13.947 23.4409 15.6852 21.7036 17.4146C21.516 17.6015 21.2896 17.7493 21.0398 17.9482C23.0763 19.9738 25.0304 21.899 26.9621 23.8465C27.9194 24.8117 27.6421 26.1098 26.4268 26.4984C25.7052 26.729 25.2063 26.3438 24.7386 25.8755C22.9876 24.1224 21.2164 22.3889 19.4977 20.6046C19.063 20.1531 18.8647 20.2267 18.4734 20.628C16.7251 22.4212 14.9425 24.1805 13.1709 25.9507C12.6953 26.4259 12.1861 26.7469 11.467 26.4534C10.3066 25.9796 10.062 24.8395 10.979 23.895C12.2782 22.5573 13.6069 21.2482 14.9319 19.9353C15.5723 19.3003 16.2331 18.6849 16.9241 18.0228Z"
                              fill="#374557"
                              fillOpacity="0.6"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="py-8">
                        <div className="w-full flex justify-center mb-7">
                          <div className="w-[136px] h-[136px] rounded-full flex justify-center items-center bg-purple">
                            <svg
                              width="41"
                              height="66"
                              viewBox="0 0 41 66"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.8849 0.789307C23.1593 1.03592 24.4573 1.19697 25.7049 1.54256C33.5452 3.71006 39.271 10.538 39.9579 18.6158C40.5118 25.115 38.308 30.6008 33.5048 35.0197C31.8364 36.5547 30.0501 37.9606 28.3413 39.4537C28.1275 39.6399 27.9659 40.0039 27.9608 40.2875C27.9289 42.2755 27.944 44.2651 27.944 46.2967C22.8899 46.2967 17.8763 46.2967 12.7919 46.2967C12.7919 46.0619 12.7919 45.8388 12.7919 45.6139C12.7919 41.5457 12.8004 37.4774 12.7802 33.4109C12.7785 32.9394 12.9317 32.6492 13.2835 32.3539C16.5648 29.5959 19.8275 26.8178 23.1038 24.0547C24.2621 23.0783 24.922 21.8704 24.9085 20.3421C24.8883 17.9163 22.8613 15.9148 20.4235 15.8913C17.9706 15.8695 15.9149 17.8055 15.8325 20.2331C15.8089 20.8991 15.8291 21.5668 15.8291 22.2697C10.775 22.2697 5.77485 22.2697 0.692174 22.2697C0.692174 21.3151 0.646718 20.3387 0.698908 19.3657C1.2225 9.69921 8.74465 1.87473 18.4336 0.891642C18.5767 0.876543 18.7147 0.824537 18.8544 0.789307C19.8646 0.789307 20.8747 0.789307 21.8849 0.789307Z"
                                fill="white"
                              />
                              <path
                                d="M19.485 65.2103C18.1617 64.9268 16.9041 64.5091 15.803 63.6787C13.3804 61.8484 12.2877 58.7699 13.0386 55.7888C13.7726 52.8747 16.2138 50.6703 19.2089 50.2157C23.273 49.6 27.2024 52.3681 27.8135 56.277C28.4937 60.6153 25.8202 64.3782 21.544 65.103C21.4429 65.1198 21.3487 65.1718 21.2527 65.2087C20.6635 65.2103 20.0742 65.2103 19.485 65.2103Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex justify-center mb-8">
                          <p className="text-center text-2xl text-black tracking-wide w-[84%]">
                            Are you sure you want to Navigate away from this
                            page?
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <div className="flex space-x-5">
                            <button
                              onClick={deleteData}
                              type="button"
                              className="w-[114px] h-[46px] flex justify-center items-center btn-gradient text-base rounded-full text-white"
                            >
                              Yes Delete
                            </button>
                            <button
                              onClick={cancelUploadModalHandler}
                              type="button"
                              className="w-[114px] h-[46px] flex justify-center items-center border-gradient  text-base rounded-full text-back"
                            >
                              <span className="text-gradient"> Not Now</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ModalCom>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
