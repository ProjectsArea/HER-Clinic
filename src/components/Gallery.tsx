import React from 'react';
import one from "../assets/2.jpg"
import two from "../assets/3.jpg"
import three from "../assets/4.jpg"
import four from "../assets/5.jpg"
import five from "../assets/6.jpg"
import six from "../assets/8.jpg"

const Gallery = () => {
  const images = [
    { id: 1, category: 'Facilities', alt: 'Modern examination room', src: one },
    { id: 2, category: 'Care', alt: 'Prenatal consultation', src: two },
    { id: 3, category: 'Facilities', alt: 'Comfortable waiting area', src: three},
    { id: 4, category: 'Equipment', alt: 'Advanced ultrasound machine', src: four },
    { id: 5, category: 'Care', alt: 'Postpartum support', src: five },
    { id: 6, category: 'Facilities', alt: 'Private recovery room', src: six }
  ];

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-deep-rose mb-6">Our Gallery</h2>
          <p className="text-base text-warm-mauve max-w-2xl mx-auto">
            Take a look at our state-of-the-art facilities and caring environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20">
          {images.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-3xl p-3 " style={{overflow: "hidden"}}>
              {/* Background Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Original gradient container */}
              <div className="aspect-square bg-gradient-to-br from-peach/20 to-soft-lavender/20 hover:from-peach/30 hover:to-soft-lavender/30 transition-all duration-500 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <p className="text-white/90 font-medium text-sm">{image.category}</p>
                  <p className="text-white/70 text-xs mt-1">{image.alt}</p>
                </div>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-rose/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-peach/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
