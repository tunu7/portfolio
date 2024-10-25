import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 flex flex-col items-center">
      <p className="text-sm mb-2">&copy; 2024 My Portfolio</p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/yourusername" // Replace with your GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://twitter.com/tunu_7" // Replace with your Twitter profile link
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
