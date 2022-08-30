import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-center absolute top-0 w-full">
      <div className="flex justify-between w-11/12 items-center [&>*:hover]:bg-slate-300">
        <div className="flex [&>*]:m-5 [&>*]:text-white font-semibold">
          <div className="flex cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>

            <p>menu</p>
          </div>
          <p>mulmet</p>
          <p>mulmet products</p>
        </div>
        <div className="text-white">
          <p>logo</p>
        </div>
        <div className="trial flex [&>*]:m-5 [&>*]:text-white font-semibold">
          <p>search</p>
          <p>your selection</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
