import React, { useState, useEffect } from "react";
import ProjectsData from "../database/ProjectsData"; // Import the ProjectsData from the local file

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = ProjectsData(); // Fetch data from the ProjectsData function or import
        if (data && data.length > 0) {
          setProjects(data); // Set projects state with data from the local file
        } else {
          console.warn("No projects found in the 'ProjectsData'.");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("An error occurred while loading projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="bg-white mx-8 md:mx-60 mb-8 py-2 px-4 md:px-8 text-sm">
      <h2 className="text-3xl px-4 font-extrabold text-center mb-8 text-gray-800">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
