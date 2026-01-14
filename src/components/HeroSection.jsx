import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaUserTie } from "react-icons/fa";

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#0a0f1d]">
      {/* Modern Background: Animated Gradient Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse shadow-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
           Welcome to My Mini Projects
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          variants={fadeInUp}
        >
          Explore a collection of lightweight JavaScript tools and interactive web experiments.
        </motion.p>

        {/* Action Area */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          variants={fadeInUp}
          className="flex flex-col items-center gap-6"
        >
          {/* Main CTA */}
          <ScrollLink to="projects" smooth={true} duration={800} offset={-70}>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg cursor-pointer"
            >
              View My Projects
            </motion.button>
          </ScrollLink>

          {/* Social/Portfolio Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <motion.a
              href="https://github.com/muaz64"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-700 bg-white/5 backdrop-blur-md text-gray-300 hover:text-white transition-all"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="#" // Add your portfolio link here
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-700 bg-white/5 backdrop-blur-md text-gray-300 hover:text-white transition-all"
            >
              <FaUserTie size={18} />
              <span>Portfolio</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm hidden md:block"
      >
        <p className="mb-2">Scroll Down</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent mx-auto"></div>
      </motion.div>
    </div>
  );
};

export default HeroSection;