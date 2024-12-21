import React, { useState } from 'react';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Banner Section */}
      <div className="w-full h-96 bg-cover bg-center relative mb-12" style={{ backgroundImage: "url('https://via.placeholder.com/1500x600')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center">Explore Our Stunning Gallery</h1>
        </div>
      </div>

      {/* Gallery Title */}
      <h2 className="text-4xl font-bold text-center mb-16 text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-gray-500">
        Featured Gallery
      </h2>

      {/* Gallery Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Gallery Item 1 */}
        <div
          className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
          onClick={() => openLightbox('https://via.placeholder.com/1200x800')}
        >
          <img
            src="https://via.placeholder.com/500x500"
            alt="Gallery Image 1"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 z-10 text-white">
            <h3 className="text-lg font-semibold">Image Title 1</h3>
            <p className="text-sm">Description of image 1</p>
          </div>
        </div>

        {/* Additional Items */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            onClick={() => openLightbox('https://via.placeholder.com/1200x800')}
          >
            <img
              src="https://via.placeholder.com/500x500"
              alt={`Gallery Image ${index + 2}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 z-10 text-white">
              <h3 className="text-lg font-semibold">Image Title {index + 2}</h3>
              <p className="text-sm">Description of image {index + 2}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div
          id="lightboxOverlay"
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300"
        >
          <div className="relative max-w-4xl w-full h-auto">
            <img
              src={currentImage}
              alt="Lightbox Image"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              id="closeLightbox"
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={closeLightbox}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
