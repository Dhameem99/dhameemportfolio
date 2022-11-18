import React from "react";
import { project_data } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  

  return (
    <div
      className=
        "pb-20 bg-black"
      
       // style={{backgroundImage: `url('https://media0.giphy.com/media/xTiTniuHdUjpOlNo1q/giphy.gif')`}}>
       >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
        id="projects"
      >
        <h2
          className= "text-5xl font-bold px-4 md:px-0 text-center text-white"
          
        >
         Projects
        </h2>
        <div className="">
          <h4 className="mt-16 text-3xl font-semibold text-blue-500">
            What I Built
          </h4>
          <div className="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-center ">
            {project_data.map((el) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                className= "md:w-96 p-4 bg-gray-100 rounded-lg flex items-center flex-col mt-8"
                
              >
                <img class="rounded-t-lg w-full" src={el.img} alt="" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.desc}</p>
                <a
          href={el.href}
          target="_blank"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;