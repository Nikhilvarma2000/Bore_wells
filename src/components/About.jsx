import React from 'react';

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-sky-500 to-green-500 text-white">
        <div className="container mx-auto px-8">
          {/* Flex Container for Image and Content */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            {/* Image Section */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 relative">
              <img
                src="https://via.placeholder.com/500x400" // Replace with your transparent PNG image
                alt="Professional Team Working"
                className="rounded-lg object-contain shadow-lg mix-blend-multiply"
              />
            </div>
            {/* Content Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">About Sai Nishanth Borewells</h2>
              <p className="text-lg mb-6">
                With over 20 years of experience, Sai Nishanth Borewells is committed to delivering high-quality 
                borewell solutions. From state-of-the-art equipment to our skilled team, we ensure reliable 
                services for all types of terrains.
              </p>
              <p className="text-lg">
                Our mission is to provide sustainable solutions while maintaining customer satisfaction and 
                adhering to environmental standards.
              </p>
            </div>
          </div>

          {/* About Information - Grid Layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Info Card 1 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Our Equipment"
                className="w-full h-40 rounded-t-lg object-contain mix-blend-multiply"
              />
              <h3 className="text-2xl font-semibold mt-4">State-of-the-Art Equipment</h3>
              <p className="mt-2 text-gray-700">
                We use advanced equipment to ensure accurate and efficient borewell drilling for all types of terrain.
              </p>
            </div>
            {/* Info Card 2 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Our Team"
                className="w-full h-40 rounded-t-lg object-contain mix-blend-multiply"
              />
              <h3 className="text-2xl font-semibold mt-4">Experienced Team</h3>
              <p className="mt-2 text-gray-700">
                Our highly skilled team has over 20 years of experience in borewell services, ensuring top-notch results.
              </p>
            </div>
            {/* Info Card 3 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Customer Satisfaction"
                className="w-full h-40 rounded-t-lg object-contain mix-blend-multiply"
              />
              <h3 className="text-2xl font-semibold mt-4">Customer Satisfaction</h3>
              <p className="mt-2 text-gray-700">
                Our commitment to quality has earned us a loyal customer base and numerous awards for outstanding service.
              </p>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 hover:text-orange-400 transform transition-all duration-500">
              Our Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Certification 1 */}
              <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
                <h4 className="text-xl font-semibold mb-4">ISO Certified</h4>
                <img
                  src="https://via.placeholder.com/200x100"
                  alt="ISO Certified"
                  className="w-full h-20 object-contain mix-blend-multiply mb-4"
                />
                <p>We are ISO certified for maintaining high standards in borewell drilling and maintenance services.</p>
              </div>
              {/* Certification 2 */}
              <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
                <h4 className="text-xl font-semibold mb-4">Government Approved</h4>
                <img
                  src="https://via.placeholder.com/200x100"
                  alt="Government Approved"
                  className="w-full h-20 object-contain mix-blend-multiply mb-4"
                />
                <p>
                  Approved by the government for providing borewell solutions that comply with environmental standards.
                </p>
              </div>
              {/* Certification 3 */}
              <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
                <h4 className="text-xl font-semibold mb-4">Award-Winning Service</h4>
                <img
                  src="https://via.placeholder.com/200x100"
                  alt="Award-Winning Service"
                  className="w-full h-20 object-contain mix-blend-multiply mb-4"
                />
                <p>
                  Recognized for outstanding performance and customer satisfaction in the field of borewell services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">© 2024 Sai Nishanth Borewells. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
