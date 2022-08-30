import React from "react";
import Product from "../../components/product/Product";
import { dummyData } from "../../staticData";

function SampleProduct() {
  return (
    <div className="flex justify-center relative">
      <div className="flex flex-wrap w-3/4 overflow-x-hidden">
        {dummyData.map((dt) => (
          <Product key={`${dt.id}`} data={dt} />
        ))}
      </div>
    </div>
  );
}

export default SampleProduct;
