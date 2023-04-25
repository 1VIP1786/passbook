import React from "react";
import {
  HomeIcon,
  FamilyIcon,
  BenefitsIcon,
  DiscoverIcon,
} from "../assets/icons";
import Link from "next/link";

const Bottombar = () => {
  return (
    <>
      <div className="fixed bottom-0 z-50 md:w-[768px] w-full h-16 bg-white border-t border-gray-200 ">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <Link href="/home">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group"
            >
              <HomeIcon />
              <span className="text-sm text-gray-500 group-hover:text-[#db6027] dark:group-hover:text-[#db6027]">
                Home
              </span>
            </button>
          </Link>
          <Link href="/family">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group"
            >
              <FamilyIcon />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-[#db6027] dark:group-hover:text-[#db6027]">
                Family
              </span>
            </button>
          </Link>
          <Link href="/benefits">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group"
            >
              <BenefitsIcon />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-[#db6027] dark:group-hover:text-[#db6027]">
                Benefits
              </span>
            </button>
          </Link>
          <Link href="/discover">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group"
            >
              <DiscoverIcon />
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
