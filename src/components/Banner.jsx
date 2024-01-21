import React from "react";

import Image from "../assets/house-banner.png";
import Search from "../components/Search";
const Banner = () => {
  return (
    <section className="h-full mb-5 xl:mb-24 ">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[35px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6 ">
            <span className="text-violet-700">Rent</span> Your Dream House WIth
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            nam voluptas. Deserunt ad officia commodi laudantium accusamus
            tenetur veritatis reiciendis nostrum inventore, cupiditate maiores
            aspernatur magni sed. Nihil, qui quo?
          </p>
        </div>

        <div className="flex-1 lg:justify-end lg:items-end  flex items-center justify-center">
          <img
            src={Image}
            alt="house image"
            className="hidden max-sm:flex max-sm:w-full lg:flex"
          />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
