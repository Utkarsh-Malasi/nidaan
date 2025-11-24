import React from 'react';

const ServiceCouples = ({ setActivePage }) => {
  return (
    <div id="page-service-couples" className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Couples Counseling</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">About Couples Counseling</h2>
              <p className="text-gray-600 text-base md:text-lg">
                Couples counseling is a form of therapy that helps couples of all types recognize and resolve conflicts and improve their relationships. 
                Through couples counseling, you can make thoughtful decisions about rebuilding and strengthening your relationship or going your separate ways.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 text-gray-600">
            <p>
              At Nidaan, our couples counselors are trained to help you navigate the complexities of your relationship. 
              Whether you're dealing with communication issues, recovering from infidelity, preparing for marriage, 
              or simply wanting to deepen your connection, our therapists provide a safe, neutral space to explore these challenges.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Who Can Benefit</h3>
            <p>Couples counseling can be beneficial for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Couples experiencing communication difficulties</li>
              <li>Partners navigating major life transitions (marriage, parenthood, retirement)</li>
              <li>Relationships affected by infidelity or trust issues</li>
              <li>Couples dealing with differences in parenting styles</li>
              <li>Partners with sexual intimacy concerns</li>
              <li>Couples considering separation or divorce</li>
              <li>Premarital couples seeking to build a strong foundation</li>
              <li>Partners wanting to deepen their emotional connection</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Our Therapeutic Approaches</h3>
            <p>
              Our therapists are trained in various evidence-based approaches to couples therapy, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Emotionally Focused Therapy (EFT):</span> Helps couples identify and change negative interaction patterns and develop secure attachment bonds</li>
              <li><span className="font-medium">The Gottman Method:</span> Based on extensive research on what makes relationships succeed or fail, focusing on building friendship, managing conflict, and creating shared meaning</li>
              <li><span className="font-medium">Imago Relationship Therapy:</span> Focuses on transforming conflicts into opportunities for healing and growth by improving communication</li>
              <li><span className="font-medium">Solution-Focused Couples Therapy:</span> Concentrates on finding solutions rather than analyzing problems, focusing on the present and future</li>
              <li><span className="font-medium">Narrative Therapy:</span> Helps couples externalize their problems and rewrite their relationship stories in more positive ways</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">What to Expect</h3>
            <p>
              Your couples therapy journey typically begins with an initial assessment where your therapist will meet with both of you together. 
              Some therapists may also request individual sessions to gather more comprehensive information. During these initial sessions, 
              you'll discuss your relationship history, current challenges, and goals for therapy.
            </p>
            <p>
              Regular sessions usually last 60-90 minutes and are typically scheduled weekly or biweekly. Your therapist will help you identify 
              negative patterns in your relationship, improve communication skills, and develop strategies to address specific concerns. 
              You may also be given exercises or "homework" to practice between sessions.
            </p>
            <p>
              The length of couples therapy varies depending on your specific situation and goals. Some couples achieve their objectives in just a few months, 
              while others benefit from longer-term therapy.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Our Commitment to You</h3>
            <p>
              At Nidaan, we are committed to providing a non-judgmental, balanced approach to couples therapy. 
              Our therapists maintain neutrality and do not take sides, ensuring that both partners feel heard and respected. 
              We recognize and honor diverse relationship structures and cultural backgrounds, tailoring our approach to meet your unique needs.
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
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Strengthen Your Relationship?</h3>
          <p className="text-gray-600 mb-6">
            Taking the step to seek couples counseling shows your commitment to your relationship. 
            Contact us today to schedule an initial consultation and begin your journey toward a healthier, more fulfilling partnership.
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

export default ServiceCouples;