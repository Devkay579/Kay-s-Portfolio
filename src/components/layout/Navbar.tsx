import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5 border border-b'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          <span className="text-indigo-600">Kay's</span><span className='pl-2'>Portfolio</span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="font-medium hover:text-indigo-600 transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="font-medium hover:text-indigo-600 transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="font-medium hover:text-indigo-600 transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-indigo-600 transition-colors bg-indigo-100 px-4 py-2 rounded-md">
            Contact Me
          </button>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 px-4">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="font-medium py-2 hover:text-indigo-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="font-medium py-2 hover:text-indigo-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="font-medium py-2 hover:text-indigo-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="font-medium py-2 hover:text-indigo-600 transition-colors">
              Contact Me
            </button>
          </div>
        </div>}
    </header>;
};
export default Navbar;