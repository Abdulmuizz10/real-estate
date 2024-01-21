import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { housesData } from "../data";

const PropertyDetails = () => {
  const [House, setHouse] = useState(null);
  // get the house id
  const { id } = useParams();

  // get the house based on the id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setHouse(house);
  }, [House, house]);

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        {House && (
          <div className="mt-2">
            <div className="flex flex-col lg:flex-row  justify-between gap-5">
              <div className="flex flex-col justify-start gap-5 max-w-2xl">
                <div className="flex  justify-between max-sm:items-center">
                  <div className="flex flex-col items-start text-left gap-1">
                    <h2 className="font-bold text-left text-2xl tracking-tight">
                      {House.name}
                    </h2>
                    <p className="text-md tracking-tight font-600 text-slate-500">
                      {House.address}
                    </p>
                  </div>
                  <div className="flex items-end flex-col sm:flex-row gap-1">
                    <div className="bg-green-500 rounded-full text-white px-3 ">
                      {House.type}
                    </div>
                    <div className="bg-violet-500 rounded-full text-white px-3 text-ellipsis max-sm:text-xs max-sm:py-2">
                      {House.country}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-7">
                  <div className="md:min-w-[668px] h-[350px]">
                    <img
                      src={House.imageLg}
                      alt="house lg"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex items-center ">
                    <div className="flex items-center text-violet-800 gap-1 mr-4">
                      <div className="text-[20px]">
                        <i className="bx bx-bed"></i>
                      </div>
                      <div>{House.bedrooms}</div>
                    </div>
                    <div className="flex items-center text-violet-800 gap-1 mr-4">
                      <div className="text-[20px]">
                        <i className="bx bx-bath"></i>
                      </div>
                      <div>{House.bathrooms}</div>
                    </div>
                    <div className="flex items-center text-violet-800 gap-1 mr-4">
                      <div className="text-[20px]">
                        <i className="bx bx-area"></i>
                      </div>
                      <div>{House.surface}</div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:pr-7">
                  <p className="text-md tracking-tight font-600 text-slate-500 max-sm:text-left">
                    {House.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center h-full w-full">
                <h1 className="text-violet-800 md:text-3xl text-2xl text-right mb-2">
                  $ {House.price}
                </h1>
                <div className=" p-4 flex flex-col justify-center items-center border-slate-100 border-2 rounded-lg gap-2">
                  <div className="flex items-start g-5 w-full">
                    <img
                      src={House.agent.image}
                      alt="seller pic"
                      className="rounded-full w-16 h-16"
                    />
                    <div className="ml-5">
                      <h3 className="font-500 text-lg">{House.agent.name}</h3>
                      <p className="text-slate-400 text-xs font-bold">
                        View listings
                      </p>
                    </div>
                  </div>

                  <form className="mt-2 flex flex-col items-center justify-center w-full">
                    <label
                      htmlFor="name"
                      className="border-2 border-slate-100 rounded-md my-2 w-full "
                    >
                      <input
                        type="text"
                        placeholder="Name*"
                        className="px-3 py-3 w-full text-slate-500 text-xs"
                      />
                    </label>

                    <label
                      htmlFor="name"
                      className="border-2 border-slate-100 rounded-md my-2   w-full"
                    >
                      <input
                        type="text"
                        placeholder="Email*"
                        className="px-3 py-3 w-full text-slate-500 text-xs"
                      />
                    </label>

                    <label
                      htmlFor="name"
                      className="border-2 border-slate-100 rounded-md my-2 w-full "
                    >
                      <input
                        type="text"
                        placeholder="Phone*"
                        className="px-3 py-3 w-full text-slate-500 text-xs"
                      />
                    </label>

                    <label
                      htmlFor="name"
                      className="border-2 border-slate-100 rounded-md my-2  w-full "
                    >
                      <textarea
                        type="text"
                        rows={3}
                        placeholder="Message*"
                        className="px-3 py-3 w-full text-slate-500 text-xs"
                      />
                    </label>

                    <div className="flex items-center justify-between w-full gap-1">
                      <button className=" bg-violet-700 hover:bg-violet-800 text-white px-2 w-1/2 py-3 rounded-lg transition text-sm">
                        Send message
                      </button>
                      <button className=" bg-white text-violet-800 px-2 w-1/2  py-3 rounded-lg transition border-2 border-violet-800 text-sm">
                        Call
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyDetails;
