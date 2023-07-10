import React from "react";

const About = () => {
  return (
    <div name="about">
      {/* ------------------- Desktop ----------------------*/}
      <div className="mt-[110px] bg-colorWhite md:flex md:px-5 hidden flex-col text-left">
        <p className="uppercase text-3xl font-semibold text-colorRed mb-7">
          📌 ABOUT ME
        </p>
        <p className="mb-7 text-colorBlack font-medium capitalize text-lg">
          web site Designer 🖌️ & Developer 🧑🏻‍💻
        </p>
        <div className="flex flex-col gap-5 text-sm text-colorDarkGray text-justify font-light">
          <p>
            I am a dedicated Full Stack Software Developer based in Gujarat.
            With a strong passion for web development, I specialize in creating
            dynamic and responsive user interfaces using React.js. As a
            proficient front-end developer, I am well-versed in HTML,
            JavaScript, CSS, and Tailwind CSS, ensuring visually appealing and
            intuitive designs for web applications.
          </p>
          <p>
            My expertise extends to the back-end as well, with a deep
            understanding of Node.js for server-side development. This allows me
            to build robust and salable web applications that seamlessly
            integrate front-end and back-end functionality.
          </p>
          <p>
            As a freelancer, I have successfully completed over 50 projects
            using React.js, demonstrating my ability to deliver high-quality and
            efficient solutions. I am constantly staying up-to-date with the
            latest web development trends and technologies, enabling me to
            provide cutting-edge solutions to my clients. You can find my
            impressive portfolio on GitHub. These projects showcase my expertise
            in building interactive user interfaces, handling data flow, and
            implementing various features and functionalities.
          </p>
          <p>
            My GitHub profile:{" "}
            <a
              href="https://github.com/Harshil-Patel-8201"
              className="text-colorBlue cursor-pointer underline"
            >
              https://github.com/Harshil-Patel-8201
            </a>{" "}
            🔗
          </p>
          <p>
            If you are looking to develop a modern web application, enhance the
            user experience of an existing website, or require assistance with
            full-stack development, I am a reliable and skilled software
            developer who can bring your ideas to life.
          </p>
          <p>
            Till then check out my latest challenge :{" "}
            <a
              href="https://github.com/Harshil-Patel-8201/30-Days-with-React.js"
              className="text-colorBlue cursor-pointer underline capitalize"
            >
              30 days with react.js
            </a>{" "}
            🔗
          </p>
        </div>
      </div>

      {/* ------------------- Mobile ----------------------*/}
      <div className="md:hidden flex mt-[70px] flex-col justify-center items-center">
        <p className="uppercase text-xl font-semibold text-colorRed mb-5">
          📌 ABOUT ME
        </p>
        <p className="mb-5 text-colorBlack font-medium capitalize text-sm">
          web site Designer 🖌️ & Developer 🧑🏻‍💻
        </p>
        <div className="flex flex-col gap-3 text-xs text-colorDarkGray text-justify font-light">
          <p>
            I am a dedicated Full Stack Software Developer based in Gujarat.
            With a strong passion for web development, I specialize in creating
            dynamic and responsive user interfaces using React.js. As a
            proficient front-end developer, I am well-versed in HTML,
            JavaScript, CSS, and Tailwind CSS, ensuring visually appealing and
            intuitive designs for web applications.
          </p>
          <p>
            My expertise extends to the back-end as well, with a deep
            understanding of Node.js for server-side development. This allows me
            to build robust and salable web applications that seamlessly
            integrate front-end and back-end functionality.
          </p>
          <p>
            As a freelancer, I have successfully completed over 50 projects
            using React.js, demonstrating my ability to deliver high-quality and
            efficient solutions. I am constantly staying up-to-date with the
            latest web development trends and technologies, enabling me to
            provide cutting-edge solutions to my clients. You can find my
            impressive portfolio on GitHub. These projects showcase my expertise
            in building interactive user interfaces, handling data flow, and
            implementing various features and functionalities.
          </p>
          <p>
            My GitHub profile:{" "}
            <a
              href="https://github.com/Harshil-Patel-8201"
              className="text-colorBlue cursor-pointer underline"
            >
              https://github.com/Harshil-Patel-8201
            </a>{" "}
            🔗
          </p>
          <p>
            If you are looking to develop a modern web application, enhance the
            user experience of an existing website, or require assistance with
            full-stack development, I am a reliable and skilled software
            developer who can bring your ideas to life.
          </p>
          <p>
            Till then check out my latest challenge :{" "}
            <a
              href="https://github.com/Harshil-Patel-8201/30-Days-with-React.js"
              className="text-colorBlue cursor-pointer underline capitalize"
            >
              30 days with react.js
            </a>{" "}
            🔗
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
