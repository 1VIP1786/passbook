import React from "react";
import Bottombar from "../../components/bottombar";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { ComingSoon } from "../../assets/icons";

const Discover = () => {
  return (
    <div className="bg-tertiary min-h-screen flex justify-center items-center px-32">
      <Navbar />
      <Header />
      <ComingSoon />
      <Bottombar />
    </div>
  );
};

export default Discover;
