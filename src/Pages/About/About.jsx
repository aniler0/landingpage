import React from "react";
import illustration2 from "assets/images/illustration2.svg";
import check from "assets/images/check-circle.svg";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__Container">
        <div className="about__Left">
          <img src={illustration2} alt="illustration2" />
        </div>
        <div className="about__Right">
          <div className="right__Text">
            <h1>We Provide Many Features You Can Use</h1>
            <p>
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
          </div>
          <div className="right__Features">
            <div className="feature">
              <img src={check} alt="check" />
              <p>Powerfull online protection.</p>
            </div>
            <div className="feature">
              <img src={check} alt="check" />
              <p>Internet without borders.</p>
            </div>
            <div className="feature">
              <img src={check} alt="check" />
              <p>Supercharged VPN.</p>
            </div>
            <div className="feature">
              <img src={check} alt="check" />
              <p>No specific time limits..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
