import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../asset/background.jpeg';
import myImage from '../asset/myImage.png';

const Home = () => {
  return (
    <div
      className="home flex flex-col items-center justify-center min-h-screen bg-gray-100 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '80px', // Increased spacing for better balance
        paddingBottom: '40px', // Increased spacing for better balance
      }}
    >
      {/* Background Gradient (Optional, adjust opacity and colors as needed) */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#F6D8D0] to-[#D65780] opacity-60 rounded-lg"></div> */}

      {/* Profile Image and Introduction */}
      <div className="flex flex-col items-center justify-center w-half max-w-5xl p-4 bg-grey bg-opacity-90 rounded-lg shadow-2xl relative z-10">
        <img
          src={myImage}
          alt="My Profile"
          className="rounded-full w-48 h-48 mb-4 border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-110" // Larger profile image
        />
        <h1 className="text-4xl font-extrabold mb-2 text-gray-800">
          Hi, I'm Tunu
        </h1>
        <p className="text-lg mb-4 text-gray-700">
          A full stack blockchain developer with a passion for learning and creating.
        </p>
        <Link
          to="/contact"
          className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:bg-blue-600" // Increased padding and button size
        >
          Get in Touch
        </Link>
      </div>

      {/* Skills Section */}
      <div className="hero-section bg-white bg-opacity-90 p-6 rounded-lg shadow-lg mt-8 max-w-5xl w-full z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Front-End</h3>
            <p className="text-lg text-gray-700">
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM, Ionic, BootStrap, Solidity, Yarn, TailwindCSS, StyledComponents
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Back-End</h3>
            <p className="text-lg text-gray-700">
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Languages</h3>
            <p className="text-lg text-gray-700">
              JavaScript, Java, Python, C#, C, C++, TypeScript, Go
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;