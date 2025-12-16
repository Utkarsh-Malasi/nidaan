import React from 'react';

const ServiceIndividual = ({ setActivePage }) => {
  return (
    <div id="page-service-individual" className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Individual Therapy</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">About Individual Therapy</h2>
              <p className="text-gray-600 text-base md:text-lg">
                Individual therapy is a collaborative process between you and a trained therapist focused on improving your mental health and well-being. 
                In one-on-one sessions, you'll have a safe, confidential space to explore your thoughts, feelings, and behaviors.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 text-gray-600">
            <p>
              At Nidaan- TPS, our approach to individual therapy is personalized to your unique needs and goals. 
              Whether you're dealing with a specific mental health condition, navigating a difficult life transition, 
              or simply seeking personal growth, our therapists are here to support you on your journey.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Who Can Benefit</h3>
            <p>Individual therapy can be beneficial for people experiencing:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Anxiety, depression, or other mood disorders</li>
              <li>Grief and loss</li>
              <li>Trauma and PTSD</li>
              <li>Life transitions (career changes, relationship changes, etc.)</li>
              <li>Stress management difficulties</li>
              <li>Self-esteem and identity issues</li>
              <li>Relationship challenges</li>
              <li>Personal growth and self-exploration</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Our Therapeutic Approaches</h3>
            <p>
              Our therapists are trained in various evidence-based therapeutic modalities, which they tailor to your specific needs. 
              Some of the approaches we use include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Cognitive Behavioral Therapy (CBT):</span> Helps identify and change negative thought patterns that influence emotions and behaviors</li>
              <li><span className="font-medium">Psychodynamic Therapy:</span> Explores unconscious processes and how past experiences affect current behavior</li>
              <li><span className="font-medium">Mindfulness-Based Approaches:</span> Incorporates present-moment awareness and acceptance techniques</li>
              <li><span className="font-medium">Solution-Focused Brief Therapy:</span> Concentrates on finding solutions in the present and exploring hope for the future</li>
              <li><span className="font-medium">Acceptance and Commitment Therapy (ACT):</span> Combines acceptance and mindfulness with commitment and behavior change</li>
              <li><span className="font-medium">Dialectical Behavior Therapy (DBT):</span> Teaches skills for emotional regulation, distress tolerance, interpersonal effectiveness, and mindfulness</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">What to Expect</h3>
            <p>
              Your therapy journey typically begins with an initial assessment where your therapist will get to know you, 
              understand your concerns, and discuss your goals for therapy. Together, you'll develop a treatment plan 
              tailored to your specific needs.
            </p>
            <p>
              Regular sessions usually last 50 minutes and are typically scheduled weekly, though this can vary based on your needs. 
              Throughout the process, your therapist will work collaboratively with you, providing a supportive, non-judgmental 
              environment where you can explore challenges and develop new skills and insights.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Our Commitment to You</h3>
            <p>
              At Nidaan -TPS, we are committed to providing culturally sensitive, ethical, and effective care. 
              We respect your unique background, values, and experiences, and we work to create a therapeutic 
              relationship based on trust, respect, and collaboration.
            </p>
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-200">
            <button 
              onClick={() => setActivePage('services')} 
              className="text-primary hover:text-primary-dark font-medium transition-all flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to All Services
            </button>
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-gray-600 mb-6">
            Taking the first step can be the hardest part. We're here to make the process as comfortable as possible. 
            Contact us today to schedule an initial consultation or to learn more about how individual therapy at Nidaan can help you.
          </p>
          <button 
            onClick={() => setActivePage('contact')} 
            className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceIndividual;