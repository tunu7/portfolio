import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectsData from "../database/ProjectsData"; // Import the ProjectsData function
import myPhoto from "../assets/myPhoto.jpg"; // Import the image from the assets folder
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from ProjectsData function
    const fetchProjects = () => {
      const data = ProjectsData(); // Call ProjectsData to get project list
      setProjects(data.slice(0, 2)); // Limit to 2 projects
    };
    fetchProjects();
  }, []);

  return (
    <div className="bg-white max-w-7xl mx-auto px-6 py-8 md:px-20 md:py-16">
      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-20">
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 text-center md:text-left pl-6">
          <h1 className="text-4xl font-extrabold mb-8">Introduction</h1>
          <p className="text-lg mt-4 text-gray-700">
            I specialize in crafting clean, scalable code and intuitive, user-centered designs. My focus on quality and detail ensures that every project seamlessly blends functionality with aesthetics to deliver impactful solutions.
          </p>

          {/* Social Links */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8">
            <div className="flex space-x-6">
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-500"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://twitter.com/your-twitter-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-500"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-gray-700 hover:text-indigo-500"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-8 md:mt-0">
          <img
            src={myPhoto}
            alt="Tunu Doley"
            className="w-80 h-80 rounded-md max-w-full"
          />
        </div>
      </div>

      {/* Projects Section */}
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <Link
              to={`/projects/${project.id}`}
              className="text-indigo-500 hover:text-indigo-700"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
