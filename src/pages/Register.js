import React from "react";
import register from "../assets/register-img.svg";
import { Link } from "react-router-dom";
import back from "../assets/back.svg";
import walking from "../assets/walking.svg";

const Register = () => {
  return (
    <section className="lg:relative">
      {MobileRegister()}
      <div className="hidden absolute -z-10 top-5 left-16 blur rounded-full w-60 h-72 bg-[#903aff] lg:block"></div>
      <div className="hidden absolute right-16 bottom-0 -z-10 blur rounded-full w-60 h-60 bg-[#903aff] lg:block"></div>
      <div className=" max-w-[80%] flex items-center gap-4 mx-auto mt-24">
        <Link to="/">
          <img src={back} alt="" className="w-12"/>
        </Link>
        <p className="text text-2xl font-bold text-[#D434FE]">Register</p>
      </div>
      <div className="hidden max-w-[80%] mx-auto mt-10 mb-20 items-center justify-between gap-4 lg:flex">
        <div className="flex flex-col items-start justify-center gap-6 text-white min-w-[15rem] w-full">
          <img src={register} alt="3d-graphic-designer-showing-thumbs-up" />
        </div>
        <div className="contact-bg text-white p-20 min-w-[30rem] xl:min-w-[45rem] flex flex-col items-start justify-center">
          <p className="text text-[#D434FE] text-4xl font-bold">Register</p>
          <div className="flex gap-3 items-end mb-5">
            <p className="text-sm mt-12">Be part of this movement!</p>
            <div className="dashed px-6">
              <img src={walking} alt="" />
            </div>
          </div>
          <p className="text-2xl">CREATE YOUR ACCOUNT</p>
          <form action="" className="flex flex-col gap w-full mt-10">
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2 w-full items-start justify-center">
                <label>Team's Name</label>
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className="input w-full px-6 py-3 placeholder-[#ffffff40] placeholder:text-sm"
                />
              </div>
              <div className="flex flex-col gap-2 w-full items-start justify-center">
                <label>Phone</label>
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  className="input w-full px-6 py-3 placeholder-[#ffffff40] placeholder:text-sm"
                />
              </div>
              <div className="flex flex-col gap-2 w-full items-start justify-center">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input w-full px-6 py-3 placeholder-[#ffffff40] placeholder:text-sm"
                />
              </div>
              <div className="flex flex-col gap-2 w-full items-start justify-center">
                <label>Project Topic</label>
                <input
                  type="text"
                  placeholder="What is your group project topic"
                  className="input w-full px-6 py-3 placeholder-[#ffffff40] placeholder:text-sm"
                />
              </div>
              <div className="flex flex-col gap-2 w-full items-start justify-center">
                <label className="">Category</label>
                <select name="" className="input w-full px-6 py-3">
                  <option value="">Select your category</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full items-start justify-center">
                <label className="">Group Size</label>
                <select name="" className="input w-full px-6 py-3">
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <p className="text-[#FF26B9] my-5 text-xs italic">
              Please review your registration details before submitting
            </p>
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="" />
              <p className="text-xs">
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>
            <button className="gradient w-full py-4 px-10 mt-8 rounded cursor-pointer text-white text-base">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const MobileRegister = () => {
  return (
    <div className=" bg-[#150e28] absolute top-0 w-full lg:hidden">
      <div className="p-10 mx-auto relative">
        <div className="absolute top-40 left-10 blur rounded-full w-32 h-32 bg-[#903aff] sm:w-40 sm:h-40"></div>
        <div className="w-full z-10 relative">
          <div className="flex gap-3 items-center">
            <Link to="/">
              <img src={back} alt="" />
            </Link>
            <p className="text text-base font-bold text-[#D434FE]">Register</p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center w-full">
            <div className="flex justify-center items-center w-full">
              <img src={register} alt="3d-graphic-designer-showing-thumbs-up" />
            </div>
            <div className="flex flex-col gap-1 justify-center text-white w-full">
              <div className="flex gap-3 items-end">
                <p className="text-xs max-w-fit">Be part of this movement!</p>
                <div className="dashed px-6">
                  <img src={walking} alt="" />
                </div>
              </div>
              <p className="text-xl">CREATE YOUR ACCOUNT</p>
            </div>
            <form
              action=""
              className="flex flex-col justify-center gap-5 text-white w-full"
            >
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <label className="text-sm">Team's Name</label>
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className="input w-full px-4 py-2 placeholder-[#ffffff40] placeholder:text-xs"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <label className="text-sm">Phone</label>
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  className="input w-full px-4 py-2 placeholder-[#ffffff40] placeholder:text-xs"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input w-full px-4 py-2 placeholder-[#ffffff40] placeholder:text-xs"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <label className="text-sm">Project topic</label>
                <input
                  type="text"
                  placeholder="What is your group project topic"
                  className="input w-full px-4 py-2 placeholder-[#ffffff40] placeholder:text-xs"
                />
              </div>
              <div className="flex items-center justify-center gap-2 w-full">
                <div className="flex flex-col gap-2 items-start justify-center w-[60%]">
                  <label className="text-sm">Category</label>
                  <select name="" className="input w-full px-4 py-2 text-xs">
                    <option value="">Select your category</option>
                    <option value="">1</option>
                    <option value="">1</option>
                    <option value="">1</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center w-[40%]">
                  <label className="text-sm">Group Size</label>
                  <select name="" className="input w-full px-4 py-2 text-xs">
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1 justify-center text-white w-full">
                <p className="text-[#FF26B9] text-[0.6rem] italic">
                  Please review your registration details before submitting
                </p>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="" />
                  <p className="text-[0.62rem]">
                    I agreed with the event terms and conditions and privacy
                    policy
                  </p>
                </div>
              </div>
              <button className="gradient py-4 px-10 w-[70%] mx-auto rounded cursor-pointer text-white text-base">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
