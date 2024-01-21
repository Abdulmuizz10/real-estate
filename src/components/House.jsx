import React from "react";
import { housesData } from "../data";

const House = ({ house }) => {
  console.log(housesData.length);
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="bx-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[370px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img src={image} alt="" className="mb-8" />
      <div className="mb-4 flex gap-x-2 text-sm ">
        <div className="bg-green-500 rounded-full text-white px-3 ">{type}</div>
        <div className="bg-violet-500 rounded-full text-white px-3">
          {country}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center to-gray-600 gap-1 ">
          <div className="text-[20px]">
            <i className="bx bx-bed"></i>
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center to-gray-600 gap-1 ">
          <div className="text-[20px]">
            <i className="bx bx-bath"></i>
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center to-gray-600 gap-1 ">
          <div className="text-[20px]">
            <i className="bx bx-area"></i>
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-violet-600 mb-4">{price}</div>
    </div>
  );
};

export default House;
