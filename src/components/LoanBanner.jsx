import React from 'react';

export default function LoansBanner() {
  return (
    <div 
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("https://loanoptions.ai/uploads/home/sec1.jpg")' }}
    >
      {/* Dark overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            More Secrets.
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white mb-6">
            Discover the villains, their schemes & how they do it behind your back!
          </h2>
          
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl">
            The loans marketplace can be a confusing one and to add to that,
            there are secrets the industry villains DON'T want you to know.
          </p>
          
          <div>
            <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-full text-lg font-medium transition duration-300">
              Reveal Secrets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}