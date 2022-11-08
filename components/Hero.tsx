import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";

export default function Hero(props: {}) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, Abhinav Bhattarai here.",
      "<Abhinav.tsx/>",
      "Web Development",
      "Deep Learning.py",
    ],
    delaySpeed: 2000,
    loop: true,
  });

  return (
    <div className="min-h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden pt-20 z-0">
      <BackgroundCircle />
      <img
        src="/mm.jpg"
        className="rounded-full w-32 h-32 mx-auto object-cover"
        alt="my-profile"
      />
      <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
        Software Engineer
      </h2>
      <h1 className="font-semibold text-3xl lg:text-4xl px-10">
        <span>{text}</span>
        <Cursor cursorColor="#f7ab0a" />
      </h1>
      <div>
        <a href="#experience">
          <button className="heroButton">Experience</button>
        </a>
        <a href="#skills">
          <button className="heroButton">Skills</button>
        </a>
        <a href="#projects">
          <button className="heroButton">Project</button>
        </a>
        <a href="#about">
          <button className="heroButton">About</button>
        </a>
      </div>
    </div>
  );
}
