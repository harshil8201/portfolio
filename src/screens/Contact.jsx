import React from "react";
import { FiMail } from "react-icons/fi";
import { MdCall, MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      {/* ------------------- Desktop ----------------------*/}
      <div className="-mt-5 px-[200px] bg-colorWhite lg:flex hidden flex-col text-left">
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
            <p className="text-colorDarkGray">📍 Gujarat, India.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
