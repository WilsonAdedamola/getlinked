import React from "react";
import congratulation from "../assets/congratulation.svg";
import emoji from "../assets/emoji.svg";

const SuccessModal = () => {
  return (
    <div className="partner-border p-6 text-white flex flex-col items-center justify-center max-w-2xl m-auto mb-40">
      <div className="text-white flex flex-col items-center justify-center gap-3 max-w-lg m-auto">
        <img src={congratulation} alt="Success" />
        <h1 className="wrap font-semibold text-center text-base max-w-xs lg:max-w-lg lg:text-4xl">
          Congratulations you have successfully Registered!
        </h1>
        <div className="flex items-end justify-center w-full">
          <p className="wrap text-center max-w-xs mx-auto text-xs lg:text-sm">
            Yes, it was easy and you did it! check your mail box for next step
          </p>
          <img src={emoji} alt="emoji-wink" className="-ml-14 "/>
        </div>
        <p className="gradient w-full text-center text-white mt-2 py-3 rounded cursor-pointer">
          Read more
        </p>
      </div>
    </div>
  );
};

export default SuccessModal;
