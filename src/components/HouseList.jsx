import React, { useContext } from "react";

import { HouseContext } from "./HouseContext";

import House from "./House";

import { Link } from "react-router-dom";

const HouseList = () => {
  const { houses, Loading } = useContext(HouseContext);

  // if loading is true
  if (Loading) {
    return (
      <i
        className="bx bx-loader-circle text-violet-700"
        style={{
          fontSize: "50px",
          marginTop: "100px",
          marginLeft: "50%",
          animation: "rotate 1s infinite",
        }}
      ></i>
    );
  }

  if (houses.length < 1) {
    return (
      <div className=" text-violet-700 text-center text-xl">
        Sorry, nothing found
      </div>
    );
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
