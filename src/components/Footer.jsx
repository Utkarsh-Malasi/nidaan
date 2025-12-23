import React from 'react';

const Footer = ({ setActivePage }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-light text-text py-12 mt-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('home');
                  }}
                  className="hover:text-primary transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('about');
                  }}
                  className="hover:text-primary transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('services');
                  }}
                  className="hover:text-primary transition-all duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('internship');
                  }}
                  className="hover:text-primary transition-all duration-300"
                >
                  Internship
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('contact');
                  }}
                  className="hover:text-primary transition-all duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('services');
                  }}
                  className="hover:text-primary transition-all duration-300"
                >
                  Session Charges & Guidelines
                </a>
              </li>
            </ul>
          </div>
          
       
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">Nidaan - The Psychological Services</p>
              <p className="mb-2">54 Canal Road, Jakhan, II floor</p>
              <p className="mb-2">Dehradun, Uttarakhand (India)</p>
              <p className="mb-2">
                <a href="tel:+918937894123" className="hover:text-primary transition-all duration-300">
                  8937894123
                </a>
              </p>
              <p className="mb-2">
                <a href="tel:+919997743143" className="hover:text-primary transition-all duration-300">
                  9997743143
                </a>
              </p>
              <p>
                <a href="mailto:nidaan.psy.services@gmail.com" className="hover:text-primary transition-all duration-300">
                  nidaan.psy.services@gmail.com
                </a>
              </p>
            </address>
          </div>
          
          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
            <ul className="space-y-1">
              <li>Monday - Saturday: 10:00 AM - 5:00 PM IST</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-light mb-6 md:mb-0">&copy; {currentYear} Nidaan The Psychological Services. All rights reserved.</p>
          
          <div className="text-sm text-red-600 font-medium bg-red-50 px-5 py-3 rounded-lg shadow-sm">
            <p>In case of an emergency, please contact your nearest hospital or call the National Mental Health Helpline (Tele-MANAS) at <b>14416 </b></p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-text-light">Please arrive 5 mins before schedule. 24hr notice required for rescheduling.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
