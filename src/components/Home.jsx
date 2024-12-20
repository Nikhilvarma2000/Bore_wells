import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';

const Home = () => {
  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-r from-orange-500 via-sky-500 to-green-500 text-white">
        {/* Carousel Wrapper */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
          <Slider {...settings} className="h-full">
            {/* Images */}
            <div>
              <img
                src="https://via.placeholder.com/1920x1080.png?text=Image+1"
                alt="Carousel 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/1920x1080.png?text=Image+2"
                alt="Carousel 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/1920x1080.png?text=Image+3"
                alt="Carousel 3"
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
        </div>

        {/* Hero Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-center px-8">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s transform hover:scale-110 hover:text-green-400 transition-all duration-500">
            Welcome to Sai Nishanth Borewells
          </h1>
          <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
            We provide reliable and efficient borewell drilling services. Quality work at affordable prices.
          </p>
          <a
            href="#services"
            className="bg-white text-black py-3 px-8 rounded-md text-lg font-semibold hover:bg-green-300 hover:text-gray transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Other Sections */}
      <section id="about" className="py-16 bg-white animate__animated animate__fadeIn animate__delay-1s">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 transform hover:scale-105 hover:text-green-500 transition-all duration-500">
            About Us
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            At Sai Nishanth Borewells, we specialize in high-quality borewell drilling and maintenance. Our expert team ensures the best service with guaranteed customer satisfaction.
          </p>
          <a
            href="#services"
            className="bg-orange-500 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-orange-600 transition-all duration-500 transform hover:scale-110 hover:shadow-xl"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-r from-orange-500 via-sky-500 to-green-500 text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 transform hover:scale-105 hover:text-green-500 transition-all duration-500">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 hover:text-green-500 transition-all duration-500">
                Borewell Drilling
              </h3>
              <p className="mb-6">
                We offer reliable and efficient borewell drilling services for residential and commercial properties.
              </p>
              <a
                href="#contact"
                className="text-orange-500 font-semibold hover:text-orange-600 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 hover:text-green-500 transition-all duration-500">
                Borewell Maintenance
              </h3>
              <p className="mb-6">
                Our maintenance services ensure that your borewell works efficiently for years. We provide regular check-ups and repairs.
              </p>
              <a
                href="#contact"
                className="text-orange-500 font-semibold hover:text-orange-600 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 hover:text-green-500 transition-all duration-500">
                Consultation Services
              </h3>
              <p className="mb-6">
                We offer expert consultation for borewell installations and solutions to ensure your water needs are met.
              </p>
              <a
                href="#contact"
                className="text-orange-500 font-semibold hover:text-orange-600 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
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

export default Home;
