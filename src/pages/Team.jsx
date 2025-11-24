import React from 'react';
import founderImg from '../images/founders/founder.jpeg';
import sirImg from '../images/founders/sir.jpg';
import staff3 from '../images/founders/staff.jpg';

const Tabs = ({ setActivePage }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const profiles = [
    {
      name: 'Dr. Rashi Bhatnagar',
      headline: 'Clinical Psychologist & Special Educator',
      experience: 'A dedicated, RCI-registered professional A04948 with over 25 years of extensive experience in clinical psychology ,rehabilitation and special education.',
      specialties: 'Specializes in emotional and behavioral assessments, disability support, and providing training for future professionals.',
      approach: 'Believes in a holistic, empathetic approach to therapy, combining clinical expertise with a deep understanding of special education needs.',
    },
    {
      name: 'Mr. Naveen Nischal',
      headline: 'De-addiction & Counselling Specialist',
      experience: 'A highly experienced professional with over 20 years of dealing with psychological diseases, disorders, and Substance Dependence and Addictive behaviors..',
      specialties: 'Specializes in rehabilitation and clinical psychology. Internationally certified as an Addiction Professional ICAP I - Treatment by GCCC, USA. Proficient in psychological testing (including Rorschach), counselling, and training.',
      approach: 'Believes in a holistic, empathetic approach to therapy, combining PhD-level clinical expertise with a Masters in Education and Special Educator training, backed by international experience and extensive research work.',
    },
    {
      name: 'Ms. Sneha Malasi',
      headline: 'Counselling Psychologist & Trainer',
      experience: 'Over three years of experience in counselling adolescents and adults, with a focus on behavioural therapy and management for children with special needs or disabilities.',
      specialties: "Holds a Master's in Psychology and a PG Diploma in Guidance & Counselling. Specializes in psychological assessments, individual counselling, and mentoring interns. Registered with the Counsellor Council of India.",
      approach: 'Provides practical, skill-based counselling and behavioural interventions, ensuring clients receive support for emotional, psychological, and special education challenges.',
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {profiles.map((p, idx) => (
          <button
            key={p.name}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-full border transition-colors ${activeTab === idx ? 'bg-primary text-white border-primary' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'}`}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div className="relative">
        {profiles.map((p, idx) => (
          <div
            key={p.name}
            className={`transition-opacity duration-300 ${activeTab === idx ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 text-center">{p.headline}</h3>
              <div className="space-y-3 text-gray-700 max-w-3xl mx-auto">
                <div>
                  <h4 className="font-semibold text-gray-800">Experience</h4>
                  <p>{p.experience}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Specialties</h4>
                  <p>{p.specialties}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Approach</h4>
                  <p>{p.approach}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => { window.location.hash = '#book'; if (setActivePage) setActivePage('home'); }}
          className="text-primary hover:text-primary-dark font-medium transition-all duration-300"
        >
          Not sure who to choose? Schedule a 15-min discovery call.
        </button>
      </div>
    </div>
  );
};

const Team = ({ setActivePage }) => {
  // Our Team profiles (3-column grid)
  const team = [
    {
      name: 'Dr. Rashi Bhatnagar',
      credentials: 'RCI: A04948 | CCI: CRN8603068',
      role: 'Clinical Psychologist (A) & Special Educator',
      details: 'Trained Psychotherapist, Consultant & Trainer.',
      image: founderImg,
    },
    {
      name: 'Mr. Naveen Nischal',
      credentials: 'GCCC (USA) | CCI: CRN9223606',
      role: 'Counselling Psychologist & De-addiction Professional',
      details: 'Psychotherapist & Trainer.',
      image: sirImg,
    },
    {
      name: 'Ms. Sneha Malasi',
      credentials: 'CCI: CRN8826415',
      role: 'Counselling Psychologist',
      details: 'Trainer & Assistant Special Educator.',
      image: staff3,
    },
  ];

  return (
    <div id="page-team" className="min-h-screen py-12">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Our Team</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md text-center w-full">
                <div className="mb-4 mx-auto">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.credentials}</p>
                <p className="text-gray-700 mb-1">{member.role}</p>
                <p className="text-gray-600">{member.details}</p>
              </div>
            ))}
          </div>
        </div>
        
        <section className="relative bg-stone-50 rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">Know Us Better</h2>
            <div className="absolute right-6 top-6 w-20 h-20 text-orange-200 opacity-30 pointer-events-none">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12.1 21.35l-1.1-1.01C5.14 15.24 2 12.36 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.86-3.14 6.74-8.9 11.84l-1 .99z" />
              </svg>
            </div>
            <Tabs setActivePage={setActivePage} />
          </div>
        </section>

        <div className="bg-blue-50 p-8 rounded-2xl shadow-md text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Join Our Team</h3>
          <p className="text-gray-600 mb-6 max-w-prose md:max-w-2xl mx-auto">
            We're always looking for passionate, skilled mental health professionals to join our growing team. 
            If you're interested in working in a collaborative, supportive environment dedicated to client-centered care, 
            we'd love to hear from you.
          </p>
          <a 
            href="mailto:careers@nidaan.com" 
            className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg inline-block"
          >
            Contact Us About Opportunities
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
