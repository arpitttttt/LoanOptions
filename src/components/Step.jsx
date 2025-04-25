import React, { useState } from 'react';

const MoreControl = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Step1",
      step:"Input",
      description: "Input your information in our AI options tool and it will calculate and present you with the best options available!",
      note: "Remember, the more information you provide, the more accurate your loan options will be.",
      gif: "https://loanoptions.ai/uploads/blog_inner/mc1.gif",
    },
    {
      title: "Step2",
      step:"Compare",
      description: "Let our AI options tool do the work instantly! No waiting around!",
      note: "With over 60 Lenders, our AI options tool will curate and personalise the best results based on your priorities.",
      gif: "https://loanoptions.ai/uploads/blog_inner/mc2.gif",
    },
    {
      title: "Step3",
      step:"Choose",
      description: "Now the easy part! Pick from the list and if you need further clarity, the platform can provide you with a granular level of detail to help find what you are looking for.",
      note: "For a more personal touch our Customer Service Consultants are available to talk to you.",
      gif: "https://loanoptions.ai/uploads/blog_inner/mc3.gif",
    }
  ];

  const handleDotClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        {/* Centered h2 */}
        <h2 className="text-7xl font-extrabold text-center mb-12 mt-8">More Control.</h2>

        <p className="text-xl text-center mb-8 font-semibold">
  We make it simple for you. There are three easy steps to follow when applying
</p>

        <div className="bg-white p-6 rounded-lg">
          <img src={steps[currentStep].gif} alt="Step GIF" className="mx-auto mb-6" />
          
          <div className="">
            <div className="text-xl font-semibold mb-4 text-gray-500">{steps[currentStep].title}</div>
            <div className="text-7xl font-extrabold text-black mb-4">
                {steps[currentStep].step}<span className="text-red-600">.</span>
                </div>

            <p className="text-lg mt-4 mb-2 text-gray-600">{steps[currentStep].description}</p>
            <p className="text-lg mt-4 text-gray-600">{steps[currentStep].note}</p>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-4">
            {steps.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 rounded-full cursor-pointer ${currentStep === index ? 'bg-black' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreControl;
