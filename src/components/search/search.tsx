import React from "react";
import Backdrop from "@mui/material/Backdrop";

interface props {
  handleSearch: () => void;
}

function Search({ handleSearch }: props) {
  return (
    <Backdrop open={true} style={{ zIndex: 1 }}>
      <div className=" bg-gray-100 w-full absolute top-0 h-64">
        <div className="relative">
          <div className="mx-auto w-28">
            <p> the logo</p>
            <p className="uppercase font-semibold font-Telugu text-2xl tracking-wider">
              mulmet
            </p>
          </div>
          <div
            className="absolute top-3 right-10 bg-white rounded-full p-1 cursor-pointer"
            onClick={() => handleSearch()}
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="my-10 text-center">
            <p className="uppercase font-semibold font-Telugu text-3xl tracking-wider">
              what are you looking for
            </p>
          </div>
          <div className=" flex justify-center">
            <form className="flex">
              <input
                type="text"
                placeholder="search"
                className="w-96 bg-transparent border-b outline-none font-Telugu"
              />
              <div
                className="rounded-full bg-gray-800 w-6 h-6 flex items-center justify-center
               cursor-pointer hover:bg-white hover:border-2 hover:border-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-5 text-white  hover:text-gray-800 "
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}

export default Search;
