import React from "react";
import paybox from "../assets/Paybox.png";
import VizualPlus from "../assets/VizualPlus.png";
import wisper from "../assets/wisper.png";
import Winwise from "../assets/Winwise.png";
import Liberty from "../assets/Liberty.png";
import Libertypay from "../assets/Libertypay.png";

const Partners = () => {
  return (
    <section className="relative my-20">
      <div className="absolute -z-10 top-5 left-0 blur rounded-full w-28 h-28 bg-[#903aff] sm:w-56 sm:h-56 lg:left-16"></div>
      <div className="absolute right-0 top-60 -z-10 blur rounded-full w-28 h-28 bg-[#903aff] sm:top-80 lg:-right-20 lg:w-60 lg:h-60"></div>
      <div className="flex flex-col items-center justify-center text-white ">
        <h1 className="text font-bold mb-3 text-xl lg:text-4xl">
          Partners and Sponsors
        </h1>
        <p className="text-xs max-w-xs mx-auto text-center lg:text-sm lg:max-w-md">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="partner-border max-w-[80%] mt-10 mx-auto p-5 h-48 sm:h-[18rem] md:max-h-[20rem] lg:min-h-[35rem] grid grid-cols-3 gap-4 lg:gap-9 lg:p-32">
        <div className="relative flex items-center justify-center w-full after:w-px after:h-20 after:bg-[#D434FE] after:right-0 before:absolute before:w-48 before:max-w-[5rem] sm:before:max-w-none before:h-px before:bg-[#D434FE] before:-bottom-2 after:absolute lg:after:w-1 lg:after:h-28 lg:after:right-0 lg:before:w-72 lg:before:h-1 lg:before:-bottom-5">
          <img
            src={Liberty}
            alt="LibertyAssured"
            className="max-w-[4rem] sm:max-w-[5rem] lg:max-w-full"
          />
        </div>
        <div className="relative flex items-center justify-center w-full before:absolute before:w-56 before:max-w-[5rem] sm:before:max-w-none max-w: before:h-px before:-bottom-2 lg:before:w-96 lg:before:h-1 before:bg-[#D434FE] lg:before:-bottom-5">
          <img
            src={Libertypay}
            alt="LibertyAssured"
            className="max-w-[4rem] sm:max-w-[5rem] lg:max-w-full"
          />
        </div>
        <div className="relative flex items-center justify-center w-full after:w-px after:h-20 after:left-0 before:w-48 before:max-w-[5rem] sm:before:max-w-none before:h-px before:bg-[#D434FE] before:-bottom-2 after:absolute lg:after:w-1 lg:after:h-28 after:bg-[#D434FE] lg:after:left-0 before:absolute lg:before:w-72 lg:before:h-1 lg:before:-bottom-5">
          <img
            src={Winwise}
            alt="LibertyAssured"
            className="max-w-[4rem] sm:max-w-[5rem] lg:max-w-full"
          />
        </div>
        <div className="relative flex items-center justify-center w-full after:w-px after:h-20 after:bg-[#D434FE] after:right-0 after:absolute lg:after:w-1 lg:after:h-28 lg:after:right-0 ">
          <img
            src={wisper}
            alt="LibertyAssured"
            className="max-w-[4rem] sm:max-w-[5rem] lg:max-w-full"
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <img src={paybox} alt="LibertyAssured" />
        </div>
        <div className="relative flex items-center justify-center w-full after:absolute after:w-px after:h-20 after:bg-[#D434FE] after:left-0 lg:after:w-1 lg:after:h-28">
          <img
            src={VizualPlus}
            alt="LibertyAssured"
            className="max-w-[4rem] sm:max-w-[5rem] lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
