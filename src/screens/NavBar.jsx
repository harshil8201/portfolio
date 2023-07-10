import React, { useState } from "react";
import Profile from "../assets/profile/profile.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // handle tab color changing
  const handleTabColor = (tab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  // open drawer
  const openDrawer = (oparation) => {
    setIsOpen(oparation);
  };

  return (
    <div>
      {/* ------------------- Desktop ----------------------*/}
      <header className="z-50 fixed w-screen bg-colorWhite shadow-lg shadow-black/5 flex-row justify-between items-center lg:px-[70px] py-[15px] md:px-5 md:flex hidden">
        {/* harshil.dev */}
        <Link to="home" smooth={true} duration={10}>
          <div className="flex flex-row gap-3 items-center cursor-pointer">
            <img src={Profile} className="w-12 h-12 rounded-full" alt="" />
            <p className="text-colorBlack text-lg font-semibold">Harshil.dev</p>
          </div>
        </Link>

        {/* options */}
        <ul className="flex flex-row items-center gap-8 text-sm uppercase font-semibold">
          <Link to="home" smooth={true} duration={10}>
            <motion.li
              whileTap={{ scale: 0.7 }}
              className={`cursor-pointer ${
                activeTab === "home" ? "text-colorRed" : "text-colorLightBlack"
              }`}
              onClick={() => handleTabColor("home")}
            >
              home
            </motion.li>
          </Link>

          <Link to="about" smooth={true} duration={10}>
            <motion.li
              whileTap={{ scale: 0.7 }}
              className={`cursor-pointer ${
                activeTab === "about" ? "text-colorRed" : "text-colorLightBlack"
              }`}
              onClick={() => handleTabColor("about")}
            >
              about
            </motion.li>
          </Link>

          <Link to="skills" smooth={true} duration={10}>
            <motion.li
              whileTap={{ scale: 0.7 }}
              className={`cursor-pointer ${
                activeTab === "skill" ? "text-colorRed" : "text-colorLightBlack"
              }`}
              onClick={() => handleTabColor("skill")}
            >
              skills
            </motion.li>
          </Link>

          <Link to="portfolio" smooth={true} duration={10}>
            <motion.li
              whileTap={{ scale: 0.7 }}
              className={`cursor-pointer ${
                activeTab === "portfolio"
                  ? "text-colorRed"
                  : "text-colorLightBlack"
              }`}
              onClick={() => handleTabColor("portfolio")}
            >
              portfolio
            </motion.li>
          </Link>

          <Link to="service" smooth={true} duration={10}>
            <motion.li
              whileTap={{ scale: 0.7 }}
              className={`cursor-pointer ${
                activeTab === "service"
                  ? "text-colorRed"
                  : "text-colorLightBlack"
              }`}
              onClick={() => handleTabColor("service")}
            >
              service
            </motion.li>
          </Link>

          <Link to="contact" smooth={true} duration={10}>
            <motion.li
              whileTap={{ scale: 0.7 }}
              className={`cursor-pointer ${
                activeTab === "contact"
                  ? "text-colorRed"
                  : "text-colorLightBlack"
              }`}
              onClick={() => handleTabColor("contact")}
            >
              contact
            </motion.li>
          </Link>
        </ul>
      </header>

      {/* ------------------- Mobile ----------------------*/}
      <header className="z-30 fixed w-screen md:hidden flex bg-colorWhite shadow-lg shadow-black/5 flex-row justify-between items-center px-[14px] py-[10px]">
        <TiThMenu className="text-lg" onClick={() => openDrawer(true)} />

        {/* harshil.dev */}
        <Link to="home" smooth={true} duration={10}>
          <div className="flex flex-row gap-2 items-center cursor-pointer">
            <p className="text-colorBlack text-sm font-semibold">Harshil.dev</p>
            <img src={Profile} className="w-9 h-9 rounded-full" alt="" />
          </div>
        </Link>

        {isOpen && (
          <div className="absolute top-0 left-0 h-screen w-screen bg-black/30">
            <div className="absolute top-0 left-0 h-screen w-[75%] bg-colorWhite flex flex-col gap-5 drop-shadow-2xl">
              <div className="w-full shadow-lg shadow-black/5 flex px-[14px]">
                <MdOutlineKeyboardArrowLeft
                  className="text-3xl text-left h-[56px]"
                  onClick={() => openDrawer(false)}
                />
              </div>

              {/* options */}
              <ul className="flex flex-col text-left px-[20px] gap-5 text-sm uppercase font-semibold">
                <Link to="home" smooth={true} duration={10}>
                  <li
                    className={`cursor-pointer ${
                      activeTab === "home"
                        ? "text-colorRed"
                        : "text-colorLightBlack"
                    }`}
                    onClick={() => handleTabColor("home")}
                  >
                    home
                  </li>
                </Link>

                <Link to="about" smooth={true} duration={10}>
                  <li
                    className={`cursor-pointer ${
                      activeTab === "about"
                        ? "text-colorRed"
                        : "text-colorLightBlack"
                    }`}
                    onClick={() => handleTabColor("about")}
                  >
                    about
                  </li>
                </Link>

                <Link to="skills" smooth={true} duration={10}>
                  <li
                    className={`cursor-pointer ${
                      activeTab === "skill"
                        ? "text-colorRed"
                        : "text-colorLightBlack"
                    }`}
                    onClick={() => handleTabColor("skill")}
                  >
                    skills
                  </li>
                </Link>

                <Link to="portfolio" smooth={true} duration={10}>
                  <li
                    className={`cursor-pointer ${
                      activeTab === "portfolio"
                        ? "text-colorRed"
                        : "text-colorLightBlack"
                    }`}
                    onClick={() => handleTabColor("portfolio")}
                  >
                    portfolio
                  </li>
                </Link>

                <Link to="service" smooth={true} duration={10}>
                  <li
                    className={`cursor-pointer ${
                      activeTab === "service"
                        ? "text-colorRed"
                        : "text-colorLightBlack"
                    }`}
                    onClick={() => handleTabColor("service")}
                  >
                    service
                  </li>
                </Link>

                <Link to="contact" smooth={true} duration={10}>
                  <li
                    className={`cursor-pointer ${
                      activeTab === "contact"
                        ? "text-colorRed"
                        : "text-colorLightBlack"
                    }`}
                    onClick={() => handleTabColor("contact")}
                  >
                    contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
