import React, { useState, useEffect } from 'react';
import BlogData from '../database/BlogData'; // Import BlogData from the local file

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = () => {
      try {
        setLoading(true);
        setBlogs(BlogData); // Directly set the blogs from BlogData.js
      } catch (error) {
        setError('Error loading blogs.');
        console.error('Error loading blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="bg-white mx-4 md:mx-10 lg:mx-20 mb-8 py-4 px-4 sm:px-6 lg:px-8 text-sm">
      <h1 className="text-3xl font-bold mt-4 mb-4 text-center">Blogs</h1>
      <p className="text-gray-700 text-center mb-6">Explore my writings and thoughts.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.excerpt}</p>
            <a href={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
