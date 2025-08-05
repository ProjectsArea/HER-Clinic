import React, { useState, useEffect } from 'react';
import { Quote, Heart, Star } from 'lucide-react';

const FloatingMobileTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const testimonials = [
    { 
      name: "Raghuram Patri", 
      text: "Thank you, Dr Pallavi. You always make us feel safe and cared for.", 
      role: "Patient",
      gradient: "from-rose-400 via-pink-400 to-red-400",
      shadowColor: "shadow-rose-200"
    },
    { 
      name: "Prof. Tanuku Srinivas", 
      text: "Dr Pallavi is dedicated and the clinic ambience is truly unmatched.", 
      role: "Patient",
      gradient: "from-purple-400 via-violet-400 to-indigo-400",
      shadowColor: "shadow-purple-200"
    },
    { 
      name: "Devakinandan. G", 
      text: "Best care, perfect ambience, and exceptional medical advice under one roof.", 
      role: "Patient",
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
      shadowColor: "shadow-blue-200"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[index];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-pink-200/40 to-rose-300/40 rounded-full blur-3xl animate-pulse"
          style={{
            top: '10%',
            left: '5%',
            animation: 'float1 8s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 bg-gradient-to-r from-blue-200/40 to-indigo-300/40 rounded-full blur-3xl animate-pulse"
          style={{
            top: '60%',
            right: '10%',
            animation: 'float2 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-purple-200/40 to-pink-300/40 rounded-full blur-3xl animate-pulse"
          style={{
            top: '30%',
            right: '20%',
            animation: 'float3 6s ease-in-out infinite',
            animationDelay: '4s'
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-40px, -20px) rotate(180deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(20px, -10px) rotate(90deg); }
          50% { transform: translate(-10px, -30px) rotate(180deg); }
          75% { transform: translate(-30px, 10px) rotate(270deg); }
        }
        @keyframes swing {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes bounceFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6">
        {/* Elegant Hanging System */}
        <div className="flex justify-center mb-8">
          {/* Ceiling Hook */}
          <div className="absolute -top-6 w-8 h-8 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full shadow-lg border-2 border-white"></div>
          
          {/* Chain Links */}
          <div className="flex flex-col items-center space-y-1">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="w-1 h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-sm"
                style={{
                  animation: `swing ${3 + i * 0.1}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Main Testimonial Cloud */}
        <div 
          className={`relative transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-1'
          }`}
          style={{
            animation: isVisible ? 'swing 4s ease-in-out infinite' : 'none'
          }}
        >
          {/* Cloud Shape Container */}
          <div className={`relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl ${currentTestimonial.shadowColor}/50 shadow-lg p-8 mx-auto max-w-md border border-white/50`}>
            {/* Gradient Border Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.gradient} rounded-3xl opacity-20 blur-sm`}></div>
            
            {/* Quote Icon */}
            <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${currentTestimonial.gradient} rounded-2xl shadow-lg flex items-center justify-center transform rotate-12`}>
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars Rating */}
              <div className="flex justify-center mb-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-amber-400 fill-current"
                    style={{
                      animation: `sparkle ${2 + i * 0.2}s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed text-center mb-6 font-light">
                <span className={`text-2xl bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>"</span>
                {currentTestimonial.text}
                <span className={`text-2xl bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>"</span>
              </p>

              {/* Author Info */}
              <div className="text-center">
                <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${currentTestimonial.gradient} bg-opacity-10 rounded-full px-6 py-3`}>
                  <div className={`w-10 h-10 bg-gradient-to-br ${currentTestimonial.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 text-sm">{currentTestimonial.name}</h4>
                    <p className="text-xs text-gray-500">{currentTestimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br ${currentTestimonial.gradient} rounded-full opacity-60`}></div>
            <div className={`absolute -top-1 right-4 w-3 h-3 bg-gradient-to-br ${currentTestimonial.gradient} rounded-full opacity-40`}></div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index 
                  ? `w-8 bg-gradient-to-r ${currentTestimonial.gradient}` 
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Hearts */}
          <Heart 
            className="absolute text-pink-300 w-6 h-6 fill-current opacity-60"
            style={{
              top: '20%',
              left: '15%',
              animation: 'bounceFloat 4s ease-in-out infinite'
            }}
          />
          <Heart 
            className="absolute text-rose-300 w-4 h-4 fill-current opacity-50"
            style={{
              top: '70%',
              right: '20%',
              animation: 'bounceFloat 5s ease-in-out infinite',
              animationDelay: '1s'
            }}
          />

          {/* Stars */}
          <Star 
            className="absolute text-amber-300 w-5 h-5 fill-current opacity-70"
            style={{
              top: '15%',
              right: '10%',
              animation: 'sparkle 3s ease-in-out infinite'
            }}
          />
          <Star 
            className="absolute text-yellow-300 w-3 h-3 fill-current opacity-60"
            style={{
              bottom: '25%',
              left: '10%',
              animation: 'sparkle 4s ease-in-out infinite',
              animationDelay: '2s'
            }}
          />

          {/* Sparkle Dots */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${testimonials[i % testimonials.length].gradient} rounded-full opacity-40`}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloatingMobileTestimonials;