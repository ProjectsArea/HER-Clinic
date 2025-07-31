import React from "react";
import { Apple, Droplets, Leaf, Heart, Zap, Shield } from "lucide-react";

const nutritionTips = [
  {
    icon: Apple,
    title: "Essential Nutrients",
    description: "Folic acid, iron, calcium & omega-3s for baby growth.",
    image: "https://images.unsplash.com/photo-1584270354949-1b3d56da202e",
  },
  {
    icon: Droplets,
    title: "Hydration",
    description: "Stay hydrated to support blood volume & fluid.",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
  },
  {
    icon: Leaf,
    title: "Organic Choices",
    description: "Fresh, organic foods for safe nutrition.",
    image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9",
  },
  {
    icon: Heart,
    title: "Healthy Fats",
    description: "Nourish baby’s brain & support heart health.",
    image: "https://images.unsplash.com/photo-1613145993483-98bc5b2e03d6",
  },
  {
    icon: Zap,
    title: "Energy Boosters",
    description: "Complex carbs for sustained energy.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    icon: Shield,
    title: "Immune Support",
    description: "Antioxidants protect you & baby.",
    image: "https://images.unsplash.com/photo-1506801310323-534be5e7f004",
  },
];

const DietRecommendations = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair text-rose-600 mb-3">
            Gentle Nutrition for Mother & Baby
          </h2>
          <p className="text-rose-400 text-base max-w-xl mx-auto">
            Soft, baby-inspired guidance to nourish your pregnancy journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {nutritionTips.map((tip, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[50px] shadow-md overflow-hidden 
                         transition-all duration-500 group
                         hover:shadow-xl hover:-translate-y-2
                         before:absolute before:-top-6 before:-left-6 
                         before:w-20 before:h-20 before:bg-pink-100 before:rounded-full before:blur-xl
                         after:absolute after:-bottom-8 after:-right-6 
                         after:w-24 after:h-24 after:bg-rose-100 after:rounded-full after:blur-2xl"
            >
              {/* Wavy top ribbon */}
              <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-rose-100 via-pink-100 to-rose-100 rounded-t-[50px]"></div>

              {/* Background image with rounded shape */}
              <div
                className="h-40 bg-cover bg-center rounded-t-[50px]"
                style={{ backgroundImage: `url(${tip.image})` }}
              ></div>

              {/* Floating baby icon */}
              <div className="absolute top-7 right-7 bg-white shadow-sm w-10 h-10 rounded-full flex items-center justify-center animate-bounce">
                <tip.icon className="h-5 w-5 text-rose-400" />
              </div>

              {/* Content */}
              <div className="relative p-6 z-10 text-center">
                <h3 className="text-lg font-playfair text-rose-700 mb-2">
                  {tip.title}
                </h3>
                <p className="text-rose-500 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>

              {/* Bottom soft highlight */}
              <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-rose-100/60 rounded-b-[50px]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DietRecommendations;
