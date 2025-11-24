import React from 'react';

const Space = () => {
  // Gallery images restricted to specific folders
  const internsImages = import.meta.glob('../images/allinsterns/*.{jpg,jpeg,png,svg}', { eager: true, import: 'default' });
  const nidanImages = import.meta.glob('../images/nidan photos/*.{jpg,jpeg,png,svg}', { eager: true, import: 'default' });
  const imagesMap = { ...internsImages, ...nidanImages };
  const galleryImages = Object.entries(imagesMap).map(([path, url]) => {
    const fileName = path.split('/').pop() || 'Image';
    const alt = fileName.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '');
    return { src: url };
  });

  return (
    <div id="page-space" className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Our Space</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <p className="text-gray-600 text-base md:text-lg text-center max-w-prose md:max-w-2xl mx-auto mb-8">
            At Nidaan, we've created a warm, welcoming environment designed to help you feel safe and comfortable. 
            Our office spaces are thoughtfully arranged to provide privacy, comfort, and a sense of calm. 
            Take a virtual tour through our gallery below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-lg">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto md:h-64 object-cover"
                />
                <div className="p-4 bg-gray-50">
                  <h3 className="font-medium text-gray-800 mb-1">{image.alt}</h3>
                  <p className="text-sm text-gray-600">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visit Us in Person</h2>
          <p className="text-gray-600 mb-6">
            We invite you to experience our space in person. Our office is designed to be accessible and comfortable for all clients. 
            If you have any specific needs or concerns about our physical space, please don't hesitate to let us know when scheduling your visit.
          </p>
         
          <p className="text-gray-600 text-center">
            54 Canal Road, Jakhan, II floor

Dehradun, Uttarakhand (India)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Space;