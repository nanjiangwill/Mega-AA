import React, { useState } from "react";
import dataImage1 from "../../assets/images/data-table-user-1.png";
import SelectBox from "../Helpers/SelectBox";

export default function SellProductHistoryTable({ className }) {
  const filterCategories = ["All Categories", "Explore", "Featured"];
  const [selectedCategory, setCategory] = useState(filterCategories[0]);
  return (
    <div
      className={`sell-product-history-table update-table w-full md:p-8 p-4 bg-white overflow-hidden rounded-2xl section-shadow min-h-[520px] ${
        className || ""
      }`}
    >
      <div className="header w-full sm:flex justify-between items-center mb-5">
        <div className="flex space-x-2 items-center">
          <h1 className="text-xl font-bold text-dark-gray tracking-wide">
            Products History
          </h1>
        </div>
        <SelectBox
          action={setCategory}
          datas={filterCategories}
          className="Update-table-dropdown"
          contentBodyClasses="w-auto min-w-max"
        />
      </div>
      <div className="relative w-full overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="text-base text-thin-light-gray border-b default-border-bottom ">
              <td className="py-4">List</td>
              <td className="py-4">Publish date</td>
              <td className="py-4">Product Name</td>
              <td className="py-4 text-center">type</td>
              <td className="py-4 text-center">Sell</td>
              <td className="py-4 text-center">Tendered</td>
              <td className="py-4 text-center">Earnings</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <td className="text-start py-4 px-2">
                <span className="text-xl tracking-wide font-bold text-dark-gray">
                  01
                </span>
              </td>
              <td className="text-start py-4 px-2">
                <span className="text-base text-thin-light-gray whitespace-nowrap">
                  2 Hours 1 min 30s
                </span>
              </td>
              <td className=" py-4 px-2">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage1}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                      Mullican Computer Joy
                    </h1>
                    <span className="text-sm text-thin-light-gray">
                      Owned by <span className="text-purple">Xoeyam</span>
                    </span>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                  Art
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  343
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  1.323ETH
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  1.323ETH
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <td className="text-start py-4 px-2">
                <span className="text-xl tracking-wide font-bold text-dark-gray">
                  02
                </span>
              </td>
              <td className="text-start py-4 px-2">
                <span className="text-base text-thin-light-gray whitespace-nowrap">
                  2 Hours 1 min 30s
                </span>
              </td>
              <td className=" py-4 px-2">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage1}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                      Mullican Computer Joy
                    </h1>
                    <span className="text-sm text-thin-light-gray">
                      Owned by <span className="text-purple">Xoeyam</span>
                    </span>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                  Art
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  343
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  1.323ETH
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  1.323ETH
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <td className="text-start py-4 px-2">
                <span className="text-xl tracking-wide font-bold text-dark-gray">
                  03
                </span>
              </td>
              <td className="text-start py-4 px-2">
                <span className="text-base text-thin-light-gray whitespace-nowrap">
                  2 Hours 1 min 30s
                </span>
              </td>
              <td className=" py-4 px-2">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage1}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                      Mullican Computer Joy
                    </h1>
                    <span className="text-sm text-thin-light-gray">
                      Owned by <span className="text-purple">Xoeyam</span>
                    </span>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                  Art
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  343
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  1.323ETH
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  1.323ETH
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 ">
              <td className="text-start py-4 px-2">
                <span className="text-xl tracking-wide font-bold text-dark-gray">
                  04
                </span>
              </td>
              <td className="text-start py-4 px-2">
                <span className="text-base text-thin-light-gray whitespace-nowrap">
                  2 Hours 1 min 30s
                </span>
              </td>
              <td className=" py-4 px-2">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage1}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                      Mullican Computer Joy
                    </h1>
                    <span className="text-sm text-thin-light-gray">
                      Owned by <span className="text-purple">Xoeyam</span>
                    </span>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                  Art
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  343
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  1.323ETH
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-dark-gray font-medium">
                  1.323ETH
                </span>
              </td>
            </tr>

            {selectedCategory === "All Categories" ? (
              <>
                <tr className="bg-white border-b hover:bg-gray-50 ">
                  <td className="text-start py-4 px-2">
                    <span className="text-xl tracking-wide font-bold text-dark-gray">
                      01
                    </span>
                  </td>
                  <td className="text-start py-4 px-2">
                    <span className="text-base text-thin-light-gray whitespace-nowrap">
                      2 Hours 1 min 30s
                    </span>
                  </td>
                  <td className=" py-4 px-2">
                    <div className="flex space-x-2 items-center">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                        <img
                          src={dataImage1}
                          alt="data"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                          Mullican Computer Joy
                        </h1>
                        <span className="text-sm text-thin-light-gray">
                          Owned by <span className="text-purple">Xoeyam</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                      Art
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      343
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 ">
                  <td className="text-start py-4 px-2">
                    <span className="text-xl tracking-wide font-bold text-dark-gray">
                      02
                    </span>
                  </td>
                  <td className="text-start py-4 px-2">
                    <span className="text-base text-thin-light-gray whitespace-nowrap">
                      2 Hours 1 min 30s
                    </span>
                  </td>
                  <td className=" py-4 px-2">
                    <div className="flex space-x-2 items-center">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                        <img
                          src={dataImage1}
                          alt="data"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                          Mullican Computer Joy
                        </h1>
                        <span className="text-sm text-thin-light-gray">
                          Owned by <span className="text-purple">Xoeyam</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                      Art
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      343
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 ">
                  <td className="text-start py-4 px-2">
                    <span className="text-xl tracking-wide font-bold text-dark-gray">
                      03
                    </span>
                  </td>
                  <td className="text-start py-4 px-2">
                    <span className="text-base text-thin-light-gray whitespace-nowrap">
                      2 Hours 1 min 30s
                    </span>
                  </td>
                  <td className=" py-4 px-2">
                    <div className="flex space-x-2 items-center">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                        <img
                          src={dataImage1}
                          alt="data"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                          Mullican Computer Joy
                        </h1>
                        <span className="text-sm text-thin-light-gray">
                          Owned by <span className="text-purple">Xoeyam</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                      Art
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      343
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 ">
                  <td className="text-start py-4 px-2">
                    <span className="text-xl tracking-wide font-bold text-dark-gray">
                      04
                    </span>
                  </td>
                  <td className="text-start py-4 px-2">
                    <span className="text-base text-thin-light-gray whitespace-nowrap">
                      2 Hours 1 min 30s
                    </span>
                  </td>
                  <td className=" py-4 px-2">
                    <div className="flex space-x-2 items-center">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                        <img
                          src={dataImage1}
                          alt="data"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                          Mullican Computer Joy
                        </h1>
                        <span className="text-sm text-thin-light-gray">
                          Owned by <span className="text-purple">Xoeyam</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                      Art
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      343
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                </tr>
              </>
            ) : selectedCategory === "Explore" ? (
              <>
                <tr className="bg-white border-b hover:bg-gray-50 ">
                  <td className="text-start py-4 px-2">
                    <span className="text-xl tracking-wide font-bold text-dark-gray">
                      01
                    </span>
                  </td>
                  <td className="text-start py-4 px-2">
                    <span className="text-base text-thin-light-gray whitespace-nowrap">
                      2 Hours 1 min 30s
                    </span>
                  </td>
                  <td className=" py-4 px-2">
                    <div className="flex space-x-2 items-center">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                        <img
                          src={dataImage1}
                          alt="data"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                          Mullican Computer Joy
                        </h1>
                        <span className="text-sm text-thin-light-gray">
                          Owned by <span className="text-purple">Xoeyam</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                      Art
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      343
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 ">
                  <td className="text-start py-4 px-2">
                    <span className="text-xl tracking-wide font-bold text-dark-gray">
                      02
                    </span>
                  </td>
                  <td className="text-start py-4 px-2">
                    <span className="text-base text-thin-light-gray whitespace-nowrap">
                      2 Hours 1 min 30s
                    </span>
                  </td>
                  <td className=" py-4 px-2">
                    <div className="flex space-x-2 items-center">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                        <img
                          src={dataImage1}
                          alt="data"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                          Mullican Computer Joy
                        </h1>
                        <span className="text-sm text-thin-light-gray">
                          Owned by <span className="text-purple">Xoeyam</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                      Art
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      343
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 ">
                  <td className="text-start py-4 px-2">
                    <span className="text-xl tracking-wide font-bold text-dark-gray">
                      03
                    </span>
                  </td>
                  <td className="text-start py-4 px-2">
                    <span className="text-base text-thin-light-gray whitespace-nowrap">
                      2 Hours 1 min 30s
                    </span>
                  </td>
                  <td className=" py-4 px-2">
                    <div className="flex space-x-2 items-center">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                        <img
                          src={dataImage1}
                          alt="data"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                          Mullican Computer Joy
                        </h1>
                        <span className="text-sm text-thin-light-gray">
                          Owned by <span className="text-purple">Xoeyam</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                      Art
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      343
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                </tr>
              </>
            ) : (
              <>
                <tr className="bg-white border-b hover:bg-gray-50 ">
                  <td className="text-start py-4 px-2">
                    <span className="text-xl tracking-wide font-bold text-dark-gray">
                      03
                    </span>
                  </td>
                  <td className="text-start py-4 px-2">
                    <span className="text-base text-thin-light-gray whitespace-nowrap">
                      2 Hours 1 min 30s
                    </span>
                  </td>
                  <td className=" py-4 px-2">
                    <div className="flex space-x-2 items-center">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                        <img
                          src={dataImage1}
                          alt="data"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                          Mullican Computer Joy
                        </h1>
                        <span className="text-sm text-thin-light-gray">
                          Owned by <span className="text-purple">Xoeyam</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                      Art
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      343
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 ">
                  <td className="text-start py-4 px-2">
                    <span className="text-xl tracking-wide font-bold text-dark-gray">
                      04
                    </span>
                  </td>
                  <td className="text-start py-4 px-2">
                    <span className="text-base text-thin-light-gray whitespace-nowrap">
                      2 Hours 1 min 30s
                    </span>
                  </td>
                  <td className=" py-4 px-2">
                    <div className="flex space-x-2 items-center">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                        <img
                          src={dataImage1}
                          alt="data"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-xl text-dark-gray whitespace-nowrap">
                          Mullican Computer Joy
                        </h1>
                        <span className="text-sm text-thin-light-gray">
                          Owned by <span className="text-purple">Xoeyam</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-sm text-white bg-light-green rounded-full  px-2.5 py-1.5">
                      Art
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      343
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-dark-gray font-medium">
                      1.323ETH
                    </span>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
