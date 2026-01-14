import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after 300px
      setIsVisible(window.scrollY > 300);

      // Calculate scroll percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuint" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
        >
          {/* Progress Ring SVG */}
          <svg className="absolute w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              className="text-gray-200 dark:text-gray-800"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray="175.93" // 2 * PI * r
              animate={{ strokeDashoffset: 175.93 - (175.93 * scrollProgress) / 100 }}
              className="text-blue-500"
            />
          </svg>

          {/* Actual Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-900 text-blue-500 rounded-full shadow-2xl border border-gray-100 dark:border-gray-800 transition-colors"
            aria-label="Back to Top"
          >
            <FaArrowUp size={18} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;