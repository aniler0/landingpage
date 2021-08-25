import React from "react";
import Plan from "Components/Plan/Plan";
import "./plans.css";
import { plansData } from "utils/project-datas";

const Plans = () => {
  return (
    <div className="plans">
      <div className="plans__Container">
        <div className="plans__Text">
          <h1>Choose Your Plan</h1>
          <p>
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className="plan__Area">
          {plansData.map((plan, key) => {
            return <Plan plan={plan} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Plans;
