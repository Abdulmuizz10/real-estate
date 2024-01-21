import React, { useState, useEffect, useContext } from "react";

import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    { value: "price range (any)" },
    { value: "100000 - 130000" },
    { value: "130000 - 160000" },
    { value: "160000 - 190000" },
    { value: "190000 - 220000" },
    { value: "10000 - 30000" },
    { value: "30000 - 40000" },
  ];

  return (
    <div className="dropdown relative">
      <button
        className="dropdown-btn w-full text-left flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="bx bx-wallet"></i>
        <div>
          <div className="text-[15px] font-medium leading-tight ">{price}</div>
          <div className="text-[13px]">Choose price range</div>
        </div>
        {isOpen ? (
          <i className="bx bx-up-arrow"></i>
        ) : (
          <i className="bx bx-down-arrow"></i>
        )}
      </button>

      {isOpen && (
        // <div className="dropdown-menu" onMouseLeave={() => setIsOpen(!isOpen)}>
        //   {prices &&
        //     prices.map((price, index) => (
        //       <li
        //         className="cursor-pointer hover:text-violet-700 transition"
        //         key={index}
        //         onClick={() => {
        //           setPrice(price.value);
        //           setIsOpen(!isOpen);
        //         }}
        //       >
        //         {price.value}
        //       </li>
        //     ))}
        // </div>
        <div className="dropdown-menu">
          {prices &&
            prices.map((price, index) => (
              <li
                className="cursor-pointer hover:text-violet-700 transition"
                key={index}
                onClick={() => {
                  setPrice(price.value);
                  setIsOpen(!isOpen);
                }}
              >
                {price.value}
              </li>
            ))}
        </div>
      )}
    </div>
  );
};

export default PriceRangeDropdown;
