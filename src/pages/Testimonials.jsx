import React from 'react';

const Testimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      name: "Sarah M.",
      duration: "Client for 8 months",
      text: "Working with the therapists at Nidaan has been transformative. I've gained valuable insights and tools that have helped me manage my anxiety and improve my relationships. The warm, non-judgmental environment made me feel safe to open up from day one.",
      initial: "S"
    },
    {
      name: "Rahul K.",
      duration: "Client for 1 year",
      text: "After struggling with depression for years, I finally found the support I needed at Nidaan. My therapist's compassionate approach and expertise in cognitive behavioral therapy helped me develop practical strategies to challenge negative thought patterns and rediscover joy in my life.",
      initial: "R"
    },
    {
      name: "Maya and Arjun",
      duration: "Couples therapy clients for 6 months",
      text: "Our marriage was at a breaking point when we came to Nidaan. Through couples counseling, we learned to communicate effectively and understand each other's needs. Our therapist created a balanced space where both of us felt heard. We now have the tools to work through conflicts constructively.",
      initial: "M"
    },
    {
      name: "Deepak S.",
      duration: "Client for 3 months",
      text: "As someone who was skeptical about therapy, I was surprised by how comfortable I felt at Nidaan. My therapist respected my pace and never pushed me to discuss things I wasn't ready for. The practical coping strategies I've learned have made a significant difference in managing my work stress.",
      initial: "D"
    },
    {
      name: "The Sharma Family",
      duration: "Family therapy clients for 4 months",
      text: "Family therapy at Nidaan helped us navigate a difficult transition period after relocating to a new city. Our therapist was skilled at engaging our teenagers and creating a space where everyone felt comfortable sharing their feelings. We've developed stronger bonds and better communication skills.",
      initial: "S"
    },
    {
      name: "Priya T.",
      duration: "Client for 10 months",
      text: "After experiencing trauma, I struggled to find a therapist I could trust. At Nidaan, I found not only expertise in trauma treatment but also genuine compassion. My therapist's patient, gentle approach has helped me process my experiences and begin to heal in ways I didn't think were possible.",
      initial: "P"
    },
    {
      name: "Vikram J.",
      duration: "Group therapy participant for 6 months",
      text: "Participating in group therapy at Nidaan has been an eye-opening experience. Connecting with others facing similar challenges helped me feel less alone. The facilitator created a supportive environment where we could share openly and learn from each other's experiences and coping strategies.",
      initial: "V"
    },
    {
      name: "Leela N.",
      duration: "Client for 9 months",
      text: "As an older adult dealing with life transitions, I appreciated finding a therapist at Nidaan who understood the unique challenges of my age group. The therapy has helped me navigate retirement, health concerns, and changing family dynamics with greater resilience and peace of mind.",
      initial: "L"
    }
  ];

  return (
    <div id="page-testimonials" className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Client Testimonials</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <p className="text-gray-600 text-base md:text-lg text-center max-w-prose md:max-w-2xl mx-auto mb-8">
            At Nidaan, we're honored to be part of our clients' healing journeys. 
            Here are some of their stories and experiences in their own words. 
            We share these testimonials with permission and have changed names to protect privacy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-xl font-bold">{testimonial.initial}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.duration}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-2xl shadow-md text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Your Story Matters</h3>
          <p className="text-gray-600 mb-6 max-w-prose md:max-w-2xl mx-auto">
            Every journey is unique, and we're committed to providing personalized care that addresses your specific needs. 
            If you're ready to begin your own journey toward healing and growth, we're here to support you every step of the way.
          </p>
          <button 
            onClick={() => window.location.href = '#contact'} 
            className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;