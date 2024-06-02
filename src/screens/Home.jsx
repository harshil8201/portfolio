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
    <div name="home">
      {/* ------------------- Desktop ----------------------*/}
      <div className="mt-[140px] bg-colorWhite md:flex hidden flex-row items-center justify-between md:px-5">
        <div className="flex flex-col text-left">
          <p className="text-xs text-colorDarkGray uppercase">
            Welcome to my world
          </p>
          <p className="lg:text-4xl capitalize mt-10 font-semibold text-colorBlack flex flex-row gap-2 tracking-wide md:text-3xl">
            👋🏼 Hi, i’m <p className="text-colorRed">Harshil Patel</p>
          </p>
          <p className="flex flexr-ow gap-1 text-colorBlack font-semibold uppercase text-lg mt-2">
            <p className="text-colorRed">A</p> Full Stack developer
          </p>
          <p className="mt-2 text-xs capitalize text-colorDarkGray">
            Based in Toronto, Canada 📍
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
          className="lg:w-[300px] lg:h-[300px] md:w-[230px] md:h-[230px]  rounded-full border-4 border-colorDarkWhite"
          alt=""
        />
      </div>

      {/* ------------------- Mobile ----------------------*/}
      <div className="md:hidden flex flex-col justify-center items-center mt-[80px]">
        <p className="text-[10px] text-colorDarkGray uppercase">
          Welcome to my world
        </p>
        <img
          src={Profile}
          className="mt-[20px] w-[150px] h-[150px] rounded-full border-4 border-colorDarkWhite"
          alt=""
        />
        <p className="text-xl capitalize font-semibold text-colorBlack flex flex-row gap-2 tracking-wide mt-2">
          👋🏼 Hi, i’m <p className="text-colorRed">Harshil Patel</p>
        </p>
        <p className="flex flex-row gap-1 text-colorBlack font-semibold uppercase text-sm mt-1">
          <p className="text-colorRed">A</p> Full Stack developer
        </p>
        <p className="mt-3 text-[10px] capitalize text-colorDarkGray">
          Based in Toronto, Canada 📍
        </p>
        <p className="mt-10 text-colorBlack text-xs uppercase font-medium">
          FIND ME HERE
        </p>
        <div className="flex flex-row gap-2 mt-5 items-center">
          <div className="h-[45px] w-[45px] rounded-lg bg-white drop-shadow-2xl flex justify-center items-center cursor-pointer">
            <img
              src={Gmail}
              className="w-full h-full p-[10px] object-cover"
              alt="Wait"
              onClick={handleEmailClick}
            />
          </div>
          <SocialMedia
            size={"45px"}
            ImgUrl={Github}
            Url={"https://github.com/Harshil-Patel-8201"}
          />
          {/* <SocialMedia
            size={"45px"}
            ImgUrl={Instagram}
            Url={"https://instagram.com/harshil_8201?igshid=MzNlNGNkZWQ4Mg=="}
          />
          <SocialMedia
            size={"45px"}
            ImgUrl={Facebook}
            Url={"https://www.facebook.com/harshil.patel.8201?mibextid=ZbWKwL"}
          /> */}
          <SocialMedia
            size={"45px"}
            ImgUrl={LinkedIn}
            Url={"https://www.linkedin.com/in/harshil-patel-312186210/"}
          />
          <SocialMedia
            size={"45px"}
            ImgUrl={Upwork}
            Url={
              "https://www.upwork.com/freelancers/~01c36fc5954ec77e17?viewMode=1"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
