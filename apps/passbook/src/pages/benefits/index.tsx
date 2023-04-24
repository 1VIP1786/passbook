import React from "react";
import Bottombar from "../../components/bottombar";
import Navbar from "../../components/navbar";
import Header from "../../components/header";

const Benefits = () => {
  return (
    <div className="bg-tertiary min-h-screen flex justify-center items-center">
      <Navbar />
      <Header />
      <div className="text-[20px] font-medium">Benefits</div>
      <Bottombar />
    </div>
  );
};

export default Benefits;
