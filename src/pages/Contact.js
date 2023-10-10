import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import x from "../assets/x.svg";
import linkedin from "../assets/linkedin.svg";
import back from "../assets/back.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="lg:relative">
      {MobileContact()}
      <div className="hidden absolute -z-10 top-64 left-16 blur rounded-full w-72 h-96 bg-[#903aff] lg:block"></div>
      <div className="hidden absolute right-16 bottom-16 -z-10 blur rounded-full w-72 h-72 bg-[#903aff] lg:block"></div>
      <div className=" max-w-[80%] mx-auto mt-32">
        <Link to="/">
          <img src={back} alt="" className="w-10"/>
        </Link>
      </div>
      <div className="hidden max-w-[80%] mx-auto mt-10 mb-20 items-center justify-between gap-4 lg:flex">
        <div className="flex flex-col items-start justify-center gap-6 text-white min-w-[15rem]">
          <p className="text font-semibold text-[#D434FE] text-4xl">
            Get in touch
          </p>
          <p className="text-xl max-w-[10rem]">Contact Information</p>
          <p className="text-xl max-w-[10rem]">
            27,Alara Street Yaba 100012 Lagos State
          </p>
          <p className="text-xl">Call Us : 07067981819</p>
          <p className="text-xl max-w-[25rem]">
            we are open from Monday-Friday 08:00am - 05:00pm
          </p>
          <div>
            <p className="text-xl text-[#D434FE]">Share on</p>
            <div className="flex items-center justify-center gap-6 mt-2">
              <img src={instagram} alt="Instagram" className="cursor-pointer" />
              <img src={x} alt="X" className="cursor-pointer" />
              <img src={facebook} alt="facebook" className="cursor-pointer" />
              <img src={linkedin} alt="linkedin" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="contact-bg p-20 min-w-[35rem] xl:min-w-[45rem] flex flex-col items-start justify-center gap-2">
          <p className="text-[#D434FE] text-2xl font-semibold">
            Questions or need assistance?
          </p>
          <p className="text-[#D434FE] text-2xl font-semibold">
            Let us know about it!
          </p>
          <form action="" className="flex flex-col gap-8 w-full mt-10">
            <input
              type="text"
              placeholder="First Name"
              className="input w-full px-6 py-3"
            />
            <input
              type="email"
              placeholder="Mail"
              className="input w-full px-6 py-3"
            />
            <textarea
              name=""
              placeholder="Message"
              id=""
              className="input w-full px-6 py-3 min-h-[7rem]"
            ></textarea>
            <button className="gradient py-4 max-w-max mx-auto px-10 mt-8 rounded cursor-pointer text-white text-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

//Mobile view

const MobileContact = () => {
  return (
    <div className=" bg-[#150e28] absolute top-0 w-full lg:hidden">
      <div className="p-10 mx-auto relative">
        <div className="absolute top-32 left-10 blur rounded-full w-32 h-32 bg-[#903aff] sm:w-40 sm:h-40"></div>
        <div className="w-full z-10 relative">
          <Link to="/">
            <img src={back} alt="" />
          </Link>
          <div className="w-full flex flex-col items-start justify-center gap-3 mt-6">
            <p className="text-[#D434FE] text-xl font-semibold max-w-[22rem]">
              Questions or need assistance? Let us know about it
            </p>
            <p className="text-sm text-white">
              Email us below to any question related to our event
            </p>
            <form action="" className="flex flex-col gap-4 sm:gap-8 w-full">
              <input
                type="text"
                placeholder="First Name"
                className="input w-full px-3 py-2"
              />
              {/* <input
                type="text"
                placeholder="Topic"
                className="input w-full px-3 py-2"
              /> */}
              <input
                type="email"
                placeholder="Mail"
                className="input w-full px-3 py-2"
              />
              <textarea
                name=""
                placeholder="Message"
                id=""
                className="input w-full px-3 min-h-[10rem]"
              ></textarea>
              <button className="gradient py-4 max-w-max mx-auto px-10 mt-8 rounded cursor-pointer text-white text-sm">
                Submit
              </button>
            </form>
            <div className="flex flex-col items-center justify-center w-full mt-10">
              <p className="text-xl text-[#D434FE]">Share on</p>
              <div className="flex items-center justify-center gap-6 mt-2">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="cursor-pointer"
                />
                <img src={x} alt="X" className="cursor-pointer" />
                <img src={facebook} alt="facebook" className="cursor-pointer" />
                <img src={linkedin} alt="linkedin" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
