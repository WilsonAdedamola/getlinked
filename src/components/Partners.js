import React from "react";
import sponsors from "../assets/sponsors.svg";
import mobileSponsors from "../assets/mobile-sponsor.svg";

const Partners = () => {
  return (
    <section className="relative my-20">
      <div className="absolute -z-10 top-5 left-0 blur rounded-full w-28 h-28 bg-[#903aff] sm:w-56 sm:h-56 lg:left-16"></div>
      <div className="absolute right-0 top-60 -z-10 blur rounded-full w-28 h-28 bg-[#903aff] sm:top-80 lg:-right-20 lg:w-60 lg:h-60"></div>
      <div className="max-w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-center text-white ">
          <h1 className="text font-bold mb-3 text-xl lg:text-4xl">
            Partners and Sponsors
          </h1>
          <p className="text-xs max-w-xs mx-auto text-center lg:text-sm lg:max-w-md">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-center w-full">
            <img
              src={sponsors}
              alt="Partners and Sponsors"
              className="hidden md:block"
            />
            <img
              src={mobileSponsors}
              alt="Partners and Sponsors"
              className="md:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
