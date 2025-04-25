import React from "react";
import BannerImages from "../assets/BannerImages.png";
import AwardAnimation from "../animation/cardAnimation";


const BannerSection = () => {
  return (
    <section className="bg-[#2D0B5A] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 relative overflow-hidden">
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        {/* Banner Image */}
        <img
          src={BannerImages}
          alt="Banner"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
        />
        
        {/* Overlay Card Placeholder */}
        {/*
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <LoanCategories />
        </div>
        */}
      </div>

      <div className="w-full md:w-1/2 text-white text-center md:text-left mt-10 md:mt-0">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight">
          More Options.
        </h2>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          More You.
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold leading-snug">
          Compare Loans Online{" "}
          <span className="italic text-purple-300 font-semibold">EVEN FASTER</span>
        </h3>
        <p className="text-base md:text-lg text-purple-200 px-4 md:px-0 mt-4 mb-8">
          Compare realistic loan options with powerful data & AI matching technology
        </p>
        <AwardAnimation />
      </div>
    </section>
  );
};

export default BannerSection;
