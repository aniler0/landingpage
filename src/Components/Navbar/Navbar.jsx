import Banner from "Components/Banner/Banner";
import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__Container">
        <Banner />

        <div className="navbar__Center">
          <h1>About</h1>
          <h1>Features</h1>
          <h1>Pricing</h1>
          <h1>Testimonials</h1>
          <h1>Help</h1>
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
