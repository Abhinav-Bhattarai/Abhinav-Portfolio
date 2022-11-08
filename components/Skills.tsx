import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};
const TechnologyMapper = [
    { name: "TypeScript", source: "/typescript.svg" },
    { name: "Python", source: "/python.svg" },
    { name: "React", source: "/react.svg" },
    { name: "Node", source: "/node-js.svg" },
    { name: "Webpack", source: "/webpack.svg" },
    { name: "MongoDB", source: "/mongodb.svg" },
    { name: "Firebase", source: "/firebase.svg" },
    { name: "Nginx", source: "/nginx.svg" },
    { name: "Javascript", source: "/javascript.svg" },
    { name: 'Vue', source: "/vuejs.svg" },
    { name: 'Git', source: "/git.svg" },
    { name: 'Django', source: "/django.svg" },
    { name: 'Stripe', source: "/stripe.svg" },
    { name: 'reids', source: "/redis.svg" },
    { name: "mysql" , source: "/mysql.svg" },
  ];

const leftIndex: Array<number> = [];
let counter = 0;
let index = "";
for ( index in TechnologyMapper ) {
  if (counter <= 1) {
    leftIndex.push(parseInt(index));
  }
  counter += 1
  if (counter >= 4) {
    counter = 0
  }
};


export default function Skills({}: Props) {
  return (
    <motion.div
      transition={{
        duration: 1.5,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col h-screen px-10 max-w-8xl mx-auto items-center"
    >
      <div className= "w-[100%] mb-1 pt-20 md:pt-20 pb-3 justify-center md:flex md:justify-center md:items-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>
      </div>
      <div className= "w-[100%] mb-1 pb-3 hidden md:flex md:visible md:justify-center md:items-center">
        <h3 className="tracking-[3px] text-gray-500">
          The forementioned technologies are my comforts
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-3 md:gap-5 p-5">
        {  
            TechnologyMapper.map((data, index) => {
                const condition = leftIndex.includes(index);
                return (
                    <Skill directionLeft={ condition } source={data.source}/>
                )
            })
        }
      </div>
    </motion.div>
  );
}
