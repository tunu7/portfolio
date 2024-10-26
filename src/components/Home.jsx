import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../asset/myImage.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20"> {/* Dark background for contrast */}

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-lg"> {/* Enhanced gradient and added rounded corners */}

        <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto">
          {/* Content Container */}
          <div className="md:w-1/2 flex flex-col items-center text-center mb-12 md:mb-0 md:pr-12">
            <div className="mb-6">
              <span className="text-gray-400 text-lg">I'M</span>
              <h1 className="text-6xl font-extrabold mt-2 tracking-tight"> {/* Increased font size and adjusted tracking for clarity */}
                <span className="text-yellow-400">Tunu</span>
              </h1>
              <p className="text-gray-300 mt-4 text-xl">Full Stack Developer</p>
            </div>
            <div className="flex justify-center mt-4">
              <Link to="/contact">
                <button className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition duration-300 rounded shadow-md text-lg"> {/* Adjusted padding and font size for the button */}
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
          {/* Image Container */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={myImage} 
              alt="Profile" 
              className="w-72 h-72 object-cover rounded-full shadow-lg transform transition-transform duration-500 hover:scale-105" // Rounded image for a softer look
            />
          </div>
        </div>

        {/* About Section */}
        <div className="mt-32 max-w-6xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2> {/* Increased header size for emphasis */}
          <p className="text-gray-300 text-center text-lg leading-relaxed"> {/* Added line height for readability */}
            I have acquired and sharpened my skills in various technologies. I am trustworthy, creative, and an effective communicator. I look forward to working in a challenging yet rewarding organization to achieve personal growth.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Python', icon: '🐍', bgColor: 'bg-gray-700' }, // Slightly lighter background for contrast
              { name: 'Flutter', icon: '📱', bgColor: 'bg-gray-700' },
              { name: 'Ubuntu', icon: '🐧', bgColor: 'bg-yellow-400' },
              { name: 'Git Source Control', icon: '📦', bgColor: 'bg-gray-700' },
              { name: 'ERPNext', icon: 'E', bgColor: 'bg-gray-700' },
              { name: 'MongoDB', icon: '🍃', bgColor: 'bg-gray-700' },
              { name: 'HTML & CSS', icon: '🎨', bgColor: 'bg-gray-700' },
              { name: 'JavaScript', icon: 'JS', bgColor: 'bg-gray-700' },
              { name: 'Frappe', icon: 'F', bgColor: 'bg-gray-700' },
              { name: '.Net', icon: '.NET', bgColor: 'bg-gray-700' },
              { name: 'Flask Microweb Framework', icon: '🌶', bgColor: 'bg-gray-700' },
            ].map((skill, index) => (
              <div
                key={index}
                className={`${skill.bgColor} p-6 rounded-lg flex flex-col items-center justify-center transition duration-300 hover:bg-gray-600 shadow-lg`}
              >
                <div className="text-4xl mb-2">{skill.icon}</div> {/* Increased icon size for visibility */}
                <div className="text-gray-200 text-center text-sm font-medium">{skill.name}</div> {/* Adjusted font size and weight */}
              </div>
            ))}
          </div>
        </div>

        {/* Add Margin Bottom to Ensure Content Doesn't Overlap Footer */}
        <div className="mb-30"></div>

      </div>
    </div>
  );
};

export default Home;
