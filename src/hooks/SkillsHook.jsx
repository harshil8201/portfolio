import React from "react";

const SkillsHook = ({ skillUrl, skillName }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <img
        src={skillUrl}
        className="w-[70px] h-[70px] object-contain bg-transparent"
        alt={skillName}
      />
      <p className="text-sm text-colorDarkGray">{skillName}</p>
    </div>
  );
};

export default SkillsHook;
