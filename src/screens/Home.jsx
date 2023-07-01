import React from "react";

const Home = () => {
  return (
    <div>
      {/* ------------------- Desktop ----------------------*/}
      <div className="w-screen h-screen bg-colorWhite lg:flex hidden">
        laptop
      </div>

      {/* ------------------- Tablet ----------------------*/}
      <div className="w-screen h-screen bg-colorWhite hidden md:flex">
        tablet
      </div>

      {/* ------------------- Mobile ----------------------*/}
      <div className="w-screen h-screen bg-colorWhite lg:hidden md:hidden sm:flex">
        mobile
      </div>
    </div>
  );
};

export default Home;
