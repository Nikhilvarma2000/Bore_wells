import React from 'react';

const services = [
  {
    title: 'Borewell Drilling',
    description: 'Our state-of-the-art drilling technology ensures accurate and efficient borewell drilling, providing reliable water sources for homes and industries.',
    image: 'https://via.placeholder.com/400',
    details: 'We use advanced machinery and experienced professionals to drill borewells of various depths, suitable for all types of soil conditions.',
  },
  {
    title: 'Pump Installation',
    description: 'We offer expert pump installation for borewells, ensuring efficient and long-lasting water extraction systems for domestic and commercial needs.',
    image: 'https://via.placeholder.com/400',
    details: 'Our team installs submersible and centrifugal pumps with high-quality components to guarantee reliable performance in all conditions.',
  },
  {
    title: 'Water Treatment',
    description: 'Ensure your borewell water is safe with our advanced water treatment solutions, offering purification and filtration for domestic and industrial use.',
    image: 'https://via.placeholder.com/400',
    details: 'We offer complete water purification systems, including reverse osmosis (RO), UV treatment, and filtration to provide clean, safe water.',
  },
  {
    title: 'Maintenance & Repair',
    description: 'Routine maintenance and repair services for borewells and pumps to extend the life of your system and ensure peak performance.',
    image: 'https://via.placeholder.com/400',
    details: 'We offer services like pump repair, motor maintenance, and regular checks to ensure that your borewell system works flawlessly for years.',
  },
  {
    title: 'Water Quality Testing',
    description: 'We provide water quality testing services to ensure your borewell water meets safety standards and is free from harmful contaminants.',
    image: 'https://via.placeholder.com/400',
    details: 'Our water quality testing covers a wide range of parameters, such as pH, TDS, bacteria, and heavy metals, ensuring that your water is safe to use.',
  },
  {
    title: 'Consultation & Survey',
    description: 'Get expert consultation for assessing your borewell needs, including site surveys to determine the best drilling and installation solutions.',
    image: 'https://via.placeholder.com/400',
    details: 'Our experts conduct detailed surveys to evaluate your site’s water availability and recommend the best borewell drilling locations and techniques.',
  },
];

