import React from 'react';

const Space = () => {
  const internsImages = import.meta.glob('../images/allinsterns/*.{jpg,jpeg,png,svg}', { eager: true, import: 'default' });
  const nidanImages = import.meta.glob('../images/nidan photos/*.{jpg,jpeg,png,svg}', { eager: true, import: 'default' });
  const spaceImages = Object.entries(nidanImages).map(([path, url]) => {
    const fileName = path.split('/').pop() || 'Image';
    const alt = fileName.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '');
    return { src: url, alt };
  });
  const collaborationImages = Object.entries(internsImages).map(([path, url]) => {
    const fileName = path.split('/').pop() || 'Image';
    const alt = fileName.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '');
    return { src: url, alt };
  });

  return (
    <div id="page-space" className="min-h-screen py-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800">Gallery</h1>
          <div className="mt-3 flex justify-center">
            <span className="inline-block w-20 h-1 bg-blue-600 rounded"></span>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 text-center">Our Space &amp; Activities</h2>
          <p className="text-gray-600 text-base md:text-lg text-center max-w-prose md:max-w-2xl mx-auto mb-8">
            A glimpse into the dynamic learning and professional environment at Nidaan. This
section showcases orientation and induction programs, quiz and debate activities,
mock practice sessions, intern training, in-house expert workshops, peer
presentations, professional development discussions, and moments of fun and
engagement. It also highlights field visits to de-addiction centers, special and
inclusive schools, and community settings, providing hands-on exposure and
experiential learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaceImages.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-lg">
                <img 
                  src={image.src} 
                  className="w-full h-auto md:h-64 object-contain"
                />
             
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 text-center">Collaborations &amp; Training Workshops with Other Organisations (Government &amp;
Non-Government)</h2>
          <p className="text-gray-600 text-base md:text-lg text-center max-w-prose md:max-w-2xl mx-auto mb-8">
           This gallery captures Nidaan’s collaborative initiatives and training programs
conducted with various government and non-government organizations. It includes
workshops, sensitization programs, and capacity-building sessions for teachers,
students, mental health professionals, defense personnel, parents, and other
stakeholders, reflecting our commitment to community outreach and mental health
awareness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationImages.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-lg">
                <img 
                  src={image.src} 
                  className="w-full h-auto md:h-64 object-contain"
                />
               
              </div>
            ))}
          </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default Space;
