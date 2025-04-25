import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Car",
    icon: (
      <img
        src="https://loanoptions.ai/themes/aiims/_assets/images/front/w1.png"
        alt="Car"
        className="w-16 h-16"
      />
    ),
  },
  {
    name: "Tractor",
    icon: (
      <img
        src="https://loanoptions.ai/themes/aiims/_assets/images/front/w2.png"
        alt="Tractor"
        className="w-16 h-16"
      />
    ),
  },
  {
    name: "Personal",
    icon: (
      <img
        src="https://loanoptions.ai/themes/aiims/_assets/images/front/w3.png"
        alt="Personal"
        className="w-16 h-16"
      />
    ),
  },
  {
    name: "Business",
    icon: (
      <img
        src="https://loanoptions.ai/themes/aiims/_assets/images/front/w4.png"
        alt="Business"
        className="w-16 h-16"
      />
    ),
  },
  {
    name: "Home",
    icon: (
      <img
        src="https://loanoptions.ai/themes/aiims/_assets/images/front/w5.png"
        alt="Home"
        className="w-16 h-16"
      />
    ),
  },
  {
    name: "Insurance",
    icon: (
      <img
        src="https://loanoptions.ai/themes/aiims/_assets/images/front/w9.png"
        alt="Insurance"
        className="w-16 h-16"
      />
    ),
  },
];

const hoverEffect = {
  scale: 1.08,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

export default function LoanCategories() {
  return (
    <div className="max-w-6xl mx-auto p-10 bg-white rounded-2xl shadow-2xl text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-4">
        Discover your perfect loan
      </h2>
      <p className="text-lg text-gray-600 mb-10">
        with no impact to your credit score!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            whileHover={hoverEffect}
            key={index}
            className="relative overflow-hidden flex flex-col items-center justify-center p-10 bg-purple-50 border border-transparent hover:border-purple-400 rounded-2xl shadow-lg cursor-pointer group hover:bg-purple-200"
          >
            {/* Ripple Animation */}
            <motion.div
              className="absolute w-56 h-56 bg-purple-100 rounded-full opacity-20 z-0"
              animate={{
                scale: [1, 1.5],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            <div className="text-purple-600 mb-5 z-10">{cat.icon}</div>
            <p className="text-xl font-semibold text-gray-700 z-10">
              {cat.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
