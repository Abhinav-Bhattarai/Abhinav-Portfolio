import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full animate-ping h-[200px] w-[200px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full animate-ping h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full animate-ping h-[500px] w-[500px] mt-52" />
      {/* <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 animate-ping h-[650px] w-[650px] z-10 mt-52 animate-pulse" /> */}
      <div className="absolute border border-[#333333] rounded-full animate-ping h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircle;
