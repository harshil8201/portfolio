import React from "react";
import SkillsHook from "../hooks/SkillsHook";
import ReactSkill from "../assets/skills/react.png";
import JavaScript from "../assets/skills/javascript.png";
import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";
import TailwindCSS from "../assets/skills/tailwindcss.png";
import NodeJs from "../assets/skills/nodejs.png";
import MongoDB from "../assets/skills/mongodb.png";
import Firebase from "../assets/skills/firebase.png";
import MySql from "../assets/skills/mysql.png";
import Figma from "../assets/skills/figma.png";
import Wordpress from "../assets/skills/wordpress.avif";
import Java from "../assets/skills/java.png";
import Python from "../assets/skills/python.png";

const Skills = () => {
  return (
    <div name="skills">
      {/* ------------------- Desktop ----------------------*/}
      <div className="mt-[110px] bg-colorWhite md:flex md:px-5 hidden flex-col text-left">
        <p className="mb-7 uppercase text-3xl font-semibold text-colorRed">
          📌 my Skills
        </p>
        <div className="flex flex-col gap-10 mt-5">
          <div className="flex w-full items-center justify-between">
            <SkillsHook skillName="React.js" skillUrl={ReactSkill} />
            <SkillsHook skillName="Javascript" skillUrl={JavaScript} />
            <SkillsHook skillName="HTML" skillUrl={HTML} />
            <SkillsHook skillName="CSS" skillUrl={CSS} />
            <SkillsHook skillName="Tailwind CSS" skillUrl={TailwindCSS} />
          </div>
          <div className="flex w-full items-center justify-between">
            <SkillsHook skillName="Node.js" skillUrl={NodeJs} />
            <SkillsHook skillName="MongoDB" skillUrl={MongoDB} />
            <SkillsHook skillName="Firebase" skillUrl={Firebase} />
            <SkillsHook skillName="MySQL" skillUrl={MySql} />
            <SkillsHook skillName="Figma" skillUrl={Figma} />
          </div>
          <div className="flex w-full items-center justify-between">
            <SkillsHook skillName="Wordpress" skillUrl={Wordpress} />
            <SkillsHook skillName="Java" skillUrl={Java} />
            <SkillsHook skillName="Python" skillUrl={Python} />
          </div>
        </div>
      </div>

      {/* ------------------- Mobile ----------------------*/}
      <div className="md:hidden flex mt-[70px] flex-col">
        <p className="mb-7 uppercase text-xl font-semibold text-colorRed">
          📌 my Skills
        </p>
        <div className="flex flex-col gap-10 mt-5">
          <div className="flex w-full items-center justify-between">
            <SkillsHook skillName="React.js" skillUrl={ReactSkill} />
            <SkillsHook skillName="Javascript" skillUrl={JavaScript} />
            <SkillsHook skillName="HTML" skillUrl={HTML} />
            <SkillsHook skillName="CSS" skillUrl={CSS} />
          </div>
          <div className="flex w-full items-center justify-between">
            <SkillsHook skillName="Tailwind CSS" skillUrl={TailwindCSS} />
            <SkillsHook skillName="Node.js" skillUrl={NodeJs} />
            <SkillsHook skillName="MongoDB" skillUrl={MongoDB} />
            <SkillsHook skillName="Firebase" skillUrl={Firebase} />
          </div>
          <div className="flex w-full items-center justify-start gap-10">
            <SkillsHook skillName="MySQL" skillUrl={MySql} />
            <SkillsHook skillName="Figma" skillUrl={Figma} />
            <SkillsHook skillName="Wordpress" skillUrl={Wordpress} />
            <SkillsHook skillName="Java" skillUrl={Java} />
          </div>
          <div className="flex w-full items-center justify-start gap-10">
            <SkillsHook skillName="Python" skillUrl={Python} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
