import React from 'react';
import { Baby, Heart, Shield, Stethoscope, Activity, Thermometer, Droplets, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const treatments = [
  { icon: Baby, title: "Newborn Care" },
  { icon: Heart, title: "Cardiac Monitoring" },
  { icon: Shield, title: "Immunization" },
  { icon: Stethoscope, title: "Check-ups" },
  { icon: Activity, title: "Development Tracking" },
  { icon: Thermometer, title: "Illness Management" },
  { icon: Droplets, title: "Feeding Support" },
  { icon: Moon, title: "Sleep Guidance" },
];

const BabyTreatments = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100/30 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-playfair text-rose-600">Baby Care Journey</h2>
        <p className="text-rose-400 mt-2">A soft and playful path guiding you through baby treatments.</p>
      </div>

      {/* Curved Path */}
      <div className="relative flex flex-wrap justify-center gap-10 mt-10">
        {treatments.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative flex flex-col items-center"
          >
            {/* Floating icon bubble */}
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center shadow-md mb-2">
              <t.icon className="text-rose-500 w-7 h-7" />
            </div>
            <span className="text-xs text-rose-500 font-medium">{t.title}</span>

            {/* Connecting dotted line */}
            {i < treatments.length - 1 && (
              <div className="absolute w-20 h-px border-t-2 border-dotted border-pink-200 top-8 left-16"></div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Milestone Timeline */}
      <div className="mt-20 relative max-w-3xl mx-auto bg-white shadow-md rounded-full px-8 py-4 flex justify-around">
        {["0-3M", "3-6M", "6-12M"].map((age, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <Baby className="text-rose-400 w-5 h-5" />
            <span className="text-xs text-rose-500 mt-1">{age}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BabyTreatments;
