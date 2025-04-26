import React from 'react';

export default function FinanceTeamSection() {
  const teamMembers = [
    {
      name: 'Valerie',
      role: 'Loan Specialist',
      image: 'https://loanoptions.ai/themes/aiims/_assets/images/lib/team-member1.png'
    },
    {
      name: 'Pankaj',
      role: 'Loan Specialist',
      image: 'https://loanoptions.ai/themes/aiims/_assets/images/lib/team-member2.png'
    },
    {
      name: 'Niklep',
      role: 'Lead Software Engineer',
      image: 'https://loanoptions.ai/themes/aiims/_assets/images/lib/team-member3.png'
    }
  ];

  return (
    <div className="flex flex-col bg-gray-900 text-white p-8 md:p-16">
      {/* Main content section */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full mb-12">
        {/* Left section with text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            We're serious<br />about finance
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl mb-8">
            Professional, highly experienced & efficient...
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-4 px-10 rounded-full transition duration-300">
            Meet Our Team
          </button>
        </div>
        
        {/* Right section with diagram */}
        <div className="md:w-1/2 relative">
          <div className="relative w-full">
            <img
              src="https://loanoptions.ai/themes/aiims/_assets/images/lib/serious-finance.png"
              alt="Finance Service Diagram"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Team members at the left side */}
      <div className="flex flex-wrap md:pl-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="mr-20 mb-8 flex items-center">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-gray-800 mr-4">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-200">{member.name}</h3>
              <p className="text-lg text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}