import React from "react";
import Bottombar from "../../components/bottombar";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { ComingSoon } from "../../assets/icons";

const Notifications = () => {
  return (
    <div className="bg-tertiary min-h-screen flex justify-center items-center px-32 lg:px-72">
      <Navbar />
      <Header />
      <ComingSoon />
      <Bottombar />
    </div>
  );
};

export default Notifications;
