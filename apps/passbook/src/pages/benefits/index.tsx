import React from "react";
import Bottombar from "../../components/bottombar";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { CheveronIcon } from "../../assets/icons";

const Benefits = () => {
  return (
    <div className="mb-28">
      <Navbar />
      <Header />
      <div className="bg-tertiary mt-40 rounded-xl px-4 py-5 mx-3">
        <div className="form-control">
          <label className="flex justify-evenly cursor-pointer">
            <span className="font-bold text-[12px] text-[#695F5F] uppercase flex items-center">
              Schemes
            </span>
            <input type="checkbox" className="toggle toggle-primary" />
            <span className="font-bold text-[12px] text-[#695F5F] uppercase flex items-center">
              Transactions
            </span>
          </label>
        </div>
        <div className="bg-primary py-4 px-5 mt-5 rounded-md">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="text-white font-medium text-[12px]">
                Total Family Benefits
              </div>
              <div className="text-white font-bold">Rs 92,227 /-</div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-white font-bold text-[12px]">
                Schemes: 23
              </div>
              <div className="text-white font-bold text-[12px]">
                Services: 0
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="dropdown dropdown-bottom">
            <label
              tabIndex={0}
              className="text-[12px] font-regular bg-white rounded px-3 py-2 text-black"
            >
              Benefit Type&nbsp;&nbsp;
              <CheveronIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          {/* <div className="dropdown dropdown-bottom">
            <label
              tabIndex={0}
              className="text-[12px] font-regular bg-white rounded px-3 py-2 text-black"
            >
              Beneficiary&nbsp;&nbsp;
              <CheveronIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div> */}
          {/* <div className="dropdown dropdown-bottom">
            <label
              tabIndex={0}
              className="text-[12px] font-regular bg-white rounded px-3 py-2 text-black"
            >
              FY&nbsp;&nbsp;
              <CheveronIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <Bottombar />
    </div>
  );
};

export default Benefits;
