import React from 'react';

const ServiceFamily = ({ setActivePage }) => {
  return (
    <div id="page-service-family" className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Family Therapy</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">About Family Therapy</h2>
              <p className="text-gray-600 text-base md:text-lg">
                Family therapy is a type of psychological counseling that helps family members improve communication and resolve conflicts. 
                It's designed to address specific issues that affect the psychological health of the family, such as major life transitions or mental health conditions.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 text-gray-600">
            <p>
              At Nidaan, our family therapists work with families to nurture change and development. 
              We view family problems as patterns or systems that need adjusting, rather than identifying any individual as the problem. 
              Our goal is to help your family work together to overcome challenges and create a healthier family dynamic.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Who Can Benefit</h3>
            <p>Family therapy can be beneficial for families experiencing:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Communication difficulties and frequent conflicts</li>
              <li>Parenting challenges</li>
              <li>Behavioral problems in children or adolescents</li>
              <li>Adjustments to major life changes (divorce, remarriage, relocation, loss)</li>
              <li>Effects of trauma or chronic illness on the family system</li>
              <li>Blended family integration issues</li>
              <li>Supporting a family member with mental health or substance use concerns</li>
              <li>Cultural adjustment challenges</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Our Therapeutic Approaches</h3>
            <p>
              Our therapists are trained in various evidence-based approaches to family therapy, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Structural Family Therapy:</span> Focuses on adjusting and strengthening the family system to improve the health of the family and its members</li>
              <li><span className="font-medium">Strategic Family Therapy:</span> Addresses specific problems through direct intervention, examining patterns of interaction that contribute to problems</li>
              <li><span className="font-medium">Systemic Family Therapy:</span> Views problems within the context of family systems and relationships rather than at an individual level</li>
              <li><span className="font-medium">Narrative Family Therapy:</span> Helps families identify their values and skills to effectively confront current problems and avoid future ones</li>
              <li><span className="font-medium">Attachment-Based Family Therapy:</span> Focuses on repairing and strengthening emotional bonds between family members</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">What to Expect</h3>
            <p>
              Family therapy typically begins with an initial assessment where your therapist will meet with all family members together. 
              This helps the therapist understand the family dynamics and the specific challenges you're facing. 
              In some cases, the therapist may also meet with individual family members or subgroups.
            </p>
            <p>
              Sessions usually last 60-90 minutes and may be scheduled weekly, biweekly, or monthly, depending on your family's needs. 
              The number of sessions varies based on the complexity of the issues being addressed, but typically ranges from 5 to 20 sessions.
            </p>
            <p>
              During therapy, your therapist will help family members communicate better, solve problems, and understand and handle special family situations. 
              You may be given "homework" or specific tasks to practice between sessions to reinforce the skills learned in therapy.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Our Commitment to You</h3>
            <p>
              At Nidaan, we are committed to providing culturally sensitive, respectful care to families of all structures, backgrounds, and identities. 
              We create a safe, non-judgmental environment where all family members can express themselves openly and work together toward positive change.
            </p>
            <p>
              We recognize that seeking family therapy can be a difficult decision, and we honor your courage in taking this step. 
              Our therapists are dedicated to supporting your family's journey toward improved communication, stronger relationships, and greater well-being.
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
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Strengthen Your Family Bonds?</h3>
          <p className="text-gray-600 mb-6">
            Taking the step to seek family therapy shows your commitment to your family's well-being. 
            Contact us today to schedule an initial consultation and begin your journey toward healthier family relationships.
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

export default ServiceFamily;