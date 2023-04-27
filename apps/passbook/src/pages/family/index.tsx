import React from "react";
import Bottombar from "../../components/bottombar";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { FemaleAvatar, InfoIcon, MaleAvatar } from "../../assets/icons";
import { familyMembers } from "../../config/family";
import Link from "next/link";

const Family = () => {
  return (
    <div className="min-h-screen mb-28">
      <Navbar />
      <Header />
      <div className="bg-tertiary mt-40 sm:mt-48 rounded-xl px-4 py-5 mx-3">
        <div className="text-primary font-bold text-center underline text-[20px] uppercase">
          My family
        </div>
        {familyMembers.map((familyMember: any) => (
          <div
            className="bg-white px-3 py-3 rounded-md mt-5"
            key={familyMember?.id}
          >
            <div className="flex">
              <div className="mr-4 flex items-center">
                {familyMember?.gender == "female" ? (
                  <FemaleAvatar size="" />
                ) : (
                  <MaleAvatar size="" />
                )}
              </div>
              <div className="flex justify-between w-full uppercase">
                <div className="text-[12px] text-[#525252] font-demi">
                  {familyMember?.name}
                  <div className="font-regular text-[10px]">
                    {familyMember?.relation}
                  </div>
                </div>
                <div className="ml-4 flex items-center">
                  <Link href={`/family/${familyMember?.id}`}>
                    <InfoIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Bottombar />
    </div>
  );
};

export default Family;
