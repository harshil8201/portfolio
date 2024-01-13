import React from "react";

const SkillsHook = ({ skillUrl, skillName }) => {
  return (
    <div>
      <div className="w-[150px] hidden md:flex flex-col gap-2 justify-center items-center">
        <img
          src={skillUrl}
          className="w-[70px] h-[70px] object-contain bg-transparent"
          alt={skillName}
        />
        <p className="text-sm text-colorDarkGray">{skillName}</p>
      </div>

      {/* Mobile */}
      <div className="w-[100px] md:hidden flex flex-col gap-2 justify-center items-center">
        <img
          src={skillUrl}
          className="w-[30px] h-[30px] object-contain bg-transparent"
          alt={skillName}
        />
        <p className="text-xs text-colorDarkGray">{skillName}</p>
      </div>
    </div>
  );
};

export default SkillsHook;
