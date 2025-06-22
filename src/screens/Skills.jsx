import React from "react";
import SkillsHook from "../hooks/SkillsHook";
import ReactSkill from "../assets/skills/react.png";
import ReactNative from "../assets/skills/reactNative.png";
import TypeScript from "../assets/skills/typescript.png";
import Flutter from "../assets/skills/flutter.png";
import AWS from "../assets/skills/AWS.png";
import PostgreSQL from "../assets/skills/postgreSQL.png";
import Redis from "../assets/skills/redis.png";
import JavaScript from "../assets/skills/javascript.png";
import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";
import TailwindCSS from "../assets/skills/tailwindcss.png";
import NodeJs from "../assets/skills/nodejs.png";
import MongoDB from "../assets/skills/mongoDB.png";
import TensorFlow from "../assets/skills/tensorFlow.png";
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
        <div className="flex flex-wrap gap-8 mt-5 items-center justify-center">
          <SkillsHook skillName="Java" skillUrl={Java} />
          <SkillsHook skillName="Python" skillUrl={Python} />
          <SkillsHook skillName="HTML" skillUrl={HTML} />
          <SkillsHook skillName="CSS" skillUrl={CSS} />
          <SkillsHook skillName="React.js" skillUrl={ReactSkill} />
          <SkillsHook skillName="React Native" skillUrl={ReactNative} />
          <SkillsHook skillName="Javascript" skillUrl={JavaScript} />
          <SkillsHook skillName="Typescript" skillUrl={TypeScript} />
          <SkillsHook skillName="Flutter" skillUrl={Flutter} />
          <SkillsHook skillName="Tailwind CSS" skillUrl={TailwindCSS} />
          <SkillsHook skillName="Node.js" skillUrl={NodeJs} />
          <SkillsHook skillName="MongoDB" skillUrl={MongoDB} />
          <SkillsHook skillName="Redis" skillUrl={Redis} />
          <SkillsHook skillName="Firebase" skillUrl={Firebase} />
          <SkillsHook skillName="MySQL" skillUrl={MySql} />
          <SkillsHook skillName="PostgreSQL" skillUrl={PostgreSQL} />
          <SkillsHook skillName="Figma" skillUrl={Figma} />
          <SkillsHook skillName="AWS Service" skillUrl={AWS} />
          <SkillsHook skillName="TensorFlow" skillUrl={TensorFlow} />
          <SkillsHook skillName="Wordpress" skillUrl={Wordpress} />
        </div>
      </div>

      {/* ------------------- Mobile ----------------------*/}
      <div className="md:hidden flex mt-[70px] flex-col">
        <p className="mb-7 uppercase text-xl font-semibold text-colorRed">
          📌 my Skills
        </p>
        <div className="flex flex-wrap gap-8 mt-5 items-center justify-center">
          <SkillsHook skillName="Java" skillUrl={Java} />
          <SkillsHook skillName="Python" skillUrl={Python} />
          <SkillsHook skillName="HTML" skillUrl={HTML} />
          <SkillsHook skillName="CSS" skillUrl={CSS} />
          <SkillsHook skillName="React.js" skillUrl={ReactSkill} />
          <SkillsHook skillName="React Native" skillUrl={ReactNative} />
          <SkillsHook skillName="Javascript" skillUrl={JavaScript} />
          <SkillsHook skillName="Typescript" skillUrl={TypeScript} />
          <SkillsHook skillName="Flutter" skillUrl={Flutter} />
          <SkillsHook skillName="Tailwind CSS" skillUrl={TailwindCSS} />
          <SkillsHook skillName="Node.js" skillUrl={NodeJs} />
          <SkillsHook skillName="MongoDB" skillUrl={MongoDB} />
          <SkillsHook skillName="Redis" skillUrl={Redis} />
          <SkillsHook skillName="Firebase" skillUrl={Firebase} />
          <SkillsHook skillName="MySQL" skillUrl={MySql} />
          <SkillsHook skillName="PostgreSQL" skillUrl={PostgreSQL} />
          <SkillsHook skillName="Figma" skillUrl={Figma} />
          <SkillsHook skillName="AWS Service" skillUrl={AWS} />
          <SkillsHook skillName="TensorFlow" skillUrl={TensorFlow} />
          <SkillsHook skillName="Wordpress" skillUrl={Wordpress} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
