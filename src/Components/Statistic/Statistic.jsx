import React from "react";
import usericon from "assets/images/user-icon.svg";
import servericon from "assets/images/server-icon.svg";
import locationicon from "assets/images/location-icon.svg";
import "./statistic.css";

const Statistic = ({ user, server }) => {
  return (
    <div className="statistic">
      <div className="statistic__Container">
        {user ? (
          <div className="item">
            <div className="icon">
              <img src={usericon} alt="user" />
            </div>
            <div className="details">
              <h1>90+</h1>
              <p>Users</p>
            </div>
          </div>
        ) : server ? (
          <div className="item">
            <div className="icon">
              <img src={servericon} alt="server" />
            </div>
            <div className="details">
              <h1>50+</h1>
              <p>Servers</p>
            </div>
          </div>
        ) : (
          <div className="item with-border">
            <div className="icon">
              <img src={locationicon} alt="location" />
            </div>
            <div className="details" style={{}}>
              <h1>30+</h1>
              <p>Locations</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistic;
