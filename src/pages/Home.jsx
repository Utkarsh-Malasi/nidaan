import React from 'react';
import founderImg from '../images/founders/rashi1.jpeg';
import sirImg from '../images/founders/naveen-artguru.png';
import space1 from '../images/nidan photos/photo_31_2025-11-16_02-07-11.jpg';
import space2 from '../images/allinsterns/ws2.jpg';
import space3 from '../images/allinsterns/ws3.jpg';
import space4 from '../images/allinsterns/ws4.jpg';

const Home = ({ setActivePage }) => {
  const [showHowToBook, setShowHowToBook] = React.useState(false);
  React.useEffect(() => {
    if (window.location.hash === '#book') {
      setShowHowToBook(true);
    }
  }, []);

  return (
    <div id="page-home" className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-24 mb-16 md:mb-24">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left: Text Content */}
            <div className="w-full lg:max-w-none">
              <h1 className="text-left text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 break-words">WE ARE HERE TO HELP</h1>
              <p className="text-left text-lg md:text-xl leading-relaxed text-gray-600 mb-8 md:mb-10 break-words">
                At Nidaan – The Psychological Services, we are committed to delivering ethical, evidence-based and high-quality mental health care to individuals and families across all age groups. With a team of highly qualified, licensed and intensively trained professionals, we provide comprehensive assessment, counselling, psychotherapy, special education support and training services—both online and in person—ensuring accessible, trustworthy and compassionate care for everyone who seeks help.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => setShowHowToBook(true)} 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-full shadow-md transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:-translate-y-0.5"
                >
                  Book Appointment
                </button>
                <button 
                  onClick={() => setActivePage('services')} 
                  className="border-2 border-slate-900 text-slate-900 font-medium py-2.5 px-6 rounded-full bg-transparent hover:bg-slate-50 transition-colors"
                >
                  Our Services
                </button>
              </div>
            </div>
            {/* Right: Visual */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={space1} 
                alt="Calming office space" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {showHowToBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-11/12 max-w-2xl rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">How to Book</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>Message us your concern via WhatsApp/SMS.</li>
              <li>We will share available slots and a QR Code.</li>
              <li>Confirm your slot by paying the advance fee within 12 hours.</li>
              <li>Share the payment screenshot to confirm.</li>
            </ol>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700"><span className="font-semibold">Contact:</span> 8937894123 / 9997743143</p>
              <p className="text-gray-700"><span className="font-semibold">Email:</span> nidaan.psy.services@gmail.com</p>
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <a
                href="https://wa.me/918937894123"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-full"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+918937894123"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-full"
              >
                Call Us
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setShowHowToBook(false);
                  setActivePage('contact');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-full"
              >
                Proceed to Contact
              </button>
              <button
                onClick={() => setShowHowToBook(false)}
                className="border border-gray-300 text-gray-700 font-medium py-2 px-5 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Our Approach Teaser */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-16 md:mb-24">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6 text-center">Our Approach</h2>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center text-2xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6 break-words">WE BELIEVE IN QUALITY</h1>
            <p className="text-base md:text-lg text-text mb-4 max-w-prose mx-auto break-words">
              Nidaan-TPS has committed professionals dedicated to delivering reliable, high-quality psychological services for individuals, couples, and families. Since its establishment in 2019, the practice has expanded from a small setup into a comprehensive service center catering to the varied psychological needs of the community.
            </p>
            <p className="text-base md:text-lg text-text mb-6 max-w-prose mx-auto break-words">
              Understanding that every individual’s experiences and challenges are different, we design our interventions to align with each person’s unique requirements.
Our team comprises skilled and experienced psychologists, psychotherapists, counsellors, and special educators from diverse areas of expertise, ensuring that each client is paired with the professional best equipped to support their specific needs.

            </p>
            <div className="text-center">
              <button 
                onClick={() => setActivePage('about')} 
                className="text-primary hover:text-primary-dark font-medium transition-all duration-300 flex items-center justify-center mx-auto"
              >
                Learn more about our philosophy
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-16 md:mb-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Service Card 1 */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl w-full">
            <div className="bg-background-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-dark mb-2">Consultation</h3>
            <p className="text-text mb-4">
             For emotional, behavioural, developmental, cognitive, substance dependence, disorders and disabilities
            </p>
            
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl w-full">
            <div className="bg-background-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-dark mb-2">Psychotherapy / Counselling</h3>
            <p className="text-text mb-4">
              For children, adolescents, adults, couples, and families
            </p>
           
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl w-full">
            <div className="bg-background-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-dark mb-2">Intervention Sessions</h3>
            <p className="text-text mb-4">
              For Children and adolescents with Neurodivergent condition (ADHD & ASD) & Learning Disabilities
            </p>
           
          </div>
        </div>
        <div className="text-center mt-8">
          <button 
            onClick={() => setActivePage('services')} 
            className="bg-white hover:bg-gray-50 text-primary font-medium py-3 px-6 rounded-lg border border-primary transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            View All Services
          </button>
        </div>
      </section>

      {/* Meet Our Team Teaser */}
      <section className="container mx-auto px-4 md:px-12 lg:px-24 mb-16">
        <h2 className="text-3xl font-semibold text-secondary mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md transition-all hover:shadow-lg flex items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mr-6 flex-shrink-0">
              <img 
                src={founderImg} 
                alt="Dr. Rashi Bhatnagar" 
                className="w-full h-full object-fit-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Dr. Rashi Bhatnagar</h3>
              <p className="text-primary mb-2">Founder & Head</p>
              <p className="text-gray-600 text-sm mb-3">
Clinical Psychologist [A]; Rehabilitation Psychologist; Special Educator; Psychotherapist; Trainer</p>
              <button 
                onClick={() => setActivePage('team')} 
                className="text-primary hover:text-primary-dark font-medium transition-all text-sm flex items-center"
              >
                Read full profile
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md transition-all hover:shadow-lg flex items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mr-6 flex-shrink-0">
              <img 
                src={sirImg} 
                alt="Dr. M" 
                className="w-full h-full object-fit-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Mr. Naveen Nischal</h3>
              <p className="text-primary mb-2">Consultant Psychologist</p>
              <p className="text-gray-600 text-sm mb-3">Consultant Psychologist (De-addiction Professional)
Trainer.</p>
              <button 
                onClick={() => setActivePage('team')} 
                className="text-primary hover:text-primary-dark font-medium transition-all text-sm flex items-center"
              >
                Read full profile
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button 
            onClick={() => setActivePage('team')} 
            className="bg-white hover:bg-gray-50 text-primary font-medium py-2 px-6 rounded-full border border-primary transition-all shadow-sm hover:shadow-md"
          >
            Meet the Full Team
          </button>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="container mx-auto px-4 md:px-12 lg:px-24 mb-16 md:mb-24">
        <h2 className="text-3xl font-semibold text-secondary mb-8 text-center">A Glimpse Into Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl">
            <img 
              src={space1} 
              alt="Waiting Room" 
              className="w-full h-auto md:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl">
            <img 
              src={space2} 
              alt="Therapy Room" 
              className="w-full h-auto md:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl">
            <img 
              src={space3} 
              alt="Consultation Room" 
              className="w-full h-auto md:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl">
            <img 
              src={space4} 
              alt="Office Exterior" 
              className="w-full h-auto md:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <button 
            onClick={() => setActivePage('space')} 
            className="bg-white hover:bg-gray-50 text-primary font-medium py-3 px-6 rounded-lg border border-primary transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            View Full Gallery
          </button>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="container mx-auto px-4 mb-16 md:mb-24">
        <h2 className="text-3xl font-semibold text-secondary mb-8 md:mb-10 text-center">Reflections from Our People</h2>
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-md max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="bg-background-light w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <span className="text-primary text-xl font-bold">Y</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-dark">Yari Rubu</h3>
            
            </div>
          </div>
          <blockquote className="text-text text-lg italic mb-6 leading-relaxed">
           " This is one of the best learning experience I have ever had so far. Ever since I was a kid education and learning would mean dread for me. But this is the first time, I have felt completely safe, comfortable and understood at the same time. Thank you Nidaan and all those who are working there. Your efforts will never go in vain. "
          </blockquote>
          <button 
            onClick={() => setActivePage('testimonials')} 
            className="text-primary hover:text-primary-dark font-medium transition-all duration-300 flex items-center"
          >
            Read more testimonials
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="container mx-auto px-4 mb-16 md:mb-24">
        <div className="bg-background-alt p-8 md:p-12 rounded-xl shadow-md text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">Ready to Begin Your Healing Journey?</h2>
          <p className="text-text max-w-2xl mx-auto mb-8">
            Our compassionate team of therapists is here to support you every step of the way. Take the first step towards positive change and mental wellness today.  
          </p>
          <button 
            onClick={() => setActivePage('contact')} 
            className="bg-primary hover:bg-primary-dark text-white text-lg font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
