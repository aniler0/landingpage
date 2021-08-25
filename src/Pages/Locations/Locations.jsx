import React from "react";
import world from "assets/images/huge-global.svg";
import sponsored from "assets/images/sponsored.svg";
import "./location.css";

const Locations = () => {
  return (
    <div className="locations">
      <div className="locations__Container">
        <div className="locations__Text">
          <h1>Huge Global Network of Fast VPN</h1>
          <p>
            See <span>LaslesVPN</span> everywhere to make it easier for you when
            you move locations.
          </p>
        </div>

        <div className="locations__World">
          <img src={world} alt="world" />
        </div>

        <div className="sponsored">
          <img src={sponsored} alt="sponsored" />
        </div>
      </div>
    </div>
  );
};

export default Locations;
