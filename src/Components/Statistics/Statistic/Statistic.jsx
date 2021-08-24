import React from "react";
import usericon from "assets/images/user-icon.svg";
import servericon from "assets/images/user-icon.svg";
import locationicon from "assets/images/user-icon.svg";
const Statistic = ({ iconType }) => {
  return (
    <div className="statistic">
      <div className="statistic__Container">
        <div className="icon">
          {iconType && <img src={iconType} alt="user" />}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
