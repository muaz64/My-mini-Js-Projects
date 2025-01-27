import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
    hover: { scale: 1.1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex flex-col items-center justify-center text-center px-6 mb-5">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white mb-6"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        Welcome to My Mini Projects
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        Explore my JavaScript projects and see how I bring ideas to life!
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={buttonVariants}
      >
        <ScrollLink
          to="projects"
          smooth={true}
          duration={800}
          offset={-70}
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg">
            View My Projects
          </button>
        </ScrollLink>
      </motion.div>
    </div>
  );
};

export default HeroSection;
