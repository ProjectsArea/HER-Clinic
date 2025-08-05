import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DietRecommendations from './components/DietRecommendations';
import BabyTreatments from './components/BabyTreatments';
import Doctor from './components/Doctor';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <About />
      <Doctor />
      <Gallery />
      <Services />
      <DietRecommendations />
      <BabyTreatments />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;