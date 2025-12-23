

const Testimonials = ({ setActivePage }) => {
  // Testimonial data
  const testimonials = [
    {
      name: "Yari Rubu",
      duration: "Client for 8 months",
      text: "This is one of the best learning experience I have ever had so far. Ever since I was a kid education and learning would mean dread for me. But this is the first time, I have felt completely safe, comfortable and understood at the same time. Thank you Nidaan and all those who are working there. Your efforts will never go in vain. <3",
      initial: "Y"
    },
    {
      name: "Naveen Kumar",
      duration: "Client for 1 year",
      text: "Dr. Rashi is a true professional who helped me navigate my challenges with patience and deep understanding. Her guidance has made a significant positive impact on my life, and I’m truly grateful for her support. Thank you for your dedication and genuine care!",
      initial: "N"
    },
    {
      name: "Dinesh Panjwani",
      duration: "Couples therapy clients for 6 months",
      text: "Our family highly recommends Dr Rashi and the comprehensive assessment services she offers at Nidann.Dr. Rashi is very professional and knowledgeable. She and her staff really took time to understand the concerns we had with one of our children’s learning struggles. She then tailored the testing to what our child needed and conducted a thorough assessment. Afterwards Dr Rashi spent time explaining the results and giving many practical suggestions and a plan forward. Her manner is very gentle and caring. She put us completely at ease. We highly recommend this much needed service in Dehradun.",
      initial: "D"
    },
    {
      name: "Aviral Singh",
      duration: "Client for 3 months",
      text: "Me and my fiance are really happy to find her and seriously the way she listens to our problems which we were facing and hears out everything so quietly and patiently . The psychologist is a professional  in what she do for her clients to make them believe themselves in a positive way . I was having problems in controlling my anger and after taking few sessions with her i feel a-lot better with my anger management and i am trying to make things happen for myself and my partner .",
      initial: "A"
    },
    {
      name: "Manya Pundir",
      duration: "Family therapy clients for 4 months",
      text: "Great place for budding psychologist to do internship in and otherwise. The amount of effort Mrs. Rashi Bhatnagar puts in with her every student is enriching and inspiring. The clients are handled with sincerity and care. All the ethical principles are followed dealing with the client. I would highly recommend to have a visit atleast once.",
      initial: "M"
    },
    {
      name: "Shreya Singh",
      duration: "Client for 10 months",
      text: "There is a great environment at Nidaan for acquiring hands-on knowledge about Psychology and Special Education. I would like to especially acknowledge Dr. Rashi Bhatnagar, who has served as a mentor and guide during my learning experience there.",
      initial: "S"
    },
 
  {
    name: "Prashansha Upadhyay",
    duration: "Review posted 2 years ago",
    text: "I have heard about Dr.rashi (rashi di) multiple times ... about how good she is with her work ......but after meeting her for the first time for the session...I felt like this will help me a lot ...I felt like the power to overcome my difficulties....her humour and her enthusiastic approach is so good and specially her welcoming smile 😊....you will automatically feel good once you say hello to her ..... she's the best in her field...and she gives you the feeling of there's actually someone who has your back ..and she actually understands the needs , listens and discusses too ....it just never feels like one way conversation or sharing...it's always a two way and fully satisfying session everytime...... everytime my session gets over ...I go back with a smile on my face ....I definitely recommend everyone to rashi di whoever is feeling like to take a session....💗",
    initial: "P"
  },
  {
    name: "Shrestha Singh",
    duration: "Review posted 4 years ago",
    text: "This is the best place in terms of gaining knowledge from the core and learning through experiences under the support of an excellent mentor..!! Also much much more than satisfactory in terms of psychological services and guidance towards mental health..!!",
    initial: "S"
  },
  {
    name: "Jyoti Arora",
    duration: "Review posted 5 months ago",
    text: "Rashi Ma'am is an excellent psychologist....she understanding, cooperative n solves the issues very smoothly n in a satisfactory way...A gem of a person 😀",
    initial: "J"
  },
  {
    name: "S & L vdWel",
    duration: "Review posted 4 years ago",
    text: "Had an excellent experience here. Needed a clinical assessment for my daughter's education development needs. Dr Rashi Bhatnagar is very thorough. She has a wonderful manner with children. They feel comfortable very quickly. She has great experience and explains things very clearly. Very thankful to have such a wonderful psychologist in Dehradun.",
    initial: "S"
  },
  {
    name: "Stuti Giri",
    duration: "Review posted a year ago",
    text: "A great foundation for psychology... helps us to get detailed knowledge about the ways and methods of how we deal with people with psychological issues. Must go and explore the clinical field.👍",
    initial: "S"
  }

  ];

  return (
    <div id="page-testimonials" className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-700 mb-6 text-center">Reflections from Our People</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
         
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-xl font-bold">{testimonial.initial}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <div className="mt-1 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927a1 1 0 011.902 0l1.07 3.295a1 1 0 00.95.69h3.462a1 1 0 01.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.294a1 1 0 01-1.538 1.118L10 14.347l-2.887 2.94a1 1 0 01-1.538-1.118l1.07-3.294a1 1 0 00-.364-1.118L3.48 8.722a1 1 0 01.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.295z" />
                        </svg>
                      ))}
                    </div>
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
            onClick={() => setActivePage('contact')}
            className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg inline-block"
          >
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
