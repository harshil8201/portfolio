import React, { useState } from "react";
import Profile from "../assets/profile/profile.jpg";
import { motion } from "framer-motion";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  // handle tab color changing
  const handleTabColor = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className="w-screen bg-colorWhite shadow-lg shadow-black/5 flex-row justify-between items-center px-[70px] py-[15px] lg:flex hidden">
      {/* harshil.dev */}
      <div
        className="flex flex-row gap-3 items-center cursor-pointer"
        // onClick={}
      >
        <img src={Profile} className="w-12 h-12 rounded-full" alt="" />
        <p className="text-colorBlack text-lg font-semibold">Harshil.dev</p>
      </div>

      {/* options */}
      <ul className="flex flex-row items-center gap-8 text-sm uppercase font-semibold">
        <motion.li
          whileTap={{ scale: 0.7 }}
          className={`cursor-pointer ${
            activeTab === "home" ? "text-colorRed" : "text-colorLightBlack"
          }`}
          onClick={() => handleTabColor("home")}
        >
          home
        </motion.li>
        <motion.li
          whileTap={{ scale: 0.7 }}
          className={`cursor-pointer ${
            activeTab === "about" ? "text-colorRed" : "text-colorLightBlack"
          }`}
          onClick={() => handleTabColor("about")}
        >
          about
        </motion.li>
        <motion.li
          whileTap={{ scale: 0.7 }}
          className={`cursor-pointer ${
            activeTab === "skill" ? "text-colorRed" : "text-colorLightBlack"
          }`}
          onClick={() => handleTabColor("skill")}
        >
          skill
        </motion.li>
        <motion.li
          whileTap={{ scale: 0.7 }}
          className={`cursor-pointer ${
            activeTab === "portfolio" ? "text-colorRed" : "text-colorLightBlack"
          }`}
          onClick={() => handleTabColor("portfolio")}
        >
          portfolio
        </motion.li>
        <motion.li
          whileTap={{ scale: 0.7 }}
          className={`cursor-pointer ${
            activeTab === "service" ? "text-colorRed" : "text-colorLightBlack"
          }`}
          onClick={() => handleTabColor("service")}
        >
          service
        </motion.li>
        <motion.li
          whileTap={{ scale: 0.7 }}
          className={`cursor-pointer ${
            activeTab === "contact" ? "text-colorRed" : "text-colorLightBlack"
          }`}
          onClick={() => handleTabColor("contact")}
        >
          contact
        </motion.li>
      </ul>
    </header>
  );
};

export default NavBar;
