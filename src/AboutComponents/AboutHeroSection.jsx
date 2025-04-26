import React from "react";
import ninja from "../assets/ninja.png";

export default function LoanOptionsBanner() {
  return (
    <div className="bg-violet-950 text-white px-6 py-12 md:p-16 flex flex-col md:flex-row justify-between items-center relative overflow-hidden min-h-screen mt-16">
      {/* Left side content */}
      <div className="z-10 max-w-3xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Discover Loan Options.
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">
          About Loan Options Loans
        </h2>
        <p className="text-lg sm:text-xl mb-10">
          Australia's first AI-powered loan comparison platform
        </p>

        {/* Contact information */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start">
            <div className="bg-violet-900 p-4 rounded-full mb-4 sm:mb-0 sm:mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-medium text-xl">Send us a message</p>
              <a
                href="mailto:info@loanoptions.ai"
                className="text-violet-200 text-lg"
              >
                info@loanoptions.ai
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start">
            <div className="bg-violet-900 p-4 rounded-full mb-4 sm:mb-0 sm:mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-medium text-xl">Come for a visit</p>
              <p className="text-violet-200 text-lg">
                Building F, Level 4, Suite 27! Homebush Bay Dr, Rhodes NSW 2138
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-10 bg-red-500 hover:bg-red-600 text-white font-bold text-lg sm:text-xl py-3 px-8 sm:py-4 sm:px-12 rounded-full transition duration-300 shadow-lg">
          Match a Loan
        </button>
      </div>

      {/* Right side with astronaut image */}
      <div className="mt-12 md:mt-0 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2">
        <img
          src={ninja}
          alt="AI Astronaut Mascot"
          className="max-h-[400px] sm:max-h-[500px] md:h-screen w-auto object-contain"
        />
      </div>
    </div>
  );
}
