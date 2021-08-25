import Banner from "Components/Banner/Banner";
import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__Container">
        <Banner />

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
