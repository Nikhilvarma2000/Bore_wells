import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-gray-500">
        Our Projects
      </h2>

      {/* Grid Layout for Projects with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">

        {/* Project 1 */}
        <div className="group relative bg-white p-6 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://via.placeholder.com/400x300"
            className="w-full h-56 object-cover rounded-lg mb-4 transform group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
            <p className="text-sm text-gray-600 mb-4">
              AI-driven project for real-time data processing that enhances business decision-making.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transform transition-transform duration-300 group-hover:translate-x-2 hover:bg-gray-100 hover:text-gray-900"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Additional Projects */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="group relative bg-white p-6 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="https://via.placeholder.com/400x300"
              className="w-full h-56 object-cover rounded-lg mb-4 transform group-hover:scale-110 transition-all duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project {index + 2}</h3>
              <p className="text-sm text-gray-600 mb-4">
                Description for Project {index + 2}
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transform transition-transform duration-300 group-hover:translate-x-2 hover:bg-gray-100 hover:text-gray-900"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">
          © 2024 Sai Nishanth Borewells. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Projects;
