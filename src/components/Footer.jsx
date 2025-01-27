import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/muaz64"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/muaz-muhammad-ba88a3207/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/MuazMuhammad19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.facebook.com/muazmuhammad21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook size={24} />
          </a>
        </div>

        <p className="text-gray-200">
          &copy; {new Date().getFullYear()} Muaz Muhammad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
