import React from "react";
import "./product.css";

interface props {
  data: {
    id: Number;
    bgColor: String;
    imageUrl: String;
  };
}

const Product: React.FC<props> = ({ data }) => {
  const { imageUrl, bgColor } = data;
  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className="w-64 h-72 rounded-md m-3"
    >
      <img src={`${imageUrl}`} alt="" className=" " />
    </div>
  );
};

export default Product;
