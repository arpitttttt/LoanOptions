import { useState, useEffect } from 'react';
import { FiChevronsDown } from "react-icons/fi";
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar') && !e.target.closest('.explore-dropdown')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar fixed top-0 left-0 w-full z-50 bg-[#2D0B5A] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ✅ MOBILE NAVBAR */}
          <div className="flex items-center justify-between md:hidden">
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

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-sans font-semibold flex items-center"
            >
              Explore
              <FiChevronsDown
                className={`text-xl ml-1 mt-1 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
          </div>

          {/* ✅ DESKTOP NAVBAR */}
          <div className="hidden md:flex items-center justify-between">
            {/* Left section with logo linked to home */}
            <div className="flex items-center space-x-6 ml-72">
              <span className="text-white text-base font-normal">As seen on</span>
              <Link to="/">
                <img 
                  src="https://loanoptions.ai/themes/aiims/_assets/images/lib/7news.png" 
                  alt="7NEWS" 
                  className="h-10"
                />
              </Link>
            </div>

            {/* Right section */}
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
                      style={{ filter: 'brightness(1.2) contrast(1.2)' }}
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
                <FiChevronsDown
                  className={`text-xl ml-1 mt-1 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Explore Dropdown Section */}
      <div
        className={`explore-dropdown transition-all duration-500 ease-in-out bg-[#1C053D] text-white overflow-hidden fixed top-[72px] w-full z-40 ${
          isOpen ? 'max-h-96 py-8' : 'max-h-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-around items-start gap-6">
          <Link to="/about" className="text-base font-semibold hover:underline">About Us</Link>
          <Link to="/faq" className="text-base font-semibold hover:underline">FAQ</Link>
          <Link to="/loans" className="text-base font-semibold hover:underline">Types of Loans</Link>
          <Link to="/calculator" className="text-base font-semibold hover:underline">Loan Calculator</Link>
        </div>
      </div>
    </>
  );
}
