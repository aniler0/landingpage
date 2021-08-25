import React from "react";
import Statistic from "../Statistic/Statistic";
import "./statistics.css";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics__Container">
        <Statistic user />
        <Statistic location />
        <Statistic server />
      </div>
    </div>
  );
};

export default Statistics;
