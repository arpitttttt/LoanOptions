import { PlayIcon } from '@heroicons/react/24/solid'; // Importing the play icon

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-start justify-center text-white text-center px-4"
      style={{
        backgroundImage:
          "url('https://loanoptions.ai/themes/aiims/_assets/images/front/lo_3_0_banner.jpg')",
      }}
    >
      <div className="max-w-3xl flex flex-col items-center gap-6 mt-60 p-4">
      <img
  src="https://loanoptions.ai/themes/aiims/_assets/images/front/lo_3_0_title.png"
  alt="Loan Options Title"
  className="w-full max-w-[95%] h-auto"
/>

        <h1 className="text-3xl md:text-4xl font-bold">
          Enjoy A <span className="text-purple-300">50% Faster</span> Loan Journey.
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          We've levelled up our AI game, making it faster for you to compare
          options from over 75 banks and lenders with no impact to your credit
          score
        </p>
        <div className="flex gap-4 flex-wrap justify-center mt-4">
          <button className="bg-red-500 hover:bg-red-400 text-white px-6 py-3 rounded-full text-lg font-bold transition">
            See what's New
          </button>
          <button className="bg-transparent border border-white text-white font-bold px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition flex items-center gap-2">
            <PlayIcon className="h-5 w-5" />
            Play Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
