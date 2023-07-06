import React from "react";
import { ImGithub } from "react-icons/im";

const PortfolioHooks = ({ position, url, name, des, link }) => {
  return (
    <div className="flex flex-row gap-20 items-center">
      {position === 0 && (
        <img
          src={url}
          className="w-[380px] h-[250px] object-cover object-top rounded-xl drop-shadow-xl"
          alt=""
        />
      )}

      <div className="w-[400px] flex flex-col items-center justify-center gap-5">
        <p className="text-2xl font-semibold text-colorBlack uppercase">
          {name}
        </p>
        <p className="text-sm text-colorDarkGray text-center font-light">
          {des}
        </p>
        <div className="flex flex-row gap-20 items-center text-colorBlack text-sm font-semibold">
          <p>React.js</p>
          <p>Tailwind CSS</p>
        </div>
        <a href={link}>
          <p className="flex flex-row gap-2 text-colorDarkGray items-center text-sm cursor-pointer font-medium hover:font-semibold hover:text-colorBlack">
            Code <ImGithub />
          </p>
        </a>
      </div>

      {position === 1 && (
        <img
          src={url}
          className="w-[380px] h-[250px] object-cover object-top rounded-xl drop-shadow-xl"
          alt=""
        />
      )}
    </div>
  );
};

export default PortfolioHooks;
