import React, { useContext } from "react";
import { tech_tool } from "../constants";
import { motion } from "framer-motion";

const About = () => {
 
  return (
    <div id="about" className={ "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className=
               "text-5xl font-bold px-4 md:px-0 text-center text-white"
          
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className=
                   "mt-4 text-xl text-justify text-white"
              
            >
             A motivated, goal oriented natural team player wants to convert the challenges into opportunities.
              Looking forward to work in a high profile organization and use my skills and capabilities to contribute to its profitability and growth.
              Maintaining and upgrading the software following deployment. Managing the end-to-end life cycle for the production of software and applications.
            </p>
          </motion.div>
          <motion.div
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className=
              "mt-4 text-xl text-justify text-white"
              
            >
             Without sharpen your weapon; standing on the battlefield would not increase your chance of winning.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {tech_tool.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {

                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-60 w-48"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;