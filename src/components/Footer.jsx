import React from "react";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white  mx-32 py-2 px-8 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold text-gray-900 mb-4 md:mb-0">
          <span>Tunu Doley</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-500"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://twitter.com/your-twitter-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-500"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-700 hover:text-indigo-500"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