const Services = () => {
  return (
    <>
      {/* Section Heading */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-sky-500 to-green-500 text-center text-white">
        <h2 className="text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-xl mb-4">Providing high-quality borewell services with reliable and advanced techniques.</p>
        <p className="text-lg max-w-3xl mx-auto">
          Our comprehensive services ensure that all your water needs are met with the utmost quality, from borewell drilling to water treatment and pump installations.
        </p>
      </section>

      {/* Service Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{service.description}</p>
              <p className="text-gray-600 text-xs">{service.details}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300">
                  Learn More
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Process Section */}
<section className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white text-center">
  <h2 className="text-4xl font-bold mb-12">Our Service Process</h2>
  
  {/* Container for Steps */}
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    
    {/* Step 1: Consultation */}
    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="text-5xl mb-6 text-blue-600">
        <i className="fas fa-search"></i>
      </div>
      <h3 className="text-2xl font-semibold mb-4">Step 1: Consultation</h3>
      <p className="mb-4">We begin with an in-depth consultation to understand your specific water requirements, land conditions, and expectations.</p>
      <p>Our team gathers the necessary data to create a customized plan that suits your needs, ensuring accurate and efficient borewell drilling.</p>
    </div>
    
    {/* Step 2: Site Survey */}
    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="text-5xl mb-6 text-green-600">
        <i className="fas fa-map-marked-alt"></i>
      </div>
      <h3 className="text-2xl font-semibold mb-4">Step 2: Site Survey</h3>
      <p className="mb-4">Our experienced team conducts a detailed site survey to assess the land's suitability for borewell drilling, including geological testing.</p>
      <p>We analyze factors such as water table depth, soil type, and surrounding environment to determine the best drilling locations.</p>
    </div>

    {/* Step 3: Drilling & Installation */}
    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="text-5xl mb-6 text-yellow-600">
        <i className="fas fa-cogs"></i>
      </div>
      <h3 className="text-2xl font-semibold mb-4">Step 3: Drilling & Installation</h3>
      <p className="mb-4">Our team drills the borewell and installs the necessary pumps and water treatment systems. We use the latest equipment for efficient results.</p>
      <p>Once installation is complete, we perform a thorough test to ensure everything is working seamlessly and the water supply is reliable.</p>
    </div>

    {/* Step 4: Quality Check & Testing */}
    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="text-5xl mb-6 text-orange-600">
        <i className="fas fa-check-circle"></i>
      </div>
      <h3 className="text-2xl font-semibold mb-4">Step 4: Quality Check & Testing</h3>
      <p className="mb-4">After installation, we conduct rigorous quality checks on the borewell system, pumps, and water quality to ensure optimal performance.</p>
      <p>Our technicians test the water for purity and safety, ensuring it meets all standards for consumption and daily use.</p>
    </div>

    {/* Step 5: Handover & Maintenance */}
    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="text-5xl mb-6 text-red-600">
        <i className="fas fa-hands-helping"></i>
      </div>
      <h3 className="text-2xl font-semibold mb-4">Step 5: Handover & Maintenance</h3>
      <p className="mb-4">Once everything is complete, we hand over the system to you with proper training and documentation.</p>
      <p>We also offer post-installation maintenance services to ensure that your borewell remains in top condition for years to come.</p>
    </div>

    {/* Step 6: Continuous Support */}
    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="text-5xl mb-6 text-purple-600">
        <i className="fas fa-life-ring"></i>
      </div>
      <h3 className="text-2xl font-semibold mb-4">Step 6: Continuous Support</h3>
      <p className="mb-4">Our relationship doesn’t end after the handover. We provide continuous support, offering maintenance services, troubleshooting, and upgrades as needed.</p>
      <p>We are always ready to assist with any issues, ensuring the longevity and effectiveness of your borewell system.</p>
    </div>

  </div>
</section>

{/* Testimonials Section */}
<section className="py-20 bg-gray-100 text-center">
  <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>

  {/* Testimonials Container */}
  <div className="container mx-auto px-6">

    {/* Testimonial Cards */}
    <div className="flex flex-wrap justify-center gap-8">

      {/* Testimonial 1 */}
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out max-w-xs">
        <div className="mb-6">
          <img src="https://via.placeholder.com/100" alt="Customer" className="rounded-full mx-auto mb-4"/>
          <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
          <p className="text-gray-500">Customer</p>
        </div>
        <div className="text-xl text-gray-800 mb-4">
          <i className="fas fa-quote-left text-gray-400"></i>  
          "The borewell installation was seamless! The team was professional, and the water quality has been excellent. Highly recommended!"
          <i className="fas fa-quote-right text-gray-400"></i>
        </div>
        <div className="text-yellow-400">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out max-w-xs">
        <div className="mb-6">
          <img src="https://via.placeholder.com/100" alt="Customer" className="rounded-full mx-auto mb-4"/>
          <h3 className="text-2xl font-semibold mb-2">Jane Smith</h3>
          <p className="text-gray-500">Customer</p>
        </div>
        <div className="text-xl text-gray-800 mb-4">
          <i className="fas fa-quote-left text-gray-400"></i>
          "Exceptional service! The team guided us through every step of the process, and we are now enjoying reliable water supply."
          <i className="fas fa-quote-right text-gray-400"></i>
        </div>
        <div className="text-yellow-400">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out max-w-xs">
        <div className="mb-6">
          <img src="https://via.placeholder.com/100" alt="Customer" className="rounded-full mx-auto mb-4"/>
          <h3 className="text-2xl font-semibold mb-2">Michael Brown</h3>
          <p className="text-gray-500">Customer</p>
        </div>
        <div className="text-xl text-gray-800 mb-4">
          <i className="fas fa-quote-left text-gray-400"></i>
          "Highly professional! The service was efficient and the installation was completed on time. We’re very satisfied."
          <i className="fas fa-quote-right text-gray-400"></i>
        </div>
        <div className="text-yellow-400">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>

    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="py-20 bg-gray-100 text-center">
  <h2 className="text-4xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>

  {/* FAQ Container */}
  <div className="container mx-auto px-6">

    {/* FAQ Items */}
    <div className="flex flex-wrap justify-center gap-8">

      {/* FAQ 1 */}
      <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out max-w-sm">
        <h3 className="text-2xl font-semibold mb-4">What is Borewell Drilling?</h3>
        <p className="text-gray-600">
          Borewell drilling is the process of drilling a hole deep into the ground to access underground water sources. It is used for various purposes, including providing water for agriculture, industries, and households.
        </p>
      </div>

      {/* FAQ 2 */}
      <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out max-w-sm">
        <h3 className="text-2xl font-semibold mb-4">How long does the drilling process take?</h3>
        <p className="text-gray-600">
          The time required for drilling depends on the depth of the borewell and soil conditions. On average, it can take from a few hours to a couple of days.
        </p>
      </div>

      {/* FAQ 3 */}
      <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out max-w-sm">
        <h3 className="text-2xl font-semibold mb-4">What types of pumps do you install?</h3>
        <p className="text-gray-600">
          We install both submersible and centrifugal pumps based on the borewell depth and water requirements. Our pumps are designed for long-lasting, efficient water extraction.
        </p>
      </div>

      {/* FAQ 4 */}
      <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out max-w-sm">
        <h3 className="text-2xl font-semibold mb-4">Do you offer water quality testing?</h3>
        <p className="text-gray-600">
          Yes, we offer comprehensive water quality testing to ensure your borewell water is safe for consumption. We test for parameters like pH, TDS, bacteria, and heavy metals.
        </p>
      </div>

      {/* FAQ 5 */}
      <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out max-w-sm">
        <h3 className="text-2xl font-semibold mb-4">What maintenance services do you offer?</h3>
        <p className="text-gray-600">
          We offer regular maintenance services for borewells and pumps, including inspections, cleaning, and repairs to ensure long-term performance.
        </p>
      </div>

    </div>
  </div>
</section>




      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-500 via-sky-500 to-green-500 py-8 text-center text-white">
        <p>&copy; 2024 Sai Nishanth Borewells. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Services;
