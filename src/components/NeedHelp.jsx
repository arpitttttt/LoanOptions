import React from 'react';

export default function LoanHelpBanner() {
  return (
    <div className="w-full bg-white p-8 flex flex-col items-center justify-center border-b-8 border-navy-900">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold text-navy-900 mb-4">Settled a loan, but need help?</h1>
        <p className="text-xl text-gray-800 mb-12">
          We are always happy to assist in any questions or enquiries
          <br />
          whether you're looking for a loan or already have one.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full text-lg transition-colors">
            Go to FAQ Bunker
          </button>
          <button className="px-8 py-4 bg-white hover:bg-gray-100 text-red-500 font-medium rounded-full text-lg border-2 border-red-500 transition-colors">
            Speak to a Human
          </button>
        </div>
      </div>
    </div>
  );
}