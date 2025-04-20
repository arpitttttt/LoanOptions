import { useState } from 'react';
import { FiChevronsDown } from "react-icons/fi";
import icons8call from '../assets/icons8call.gif';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setShowPhoneNumber(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    setShowPhoneNumber(false);
  };

  return (
    <nav className="bg-[#2D0B5A] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ MOBILE NAVBAR (only on small screens) */}
        <div className="flex items-center justify-between md:hidden">
          {/* Talk to a Human */}
          <a
            href="tel:1300060684"
            className="text-white flex items-center text-sm font-sans font-bold"
          >
            <img
              src={icons8call}
              alt="Call Icon"
              className="h-6 w-6 mr-2 mix-blend-multiply"
              style={{ filter: 'brightness(1.2) contrast(1.2)' }}
            />
            Talk to a Human
          </a>

          {/* Explore Button */}
          <button
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-sans font-semibold flex items-center"
          >
            Explore
            <FiChevronsDown className="text-xl ml-1 mt-1" />
          </button>
        </div>

        {/* ✅ DESKTOP NAVBAR (only on medium+ screens) */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left logo section */}
          <div className="flex items-center space-x-6 ml-72">
            <span className="text-white text-base font-normal">As seen on</span>
            <img 
              src="https://loanoptions.ai/themes/aiims/_assets/images/lib/7news.png" 
              alt="7NEWS" 
              className="h-10"
            />
          </div>

          {/* Right nav */}
          <div className="flex items-center space-x-12">
            <a 
              href="tel:1300060684" 
              className="text-white hover:text-white/90 flex items-center text-sm font-sans font-bold"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center">
                <span className="flex-shrink-0 mr-2 rounded-full overflow-hidden bg-[#2D0B5A]">
                  <img 
                    src={icons8call} 
                    alt="Call Icon" 
                    className="h-8 w-8 mix-blend-multiply" 
                    style={{
                      filter: 'brightness(1.2) contrast(1.2)'
                    }}
                  />
                </span>
                <div className="relative w-32 h-5 flex items-center">
                  <span 
                    className={`absolute left-0 transition-all duration-500 ease-in-out font-sans font-semibold ${
                      showPhoneNumber ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
                    }`}
                  >
                    Talk to a Human
                  </span>
                  <span 
                    className={`absolute left-0 transition-all duration-500 ease-in-out font-sans font-bold ${
                      showPhoneNumber ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                    }`}
                  >
                    1300 060 684
                  </span>
                </div>
              </div>
            </a>

            <a 
              href="/partner" 
              className="bg-[#FF4040] hover:bg-[#FF4040]/90 text-white px-6 py-2 rounded-full font-sans font-semibold"
            >
              Become a Partner
            </a>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full font-sans font-semibold flex items-center"
            >
              Explore
              <FiChevronsDown className="text-xl ml-1 mt-1" />
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
