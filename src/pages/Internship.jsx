import React, { useState } from 'react';
import intern1 from '../images/allinsterns/internship1.jpg';
import internMain from '../images/allinsterns/intern.jpg';
import internPhoto23 from '../images/allinsterns/photo_23_2025-11-16_02-07-11.jpg';
import internPhoto31 from '../images/allinsterns/photo_31_2025-11-16_02-07-11.jpg';

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

  // Syllabus/Curriculum data
  const syllabus = [
    {
      title: "Module 1: Clinical Assessment",
      content: "Learn comprehensive assessment techniques including clinical interviews, standardized testing, and diagnostic formulation. This module covers both adult and child assessment protocols, with an emphasis on cultural considerations in the assessment process."
    },
    {
      title: "Module 2: CBT Modalities",
      content: "Explore various Cognitive Behavioral Therapy approaches including traditional CBT, Dialectical Behavior Therapy (DBT), and Acceptance and Commitment Therapy (ACT). Interns will learn to apply these modalities to different clinical presentations through case conceptualization and role-play exercises."
    },
    {
      title: "Module 3: Ethics & Professional Practice",
      content: "Develop a thorough understanding of ethical guidelines, legal requirements, and professional standards in psychological practice. Topics include confidentiality, mandatory reporting, documentation, and ethical decision-making in complex clinical situations."
    },
    {
      title: "Module 4: Cultural Competence",
      content: "Build skills for working effectively with diverse populations. This module addresses cultural humility, implicit bias, and adapting evidence-based practices for different cultural contexts. Includes experiential learning and self-reflection components."
    },
    {
      title: "Module 5: Supervision & Consultation",
      content: "Learn models of clinical supervision and professional consultation. Interns will practice both receiving and providing feedback, and develop skills for collaborative case management within interdisciplinary teams."
    }
  ];

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
    }
  ];

  return (
    <div id="page-internship" className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Clinical Internship & Training Program</h1>
        
        {/* Introduction */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-8">
            The Nidaan Clinical Internship Program offers guided practical exposure, case discussions, mock practices, and certification upon successful completion.
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
        
        {/* Syllabus/Curriculum Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Syllabus / Inclusions</h2>
          <div className="max-w-3xl mx-auto">
            {[
              'Guided practical exposure (Testing, Counselling, Professional interactions, Workshops, Practical Psychoeducation, etc.)',
              'Case discussions & Mock practices',
              'Certification on successful completion',
            ].map((item, index) => (
              <div key={index} className="mb-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
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
                  className="w-full h-64 object-cover"
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
            href="https://forms.google.com/YOUR_FORM_LINK_HERE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg inline-block"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Internship;