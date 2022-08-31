import React, { useState } from "react";
import NavMenu from "../navMenu/navMenu";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function handleMenu(): void {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="flex justify-center absolute top-0 w-full">
      <div className="flex justify-between w-11/12 items-center ">
        <div className="flex [&>*]:m-5 [&>*]:text-white font-semibold">
          <div className="flex cursor-pointer" onClick={handleMenu}>
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
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p>your selection</p>
          </div>
        </div>
        {openMenu && <NavMenu handleMenu={handleMenu} />}
      </div>
    </div>
  );
};
export default Header;
