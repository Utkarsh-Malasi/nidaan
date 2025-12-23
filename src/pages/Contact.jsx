import React from 'react';

const Contact = () => {
  // Removed message form per request; keeping contact information and map.

  return (
    <div id="page-contact" className="min-h-screen py-12">
      <div className="container max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-10 text-base md:text-lg">We’d love to hear from you. Reach out anytime.</p>

        {/* Primary contact actions */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
            <p className="text-gray-600 text-sm md:text-base">Call or email us and we’ll respond promptly.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+918937894123" className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-all shadow-sm">Call : 8937894123</a>
            <a href="mailto:nidaan.psy.services@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-sm">Email : nidaan.psy.services@gmail.com</a>
            <a
              href="https://wa.me/918937894123?text=Hello%20Nidaan%2C%20I%27d%20like%20to%20book%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-sm flex items-center gap-2"
              aria-label="Chat on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 16 16" fill="currentColor">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
            </div>
            <p className="text-gray-600">54 Canal Road, Jakhan, II floor</p>
            <p className="text-gray-600">Dehradun, Uttarakhand (India)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            </div>
            <p className="text-gray-600"><a href="tel:+918937894123" className="hover:text-primary transition-all">+91 8937894123</a></p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            </div>
            <p className="text-gray-600"><a href="mailto:nidaan.psy.services@gmail.com" className="hover:text-primary transition-all">nidaan.psy.services@gmail.com</a></p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">WhatsApp</h3>
            </div>
            <p className="text-gray-600">
              <a
                href="https://wa.me/918937894123?text=Hello%2C%20I%27d%20like%20to%20book%20a%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-all"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Office hours */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Office Hours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
              <span className="text-gray-600">Monday - Saturday</span>
              <span className="text-gray-800 font-medium">10:00 AM - 5:00 PM</span>
            </div>
           
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
              <span className="text-gray-600">Sunday</span>
              <span className="text-gray-800 font-medium">Closed</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-600 font-medium text-sm">
                In case of an emergency, please contact your nearest hospital or call the National Mental Health Helpline (Tele-MANAS) at <b>14416 </b>
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;
