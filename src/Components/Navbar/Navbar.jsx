import React from "react";
import logo from "assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__Container">
        <div className="navbar__Left">
          <div className="banner__Logo">
            <img src={logo} alt="logo" />
          </div>
          <h1>
            Lasles<span>VPN</span>
          </h1>
        </div>
        <div className="navbar__Center">
          <a>About</a>
          <a>Features</a>
          <a>Pricing</a>
          <a>Testimonials</a>
          <a>Help</a>
        </div>
        <div className="navbar__Right">
          <button className="signin">Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
