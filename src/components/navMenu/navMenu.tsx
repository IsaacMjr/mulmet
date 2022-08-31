import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";

interface prop {
  handleMenu: () => void;
}

function NavMenu({ handleMenu }: prop) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <Backdrop open={open} style={{ zIndex: +1 }}>
      <div className="bg-white w-1/4 h-full left-0 absolute p-5">
        <div className="grid grid-cols-2">
          <div className="cursor-pointer" onClick={() => handleMenu()}>
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
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div>
            <p>logo</p>
            <p className="uppercase">mulmet</p>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}

export default NavMenu;
