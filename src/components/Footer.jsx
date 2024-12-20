import React from "react";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-4 px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">
          <span>Tunu Doley</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/your-twitter-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-500"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-700 hover:text-indigo-500"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;