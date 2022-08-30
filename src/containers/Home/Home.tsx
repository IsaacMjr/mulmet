import React from "react";
import Banner from "../../components/banner/Banner";
import BodyHeading from "../../components/bodyHeading/BodyHeading";
import SampleProduct from "../sampleProduct/SampleProduct";

function Home() {
  return (
    <div>
      <Banner />
      <BodyHeading />
      <SampleProduct />
    </div>
  );
}

export default Home;
