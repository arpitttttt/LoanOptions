import { useState, useEffect, useRef } from 'react';
import cartoon from '../assets/cartoon.png';

export default function ParallaxScrollEffect() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const containerHeight = 6000;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const position = window.scrollY;
        const containerTop = containerRef.current.offsetTop;
        const relativeScroll = Math.max(0, position - containerTop);
        const scrollProgress = Math.min(1, relativeScroll / (containerHeight - viewportHeight));
        setScrollPosition(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewportHeight]);

  const transitionPoint = 0.3;

  const section1Opacity = 1 - Math.min(1, Math.max(0, (scrollPosition - transitionPoint) * 3));
  const section2Opacity = Math.min(1, Math.max(0, (scrollPosition - transitionPoint) * 3)) *
                          (1 - Math.min(1, Math.max(0, (scrollPosition - 0.7) * 3)));
  const section3Opacity = Math.min(1, Math.max(0, scrollPosition * 2 - 1.2));

  const section1Transform = `translateY(${Math.max(0, scrollPosition - transitionPoint) * -100}px)`;
  const section3Transform = `translateY(${(1 - section3Opacity) * 100}px)`;

  const section1Scale = 1 - Math.min(0.1, Math.max(0, (scrollPosition - transitionPoint) * 0.3));
  const section2Scale = 0.95 + Math.min(0.05, Math.max(0, (scrollPosition - transitionPoint) * 0.3));

  const imageOpacityBase = Math.min(1, scrollPosition * 3);
  const imageStaggered = (index) => {
    const delay = index * 0.1;
    return Math.min(1, Math.max(0, imageOpacityBase - delay));
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full" 
      style={{ height: `${containerHeight}px` }}
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">

        {/* Section 1 */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 z-10"
          style={{ 
            opacity: section1Opacity,
            transform: section1Transform + ` scale(${section1Scale})`,
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            backgroundColor: 'white'
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-10 mt-24">More You.</h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-8 mt-2">Banks see you as just a number in their system</p>
            <div className="flex flex-col sm:flex-row justify-between items-center text-base sm:text-lg mb-8 px-4 gap-4">
              <div className="text-left">
                <p className="text-lg sm:text-xl">Customer Rating</p>
                <p className="text-5xl sm:text-7xl font-extrabold">4/5</p>
              </div>
              <div className="text-right">
                <p className="text-lg sm:text-xl">Customer Number</p>
                <p className="text-5xl sm:text-7xl font-extrabold">932</p>
              </div>
            </div>
            <div className="w-full max-h-[40vh] mx-auto overflow-hidden">
              <img 
                src="https://loanoptions.ai/uploads/home/myman.png" 
                alt="Man illustration" 
                className="w-full h-auto object-contain"
                style={{ opacity: section1Opacity }}
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 z-20"
          style={{ 
            opacity: section2Opacity,
            transform: `scale(${section2Scale})`,
            backgroundColor: '#9159E8',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            color: 'white'
          }}
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 text-white">The Real You.</h2>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2">We see & value you as the weird human you are...</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square">
                  <img 
                    src={[
                      'https://loanoptions.ai/themes/aiims/_assets/images/front/tr1.png',
                      'https://loanoptions.ai/themes/aiims/_assets/images/front/trman.png',
                      'https://loanoptions.ai/themes/aiims/_assets/images/front/tr2.png',
                      'https://loanoptions.ai/themes/aiims/_assets/images/front/tr4.gif',
                      'https://loanoptions.ai/themes/aiims/_assets/images/front/tr7.gif',
                      'https://loanoptions.ai/themes/aiims/_assets/images/front/tr5.png',
                    ][i]} 
                    alt={`Image ${i + 1}`} 
                    className="w-full h-full object-contain"
                    style={{ opacity: imageStaggered(i < 3 ? 0 : 0.3), transition: 'opacity 0.4s ease' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div 
          className="absolute inset-0 flex flex-col px-4 sm:px-6 z-30"
          style={{ 
            opacity: section3Opacity,
            transform: section3Transform,
            background: 'linear-gradient(135deg, #FF7700, #8A00FF)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            boxShadow: '0 0 60px rgba(138, 0, 255, 0.8)',
            paddingTop: '2vh'
          }}
        >
          <div className="max-w-6xl mx-auto w-full flex flex-col">
            <div className="flex justify-center mb-4 mt-8">
              <div className="relative">
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,153,0,0) 70%)',
                    transform: 'scale(1.2)',
                    filter: 'blur(12px)',
                    opacity: Math.min(1, section3Opacity * 1.3)
                  }}
                ></div>
                <img 
                  src={cartoon}
                  alt="Cartoon" 
                  className="w-[160px] md:w-[200px] lg:w-[240px] h-auto object-contain relative z-10"
                  style={{ 
                    opacity: Math.min(1, section3Opacity * 1.2),
                    transform: `translateY(${(1 - section3Opacity) * 30}px) scale(1.05)`,
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    filter: 'contrast(1.2) brightness(1.1) saturate(1.2)'
                  }}
                />
              </div>
            </div>

            <div className="relative w-full min-h-[300px] flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">Simple...</h1>
                <p className="text-sm sm:text-base lg:text-lg text-white font-bold mb-4">
                  Build a long term relationship with a company that values all the things that make you, you.
                </p>
                <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-xl hover:bg-red-500 transition duration-300">
                  Match a Loan
                </button>
              </div>
              <div className="w-full md:w-1/2 text-right">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">& Badass</h1>
                <p className="text-sm sm:text-base lg:text-lg text-white font-bold mb-4">
                  Our consultants are more than happy to take you through the process!
                </p>
                <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-xl hover:bg-red-500 transition duration-300">
                  Match a Loan
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
