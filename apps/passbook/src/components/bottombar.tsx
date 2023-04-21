import React from "react";
import Test from "../assets/icons/home";
import Family from "../assets/icons/family";
import Benefits from "../assets/icons/benefits";
import Discover from "../assets/icons/discover";
import Link from "next/link";

const Bottombar = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <Link href="/home">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <Test />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-[#db6027] dark:group-hover:text-[#db6027]">
                Home
              </span>
            </button>
          </Link>
          <Link href="/family">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <Family />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-[#db6027] dark:group-hover:text-[#db6027]">
                Family
              </span>
            </button>
          </Link>
          <Link href="/benefits">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <Benefits />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-[#db6027] dark:group-hover:text-[#db6027]">
                Benefits
              </span>
            </button>
          </Link>
          <Link href="/discover">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <Discover />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-[#db6027] dark:group-hover:text-[#db6027]">
                Discover
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Bottombar;
