import React from "react";
import Icons from "../../Helpers/Icons";

export default function LoginActivityTab() {
  return (
    <div className="login-activity-tab w-full">
      <div className="relative w-full overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="text-base text-thin-light-gray border-b default-border-bottom ">
              <td className="py-4 text-center">OS</td>
              <td className="py-4 text-center">Browser</td>
              <td className="py-4 text-center">Location</td>
              <td className="py-4 text-center">Last session</td>
              <td className="py-4 text-center">Status</td>
              <td className="py-4 text-center"></td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="text-center py-4">
                <div className="flex items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    Windows
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    Google Chrome
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-dark-gray whitespace-nowrap px-2">
                  Dhaka , Bangladesh
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-thin-light-gray font-medium whitespace-nowrap px-2">
                  2 days ago
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-sm px-[10px]  py-[6px] rounded-full bg-light-green text-white capitalize">
                  active
                </span>
              </td>
              <td className="text-center py-4">
                <button type="button" className=" text-thin-light-gray">
                  <Icons name="deep-delete" />
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="text-center py-4">
                <div className="flex items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    Mac
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    Firefox
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-dark-gray whitespace-nowrap px-2">
                  Tokyo,japan
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-thin-light-gray font-medium whitespace-nowrap px-2">
                  5 days ago
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-sm px-[10px]  py-[6px] rounded-full bg-light-red text-white capitalize">
                  Unactive
                </span>
              </td>
              <td className="text-center py-4">
                <button type="button" className=" text-thin-light-gray">
                  <Icons name="deep-delete" />
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="text-center py-4">
                <div className="flex items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    App
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    App
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-dark-gray whitespace-nowrap px-2">
                  Barhin,Dubai
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-thin-light-gray font-medium whitespace-nowrap px-2">
                  2 days ago
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-sm px-[10px]  py-[6px] rounded-full bg-light-green text-white capitalize">
                  active
                </span>
              </td>
              <td className="text-center py-4">
                <button type="button" className=" text-thin-light-gray">
                  <Icons name="deep-delete" />
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="text-center py-4">
                <div className="flex items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    Windows
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    Google Chrome
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-dark-gray whitespace-nowrap px-2">
                  Dhaka , Bangladesh
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-thin-light-gray font-medium whitespace-nowrap px-2">
                  2 days ago
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-sm px-[10px]  py-[6px] rounded-full bg-light-green text-white capitalize">
                  active
                </span>
              </td>
              <td className="text-center py-4">
                <button type="button" className=" text-thin-light-gray">
                  <Icons name="deep-delete" />
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="text-center py-4">
                <div className="flex items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    Mac
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    Firefox
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-dark-gray whitespace-nowrap px-2">
                  Tokyo,japan
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-thin-light-gray font-medium whitespace-nowrap px-2">
                  5 days ago
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-sm px-[10px]  py-[6px] rounded-full bg-light-red text-white capitalize">
                  Unactive
                </span>
              </td>
              <td className="text-center py-4">
                <button type="button" className=" text-thin-light-gray">
                  <Icons name="deep-delete" />
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="text-center py-4">
                <div className="flex items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    App
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-base text-dark-gray font-medium whitespace-nowrap px-2">
                    App
                  </span>
                </div>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-dark-gray whitespace-nowrap px-2">
                  Barhin,Dubai
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-base text-thin-light-gray font-medium whitespace-nowrap px-2">
                  2 days ago
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-sm px-[10px]  py-[6px] rounded-full bg-light-green text-white capitalize">
                  active
                </span>
              </td>
              <td className="text-center py-4">
                <button type="button" className=" text-thin-light-gray">
                  <Icons name="deep-delete" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
