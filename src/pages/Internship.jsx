import React, { useState } from 'react';
import intern1 from '../images/nidan photos/internship1.jpg';
import internMain from '../images/nidan photos/intern.jpg';
import internPhoto23 from '../images/nidan photos/Colintern.jpeg';
import internPhoto31 from '../images/nidan photos/photo_57_2025-11-16_02-07-11.jpg';

import internPhoto312 from '../images/nidan photos/photo_76_2025-11-16_02-07-11.jpg';

const Internship = ({ setActivePage }) => {
  // State to track which accordion items are open
  const [openAccordion, setOpenAccordion] = useState(null);

  // Toggle accordion function
  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };



  // Gallery images
  const galleryImages = [
    {
      src: intern1,
      alt: "Internship Orientation",
      caption: "Interns begin with orientation and program overview."
    },
    {
      src: internMain,
      alt: "Clinical Discussion",
      caption: "Interns engage in case conceptualization and treatment planning."
    },
    {
      src: internPhoto23,
      alt: "Group Training Session",
      caption: "Weekly group supervision sessions provide valuable learning opportunities."
    },
    {
      src: internPhoto31,
      alt: "Collaborative Learning",
      caption: "Interns collaborate on projects and learn from each other's experiences."
    },
     {
      src: internPhoto312,
      alt: "Mock Counselling Session",
      caption: "Mock sessions provide a safe space for interns to practice and receive feedback."
    }
  ];

  return ( 
    <div id="page-internship" className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center"> Internship </h1>
        
        {/* Introduction */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-8">
            The Nidaan-TPS Internship Program offers guided practical exposure, case discussions, mock practices, psychological testing and certification upon successful completion.
          </p>
          
          {/* Key Details Section */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Program Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Fees</h3>
                <p className="text-gray-700">₹3,000 per month</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Duration</h3>
                <p className="text-gray-700">Minimum 1 month (Extendable)</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Registration</h3>
                <p className="text-gray-700">Confirmed only after advance payment</p>
              </div>
            </div>
          </div>
        </div>
        
         <div className="max-w-3xl mx-auto mb-8 p-1">
  {/* Gradient Border Effect */}
  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-sm">
    
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800">Additional Insights</h2>
      <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
    </div>

    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8">
      <div className="space-y-6">
        
        {/* Main List */}
        <div>
          <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Curriculum Highlights</h4>
          <ul className="grid md:grid-cols-2 gap-x-4 gap-y-3">
            {[
              "Guided practical exposure",
              "Testing, Counselling & Workshops",
              "Field Exposure",
              "Career Guidelines for Interns",
              "Peer Discussion & Development",
              "Case Discussions & Mock Practices"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-gray-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-200" />

        {/* Footer Details */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
             <p className="font-semibold text-gray-800">✅ Certification & LOR Included</p>
             <p className="text-xs text-gray-500 mt-1">Upon successful completion</p>
          </div>
          
          <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
             <p className="text-xs font-medium text-blue-800">
               ⚠️ Registration confirmed after payment.<br/>
               <span className="font-bold">Limited Seats Available.</span>
             </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

        
        {/* Gallery Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">A Glimpse into the Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-lg">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-fit"
                />
                <div className="p-4 bg-gray-50">
                  <h3 className="font-medium text-gray-800 mb-1">{image.alt}</h3>
                  <p className="text-sm text-gray-600">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-blue-50 p-8 rounded-2xl shadow-md text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Apply?</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            We're looking for passionate, dedicated individuals who are committed to developing their clinical skills 
            and providing high-quality care. If you're ready to take the next step in your professional journey, 
            we invite you to apply to our internship program.
          </p>
    <a
  href="https://wa.me/918937894123?text=Hello%2C%20I%27d%20like%20to%20apply%20to%20the%20Internship%20Program."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:shadow-green-500/30 hover:-translate-y-1 focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
>
  {/* WhatsApp SVG Icon */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
  <span>Apply Now</span>
</a>    
        </div>
      </div>
    </div>
  );
};

export default Internship;