import React, { useState, useEffect, useContext } from "react";

import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown relative">
      <button
        className="dropdown-btn w-full text-left flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="bx bx-home"></i>
        <div>
          <div className="text-[15px] font-medium leading-tight ">
            {property}
          </div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <i className="bx bx-up-arrow"></i>
        ) : (
          <i className="bx bx-down-arrow"></i>
        )}
      </button>

      {isOpen && (
        // <div className="dropdown-menu" onMouseLeave={() => setIsOpen(!isOpen)}>
        //   {properties &&
        //     properties.map((property, index) => (
        //       <li
        //         className="cursor-pointer hover:text-violet-700 transition"
        //         key={index}
        //         onClick={() => {
        //           setProperty(property);
        //           setIsOpen(!isOpen);
        //         }}
        //       >
        //         {property}
        //       </li>
        //     ))}
        // </div>
        <div className="dropdown-menu">
          {properties &&
            properties.map((property, index) => (
              <li
                className="cursor-pointer hover:text-violet-700 transition"
                key={index}
                onClick={() => {
                  setProperty(property);
                  setIsOpen(!isOpen);
                }}
              >
                {property}
              </li>
            ))}
        </div>
      )}
    </div>
  );
};

export default PropertyDropdown;
