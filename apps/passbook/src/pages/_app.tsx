import React from "react";
import Web from ".";
import "../styles/tailwind.css";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default MyApp;
