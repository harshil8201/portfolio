import React from "react";
import SocialMedia from "../hooks/SocialMedia";
import Gmail from "../assets/social medias/gmail.png";
import Github from "../assets/social medias/github.png";
import Instagram from "../assets/social medias/instagram.png";
import Facebook from "../assets/social medias/facebook.png";
import LinkedIn from "../assets/social medias/linkedin.png";
import Upwork from "../assets/social medias/upwork.png";
import Profile from "../assets/profile/profile.jpg";

const Home = () => {
  const handleEmailClick = () => {
    const mailtoLink = `mailto:harshilpatel33h@gmail.com`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      {/* ------------------- Desktop ----------------------*/}
      <div className="bg-colorWhite lg:flex hidden flex-row items-center justify-between -mt-10  px-[200px]">
        <div className="flex flex-col text-left">
          <p className="text-xs text-colorDarkGray uppercase">
            Welcome to my world
          </p>
          <p className="text-4xl capitalize mt-10 font-semibold text-colorBlack flex flex-row gap-2 tracking-wide">
            👋🏼 Hi, i’m <p className="text-colorRed">Harshil Patel</p>
          </p>
          <p className="flex flexr-ow gap-1 text-colorBlack font-semibold uppercase text-lg mt-2">
            <p className="text-colorRed">A</p> Full Stack developer
          </p>
          <p className="mt-2 text-xs capitalize text-colorDarkGray">
            Based in gujarat, india 📍
          </p>

          {/* find me here */}
          <div className="flex flex-col gap-5 justify-start mt-20">
            <p className="text-colorBlack text-xs uppercase font-medium">
              FIND ME HERE
            </p>
            <div className="flex flex-row gap-4 items-center">
              <div className="h-[55px] w-[55px] rounded-lg bg-white drop-shadow-2xl flex justify-center items-center cursor-pointer">
                <img
                  src={Gmail}
                  className="w-full h-full p-[10px] object-cover"
                  alt="Wait"
                  onClick={handleEmailClick}
                />
              </div>
              <SocialMedia
                ImgUrl={Github}
                Url={"https://github.com/Harshil-Patel-8201"}
              />
              {/* <SocialMedia
                ImgUrl={Instagram}
                Url={
                  "https://instagram.com/harshil_8201?igshid=MzNlNGNkZWQ4Mg=="
                }
              />
              <SocialMedia
                ImgUrl={Facebook}
                Url={
                  "https://www.facebook.com/harshil.patel.8201?mibextid=ZbWKwL"
                }
              /> */}
              <SocialMedia
                ImgUrl={LinkedIn}
                Url={"https://www.linkedin.com/in/harshil-patel-312186210/"}
              />
              <SocialMedia
                ImgUrl={Upwork}
                Url={
                  "https://www.upwork.com/freelancers/~01c36fc5954ec77e17?viewMode=1"
                }
              />
            </div>
          </div>
        </div>

        <img
          src={Profile}
          className="w-[270px] h-[270px] rounded-full border-4 border-colorDarkWhite"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
