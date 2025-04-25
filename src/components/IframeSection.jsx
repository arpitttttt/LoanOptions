import React from "react";

const LunchtimeLoans = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Video Section */}
      <div className="w-full md:w-[640px] h-[360px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/wJ5pzbNUyko"
          title="Lunchtime Loans"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Text Content */}
      <div className="h-[360px] max-w-[500px] w-full flex flex-col justify-center text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
          <p className="text-gray-600 text-sm font-semibold">As seen on</p>
          <img
            src="https://loanoptions.ai/themes/aiims/_assets/images/lib/7news.png"
            alt="7News Logo"
            className="h-6"
          />
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Lunchtime Loans
        </h2>
        <p className="text-lg text-gray-700">
          Our technology featured on Channel 7. Catch the replay to learn more
          about how we can help you achieve your financial goals.
        </p>
      </div>
    </div>
  );
};

export default LunchtimeLoans;
