import React from "react";
import { motion } from "framer-motion";

const MoreHooks = ({ projectUrl, imgUrl, websiteName }) => {
  return (
    <div
      className="relative w-full h-[183px] shadow-lg"
      onClick={() => window.open(`${projectUrl}`, "_blank")}
    >
      {/* Image */}
      <img
        loading="lazy"
        src={imgUrl}
        className="w-full h-[183px] object-top object-cover rounded-md"
        alt="img"
      />

      {/* Text on top of the image */}
      <div className="absolute inset-0 flex items-center justify-center text-transparent hover:text-white font-medium hover:bg-colorBlack/70 rounded-md hover:text-2xl hover:cursor-pointer duration-200">
        <motion.p whileTap={{ scale: 0.8 }}>{websiteName}</motion.p>
      </div>
    </div>
  );
};

export default MoreHooks;
