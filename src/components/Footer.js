import React from "react";
import logo from "../assets/getlinked.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import x from "../assets/x.svg";
import linkedin from "../assets/linkedin.svg";
import location from "../assets/location.svg";
import call from "../assets/call.svg";

const Footer = () => {
  return (
    <footer className="background mt-20 py-10 flex flex-col justify-between items-center">
      <div className="w-[80%] mx-auto flex flex-col items-start justify-between gap-10 text-white lg:flex-row">
        <div className="flex flex-col justify-start items-start w-full">
          <div className="flex flex-col items-start justify-center">
            <img src={logo} alt="getlinked" />
            <p className="wrap mt-5 text-xs max-w-xl">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="flex items-center justify-between gap-3 mt-16">
            <p className="text-xs">Term of Use</p>
            <div className="w-px h-4 bg-[#D434FE]"></div>
            <p className="text-xs">Privacy Policy</p>
          </div>
        </div>

        <div className="flex items-center justify-start lg:justify-center w-full">
          <div className="flex flex-col justify-center items-start gap-5">
            <p className="font-semibold text-sm text-[#D434FE]">Useful Links</p>
            <a href="#overview" className=" hover text-xs">
              Overview
            </a>
            <a href="#timeline" className="hover text-xs">
              Timeline
            </a>
            <a href="#faq" className="hover text-xs">
              FAQs
            </a>
            <a href="#overview" className="hover text-xs">
              Register
            </a>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xs">Follow us</p>
              <img src={instagram} alt="Instagram" className="cursor-pointer"/>
              <img src={x} alt="X" className="cursor-pointer"/>
              <img src={facebook} alt="facebook" className="cursor-pointer"/>
              <img src={linkedin} alt="linkedin" className="cursor-pointer"/>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start lg:justify-end w-full">
          <div className="flex flex-col justify-center items-start gap-5">
            <p className="font-semibold text-sm text-[#D434FE]">Contact Us</p>
            <div className="flex items-center justify-center gap-2">
              <img src={call} alt="call" />
              <p className="text-xs">+234 6707653444</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img src={location} alt="location" />
              <p className="text-xs max-w-[6rem]">
                27,Alara Street Yaba 100012 Lagos State
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-white mt-16">
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  );
};

export default Footer;
