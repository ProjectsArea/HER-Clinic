import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import logo from "../assets/Her Clinic01.avif"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-deep-rose/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-cream/20 rounded-full">
              <Heart className="h-6 w-6 text-cream" />
            </div>
            {/* <span className="text-xl font-bold text-cream font-playfair">HERCLINIC</span> */}
            <img src={logo} alt="" height="120px" width="120px"/>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-cream text-sm hover:text-peach transition-colors duration-300">Home</a>
            <a href="#about" className="text-cream text-sm hover:text-peach transition-colors duration-300">About</a>
            <a href="#services" className="text-cream text-sm hover:text-peach transition-colors duration-300">Services</a>
            <a href="#diet" className="text-cream text-sm hover:text-peach transition-colors duration-300">Nutrition</a>
            <a href="#baby-treatments" className="text-cream text-sm hover:text-peach transition-colors duration-300">Baby Care</a>
            <a href="#doctor" className="text-cream text-sm hover:text-peach transition-colors duration-300">Doctor</a>
            <a href="#gallery" className="text-cream text-sm hover:text-peach transition-colors duration-300">Gallery</a>
            <a href="#contact" className="text-cream text-sm hover:text-peach transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;