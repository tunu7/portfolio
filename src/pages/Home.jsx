import React, { useEffect, useState } from "react";
import { db, collection, getDocs, query, limit } from "../firebaseConfig"; // Import necessary functions
import { Link } from "react-router-dom";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch 2 projects from Firestore (limit to 2)
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, "projects"), limit(2));
        const querySnapshot = await getDocs(q);
        const projectsData = querySnapshot.docs.map((doc) => doc.data());
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
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