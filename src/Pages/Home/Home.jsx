import React from "react";
import Navbar from "Components/Navbar/Navbar";
import HomeCenter from "Components/HomeCenter/HomeCenter";
import Statistics from "Components/Statistics/Statistics";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HomeCenter />
      <Statistics />
    </div>
  );
};

export default Home;
