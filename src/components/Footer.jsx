import React from "react";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white mx-4 sm:mx-8 md:mx-16 lg:mx-32 py-4 px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Name Section */}
        <div className="text-lg font-semibold text-gray-900 mb-4 sm:mb-0">
          <span>Tunu Doley</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 justify-center sm:justify-end">
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
