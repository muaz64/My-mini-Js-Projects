import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/muaz64", color: "hover:text-white" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/muaz-muhammad-ba88a3207/", color: "hover:text-blue-400" },
    { icon: <FaTwitter />, href: "https://x.com/MuazMuhammad19", color: "hover:text-sky-400" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/muazmuhammad21", color: "hover:text-blue-600" },
  ];

  return (
    <footer className="relative bg-[#0a0f1d] text-gray-400 py-5 border-t border-gray-800/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4 items-center mb-5">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500">Connect with me</span>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`text-2xl transition-colors duration-300 bg-gray-800/40 p-3 rounded-xl border border-gray-700/50 ${link.color}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
            

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="font-medium">
            &copy; {currentYear} <span className="text-white">Muaz Muhammad</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="mailto:muazmuhammad21@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaEnvelope /> Contact
            </a>
            <div className="flex items-center gap-1">
              Built with <span className="text-red-500"><FaHeart /></span>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;