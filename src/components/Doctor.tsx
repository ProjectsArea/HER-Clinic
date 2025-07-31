import React, { useState, FormEvent } from 'react';
import { GraduationCap, Star, Clock } from 'lucide-react';
import doctor from "../assets/Dr_Pallavi.avif";

const Doctor: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
    setIsModalOpen(false);
  };

  return (
    <section id="doctor" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-deep-rose mb-6">Meet Our Doctor</h2>
          <p className="text-base text-warm-mauve max-w-2xl mx-auto">
            Dedicated to providing exceptional care with compassion and expertise.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="womb-doctor-card bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <div className="md:flex">
              <div className="md:w-1/3 relative overflow-hidden">
                <img src={doctor} alt="Dr. Pallavi M N V" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-rose/10 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-playfair text-deep-rose mb-2">Dr. Pallavi M N V</h3>
                  <p className="text-sm text-peach font-medium mb-4">Gynecologist</p>
                  <p className="text-sm text-warm-mauve leading-relaxed">
                    With over 21 years of experience in women's healthcare, Dr. Pallavi is passionate about providing 
                    personalized care that honors each woman's unique journey. She specializes in high-risk pregnancies 
                    and minimally invasive surgical procedures.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-peach" />
                    </div>
                    <div>
                      <p className="text-xs text-warm-mauve">Education</p>
                      <p className="text-sm font-medium text-deep-rose">MS - Obstetrics and Gynaecology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-deep-rose/20 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-deep-rose" />
                    </div>
                    <div>
                      <p className="text-xs text-warm-mauve">Experience</p>
                      <p className="text-sm font-medium text-deep-rose">15+ Years</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center">
                      <Star className="h-5 w-5 text-peach" />
                    </div>
                    <div>
                      <p className="text-xs text-warm-mauve">Rating</p>
                      <p className="text-sm font-medium text-deep-rose">4.9/5 Stars</p>
                    </div>
                  </div>
                </div>
                
                <button
  onClick={() => {
    console.log("Clicked"); 
    setIsModalOpen(true);
  }}
  className="relative z-10 bg-gradient-to-r from-peach to-soft-lavender text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
>
  Book Appointment
</button>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-warm-mauve hover:text-deep-rose text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-playfair text-deep-rose mb-6">Book Your Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 border rounded-2xl" />
              <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 border rounded-2xl" />
              <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 border rounded-2xl" />
              <input type="date" required className="w-full px-4 py-3 border rounded-2xl" />
              <select required className="w-full px-4 py-3 border rounded-2xl">
                <option value="">Select Service</option>
                <option>Prenatal Care</option>
                <option>Gynecological Exam</option>
                <option>Family Planning</option>
                <option>Emergency</option>
              </select>
              <textarea rows={3} placeholder="Additional Notes" className="w-full px-4 py-3 border rounded-2xl"></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-peach to-soft-lavender text-white py-3 rounded-2xl text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Doctor;
