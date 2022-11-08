import { motion } from "framer-motion";
import React from "react";
import Project from "./Project";

type Props = {};

const ProjectsList = [
    { name: 'Binary Diary | Social Media Platform for all devices in Mern Stack', source: '/mongodb.svg', Description: '' },
    { name: 'E-commerce | Full-stack website to buy and sell thrift items', source: '/express.svg', Description: '' },
    { name: 'Market Prediction | Deep Learning project to analyze current market', source: '/react.svg', Description: '' },
    { name: 'Randoms | Omegle clone where you can video chat with random people', source: '/node-js.svg', Description: '' },
]

function Projects({}: Props) {
  return (
    <motion.div
      transition={{
        duration: 1.5,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative justify-center p-1 h-screen md:px-10 w-[100%] md:w-auto md:max-w-8xl mx-auto items-center"
    >
      <div className="w-[100%] invisible mb-1 pt-8 md:pt-20 pb-3 md:flex md:visible md:justify-center md:items-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>
      </div>
      <div className="w-full relative flex space-x-2 mb-4 px-1 pb-1 pt-0 overflow-x-scroll
       overflow-y-hidden scrollbar-thin scrollbar-x-thumb-[#585858] scrollbar-x-track-[#33333] snap-x snap-mandatory">
        {
            ProjectsList.map((data) => {
                return (
                    <Project name={ data.name } source={ data.source } description={ data.Description }/>
                )
            })
        }
      </div>
    </motion.div>
  );
}

export default Projects;
