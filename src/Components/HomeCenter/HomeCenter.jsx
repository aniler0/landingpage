import React from "react";
import illustration from "assets/images/illustration.svg";
import "./homecenter.css";

const HomeCenter = () => {
  return (
    <div className="homecenter">
      <div className="homecenter__Container">
        <div className="homecenter__Left">
          <div className="header">
            <h1>
              Want anything to be easy with <span>LaslesVPN</span>
            </h1>
          </div>
          <div className="paragraph">
            <p>
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
          </div>
          <button className="getstarted__Button">Get Started</button>
        </div>
        <div className="homecenter__Illustration">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
    </div>
  );
};

export default HomeCenter;
