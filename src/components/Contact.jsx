import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'animate-fadeIn'); // Trigger animation
      }, index * 300); // Delay each element slightly
    });
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-gray-500 mb-12 opacity-0 transform translate-y-10 fade-in animate-fadeIn transition-all duration-1000">
        Contact Us
      </h2>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Contact Details */}
        <div className="space-y-8">
          {/* Get in Touch Card */}
          <div className="card p-6 bg-white shadow-lg rounded-lg opacity-0 transform translate-y-10 fade-in animate-fadeIn transition-all duration-1000 hover:shadow-2xl hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-lg text-gray-600">
              Have any questions or feedback? Reach out to us via email, phone, or fill out the form below. We're here to help!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-lg opacity-0 transform translate-y-10 fade-in animate-fadeIn transition-all duration-1000 hover:shadow-2xl hover:scale-105">
              <i className="fas fa-envelope text-3xl text-blue-500"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-lg text-blue-500">
                  <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-lg opacity-0 transform translate-y-10 fade-in animate-fadeIn transition-all duration-1000 hover:shadow-2xl hover:scale-105">
              <i className="fas fa-phone-alt text-3xl text-blue-500"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-lg text-blue-500">
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-lg opacity-0 transform translate-y-10 fade-in animate-fadeIn transition-all duration-1000 hover:shadow-2xl hover:scale-105">
              <i className="fas fa-map-marker-alt text-3xl text-blue-500"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                <p className="text-lg text-gray-600">123, Example Street, City, Country</p>
              </div>
            </div>

            {/* Google Form Card */}
            <div className="p-6 bg-white shadow-lg rounded-lg opacity-0 transform translate-y-10 fade-in animate-fadeIn transition-all duration-1000 hover:shadow-2xl hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800">Contact Form</h3>
              <p className="text-lg text-blue-500">
                For any inquiries, please fill out our{' '}
                <a
                  href="https://forms.gle/yourgoogleformlink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Google Form
                </a>{' '}
                and we will get back to you shortly.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Google Map Embed */}
        <div className="opacity-0 transform translate-y-10 fade-in animate-fadeIn transition-all duration-1000 hover:shadow-2xl hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Find Us Here</h3>
          <div className="relative pb-2/3">
            <iframe
              title="Google Map"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.129173363293!2d144.963158!3d-37.814107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5da83b7b41%3A0xb0d4b92cd6f1bc8!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1602536761233!5m2!1sen!2sus"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-600">
          Developed by Nikhil, All Rights Reserved. &copy; 2024
        </p>
      </div>
    </div>
  );
};

export default Contact;
