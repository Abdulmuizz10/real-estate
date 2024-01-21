import React, { useState, useEffect, useContext } from "react";

import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown relative">
      <button
        className="dropdown-btn w-full text-left flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="bx bx-map"></i>
        <div>
          <div className="text-[15px] font-medium leading-tight ">
            {country}
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
        //   {countries &&
        //     countries.map((country, index) => (
        //       <li
        //         className="cursor-pointer hover:text-violet-700 transition"
        //         key={index}
        //         onClick={() => setCountry(country)}
        //       >
        //         {country}
        //       </li>
        //     ))}
        // </div>
        <div className="dropdown-menu">
          {countries &&
            countries.map((country, index) => (
              <li
                className="cursor-pointer hover:text-violet-700 transition"
                key={index}
                onClick={() => {
                  setCountry(country);
                  setIsOpen(!isOpen);
                }}
              >
                {country}
              </li>
            ))}
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
