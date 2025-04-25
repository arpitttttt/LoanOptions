import React from 'react';

export default function PromoBanner() {
  return (
    <div className="bg-white">
      {/* Header section with "More Smiles" */}
      <div className="px-4 py-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4 lg:mt-8 mb-4 lg:mb-8">More You.</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="text-purple-800 text-2xl sm:text-3xl">★</span>
              <span className="text-lg sm:text-xl font-bold">5/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600 text-lg sm:text-xl">✏️</span>
              <span className="text-lg sm:text-xl">932 reviews</span>
            </div>
            <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-lg sm:text-xl whitespace-nowrap">
              All Google Reviews
            </button>
          </div>
        </div>
      </div>

      {/* Main banner section */}
      <div className="bg-purple-900 text-white rounded-lg overflow-hidden max-w-6xl mx-auto relative">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-center p-6 sm:p-8 w-full lg:w-1/2">
            {/* Google rating */}
            <div className="mb-6 sm:mb-10 flex items-center gap-x-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google logo"
                className="h-6 sm:h-8 md:h-10 w-auto"
              />
              <div className="flex items-center gap-x-2">
                <span className="text-yellow-400 text-xl sm:text-2xl md:text-3xl font-bold">★★★★★</span>
                <span className="text-base sm:text-lg md:text-xl">5 star reviews on Google</span>
              </div>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
              More than <span className="text-purple-300">932</span>
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              smiles, laughs<br />& warcries
            </h2>

            {/* CTA button with hover animation */}
            <div className="mt-10 sm:mt-14">
              <button className="bg-purple-800 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                See Testimonials
              </button>
            </div>
          </div>

          {/* Image section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-0">
            <img 
              src="https://loanoptions.ai/uploads/testimonials/ms.png" 
              alt="Character mascot" 
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
