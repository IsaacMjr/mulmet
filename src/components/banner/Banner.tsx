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
      <div className="text-white font-Telugu absolute top-[40%] right-[40%]">
        <p className="uppercase font-semibold text-5xl text-center tracking-wider">
          mulmet
        </p>
        <p className=" uppercase text-2xl text-center tracking-wider">
          current specialist at your service
        </p>
      </div>
    </div>
  );
};

export default Banner;
