import React from "react";

const Service = () => {
  return (
    <div name="service">
      {/* ------------------- Desktop ----------------------*/}
      <div className="mt-[110px] bg-colorWhite md:flex md:px-5 hidden flex-col text-left">
        <p className="mb-7 uppercase text-3xl font-semibold text-colorRed">
          📌 what i do
        </p>
        <p className="text-sm text-colorDarkGray text-justify font-light">
          As a full stack website developer, I provide comprehensive website
          designing and development services tailored to meet your needs. From
          conceptualization to implementation, I offer end-to-end solutions to
          create visually stunning and fully functional websites. Whether you
          require a simple static site or a complex e-commerce platform, I have
          the expertise to deliver exceptional results.
        </p>
        <div className="flex flex-row mt-10 text-colorBlack">
          <div className="w-full flex flex-col gap-3">
            <p>👉🏻 UI/UX Design</p>
            <p>👉🏻 Website Development</p>
            <p>👉🏻 Back-end integration</p>
            <p>👉🏻 Database Connection</p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <p>👉🏻 Rest API calls</p>
            <p>👉🏻 O Authentication</p>
            <p>👉🏻 Website Management</p>
            <p>👉🏻 Troubleshoot, debug software</p>
          </div>
        </div>
      </div>

      {/* ------------------- Mobile ----------------------*/}
      <div className="md:hidden flex mt-[70px] flex-col">
        <p className="mb-5 uppercase text-xl font-semibold text-colorRed">
          📌 what i do
        </p>
        <p className="text-xs text-colorDarkGray text-justify font-light">
          As a full stack website developer, I provide comprehensive website
          designing and development services tailored to meet your needs. From
          conceptualization to implementation, I offer end-to-end solutions to
          create visually stunning and fully functional websites. Whether you
          require a simple static site or a complex e-commerce platform, I have
          the expertise to deliver exceptional results.
        </p>
        <div className="flex flex-col mt-5 text-colorBlack text-left text-sm gap-1">
          <p>👉🏻 UI/UX Design</p>
          <p>👉🏻 Website Development</p>
          <p>👉🏻 Back-end integration</p>
          <p>👉🏻 Database Connection</p>
          <p>👉🏻 Rest API calls</p>
          <p>👉🏻 O Authentication</p>
          <p>👉🏻 Website Management</p>
          <p>👉🏻 Troubleshoot, debug software</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
