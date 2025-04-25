import React, { useEffect, useRef } from "react";

const AutoScrollCards = () => {
  const images = [
    "https://loanoptions.ai/themes/aiims/_assets/images/more-success/2.png",
    "https://loanoptions.ai/themes/aiims/_assets/images/more-success/3.png",
    "https://loanoptions.ai/themes/aiims/_assets/images/more-success/8.png",
    "https://loanoptions.ai/themes/aiims/_assets/images/more-success/9.png",
    "https://loanoptions.ai/themes/aiims/_assets/images/more-success/10.png",
    "https://loanoptions.ai/themes/aiims/_assets/images/more-success/1.png",
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (container) {
          const scrollWidth = container.scrollWidth;
          const visibleWidth = container.clientWidth;
          const scrollLeft = container.scrollLeft;

          if (scrollLeft + visibleWidth >= scrollWidth - 5) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: 300, behavior: "smooth" });
          }
        }
      }, 1000);
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white px-4 py-6">
      
      <h2 className="text-7xl font-extrabold text-left mb-12 mt-8">More Success.</h2>
      
      <div
        ref={containerRef}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth bg-white rounded-lg"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-[40%] max-w-[40%] mr-4 flex-shrink-0 rounded-xl p-4"
          >
            <img src={src} alt={`Card ${index}`} className="rounded-lg w-full h-auto" />
          </div>
        ))}
      </div>
      
      {/* Embedding custom CSS for hiding scrollbars */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default AutoScrollCards;
