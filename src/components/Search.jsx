import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";

import CountryDropDown from "./CountryDropdown";
import PropertyDropDown from "./PropertyDropdown";
import PriceRangeDropDown from "./PriceRangeDropdown";

const Search = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <div className="px-[35px] py-6 max-w-[980px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-x-3 relative lg:-top-5 lg:shadow-1 bg-white lg:bg-transparent rounded-lg lg:backdrop-blur">
      <CountryDropDown />
      <PropertyDropDown />
      <PriceRangeDropDown />
      <button
        className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
        onClick={() => handleClick()}
      >
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
};

export default Search;
