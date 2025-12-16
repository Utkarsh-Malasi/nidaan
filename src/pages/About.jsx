import React from 'react';
import logoImg from '../images/Logo_Nidaan-TPS.pdf.png';
import aboutImg from '../images/allinsterns/ws3.jpg';
import missionImg from '../images/allinsterns/ws2.jpg';

const About = () => {
  return (
    <div id="page-about" className="min-h-screen py-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800">About Nidaan</h1>
          <div className="mt-3 flex justify-center">
            <span className="inline-block w-20 h-1 bg-blue-600 rounded"></span>
          </div>
        </div>

        <section className="relative mb-16">
          <div className="absolute -z-10 left-4 top-4 w-24 h-24 text-blue-100 opacity-40">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12.1 21.35l-1.1-1.01C5.14 15.24 2 12.36 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.86-3.14 6.74-8.9 11.84l-1 .99z" />
            </svg>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Story & Approach</h2>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">Nidaan is a team of dedicated mental health professionals committed to providing high-quality psychological services to individuals, couples, and families. Founded in 2010, our practice has grown from a small clinic to a comprehensive mental health center serving the diverse needs of our community.</p>
                <div className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">“Nidaan means diagnosis or solution.”</div>
                <p className="mb-4">We believe in a holistic approach to mental health, addressing the mind, body, and spirit connection. We recognize that each person's journey is unique, and we tailor our therapeutic approaches to meet individual needs, cultural backgrounds, and personal goals.</p>
                <p className="mb-4">Our team consists of licensed psychologists, therapists, and counselors with diverse specializations and backgrounds, allowing us to match clients with the professional best suited to their needs.</p>
              </div>
            </div>
            <div>
              <img src={aboutImg} alt="About Nidaan" className="w-full rounded-2xl shadow-xl object-cover" />
            </div>
          </div>
        </section>

        <section className="relative bg-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="absolute -z-10 right-6 -top-6 w-24 h-24 opacity-30">
            <img src={logoImg} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={missionImg} alt="Our Mission" className="w-full rounded-2xl shadow-xl object-cover" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Our mission is to support people through their unique psychological journeys with care, professionalism, and respect. We strive to deliver informed, high-quality assessments,psychotherapies and interventions that foster growth, resilience, and meaningful change.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Safe, non-judgmental space where clients feel heard',
                  'Evidence-based interventions tailored to unique needs',
                  'Mental health awareness and stigma reduction',
                  'Culturally sensitive care for all backgrounds',
                  'Continuous improvement through development and feedback',
                ].map((text, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mb-4">
          <div className="bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-2xl p-8 md:p-12 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">To build a mentally healthy, inclusive community where quality psychological support is accessible to all.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Innovative access to quality mental health services',
                'Integrate cutting-edge research and approaches',
                'Strong partnerships across health and education',
                'Advocacy to reduce barriers to care',
                'Mentorship for future professionals',
              ].map((text, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
