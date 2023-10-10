import React, { useState } from "react";
import logo from "../assets/getlinked.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Contact from "../pages/Contact";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="pt-10 pb-5">
      <div className="max-w-[80%] mx-auto">
        {MobileNavbar()}
        <div className="hidden justify-between items-center md:flex">
          <div>
            <Link to="/">
              <img src={logo} alt="getlinked" />
            </Link>
          </div>
          <div className="flex justify-around items-center text-white md:gap-3 lg:gap-16">
            <a href="#timeline" className="cursor-pointer hover">
              Timeline
            </a>
            <a href="#overview" className="cursor-pointer hover">
              Overview
            </a>
            <a href="#faqs" className="cursor-pointer hover">
              FAQs
            </a>
            <NavLink to="Contact" className="cursor-pointer hover">
                Contact
            </NavLink>
            <NavLink to="register" className="gradient ml-5 py-4 px-7 rounded cursor-pointer lg:px-10 lg:ml-10">
                Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

//Navbar Mobile view design

const MobileNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(false)
  }

  return (
    <>
      <div className="flex justify-between items-center md:hidden">
        <div>
          <Link to="/">
            <img src={logo} alt="getlinked" />
          </Link>
        </div>
        <div className="">
          <img src={menu} alt="" onClick={() => setShow(true)} />
        </div>
        <div
          className={
            !show
              ? "hidden"
              : "shadow z-10 fixed left-0 -top-5 mt-5 w-full flex flex-col items-start text-white gap-5 rounded-lg bg-[#150E28] py-20 px-10"
          }
        >
          <div className="absolute right-16 top-12">
            <img src={close} alt="" onClick={handleClick} />
          </div>
          <a href="#timeline" className="cursor-pointer hover" onClick={handleClick}>
            Timeline
          </a>
          <a href="#overview" className="cursor-pointer hover" onClick={handleClick}>
            Overview
          </a>
          <a href="#faqs" className="cursor-pointer hover" onClick={handleClick}>
            FAQs
          </a>
          <Link to="Contact" onClick={handleClick}>
            <p className="cursor-pointer">Contact</p>
          </Link>
          <Link to="register" onClick={handleClick}>
            <p className="gradient py-2 px-10 rounded cursor-pointer">
              Register
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
