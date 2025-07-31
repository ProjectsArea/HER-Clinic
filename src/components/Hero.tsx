import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeartbeat, setIsHeartbeat] = useState(false);

  const slides = [
    {
      quote: "A mother's love begins before she even meets her child.",
      subtitle: "Welcome to HERCLINIC, where we celebrate the beautiful journey of motherhood with compassionate care and expert guidance.",
      cta: "Begin Your Journey"
    },
    {
      quote: "Every heartbeat tells a story of love, hope, and new beginnings.",
      subtitle: "Experience personalized care that honors the sacred bond between mother and child throughout your pregnancy journey.",
      cta: "Discover Our Care"
    },
    {
      quote: "In the gentle rhythm of life, we find the miracle of creation.",
      subtitle: "Our expert team provides comprehensive women's healthcare with the warmth and attention every mother deserves.",
      cta: "Meet Our Team"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    const heartbeatInterval = setInterval(() => {
      setIsHeartbeat(true);
      setTimeout(() => setIsHeartbeat(false), 800);
    }, 2000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(heartbeatInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-rose via-warm-mauve to-soft-lavender">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-rose/40 via-transparent to-transparent"></div>
        
        {/* Heartbeat Ripple Effects */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-rose-300/30 ${isHeartbeat ? 'animate-ping' : ''}`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-rose-400/40 ${isHeartbeat ? 'animate-ping' : ''} delay-100`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-rose-500/50 ${isHeartbeat ? 'animate-ping' : ''} delay-200`}></div>
      </div>
      
      {/* Womb-like Curved Frames */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-rose-300/10 to-transparent rounded-full animate-pulse-soft"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tl from-rose-400/10 to-transparent rounded-full animate-pulse-soft delay-1000"></div>
        <div className="absolute top-1/4 -right-10 w-64 h-64 bg-gradient-to-l from-rose-200/10 to-transparent rounded-full animate-pulse-soft delay-500"></div>
        <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-rose-300/10 to-transparent rounded-full animate-pulse-soft delay-1500"></div>
      </div>
      
      {/* Carousel Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-32">
        <div className="relative overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform translate-x-full absolute inset-0'
              }`}
            >
              <h1 className="text-3xl md:text-5xl font-playfair text-cream mb-6 leading-tight animate-fade-in">
                "{slide.quote}"
              </h1>
              <p className="text-base md:text-lg text-cream/90 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
                {slide.subtitle}
              </p>
              <button className="bg-gradient-to-r from-rose-400 to-rose-300 hover:from-rose-500 hover:to-rose-400 text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {slide.cta}
              </button>
            </div>
          ))}
        </div>
        
        {/* Carousel Controls */}
        <div className="flex justify-center items-center mt-12 space-x-6">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5 text-cream" />
          </button>
          
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-rose-300' 
                    : 'w-3 h-3 bg-cream/40 hover:bg-cream/60'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-5 w-5 text-cream" />
          </button>
        </div>
      </div>
      
      {/* Floating Organic Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-rose-300/10 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-rose-400/20 rounded-full animate-ping delay-500"></div>
    </section>
  );
};

export default Hero;