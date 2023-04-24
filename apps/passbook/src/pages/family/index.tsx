import React from "react";
import Bottombar from "../../components/bottombar";
import Navbar from "../../components/navbar";
import Header from "../../components/header";

const Family = () => {
  return (
    <div className="bg-tertiary min-h-screen flex justify-center items-center">
      <Navbar />
      <Header />
      <div className="font-medium text-[20px]">Family</div>
      <Bottombar />
    </div>
  );
};

export default Family;
