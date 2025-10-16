import React from 'react';
import { ChevronDown } from 'lucide-react';
const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="block">Hi, I'm Kayode Ogbetah</span>
            <span className="text-indigo-600">Graphic Designer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Storytelling through visuals
          </p>
          <button onClick={scrollToPortfolio} className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-flex items-center">
            View My Work
            <ChevronDown size={20} className="ml-2" />
          </button>
        </div>
        {/* Image/Graphic */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="/images/kay.jpg" alt="Professional portrait" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;