import React from 'react';
import founderImg from '../images/founders/rashi.jpeg';
import sirImg from '../images/founders/naveen-artguru.png';
import staff3 from '../images/founders/sneha.jpeg';
import staff4 from '../images/founders/sarin.jpeg';
import staff5 from '../images/founders/anjali.jpeg';

const Tabs = ({ setActivePage }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const profiles = [
    {
      name: 'Dr. Rashi Bhatnagar',
      headline: 'Founder & Head (Clinical Psychologist [A] | Rehabilitation Psychologist | Special Educator | Psychotherapist | Trainer)',
      qualification:'Dr. Rashi Bhatnagar is a Ph.D. holder in Psychology and a Gold Medalist in M.A. Psychology, with additional degrees in M.A. Education, B.Ed. Special Education (University Topper), and a PG Diploma in Guidance & Counselling. She is licensed by the Rehabilitation Council of India (RCI) as a Clinical Psychologist (A), Rehabilitation Psychologist, and Special Educator, and is also registered with the Counselling Council of India (CCI).',
      experience: 'Dr. Bhatnagar serves as Senior Psychologist & Head at NIDAAN – The Psychological Services. She brings over 20 years of experience, including 11 years of service for the Government of India and more than 8 years at a leading Organisation for persons with disabilities, in leadership positions.She has been associated with prominent universities, government bodies (Secretariat, SCERT, SEIMAT, DIET, etc.), several NGOs and schools, in different capacities. She has extensive experience in Corporate Tele-counselling, Podcasts, Radio interviews, PoSH leadership, Child protection investigations, and Safety trainings.',
      specialties: 'Trained in India and abroad, her key areas include comprehensive psychometric assessments for conditions like ASD, ADHD, SLD, ID, and psychological assessment of personality, aptitude, interest, different mental disorders. She specializes in CBT, ABA, ERP, MET, and SFBT therapies; behavioral management; career guidance; psychotherapy for individual, couple, family, and group. She also mentors professionals, supervises research work (including research papers, dissertations and PhDs), leads workshops and training programs, provides psychoeducation and advises institutions on child protection systems.',
      approach: 'Dr. Bhatnagar’s approach is evidence-based, integrative, and client-centred. She blends structured psychotherapies with behavioral and solution-focused methods to support emotional, developmental, and family needs. Her work emphasizes collaboration, ethical practice, empathy, strengths-based planning, and empowering clients and caregivers through clear, goal-oriented intervention.',
    },
    {
      name: 'Mr. Naveen Nischal',
      headline: 'Consultant Psychologist (De-addiction Professional) | Trainer',
      qualification:'Mr. Naveen Nischal holds a Master’s degree in Psychology with specialization in Rehabilitation and Clinical Psychology, and a formal degree in Special Education. He is an International Certified Addiction Professional – ICAP I (Treatment) accredited by the Global Centre for Credentialing and Certification (GCCC), USA in collaboration with The Colombo Plan, Sri Lanka. He is also internationally trained in the Universal Treatment Curriculum for Substance Use Disorders (UTC) through the Ecolink Institute of Well-Being. His advanced training includes Rorschach testing (Himalayan Institute of Medical Sciences), Rehabilitation & Relapse Prevention, and Client Profiling & Documentation (Ministry of Social Justice & Empowerment).',
      experience: 'With over 20 years of professional experience, Mr. Nischal has worked extensively with individuals experiencing psychological disorders, substance dependence, and addictive behaviours. His work spans psychological assessment, counselling, therapeutic intervention, and structured relapse-prevention planning. He has wide experience in training students and professionals and has contributed to research and publications in the field of addiction and mental health.He is registered with the Global Centre for Credentialing and Certification (GCCC), USA as an Addiction Professional and with the Counsellors Council of India (CCI) as a Counselling Professional.',
      specialties: 'His core expertise includes addiction treatment, psychological assessments, relapse prevention, and rehabilitation. He is skilled in conducting therapeutic interventions for substance use disorders, emotional and behavioural challenges, designing client-specific behaviour change plans, and supporting individuals with a range of psychological concerns. He is also active in research, training, and capacity building for mental health and addiction professionals. Mr. Nischal is a member of several prestigious professional bodies, including the International Society for Substance Use Professionals (ISSUP), International Association of Health Psychology, Counsellor Council of India, and Ecolink Institute of Well-Being.',
      approach: 'Mr. Nischal follows a structured, evidence-based, and empathetic approach to therapy, blending international treatment protocols with personalised guidance. His work emphasizes rehabilitation, sustained recovery, and practical coping strategies while fostering accountability, resilience, and client empowerment. He integrates psychological assessment, counselling, and relapse-prevention planning to provide holistic support.',
    },
    {
      name: 'Ms. Sneha Malasi',
      headline: 'Internship In-charge | Counselling Psychologist | Assistant Special Educator & Supervisor',
      qualification:'Ms. Sneha is a Counselling Psychologist with a Master’s degree in Psychology and a Post Graduate Diploma in Guidance & Counselling. She is registered with the Counsellor Council of India (CCI) and is trained in delivering behavioural and therapeutic interventions for diverse client needs.',
      experience: 'With over three years of experience, Ms. Sneha has worked effectively with adolescents and adults, providing counselling for emotional, behavioural, and psychological concerns. She has strong expertise in behavioural therapy and management for children with special needs and disabilities. In addition to her clinical work, she actively mentor interns and contributes to training and capacity building in the field of mental health.',
      specialties: "Her key areas of specialization include psychological assessments, individual counselling, behavioural interventions, and support for individuals with developmental or learning challenges. She is skilled in guiding clients through emotional difficulties, behavioural concerns, academic stress, and personal adjustment issues, while also supporting families and educators as needed.",
      approach: 'Ms. Sneha follows a practical, skill-based, and client-centered approach. She combines behavioural strategies with supportive counselling to help clients build coping skills, improve emotional regulation, and enhance overall well-being. Her work focuses on empowering clients through structured, empathetic, and goal-oriented interventions.',
    },
    {
      name: 'Ms. Sarita Bhasin',
      headline: 'Consultant Vocational Trainer (PwD)| NIOS & Placement facilitator (PwD)',
      qualification:'Ms. Sarita Bhasin is an RCI-registered Vocational Trainer, experienced Disability expert and interventionist, Counsellor. She is trained in disability conditions (ASD, ADHD, ID, SLD), counselling, and vocational skill development, with extensive experience in psycho-educating and supporting learners with diverse developmental and educational needs.',
      experience: 'With over 15 years of experience, Ms. Bhasin has worked across renowned inclusive schools and community-based programs, providing remedial teaching, counselling, and vocational training to children and young adults with special needs. She contributes to open schooling support through NIOS, assists families with disability certification and UDID processes, and conducts parent–teacher awareness programs. Her work includes planning and implementing individualized learning strategies, behaviour and emotional support, and facilitating functional academics and life skills.',
      specialties: "Ms. Bhasin specializes in [	Remedial teaching and individualized education planning (IEPs)|Vocational training and skill development|	Counselling for emotional, behavioural, and interpersonal challenges|	Psychoeducation for parents, caregivers, teachers, and students|	Assessment of learning needs and progress monitoring|	Placement facilitation, career readiness, and life-skill development]. She has successfully supported university admissions, job placements, and vocational independence for students with special needs",
      approach: 'Her approach is practical, inclusive, and skill-oriented. Ms. Bhasin integrates specialized instructional methods, behaviour management strategies, and hands-on vocational training to help learners gain confidence, independence, and real-world competence. She emphasizes collaboration with families and educators to ensure holistic progress and meaningful participation in academic, social, and vocational environments.',
    },
    {
      name: 'Ms. Anjali Bhatt',
      headline: 'Consultant Special Educator| Disability Certification Facilitator| Trainer',
      qualification:'Ms. Anjali Bhatt holds an M.Sc. in Mathematics, an M.Sc. in Psychology, and RCI licensed Special Educator (PGDP and B.Ed. in Special Education). She is also a certified Master Trainer in Autism and has extensive training in special education, disability support, and inclusive teaching practices.',
      experience: 'With over 20 years of professional experience, Ms. Bhatt has worked across government and non-government sectors, including serving as a Resource Teacher with RMSA (Uttarakhand). She has contributed significantly to special education services, disability certification processes, psychoeducation, supervision, and program implementation. Her experience includes mentoring professionals, coordinating events, and conducting workshops and training programs for educators, parents, and practitioners.',
      specialties: "Ms. Bhatt specializes in special education for children with developmental and learning needs, autism intervention, disability assessment support, and curriculum adaptation. She is skilled in training teams, facilitating capacity-building workshops, and supporting inclusive education across diverse settings. Her work spans direct intervention, documentation, supervision, and advisory roles with multiple Govt. and Non-Govt. organizations.",
      approach: 'Her approach is structured, inclusive, and learner-centered. She integrates evidence-based special education strategies with practical classroom and home-based support. Ms. Bhatt focuses on empowering children, families, and educators through individualized planning, consistent skill-building, and collaborative problem-solving, ensuring sustainable progress and meaningful outcomes.'
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
                  <h4 className="font-semibold text-gray-800">Qualification</h4>
                  <p>{p.qualification}</p>
                </div>
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
      credentials: 'CRR (RCI) no. A04948| CRN (CCI) no. CRN8603068',
      role: 'Founder & Head',
      details: 'Clinical Psychologist [A]; Rehabilitation Psychologist; Special Educator; Psychotherapist; Trainer',
      image: founderImg,
    },
    {
      name: 'Mr. Naveen Nischal',
      credentials: 'ICAP No.: TxI-1624 CRN (CCI) no. CRN9223606',
      role: 'Consultant Psychologist (De-addiction Professional)',
      details: 'Trainer.',
      image: sirImg,
    },
    {
      name: 'Ms. Sneha Malasi',
      credentials: 'CRN (CCI) no. CRN8826415',
      role: 'Internship In-charge, Counselling Psychologist; ',
      details: 'Assistant Special Educator & Supervisor',
      image: staff3,
    },
      {
      name: 'Ms. Anjali Bhatt',
      credentials: 'CRR (RCI) no. A110497 ',
      role: 'Consultant Special Educator | Disability Certification Facilitator; ',
      details: 'Trainer ',
      image: staff5,
    },
      {
      name: 'Ms. Sarita Bhasin',
      credentials: 'CRR (RCI) no. B65369',
      role: 'Consultant Vocational Trainer (PwD) ',
      details: 'NIOS & Placement facilitator (PwD)',
      image: staff4,
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
                      className="w-full h-full object-fit-cover"
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
          
            <Tabs setActivePage={setActivePage} />
          </div>
        </section>

      
      </div>
    </div>
  );
};

export default Team;
