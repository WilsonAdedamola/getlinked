import React from "react";
import illustration6 from "../assets/illustration6.svg";
import list from "../assets/list-terms.svg";

const Policy = () => {
  return (
    <section className="relative my-20">
      <div className="absolute -z-10 top-[35rem] left-0 blur rounded-full w-36 h-36 bg-[#903aff] md:w-56 md:h-56 lg:top-[40rem]"></div>
      <div className="max-w-[80%] mx-auto justify-center items-center">
        <div className="flex flex-col justify-between gap-10 items-center lg:flex-row">
          <div className="flex flex-col item-center justify-between max-w-full gap-14 text-white md:max-w-md xl:md:max-w-lg lg:items-start">
            <div className="flex flex-col item-center justify-between gap-4 lg:items-start">
              <h1 className="text font-bold text-xl mx-auto text-center max-w-[15rem] lg:text-start lg:max-w-xs lg:mx-0 lg:text-4xl">
                Privacy Policy and <span className="text-[#D434FE]">Terms</span>
              </h1>
              <p className="text-xs text-center lg:text-start lg:text-sm">
                Last updated on September 12, 2023
              </p>
              <p className="text-xs text-center lg:text-start lg:text-sm">
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </div>
            <div className="partner-border px-5 py-10 flex flex-col item-center justify-between md:p-14 lg:items-start">
              <p className="wrap text-xs text-center mb-8 lg:text-start lg:text-sm">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <p className="text-[#D434FE] font-bold text-sm lg:text-base">
                Licensing Policy
              </p>
              <p className="font-bold mt-2 mb-4 text-xs lg:text-sm">
                Here are terms of our Standard License:
              </p>
              <div className="flex items-start justify-center gap-3 mb-10">
                {/* <svg src={list}></svg> */}
                <img src={list} alt="" />
                <p className="wrap text-xs lg:text-sm">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex items-start justify-center gap-3">
                {/* <svg src={list}></svg> */}
                <img src={list} alt="" />
                <p className="wrap text-xs lg:text-sm">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex items-center justify-center w-full">
                <p className="gradient text-white py-2 px-10 mt-8 rounded cursor-pointer">
                  Read more
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={illustration6} alt=">Privacy Policy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;
