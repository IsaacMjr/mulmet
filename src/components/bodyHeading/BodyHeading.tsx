import React from "react";
import "./BodyHeading.css";

const BodyHeading: React.FC = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-3/4">
        <p className="font-semibold text-4xl uppercase heading font-Telugu">
          discover the art of the future of electricity and niceness
        </p>
        <p className="font-Telugu text-lg capitalize">
          Explore the Rolex collection of prestigious, high-precision
          timepieces. Rolex offers a wide assortment of Classic and Professional
          watch models to suit any wrist. Discover the broad selection of Rolex
          watches to find a perfect combination of style and functionality.
        </p>
      </div>
    </div>
  );
};

export default BodyHeading;
