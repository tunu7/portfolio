import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects') 
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition duration-300 ease-in-out hover:opacity-80"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                View Project Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
