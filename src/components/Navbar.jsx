import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-orange-500 via-sky-500 to-green-500 fixed top-0 left-0 w-full z-50 shadow-lg py-4">
        <div className="container mx-auto flex justify-between items-center px-8">
          {/* Logo Section */}
          <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500 hover:text-sky-500 transition-all duration-500 ease-in-out">
            <Link to="/">Sai Nishanth Borewells</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-semibold text-white">
            <Link
              to="/"
              className="relative hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black py-2 px-4 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="relative hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black py-2 px-4 rounded-md"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="relative hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black py-2 px-4 rounded-md"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="relative hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black py-2 px-4 rounded-md"
            >
              Projects
            </Link>
            <Link
              to="/gallery"
              className="relative hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black py-2 px-4 rounded-md"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="relative hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black py-2 px-4 rounded-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gradient-to-r from-orange-500 via-sky-500 to-green-500 text-white text-center space-y-6 py-6 transition-all duration-300 transform ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            to="/"
            className="block py-2 hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="block py-2 hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="block py-2 hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/gallery"
            className="block py-2 hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="block py-2 hover:text-green-300 hover:scale-110 hover:translate-y-1 transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Content Padding */}
      <div className="pt-[80px]">
        {/* Add your page content here */}
      </div>
    </>
  );
};

export default Navbar;
