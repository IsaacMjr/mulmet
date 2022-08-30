import React from "react";
import Header from "../header/Header";
import "./Banner.css";
import mulround from "../../assets/mulround.mp4";

const Banner: React.FC = () => {
  return (
    <div className="relative">
      <video autoPlay muted loop className="banner-vid">
        <source src={mulround} type="video/mp4" />
      </video>
      <Header />
    </div>
  );
};

export default Banner;
