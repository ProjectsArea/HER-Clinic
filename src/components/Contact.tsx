import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-deep-rose/10 to-soft-lavender/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-deep-rose mb-6">Contact Us</h2>
          <p className="text-base text-warm-mauve max-w-2xl mx-auto">
            We're here for you every step of the way. Reach out to schedule your appointment or ask any questions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="womb-contact-card bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-peach" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair text-deep-rose mb-2">Visit Us</h3>
                  <p className="text-sm text-warm-mauve">
                    #103 & #104, Kotu Empire, Vizag Central lane,<br/>
                    Beside Hotel Mantri's, VIP Rd, <br/>
                    Visakhapatnam, Andhra Pradesh - 530003
                  </p>
                </div>
              </div>
            </div>
            
            <div className="womb-contact-card bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-soft-lavender/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-soft-lavender" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair text-deep-rose mb-2">Call Us</h3>
                  <p className="text-sm text-warm-mauve">
                    Phone No: 0891 4804807<br />
                  </p>
                </div>
              </div>
            </div>
            
            <div className="womb-contact-card bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-deep-rose/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-deep-rose" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair text-deep-rose mb-2">Email Us</h3>
                  <p className="text-sm text-warm-mauve">
                    herclinicvizag@gmail.com<br />
                  </p>
                </div>
              </div>
            </div>
            
            <div className="womb-contact-card bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-peach" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair text-deep-rose mb-2">Hours</h3>
                  <p className="text-sm text-warm-mauve">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Emergency Only
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="womb-form-card bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-playfair text-deep-rose mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-warm-mauve/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-peach/50 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-warm-mauve/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-peach/50 text-sm"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-warm-mauve/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-peach/50 text-sm"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-warm-mauve/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-peach/50 text-sm"
                />
              </div>
              
              <div>
                <select className="w-full px-4 py-3 border border-warm-mauve/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-peach/50 text-sm text-warm-mauve">
                  <option>Select Service</option>
                  <option>Prenatal Care</option>
                  <option>Gynecological Exam</option>
                  <option>Family Planning</option>
                  <option>Emergency</option>
                </select>
              </div>
              
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-warm-mauve/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-peach/50 text-sm"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-peach to-soft-lavender text-white py-4 rounded-2xl text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Map Placeholder */}
<div className="mt-16" >
  <div className="womb-map-card bg-white p-4 rounded-3xl shadow-xl">
  <div className="aspect-video rounded-2xl overflow-hidden"  style={{ height: "300px" ,width:"100%"}} >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.367432293112!2d83.31446707341914!3d17.727318192926973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943f2d2ff3bf5%3A0xa22e09d7aef82bd8!2sHer%20Clinic!5e0!3m2!1sen!2sin!4v1753965897325!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-2xl"
    ></iframe>
  </div>
</div>
</div>

      </div>
    </section>
  );
};

export default Contact;