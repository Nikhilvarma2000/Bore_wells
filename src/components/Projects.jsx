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
            alt="Project 1"
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

        {/* Project 2 */}
        <div className="group relative bg-white p-6 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 2"
            className="w-full h-56 object-cover rounded-lg mb-4 transform group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 2</h3>
            <p className="text-sm text-gray-600 mb-4">
              This project streamlines business processes using digital transformation tools.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transform transition-transform duration-300 group-hover:translate-x-2 hover:bg-gray-100 hover:text-gray-900"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="group relative bg-white p-6 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 3"
            className="w-full h-56 object-cover rounded-lg mb-4 transform group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 3</h3>
            <p className="text-sm text-gray-600 mb-4">
              Blockchain-powered project ensuring transparency and security in business.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transform transition-transform duration-300 group-hover:translate-x-2 hover:bg-gray-100 hover:text-gray-900"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="group relative bg-white p-6 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 4"
            className="w-full h-56 object-cover rounded-lg mb-4 transform group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 4</h3>
            <p className="text-sm text-gray-600 mb-4">
              IoT solution that offers real-time data analysis for improved decision-making.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transform transition-transform duration-300 group-hover:translate-x-2 hover:bg-gray-100 hover:text-gray-900"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="group relative bg-white p-6 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 5"
            className="w-full h-56 object-cover rounded-lg mb-4 transform group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 5</h3>
            <p className="text-sm text-gray-600 mb-4">
              Data analytics and machine learning project to optimize business operations.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transform transition-transform duration-300 group-hover:translate-x-2 hover:bg-gray-100 hover:text-gray-900"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Project 6 */}
        <div className="group relative bg-white p-6 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 6"
            className="w-full h-56 object-cover rounded-lg mb-4 transform group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 6</h3>
            <p className="text-sm text-gray-600 mb-4">
              Real-time IoT platform providing actionable insights for businesses to thrive.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transform transition-transform duration-300 group-hover:translate-x-2 hover:bg-gray-100 hover:text-gray-900"
            >
              Learn More
            </a>
          </div>
        </div>
       
      

      </div>
    
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
    {/* Geophysical Surveying */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out">
      <h4 className="text-2xl font-semibold mb-4 text-green-500">Geophysical Surveying</h4>
      <p className="text-gray-700">
        Utilizes resistivity meters and ground-penetrating radar (GPR) to locate the best drilling points.
      </p>
    </div>

    {/* Drilling Equipment */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out">
      <h4 className="text-2xl font-semibold mb-4 text-green-500">Advanced Drilling Equipment</h4>
      <p className="text-gray-700">
        Modern drilling rigs with precision controls for efficient borewell drilling, capable of reaching deep groundwater sources.
      </p>
    </div>

    {/* Water Quality Testing */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out">
      <h4 className="text-2xl font-semibold mb-4 text-green-500">Water Quality Testing</h4>
      <p className="text-gray-700">
        Comprehensive water analysis tools to ensure water quality and identify any contaminants after drilling.
      </p>
    </div>

    {/* Pump Installation */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out">
      <h4 className="text-2xl font-semibold mb-4 text-green-500">Pump Installation & Maintenance</h4>
      <p className="text-gray-700">
        Installation of submersible pumps and regular maintenance to ensure optimal water flow and quality.
      </p>
    </div>

    {/* Borewell Casing */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out">
      <h4 className="text-2xl font-semibold mb-4 text-green-500">Borewell Casing & Lining</h4>
      <p className="text-gray-700">
        Strong casing materials to prevent collapse and contamination of the borewell, ensuring longevity.
      </p>
    </div>

    {/* Solar Pumping Systems */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out">
      <h4 className="text-2xl font-semibold mb-4 text-green-500">Solar Pumping Systems</h4>
      <p className="text-gray-700">
        Solar-powered pumping systems for sustainable and cost-effective water extraction from borewells.
      </p>
    </div>
  </div>
</div>

<section className="my-16 py-16 bg-gradient-to-r from-green-200 to-blue-100">
  <h2 className="text-4xl font-bold text-center mb-12 text-green-700">
    Impact & Results
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Impact 1: Sustainable Water Supply */}
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
      <div className="flex justify-center mb-6">
        <span className="text-6xl text-green-600">
          💧
        </span>
      </div>
      <h4 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Sustainable Water Supply</h4>
      <p className="text-gray-600 text-lg text-center">
        Our projects provide long-term, sustainable water supply to communities and industries, tapping reliable groundwater sources.
      </p>
    </div>

    {/* Impact 2: Improved Agricultural Productivity */}
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
      <div className="flex justify-center mb-6">
        <span className="text-6xl text-green-600">
          🌾
        </span>
      </div>
      <h4 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Improved Agricultural Productivity</h4>
      <p className="text-gray-600 text-lg text-center">
        By ensuring access to water in rural areas, our borewell projects help increase agricultural yield, promoting food security.
      </p>
    </div>

    {/* Impact 3: Cost-Effective Water Extraction */}
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
      <div className="flex justify-center mb-6">
        <span className="text-6xl text-green-600">
          💵
        </span>
      </div>
      <h4 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Cost-Effective Water Extraction</h4>
      <p className="text-gray-600 text-lg text-center">
        Our solar-powered pumping systems drastically reduce electricity costs, providing an affordable, sustainable water solution.
      </p>
    </div>

    {/* Impact 4: Water Quality & Safety */}
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
      <div className="flex justify-center mb-6">
        <span className="text-6xl text-green-600">
          🔬
        </span>
      </div>
      <h4 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Water Quality & Safety</h4>
      <p className="text-gray-600 text-lg text-center">
        We guarantee high water quality through comprehensive testing, ensuring the safety of drinking water for all users.
      </p>
    </div>
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
