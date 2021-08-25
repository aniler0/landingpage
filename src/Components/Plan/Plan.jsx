import React from "react";
import check from "assets/images/check-icon.svg";
import "./plan.css";

const Plan = ({ plan }) => {
  return (
    <div className="plan">
      <div className="plan__Container">
        <div className="plan__Top">
          <div className="plan__Image">
            <img
              src={require(`assets/images/${plan.image}.svg`).default}
              alt={plan.alt}
            />
          </div>

          <h1>{plan.plan}</h1>

          <div className="plan__Features">
            {plan.features.map((feature, index) => {
              return (
                <div key={index} className="plan__Feature">
                  <img src={check} alt="check" />
                  <p>{feature}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="plan__Bottom">
          {plan.cost ? (
            <h1>
              {plan.cost}
              <span> / mo</span>
            </h1>
          ) : (
            <h1>Free</h1>
          )}
          <button className="select">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
