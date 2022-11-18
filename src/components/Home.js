import React from "react";

import { contactLink } from "../constants";

import { motion } from "framer-motion";
import dark_blue from "../assets/pc.jpg";
import { Typewriter } from "react-simple-typewriter";





const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${dark_blue}'`,
          backgroundSize: "cover",
        }}
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4.5xl md:text-1xl">
              <motion.p className={" text-white"}>
                Hi, I am Dhameemul Ansari I
              </motion.p>
              <p className="block text-red-500 z-0 lg:inline">
                <Typewriter
                  words={["Front End Developer", "Full Stack Developer"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </h1>
            <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I am a Front-End / Full-Stack Developer. Managing the complete
              software development process from conception to deployment.
            </p>
            <div className="flex md:justify-start ">
              {contactLink.map((el) => (
                <a
                  href={el.link}
                  target="_blank"
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} className="w-12" />
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  href="https://drive.google.com/file/d/1ZKE6nZqIHhbGKBqvmlZFPafPajfKUn--/view"
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
