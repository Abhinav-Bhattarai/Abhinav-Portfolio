import React from "react";
import { motion } from "framer-motion";

type Props = {
  alt: string;
  source: string;
  position: string;
  company: string;
  technology: { name: string; source: string }[];
  roles: string[];
  timeline: string;
};

function ExperienceCard({
  alt,
  source,
  position,
  company,
  technology,
  roles,
  timeline,
}: Props) {
  return (
    <article
      className="flex flex-col items-center rounded-lg flex-shrink-0 w-[100%] md:w-[400px]
     xl:w-[49%] snap-start opacity-70 hover:opacity-100 bg-[#292929] p-6 h-[650px] md:h-[580px] cursor-pointer
    transition-opacity duration-200"
    >
      <div>
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          src={source}
          alt={alt}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className="px-0 md:px-4 mt-4"
      >
        <h4 className="text-2xl font-light">{position}</h4>
        <p className="mt-1 font-bold text-xl">{company}</p>
        <motion.div
          initial={{ x: -200 }}
          transition={{ duration: 1.5 }}
          whileInView={{ x: 0 }}
          className="flex my-2 space-x-1 py-4"
        >
          {technology.map((data, index) => {
            return (
              <img
                className="h-10 w-10 rounded-full mr-3 object-cover object-left"
                src={data.source}
                alt=""
                key={data + index.toString()}
              />
            );
          })}
        </motion.div>
        <p className="uppercase py-5 text-gray-300">{timeline}</p>
        <ul className="space-y-4 list-disc ml-5 text-lg">
          {roles.map((data, index) => {
            return <li key={data + index.toString()}>{data}</li>;
          })}
        </ul>
      </motion.div>
    </article>
  );
}

export default ExperienceCard;
