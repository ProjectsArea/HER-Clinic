import React from 'react';
import { Baby, Stethoscope, Calendar, HeartHandshake, Activity, Users } from 'lucide-react';

const services = [
  {
    icon: Baby,
    title: "Prenatal Care",
    description: "Comprehensive pregnancy monitoring and guidance throughout your journey.",
    image: "https://www.gritman.org/wp-content/uploads/Dr.-Parker-and-patient1.jpg.webp"
  },
  {
    icon: Stethoscope,
    title: "Gynecological Exams",
    description: "Regular health screenings and preventive care for women of all ages.",
    image: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2339050.jpg"
  },
  {
    icon: Calendar,
    title: "Family Planning",
    description: "Personalized contraceptive counseling and fertility guidance.",
    image: "https://marisolhealth.com/wp-content/uploads/2025/02/prenatal-care-1024x512.png"
  },
  {
    icon: HeartHandshake,
    title: "Labor & Delivery",
    description: "Safe, comfortable birthing experience with expert medical support.",
    image: "https://innercare.org/wp-content/uploads/2016/08/prenatal-services.jpg"
  },
  {
    icon: Activity,
    title: "High-Risk Pregnancy",
    description: "Specialized care for complex pregnancies requiring additional attention.",
    image: "https://www.hamiltonhealthcenter.com/content/uploads/2022/12/02-What-to-expect-at-your-prenatal-care-visit-1024x512.jpg"
  },
  {
    icon: Users,
    title: "Postpartum Care",
    description: "Comprehensive support for new mothers during recovery and adjustment.",
    image: "https://www.hamiltonhealthcenter.com/content/uploads/2022/12/02-What-to-expect-at-your-prenatal-care-visit-1024x512.jpg"
  }
];

const Services: React.FC = () => (
  <section id="services" className="py-20 bg-gradient-to-br from-soft-lavender/10 to-peach/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-playfair text-deep-rose mb-6">Our Services</h2>
        <p className="text-base text-warm-mauve max-w-2xl mx-auto">
          Comprehensive women's healthcare services designed to support you through every stage of life.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, i) => (
          <div key={i} className="group">
            <div
              className="womb-service-card rounded-3xl shadow-lg transition duration-500 transform hover:-translate-y-3 relative overflow-hidden  flex items-end"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, rgba(255, 182, 193, 0.29) 100%), url(${svc.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-peach/10 to-soft-lavender/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content - directly at bottom */}
              <div className="relative z-10 w-full p-4 bg-white/80 backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-peach/20 to-soft-lavender/20 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svc.icon className="h-6 w-6 text-deep-rose" />
                </div>
                <h3 className="text-lg font-playfair text-deep-rose mb-1">{svc.title}</h3>
                <p className="text-sm text-warm-mauve">{svc.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
