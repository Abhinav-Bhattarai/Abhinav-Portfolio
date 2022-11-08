import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

interface HEADERINTERFACE {
  // children: React.ReactNode;
  ChangePopupStatus: () => void;
}

export default function NavigationHeader(props: HEADERINTERFACE) {
  const { ChangePopupStatus } = props;
  return (
    <React.Fragment>
      <header className="sticky top-0 p-5 z-30 flex items-start justify-between max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
            x: -500,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center justify-around"
        >
          <SocialIcon
            url="https://github.com/Abhinav-Bhattarai"
            fgColor="grey"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/abhinav-bhattarai-1632a5200/"
            fgColor="grey"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.instagram.com/abhinav__bhattarai/"
            fgColor="grey"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCijSAquhzAGVhujzdrzNbRA"
            fgColor="grey"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.facebook.com/abhinav.bhattarai.1"
            fgColor="grey"
            bgColor="transparent"
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
            x: 500,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
          onClick={ ChangePopupStatus }
        >
          <SocialIcon
            network="email"
            className="cursor-pointer"
            fgColor="grey"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </motion.div>
      </header>
    </React.Fragment>
  );
}
