import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col px-10 max-w-7xl mx-auto items-center overflow-hidden"
    >
      <div className="w-[100%] mb-1 pt-24 pb-3 md:flex md:justify-center md:items-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
      </div>
      <div className="flex flex-col items-center justify-start py-5 md:flex-row md:items-start">
        <motion.img
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="mb-6 md:my-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:w-[350px] md:h-[350px]
        xl:w-[500px] xl:h-[500px] xl:rounded-full"
          src="./mm.jpg"
          alt="my-photo"
        />
        <div className="space-y-10 px-0 md:px-5 md:my-5 md:py-10 xl:my-28 ml-2">
          <h4 className="text-4xl font-semibold">
            <span className="underline decoration-[#F7AB0A]/40">
              Background
            </span>
          </h4>
          <p className="text-base">
            Full-stack web developer with more than 3 years of hands on
            experience with modern web technologies. My focus is on delivering
            great products to the client that can help them reach their goals
            faster and easier.I create robust application and perform data
            analysis for mobile and web applications with passion and diligence
            to output the best results on the table.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
