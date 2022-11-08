import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

type Props = {};

export const TechnologyMapper = [
  { name: "TypeScript", source: "/typescript.svg" },
  { name: "Python", source: "/python.svg" },
  { name: "React", source: "/react.svg" },
  { name: "Node", source: "/node-js.svg" },
  { name: "Webpack", source: "/webpack.svg" },
  { name: "MongoDB", source: "/mongodb.svg" },
];

export const TechnologyMapper2 = [
  { name: "JavaScript", source: "/javascript.svg" },
  { name: "React", source: "/react.svg" },
  { name: "Node", source: "/node-js.svg" },
  { name: "Webpack", source: "/webpack.svg" },
  { name: "Firebase", source: "/firebase.svg" },
  { name: "MongoDB", source: "/mongodb.svg" },
  { name: "Nginx", source: "/nginx.svg" }
];

export const TechnologyMapper3 = [
  { name: "TypeScript", source: "/typescript.svg" },
  { name: "Python", source: "/python.svg" },
  { name: "React", source: "/react.svg" },
  { name: "Node", source: "/node-js.svg" },
  { name: "Webpack", source: "/webpack.svg" },
  { name: "MongoDB", source: "/mongodb.svg" },
];

export const TechnologyMapper4 = [
  { name: "TypeScript", source: "/typescript.svg" },
  { name: "Python", source: "/python.svg" },
  { name: "React", source: "/react.svg" },
  { name: "Node", source: "/node-js.svg" },
  { name: "Webpack", source: "/webpack.svg" },
  { name: "Firebase", source: "/firebase.svg" },
  { name: "MongoDB", source: "/mongodb.svg" },
];

const roles = [
  "Building full-stack web applications and Machine Learning projects and its related tools and scripts",
  "Creating full-stack CMS websites with great user work flow and great performance",
  "Writing quality code in small time frame and getting great feedbacks from the client",
];

const roles1 = [
  "Building different full-stack web applications and its related tools and scripts",
  "Creating full-stack CMS websites with great user work flow and",
  "Pushing the product to GitHub and maintaining the codebase",
];
const roles2 = [
  "Helped in building a full-stack marketplace website",
  "Created the work flow for the user and converting UI designs for the website",
  "Pushing the product to GitHub and maintaining the codebase and integrating payment gateway system",
];
const role3 = [
  "Building different full-stack web applications and its related tools and scripts",
  "Pushing the product to GitHub and maintaining the codebase",
  "Writing quality code in great time and great feedbacks across the platform",
];
export default function WorkExperience({}: Props) {
  return (
    <motion.div
      transition={{
        duration: 1.5,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col justify-center p-1 h-screen md:px-10 w-[100%] md:w-auto md:max-w-8xl mx-auto items-center"
    >
      <div className= "w-[100%] invisible mb-1 pt-8 md:pt-20 pb-3 md:flex md:visible md:justify-center md:items-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>
      </div>
      <article className="w-[100%] flex space-x-2 mb-10 px-1 pb-1 pt-0 overflow-x-scroll
       overflow-y-scroll scrollbar-thin scrollbar-thumb-x-[#585858] scrollbar-track-x-[#33333] snap-x snap-mandatory">
        <ExperienceCard
          technology={TechnologyMapper}
          roles={roles}
          timeline="September 2021 - Present"
          position="Software Developer"
          company="Upwork"
          alt="experience-upwork"
          source="/upwork.png"
        />
        <ExperienceCard
          technology={TechnologyMapper2}
          roles={roles1}
          timeline="Semptember 2022 - October 2022"
          position="Software Developer"
          company="Freelancer"
          alt="experience-freelancer"
          source="/favicon.ico"
        />
        <ExperienceCard
          technology={TechnologyMapper3}
          roles={roles2}
          timeline="October 2022 - November 2022"
          position="Software Developer"
          company="MetaphyLabs"
          alt="experience-connective"
          source="/github-logo.png"
        />
        <ExperienceCard
          technology={TechnologyMapper4}
          roles={role3}
          timeline="September 2021 - April 2022"
          position="Web Developer"
          company="Fiver"
          alt="experience-fiverr"
          source="/fiverr.png"
        />
      </article>
    </motion.div>
  );
}
