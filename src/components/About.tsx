import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-deep-rose mb-6">About HERCLINIC</h2>
          <p className="text-base text-warm-mauve max-w-3xl mx-auto leading-relaxed">
            At HERCLINIC, we understand that every woman's journey is unique and precious. Our commitment is to provide 
            exceptional gynecological and obstetric care in an environment that feels warm, safe, and nurturing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="womb-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-peach/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-peach" />
              </div>
              <h3 className="text-lg font-playfair text-deep-rose mb-4">Our Mission</h3>
              <p className="text-sm text-warm-mauve leading-relaxed">
                To provide compassionate, comprehensive women's healthcare that honors the sacred journey of motherhood.
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="womb-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-lavender/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-soft-lavender" />
              </div>
              <h3 className="text-lg font-playfair text-deep-rose mb-4">Our Values</h3>
              <p className="text-sm text-warm-mauve leading-relaxed">
                Excellence, empathy, and empowerment guide every aspect of care we provide to women and families.
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="womb-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-deep-rose/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-deep-rose" />
              </div>
              <h3 className="text-lg font-playfair text-deep-rose mb-4">Our Community</h3>
              <p className="text-sm text-warm-mauve leading-relaxed">
                Building lasting relationships with families throughout their healthcare journey, from preconception to postpartum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;