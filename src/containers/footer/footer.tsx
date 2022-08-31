import React from "react";

function Footer() {
  return (
    <div className="bg-zinc-800 pt-4">
      <div className=" flex justify-center ">
        <div className="grid grid-cols-3 w-3/4 gap-4">
          <div className="text-white font-Telugu">
            <p className=" border-b">mulmet</p>
            <p>mulmet casing</p>
            <p>arduinos</p>
            <p>conductor chips</p>
          </div>
          <div className="text-white font-Telugu">
            <p className=" border-b">accessories</p>
            <p>circuit boards</p>
            <p>PCB boards</p>
            <p>network chips</p>
          </div>
          <div className="text-white font-Telugu">
            <p className=" border-b">official social media</p>
            <span>
              <p>facebook</p>
            </span>
            <span>
              <p>twitter</p>
            </span>
            <span>
              <p>linkedIn</p>
            </span>
          </div>
        </div>
      </div>
      <div className=" mt-9 flex justify-center font-Telugu">
        <div className=" w-3/4">
          <p className=" text-gray-400"> copyright lehub.dev</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
