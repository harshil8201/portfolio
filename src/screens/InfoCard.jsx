import React from "react";
import SocialMedia from "../hooks/SocialMedia";
import Gmail from "../assets/social medias/gmail.png";
import Github from "../assets/social medias/github.png";
import Instagram from "../assets/social medias/instagram.png";
import Facebook from "../assets/social medias/facebook.png";
import LinkedIn from "../assets/social medias/linkedin.png";
import Upwork from "../assets/social medias/upwork.png";

const InfoCard = () => {
  const handleEmailClick = () => {
    const mailtoLink = `mailto:harshilpatel33h@gmail.com`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      {/* ------------------- Desktop ----------------------*/}
      <div className="bg-colorDarkWhite w-full py-[30px] md:flex flex-col hidden justify-center items-center mt-[50px] ">
        <p className="text-3xl text-colorRed uppercase font-semibold tracking-wide">
          Harshil Patel
        </p>
        <p className="text-colorBlack capitalize mt-1">Full stack developer</p>
        <div className="flex flex-row gap-4 items-center my-10">
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
            Url={"https://github.com/harshil8201"}
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
            Url={"https://www.linkedin.com/in/harshil8201/"}
          />
          {/* <SocialMedia
            size={"45px"}
            ImgUrl={Upwork}
            Url={
              "https://www.upwork.com/freelancers/~01c36fc5954ec77e17?viewMode=1"
            }
          /> */}
        </div>
        <p className="text-center text-sm text-colorBlack font-light capitalize">
          © copyright 2024. All rights reserved.
        </p>
        <p className="flex flex-row items-center text-center text-sm text-colorBlack font-light gap-1 capitalize">
          Design by <p className="text-colorRed font-normal"> Harshil Patel</p>
        </p>
      </div>

      {/* ------------------- Mobile ----------------------*/}
      <div className="md:hidden flex mt-[40px] bg-colorDarkWhite w-full flex-col py-[15px]">
        <p className="text-xl text-colorRed uppercase font-semibold tracking-wide">
          Harshil Patel
        </p>
        <p className="text-colorBlack capitalize text-xs">
          Full stack developer
        </p>
        <div className="flex flex-row gap-2 items-center my-5 mx-auto">
          <div className="h-[40px] w-[40px] rounded-lg bg-white drop-shadow-2xl flex justify-center items-center cursor-pointer">
            <img
              src={Gmail}
              className="w-full h-full p-[10px] object-cover"
              alt="Wait"
              onClick={handleEmailClick}
            />
          </div>
          <SocialMedia
            size={"40px"}
            ImgUrl={Github}
            Url={"https://github.com/harshil8201"}
          />
          {/* <SocialMedia
            size={"40px"}
            ImgUrl={Instagram}
            Url={"https://instagram.com/harshil_8201?igshid=MzNlNGNkZWQ4Mg=="}
          />
          <SocialMedia
            size={"40px"}
            ImgUrl={Facebook}
            Url={"https://www.facebook.com/harshil.patel.8201?mibextid=ZbWKwL"}
          /> */}
          <SocialMedia
            size={"40px"}
            ImgUrl={LinkedIn}
            Url={"https://www.linkedin.com/in/harshil8201/"}
          />
          {/* <SocialMedia
            size={"40px"}
            ImgUrl={Upwork}
            Url={
              "https://www.upwork.com/freelancers/~01c36fc5954ec77e17?viewMode=1"
            }
          /> */}
        </div>
        <p className="text-center text-[10px] text-colorBlack font-light capitalize">
          © copyright 2024. All rights reserved.
        </p>
        <p className="flex flex-row items-center text-center text-[10px] text-colorBlack font-light gap-1 capitalize mx-auto">
          Design by <p className="text-colorRed font-normal"> Harshil Patel</p>
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
