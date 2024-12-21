import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-gray-500">
        Our Projects
      </h2>

      {/* Grid Layout for Projects with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="group relative bg-white p-6 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="https://via.placeholder.com/400x300"
              alt={`Project ${index + 1}`}
              className="w-full h-56 object-cover rounded-lg mb-4 transform group-hover:scale-110 transition-all duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project {index + 1}</h3>
              <p className="text-sm text-gray-600 mb-4">
                Description for Project {index + 1}
              </p>
              <a
                href="/project-details"
                className="inline-block px-6 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transform transition-transform duration-300 group-hover:translate-x-2 hover:bg-gray-100 hover:text-gray-900"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* About Our Borewell Projects Section */}
      <section className="my-16 py-16 bg-gradient-to-r from-green-200 via-green-100 to-white">
        <h2 className="text-4xl font-bold text-center mb-6 text-green-600 animate__animated animate__fadeIn">
          About Our Borewell Projects
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 leading-relaxed transition-all transform hover:scale-105 duration-300 ease-in-out">
          Our borewell projects are designed to provide sustainable and efficient solutions for water extraction. Using advanced technologies like geophysical surveying, modern drilling equipment, water quality testing, and solar-powered pumping systems, we aim to deliver reliable water sources for both domestic and industrial purposes. Our focus is on ensuring longevity, safety, and efficiency, helping communities and businesses manage water resources effectively in a rapidly changing environment.
        </p>
      </section>

      {/* Borewell Technologies Section */}
      <div className="text-center py-16 bg-gradient-to-r from-green-200 via-green-100 to-white">
        <h3 className="text-4xl font-semibold mb-8 text-green-600">Borewell Technologies</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {['Geophysical Surveying', 'Advanced Drilling Equipment', 'Water Quality Testing', 'Pump Installation & Maintenance', 'Borewell Casing & Lining', 'Solar Pumping Systems'].map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out">
              <h4 className="text-2xl font-semibold mb-4 text-green-500">{tech}</h4>
              <p className="text-gray-700">
                {tech} description goes here.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact & Results Section */}
      <section className="my-16 py-16 bg-gradient-to-r from-green-200 to-blue-100">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">
          Impact & Results
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["💧 Sustainable Water Supply", "🌾 Improved Agricultural Productivity", "💵 Cost-Effective Water Extraction", "🔬 Water Quality & Safety"].map((impact, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="flex justify-center mb-6">
                <span className="text-6xl text-green-600">
                  {impact.split(' ')[0]}
                </span>
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                {impact.substring(2)}
              </h4>
              <p className="text-gray-600 text-lg text-center">
                Description for {impact.substring(2)}.
              </p>
            </div>
          ))}
        </div>
      </section>

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
