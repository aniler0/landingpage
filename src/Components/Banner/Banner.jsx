import React from "react";
import logo from "assets/images/logo.svg";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__Logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>
        Lasles<span>VPN</span>
      </h1>
    </div>
  );
};

export default Banner;
