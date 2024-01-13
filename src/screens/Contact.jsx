import React from "react";
import { FiMail } from "react-icons/fi";
import { MdCall, MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div name="contact">
      {/* ------------------- Desktop ----------------------*/}
      <div className="mt-[110px] bg-colorWhite md:flex md:px-5 hidden flex-col text-left">
        <p className="mb-7 uppercase text-3xl font-semibold text-colorRed">
          📌 contact
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-colorDarkWhite flex justify-center items-center">
              <FiMail className="text-xl text-colorBlack" />
            </div>
            <p className="text-colorDarkGray">📨 harshilpatel33h@gmail.com</p>
          </div>

          <div className="flex flex-row items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-colorDarkWhite flex justify-center items-center">
              <MdLocationPin className="text-2xl text-colorBlack" />
            </div>
            <p className="text-colorDarkGray">📍 Toronto, Canada.</p>
          </div>
        </div>
      </div>

      {/* ------------------- Mobile ----------------------*/}
      <div className="md:hidden flex mt-[70px] flex-col">
        <p className="mb-7 uppercase text-xl font-semibold text-colorRed">
          📌 contact
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-5">
            <div className="w-10 h-10 rounded-full bg-colorDarkWhite flex justify-center items-center">
              <FiMail className="text-base text-colorBlack" />
            </div>
            <p className="text-colorDarkGray text-sm">
              📨 harshilpatel33h@gmail.com
            </p>
          </div>

          <div className="flex flex-row items-center gap-5">
            <div className="w-10 h-10 rounded-full bg-colorDarkWhite flex justify-center items-center">
              <MdLocationPin className="text-lg text-colorBlack" />
            </div>
            <p className="text-colorDarkGray text-sm">📍 Toronto, Canada.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
