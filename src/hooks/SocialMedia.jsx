import React from "react";

const SocialMedia = ({ ImgUrl, Url, size }) => {
  return (
    <a href={Url}>
      <div
        className={`${
          size ? `h-[${size}] w-[${size}]` : "h-[55px] w-[55px]"
        } rounded-lg bg-white drop-shadow-2xl flex justify-center items-center cursor-pointer`}
      >
        <img
          src={ImgUrl}
          className="w-full h-full p-[10px] object-cover"
          alt="Wait"
        />
      </div>
    </a>
  );
};

export default SocialMedia;
