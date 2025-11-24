import React from 'react';

const Services = ({ setActivePage }) => {
  const services = [
    {
      id: 'consult_assess',
      title: 'Clinical Consultation & Assessment',
      description: '(For emotional, behavioural, developmental, cognitive, and disability-related concerns)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      details: [
        'Consultation charge: ₹500 (charged only on the first visit/contact)',
        'Session duration: 30 minutes',
        'Mode: In-person or online (as per need and availability)'
      ],
    },
    {
      id: 'psychotherapy',
      title: 'Psychotherapy / Counselling',
      description: '(For children, adolescents, adults, couples, and families)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      details: [
        'Session duration: 60 minutes',
        'Onsite and Online options available (India & International)'
      ],
    },
    {
      id: 'disability_cert',
      title: 'Disability Assessment & Certification (ADHD, Autism, LD, ID)',
      description: '(For Learning Disability, Autism, Intellectual Disability, ADHD, etc.)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      details: [
        'Conducted as per RCI norms and national guidelines',
        'Includes complete clinical assessment, report preparation, and psychoeducation',
        'Charges communicated after initial consultation'
      ],
    },
    {
      id: 'trainings_workshops',
      title: 'Professional Trainings & Workshops',
      description: '(For teachers, parents, students, and mental health professionals)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      details: [
        'Tailored trainings and workshops for varied audiences'
      ],
    },
    {
      id: 'internship_supervision',
      title: 'Internship / Supervision',
      description: '(For Students & Professionals of Psychology and Special Education)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      details: [
        'Guided practical exposure and supervision opportunities'
      ],
    },
    {
      id: 'research_guidance',
      title: 'Research Guidance (Dissertation, Doctorate support)',
      description: '(For Research Paper, Research Project, Dissertation, Doctorate)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      details: [
        'Structured guidance for academic and professional research'
      ],
    },
    {
      id: 'intervention_sessions',
      title: 'Intervention Sessions (ABA, Behavior Management for Neurodivergent children)',
      description: '(For Neurodivergent children & adolescents)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      details: [
        'Special Education, Attention building, behaviour & hyperactivity management',
        'Applied Behaviour Analysis (ABA)'
      ],
    },
  ];

  const [activeDetail, setActiveDetail] = React.useState(null);

  return (
    <div id="page-services" className="min-h-screen py-12">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Our Services</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <p className="text-gray-600 text-base md:text-lg text-center max-w-prose md:max-w-2xl mx-auto">
            At Nidaan, we offer a comprehensive range of psychological services tailored to meet your unique needs. 
            Our team of experienced professionals is dedicated to providing evidence-based care in a safe, 
            supportive environment. Explore our services below to find the right fit for your journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-2xl shadow-md transition-all hover:shadow-lg w-full">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button 
                onClick={() => setActiveDetail(activeDetail === service.id ? null : service.id)} 
                className="text-primary hover:text-primary-dark font-medium transition-all flex items-center"
              >
                {activeDetail === service.id ? 'Hide details' : 'Learn more'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDetail === service.id && (
                <div className="mt-4 bg-gray-50 rounded-lg p-4 space-y-4">
                  {service.id === 'consult_assess' && (
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Overview</h4>
                        <p className="text-gray-700">Consultation charge: ₹500 (charged only on the first visit/contact)</p>
                        <p className="text-gray-700">Session Duration: 30 minutes</p>
                        <p className="text-gray-700">Mode: In-person or online (as per need and availability)</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Booking Steps</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Message/email/voice note your concern and purpose of consultation in short.</li>
                          <li>You will receive available slots and payment details.</li>
                          <li>Confirm your slot within 12 hours to hold the booking.</li>
                          <li>Payment to be made before the session via QR code or UPI.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {service.id === 'psychotherapy' && (
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Session Details</h4>
                        <p className="text-gray-700">Session Duration: 60 minutes</p>
                        <p className="text-gray-700">Consultation charge of ₹500 applies on first visit/contact</p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-3 py-2 text-left text-gray-700">Type</th>
                              <th className="px-3 py-2 text-left text-gray-700">Onsite</th>
                              <th className="px-3 py-2 text-left text-gray-700">Online - India</th>
                              <th className="px-3 py-2 text-left text-gray-700">Online - International</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t  text-gray-900">
                              <td className="px-3 py-2">Individual</td>
                              <td className="px-3 py-2">₹1,500/- per session</td>
                              <td className="px-3 py-2">₹2,000/- per session</td>
                              <td className="px-3 py-2">₹3,000/- per session</td>
                            </tr>
                            <tr className="border-t  text-gray-900">
                              <td className="px-3 py-2">Couple</td>
                              <td className="px-3 py-2">₹2,500/- per session</td>
                              <td className="px-3 py-2">₹3,000/- per session</td>
                              <td className="px-3 py-2">₹4,000/- per session</td>
                            </tr>
                            <tr className="border-t  text-gray-900">
                              <td className="px-3 py-2">Family</td>
                              <td className="px-3 py-2">₹3,500/- per session</td>
                              <td className="px-3 py-2">₹4,000/- per session</td>
                              <td className="px-3 py-2">₹5,000/- per session</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Booking & Payment</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Once the slot is confirmed, you will receive a QR code for payment.</li>
                          <li>Full advance payment is required to confirm your session.</li>
                          <li>Share the payment screenshot as confirmation.</li>
                          <li>Rescheduling is allowed once, with 24-hour prior notice.</li>
                          <li>No refund for missed or last-minute cancelled appointment.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {service.id === 'disability_cert' && (
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Overview</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Conducted as per RCI norms and national guidelines.</li>
                          <li>Consultation of 15-30 minutes to provide clarity and relevance of assessment details.</li>
                          <li>Includes complete clinical assessment, report preparation with detailed guidelines, and parental psychoeducation session.</li>
                          <li>Usually conducted in single sitting but may require more than one sitting depending on the type of assessment.</li>
                          <li>Charges communicated individually after initial consultation.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Booking Steps</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Message/email/voice note your concern and purpose of assessment in short.</li>
                          <li>You will receive available slots and payment details.</li>
                          <li>Confirm your slot within 12 hours to hold the booking.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Payment Process</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Once the slot is confirmed, you will receive a QR code for payment.</li>
                          <li>Payment of consultation ₹500/- (nonrefundable) to be made before the session via QR code or UPI for confirmation.</li>
                          <li>Assessment charges to be submitted at the time of assessment.</li>
                          <li>Share the payment screenshot as confirmation.</li>
                          <li>Rescheduling is allowed once, with 24-hour prior notice. No refund will be provided for missed or last-minute cancellations.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {service.id === 'trainings_workshops' && (
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-800">Overview</h4>
                      <p className="text-gray-700">Tailored trainings and workshops for teachers, parents, students, and mental health professionals.</p>
                    </div>
                  )}
                  {service.id === 'internship_supervision' && (
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Program Details</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Fee: ₹3,000/- per month</li>
                          <li>Duration: Minimum one month (extendable)</li>
                          <li>Includes: Guided practical exposure (Testing, Counselling, Professional interactions, Workshops, Practical Psychoeducation, etc.)</li>
                          <li>Case discussions & Mock practices</li>
                          <li>Certification on successful completion</li>
                          <li>Registration confirmed only after advance payment via QR code</li>
                          <li>Seats are limited and subject to availability</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {service.id === 'research_guidance' && (
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Details</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Fee: To be paid in advance as per the type of research work</li>
                          <li>Duration: As per the type of research work</li>
                          <li>Procedure: Periodic meetings for research guidance, Synopsis preparation, Data analysis facility, Thesis preparation guidance, Viva preparation</li>
                          <li>Registration confirmed only after advance payment via QR code</li>
                          <li>Part payment facility available</li>
                          <li>Seats are limited and subject to availability</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {service.id === 'intervention_sessions' && (
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Interventions</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Special Education</li>
                          <li>Attention building</li>
                          <li>Therapy for behaviour & hyperactivity management</li>
                          <li>Applied Behaviour Analysis (ABA)</li>
                        </ul>
                        <p className="text-gray-700 mt-2">For Neurodivergent children & adolescents.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div id="service-charges" className="bg-white p-8 rounded-2xl shadow-md mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">Service Charges</h2>
          <p className="text-gray-700 text-center mb-4">Registration/Consultation: ₹500 (One-time, non-refundable).</p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Type</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Onsite</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Online - India</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Online - Intl</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t  text-gray-900">
                  <td className="px-4 py-3">Individual</td>
                  <td className="px-4 py-3">₹1,500</td>
                  <td className="px-4 py-3">₹2,000</td>
                  <td className="px-4 py-3">₹3,000</td>
                </tr>
                <tr className="border-t  text-gray-900">
                  <td className="px-4 py-3">Couple</td>
                  <td className="px-4 py-3">₹2,500</td>
                  <td className="px-4 py-3">₹3,000</td>
                  <td className="px-4 py-3">₹4,000</td>
                </tr>
                <tr className="border-t  text-gray-900">
                  <td className="px-4 py-3">Family</td>
                  <td className="px-4 py-3">₹3,500</td>
                  <td className="px-4 py-3">₹4,000</td>
                  <td className="px-4 py-3">₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-center mt-4">Internship Fee: ₹3,000/month.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Booking Rules</h3>
              <p className="text-gray-700">Advance payment mandatory via UPI/QR. Screenshot required.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cancellation Policy</h3>
              <p className="text-gray-700">Rescheduling allowed once with 24-hour notice. No refunds for last-minute cancellations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
